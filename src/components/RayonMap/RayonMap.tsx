import React, {useCallback, useEffect, useState} from 'react';
import {Circle, LayerGroup, LayersControl, MapContainer, TileLayer} from "react-leaflet";
import styles from './map.module.scss'
import "@Styles/ovverideMapStyle.css";
import {LatLngExpression} from "leaflet";
import ChangeMapStatusToDefault from "@Components/AddMarkerBtn/ChangeMapStatusToDefault";
import Rayon from "@Components/Points/Rayon";

const RayonMap = () => {
    const [position, setPosition] = useState<LatLngExpression>([55.7887, 49.1221])
    useEffect(() => {
        const timerId = setTimeout(() => {
            const panels = document.getElementsByClassName("leaflet-control-layers-toggle")
            const elements = Array.prototype.slice.call(panels);
            elements[0].style.backgroundImage = "url('images/rayon.png')"
        }, 200)
        return () => clearTimeout(timerId)
    }, [])
    return (
        <MapContainer className={styles.mapContainer} center={position} minZoom={13} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeMapStatusToDefault/>
            <LayersControl>
                <LayersControl.Overlay name={"Благоприятные районы"} checked>
                    <LayerGroup>
                        <Rayon color={"green"} x={55.7887} y={49.121} radius={220} />
                        <Rayon color={"green"} x={55.7987} y={49.1221} radius={120} />
                        <Rayon color={"green"} x={55.7917} y={49.1291} radius={40} />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name={"Средне благоприятные районы"} checked>
                    <LayerGroup>
                        <Rayon color={"yellow"} x={55.7787} y={49.121} radius={150} />
                        <Rayon color={"yellow"} x={55.7787} y={49.1291} radius={200} />
                        <Rayon color={"yellow"} x={55.7857} y={49.118} radius={320} />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name={"Неблагоприятные районы"} checked>
                    <LayerGroup>
                        <Rayon color={"red"} x={55.794} y={49.117} radius={420} />
                        <Rayon color={"red"} x={55.789} y={49.125} radius={220} />
                        <Rayon color={"red"} x={55.785} y={49.120} radius={160} />
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
};

export default RayonMap;