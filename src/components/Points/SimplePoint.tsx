import React from 'react';
import Point from "../../backend/models/Point"
import {Circle, Marker, Tooltip} from "react-leaflet";
import {Icon} from "leaflet";
import {convertToTooltipDescription, convertToUrl} from "../../backend/utils/enumTo";

const SimplePoint = (point: Point) => {
    return (
        <Marker position={[point.x, point.y]} shadowPane="green" icon={new Icon({
            iconUrl: convertToUrl(point.type),
            iconSize: [30, 30]
        })}>
            <Circle opacity={0.2} center={[point.x, point.y]} radius={400}/>
            <Tooltip>
                {point.description || convertToTooltipDescription(point.type) || "Не указано"}
            </Tooltip>
        </Marker>
    );
};

export default SimplePoint;