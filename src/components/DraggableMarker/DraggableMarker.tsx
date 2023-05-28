import React, {useCallback, useMemo, useRef, useState} from "react";
import {Marker, Popup} from "react-leaflet";
import {Icon, LatLngExpression} from "leaflet";
import styles from "./DraggableMarker.module.scss";

const DraggableMarker = ({startPosition,img}: { startPosition: LatLngExpression,img:string }) => {
    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState(startPosition)
    const markerRef = useRef(null)
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
    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, [])

    return (
        <Marker
            icon={new Icon({
                iconUrl: img,
                iconSize: [30, 30],
                className: styles.point
            })}
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
        >
            <Popup minWidth={80}>
        <span onClick={toggleDraggable}>
          {draggable
              ? 'Вы можете перемещать данный маркер, нажмите на текст чтобы зафиксировать маркер'
              : 'Нажмите 1 раз на этот маркер что бы начать его перетаскивать'}
        </span>
            </Popup>
        </Marker>
    )
}
export default DraggableMarker