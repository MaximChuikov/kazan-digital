import React, {useCallback, useMemo, useRef, useState} from "react";
import {Marker, Popup} from "react-leaflet";
import {Icon, LatLngExpression} from "leaflet";
import styles from "./DraggableMarker.module.scss";
import TypesPoint from "../../backend/models/TypesPoint";

const DraggableMarker = ({
                             startPosition,
                             img,
                             addMarker,
                             type
                         }: {
    startPosition: LatLngExpression,
    img: string, addMarker: (x: number, y: number) => void,
    type: TypesPoint
}) => {
    const [draggable, setDraggable] = useState(true);
    const [position, setPosition] = useState(startPosition);
    const markerRef = useRef(null);
    const colorClass = `${type.toLowerCase()}`;
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    // @ts-ignore
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [markerRef.current],
    )
    const addPoint = useCallback(() => {
        setDraggable(false);
        // @ts-ignore
        const x = position.lat
        // @ts-ignore
        const y = position.lng
        addMarker(x, y)
        console.log(position)
    }, [position])

    return (
        <Marker
            icon={new Icon({
                iconUrl: img,
                iconSize: [30, 30],
                className: `${styles.point} ${styles[colorClass]}`,
            })}
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
        >
            <Popup minWidth={80}>
        <span onClick={addPoint}>
          {draggable
              ? 'Вы можете перемещать данный маркер, нажмите на текст чтобы зафиксировать маркер'
              : 'Нажмите 1 раз на этот маркер что бы начать его перетаскивать'}
        </span>
            </Popup>
        </Marker>
    )
}
export default DraggableMarker