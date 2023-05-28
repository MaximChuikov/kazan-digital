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

const SimplePoint = (point: Point) => {

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
                                    point.countVotesToCreate ? `Подтвердили ${point.countVotesToCreate} человек(а)` : 'Эту точку пока не подтвердили'
                                }
                            </h6>
                            {
                                point.countVotesToDelete ? (
                                    <h5>
                                        {`Против этой точки проголосовало ${point.countVotesToCreate} человек(а)`}
                                    </h5>
                                ) : <></>
                            }
                            {
                                point.type === TypesPoint.ProblemPlace ? (
                                    <div className={styles.buttonsContainer}>
                                        <button onClick={() => PointController.addVote({
                                            userId: "хто_я",
                                            typeVote: TypesVote.Creation
                                        }, point)}>Да, это так</button>
                                        <button onClick={() => PointController.addVote({
                                            userId: "хто_я",
                                            typeVote: TypesVote.Removal
                                        }, point)}>Проблемы нет</button>
                                    </div>
                                ) : (
                                    <div className={styles.buttonsContainer}>
                                        <button onClick={() => EvaluationController.addEvaluation({
                                            createDate: new Date(),
                                            comment: "Да, это так",
                                            score: 2,
                                            userId: "хто_я"
                                        }, point)}>Да, это так</button>
                                        <button onClick={() => EvaluationController.addEvaluation({
                                            createDate: new Date(),
                                            comment: "Да, но не работает",
                                            score: 1,
                                            userId: "хто_я"
                                        }, point)}>Да, но не работает</button>
                                        <button onClick={() => EvaluationController.addEvaluation({
                                            createDate: new Date(),
                                            comment: "Да, но не работает",
                                            score: 0,
                                            userId: "хто_я"
                                        }, point)}>Проблемы нет</button>
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