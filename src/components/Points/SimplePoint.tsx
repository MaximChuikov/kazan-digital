import React from 'react';
import Point from "../../backend/models/Point"
import {Circle, ImageOverlay, Marker, Tooltip} from "react-leaflet";
import {Icon, LatLngBounds, LatLngBoundsExpression, LatLngTuple} from "leaflet";
import {convertToUrl} from "../../backend/utils/enumTo";

const SimplePoint = (point: Point) => {
    const radius = 0.001
    const imageBounds: LatLngBoundsExpression = [[point.x - radius, point.y - radius], [point.x + radius, point.y + radius]];
    return (
        <Marker position={[point.x, point.y]} icon={new Icon({
            iconUrl: convertToUrl(point.type),
            iconSize: [30, 30]
        })}>
            <Tooltip>
                {point.description}
            </Tooltip>
        </Marker>
    );
};

export default SimplePoint;