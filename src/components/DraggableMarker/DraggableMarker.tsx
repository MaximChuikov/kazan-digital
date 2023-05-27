import {useCallback, useMemo, useRef, useState} from "react";
import {Marker, Popup} from "react-leaflet";
import {LatLngExpression} from "leaflet";

const DraggableMarker = ({startPosition}: { startPosition: LatLngExpression }) => {
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
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
            >
            <Popup minWidth={90}>
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