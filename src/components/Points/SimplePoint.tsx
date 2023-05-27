import React from 'react';
import Point from "../../backend/models/Point"
import {Circle, ImageOverlay, Marker, Tooltip} from "react-leaflet";
import {Icon, LatLngBounds, LatLngBoundsExpression, LatLngTuple} from "leaflet";
import {convertToUrl, convertToTooltipDescription} from "../../backend/utils/enumTo";
import styles from "./point.module.scss"

const SimplePoint = (point: Point) => {
    return (
        <Marker position={[point.x, point.y]} icon={new Icon({
            iconUrl: convertToUrl(point.type),
            iconSize: [30, 30],
            // shadowUrl: "/marker-icon-2x.png",
            // shadowSize: [40, 40],
            className: styles.point
        })} >
            <Tooltip>
                {point.description || convertToTooltipDescription(point.type) || "Не указано"}
            </Tooltip>
        </Marker>
    );
};

export default SimplePoint;