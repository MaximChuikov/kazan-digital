import React, {useState} from 'react';
import Point from "../../backend/models/Point"
import {Marker, Popup, Tooltip} from "react-leaflet";
import {Icon} from "leaflet";
import {convertToOpacity, convertToTooltipDescription, convertToUrl} from "../../backend/utils/enumTo";
import styles from "./point.module.scss"
import TypesPoint from "../../backend/models/TypesPoint";
import EvaluationController from "../../backend/controllers/EvaluationController";
import PointController from "../../backend/controllers/PointController";
import TypesVote from "../../backend/models/TypesVote";

interface ISimplePoint {
    point: Point
    updateCallBack: () => void
}

const SimplePoint = ({point, updateCallBack}: ISimplePoint) => {

    const [leaveComment, setLeaveComment] = useState(false)

    const colorClass = `${point.type.toLowerCase()}${convertToOpacity(point.rating || 0)}`
    return (
        <Marker position={[point.x, point.y]} icon={new Icon({
            iconUrl: convertToUrl(point.type),
            iconSize: [30, 30],
            className: `${styles.point} ${styles[colorClass]}`,
        })}

        eventHandlers={{
            click: () => setLeaveComment(true)
        }}>
            {
                leaveComment ? (
                    <Popup minWidth={80} closeButton autoClose={false} eventHandlers={{
                        remove: () => setLeaveComment(false)
                    }}>
                        <div className={styles.popup}>
                            <div className={styles.header}>
                                <img className={`${styles.point} ${styles[colorClass]}`} src={convertToUrl(point.type)} alt={point.description}/>
                                {point.description || convertToTooltipDescription(point.type)}
                            </div>
                            <h6>
                                {
                                    point.evaluations.length > 0 ? `Подтвердили ${point.evaluations.map(p => p.score).filter(s => s > 0).length} человек(а)` : 'Эту точку пока не подтвердили'
                                }
                            </h6>
                            {
                                point.evaluations.map(p => p.score).filter(s => s === 0).length ? (
                                    <h5>
                                        {`Против этой точки проголосовало ${point.evaluations.map(p => p.score).filter(s => s === 0).length} человек(а)`}
                                    </h5>
                                ) : <></>
                            }
                            {
                                point.type !== TypesPoint.ProblemPlace && (
                                    <span className={styles.doComment}>Оцените информацию</span>
                                )
                            }
                            {
                                point.type === TypesPoint.ProblemPlace ? (
                                    <div className={styles.buttonsContainer}>
                                        <button onClick={() => {
                                            PointController.addVote({
                                                userId: "хто_я",
                                                typeVote: TypesVote.Creation
                                            }, point)
                                            updateCallBack()
                                        }}>Да, это так</button>
                                        <button onClick={() => {
                                            PointController.addVote({
                                                userId: "хто_я",
                                                typeVote: TypesVote.Removal
                                            }, point)
                                            updateCallBack()
                                        }}>Проблемы нет</button>
                                    </div>
                                ) : (
                                    <div className={styles.buttonsContainer}>
                                        <button onClick={() => {
                                            EvaluationController.addEvaluation({
                                                createDate: new Date(),
                                                comment: "Да, это так",
                                                score: 2,
                                                userId: "хто_я"
                                            }, point)
                                            updateCallBack()
                                        }}>Да, это так</button>
                                        <button onClick={() => {
                                            EvaluationController.addEvaluation({
                                                createDate: new Date(),
                                                comment: "Не работает",
                                                score: 1,
                                                userId: "хто_я"
                                            }, point)
                                            updateCallBack()
                                        }}>Не работает</button>
                                        <button onClick={() => {
                                            EvaluationController.addEvaluation({
                                                createDate: new Date(),
                                                comment: "Объекта нет",
                                                score: 0,
                                                userId: "хто_я"
                                            }, point)
                                            updateCallBack()
                                        }}>Объекта нет</button>
                                    </div>
                                )
                            }

                        </div>
                    </Popup>
                ) : (
                    <Tooltip interactive={false} >
                        {point.description || convertToTooltipDescription(point.type) || "Не указано"}
                    </Tooltip>
                )
            }
        </Marker>
    );
};

export default SimplePoint;