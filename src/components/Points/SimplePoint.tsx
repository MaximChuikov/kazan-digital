import React from 'react';
import Point from "../../backend/models/Point"
import {Circle, Marker, Tooltip} from "react-leaflet";

const SimplePoint = (point: Point) => {
    return (
        <Marker position={[point.x, point.y]}>
            <Tooltip>
                {point.description}
            </Tooltip>
        </Marker>
    );
};

export default SimplePoint;