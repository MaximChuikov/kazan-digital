import React, {useEffect, useState} from 'react';
import {LayerGroup, LayersControl, MapContainer, TileLayer} from "react-leaflet";
import styles from './map.module.scss'
import SimplePoint from "../Points/SimplePoint";
import TypesPoint from "../../backend/models/TypesPoint";
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
                        <SimplePoint x={55.715} y={49.166} type={TypesPoint.Ramp} status={StatusPoint.Existence} evaluations={[]} createDate={new Date()} description={"Пандус"} />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Светофоры со звуком">
                    <LayerGroup>
                        <SimplePoint x={55.715} y={49.166} type={TypesPoint.Ramp} status={StatusPoint.Existence} evaluations={[]} createDate={new Date()} description={"Пандус"} />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name={'кнопка'} >
                    <button>фывфывыф</button>
                </LayersControl.Overlay>
            </LayersControl>
            <LayersControl position="topright">
                <LayersControl.Overlay name="Лифты">
                    <LayerGroup>
                        <SimplePoint x={55.715} y={49.166} type={TypesPoint.Ramp} status={StatusPoint.Existence} evaluations={[]} createDate={new Date()} description={"Пандус"} />
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
            <LayersControl position="topright">
                <LayersControl.Overlay name="Туалеты">
                    <LayerGroup>
                        <SimplePoint x={55.715} y={49.166} type={TypesPoint.Ramp} status={StatusPoint.Existence}
                                     evaluations={[]} createDate={new Date()} description={"Пандус"}/>
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
};

// пандусы, лифты, туалеты, светофоры со звуком


export default Map;