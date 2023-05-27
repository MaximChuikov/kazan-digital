import React, {useCallback, useEffect, useState} from 'react';
import {LayerGroup, LayersControl, MapContainer, TileLayer} from "react-leaflet";
import styles from './map.module.scss'
import SimplePoint from "../Points/SimplePoint";
import StatusPoint from "../../backend/models/StatusPoint";
import "@Styles/ovverideMapStyle.css";
import DraggableMarker from "@Components/DraggableMarker/DraggableMarker";
import {LatLngExpression} from "leaflet";
import AddMarkerBtn from "@Components/AddMarkerBtn/AddMarkerBtn";
import TypesPoint from "../../backend/models/TypesPoint";

const Map = () => {
    const [canAdd, setCanAdd] = useState(false)
    const [position, setPosition] = useState<LatLngExpression>([55.7887, 49.1221])
    const addBtnClick = useCallback(() => setCanAdd(true), []);
    useEffect(() => {
        window.onload = () => {
            const panels = document.getElementsByClassName("leaflet-control-layers-toggle")
            const elements = Array.prototype.slice.call(panels);
            elements[0].style.backgroundImage = "url('images/setting.png')"
        }
    }, [])
    return (
        <MapContainer className={styles.mapContainer} center={position} minZoom={13} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AddMarkerBtn onClick={addBtnClick}/>
            <DraggableMarker startPosition={position}/>
            <LayersControl position="topright">
                <LayersControl.Overlay name="Пандусы">
                    <LayerGroup>
                        <SimplePoint x={55.785} y={49.166} type={TypesPoint.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.755} y={49.176} type={TypesPoint.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.715} y={49.136} type={TypesPoint.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.795} y={49.106} type={TypesPoint.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.725} y={49.126} type={TypesPoint.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Светофоры со звуком">
                    <LayerGroup>
                        <SimplePoint x={55.780} y={49.164} type={TypesPoint.TrafficLightSignal}
                                     status={StatusPoint.Active} evaluations={[]} createDate={new Date()}/>\
                        <SimplePoint x={55.781} y={49.163} type={TypesPoint.TrafficLightSignal}
                                     status={StatusPoint.Active} evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.782} y={49.162} type={TypesPoint.TrafficLightSignal}
                                     status={StatusPoint.Active} evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.783} y={49.161} type={TypesPoint.TrafficLightSignal}
                                     status={StatusPoint.Active} evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Лифты">
                    <LayerGroup>
                        <SimplePoint x={55.715} y={49.112} type={TypesPoint.Elevator} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Туалеты">
                    <LayerGroup>
                        <SimplePoint x={55.715} y={49.106} type={TypesPoint.Toilet} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
};

// пандусы, лифты, туалеты, светофоры со звуком


export default Map;