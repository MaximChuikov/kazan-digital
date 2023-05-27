import React, {useState} from 'react';
import Point from "../../backend/models/Point"
import {Marker, Popup, Tooltip} from "react-leaflet";
import {Icon} from "leaflet";
import {convertToOpacity, convertToTooltipDescription, convertToUrl} from "../../backend/utils/enumTo";
import styles from "./point.module.scss"
import TypesPoint from "../../backend/models/TypesPoint";

const SimplePoint = (point: Point) => {

    const [leaveComment, setLeaveComment] = useState(false)

    const colorClass = `${TypesPoint[point.type].toLowerCase()}${convertToOpacity(point.rating || 0)}`
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
                                point.countVotesToDelete && (
                                    <h5>
                                        {`Против этой точки проголосовало ${point.countVotesToCreate} человек(а)`}
                                    </h5>
                                )
                            }
                            {
                                point.type === TypesPoint.Obstacle ? (
                                    <div className={styles.buttonsContainer}>
                                        <button>Да, это так</button>
                                        <button>Проблемы нет</button>
                                    </div>
                                ) : (
                                    <div className={styles.buttonsContainer}>
                                        <button>Да, это так</button>
                                        <button>Да, но не работает</button>
                                        <button>Проблемы нет</button>
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