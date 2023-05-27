import React from 'react';
import Point from "../../backend/models/Point";
import {Circle} from "react-leaflet";

interface IRayon {
    x: number
    y: number
    radius: number
    color: "red" | "green" | "yellow"
}

const Rayon = ({radius, color, x, y}: IRayon) => {
    return (
        <Circle center={[x, y]} radius={radius} fillColor={color}/>
    );
};

export default Rayon;