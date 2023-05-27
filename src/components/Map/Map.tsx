import React, {useEffect, useState} from 'react';
import {LayerGroup, LayersControl, MapContainer, TileLayer} from "react-leaflet";
import styles from './map.module.scss'
import SimplePoint from "../Points/SimplePoint";
import TypesPointList from "../../backend/models/TypesPointList";
import StatusPoint from "../../backend/models/StatusPoint";
import "@Styles/ovverideMapStyle.css";
import DraggableMarker from "@Components/DraggableMarker/DraggableMarker";
import {LatLngExpression} from "leaflet";
import settings from "../../../public/images/setting.png"

const Map = () => {
    const [position, setPosition] = useState<LatLngExpression>([55.7887, 49.1221])
    useEffect(()=> {
        window.onload = () => {
            const panels = document.getElementsByClassName("leaflet-control-layers-toggle")
            const elements = Array.prototype.slice.call(panels);
            for(let el of elements){
                console.log(el)
                el.style.backgroundImage = "url('images/setting.png')"
            }
        }
    },[])
    return (
        <MapContainer className={styles.mapContainer} center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DraggableMarker startPosition={position}/>
            <LayersControl position="topright">
                <LayersControl.Overlay name="Пандусы">
                    <LayerGroup>
                        <SimplePoint x={55.785} y={49.166} type={TypesPointList.Ramp} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />
                        <SimplePoint x={55.755} y={49.176} type={TypesPointList.Ramp} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />
                        <SimplePoint x={55.715} y={49.136} type={TypesPointList.Ramp} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />
                        <SimplePoint x={55.795} y={49.106} type={TypesPointList.Ramp} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />
                        <SimplePoint x={55.725} y={49.126} type={TypesPointList.Ramp} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Светофоры со звуком">
                    <LayerGroup>
                        <SimplePoint x={55.780} y={49.164} type={TypesPointList.TrafficLightSignal} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />\
                        <SimplePoint x={55.781} y={49.163} type={TypesPointList.TrafficLightSignal} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />
                        <SimplePoint x={55.782} y={49.162} type={TypesPointList.TrafficLightSignal} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />
                        <SimplePoint x={55.783} y={49.161} type={TypesPointList.TrafficLightSignal} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Лифты">
                    <LayerGroup>
                        <SimplePoint x={55.715} y={49.112} type={TypesPointList.Elevator} status={StatusPoint.Active} evaluations={[]} createDate={new Date()} />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Туалеты">
                    <LayerGroup>
                        <SimplePoint x={55.715} y={49.106} type={TypesPointList.Toilet} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
};

// пандусы, лифты, туалеты, светофоры со звуком


export default Map;