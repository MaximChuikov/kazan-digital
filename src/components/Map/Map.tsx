import React from 'react';
import {LayerGroup, LayersControl, MapContainer, TileLayer} from "react-leaflet";
import styles from './map.module.scss'
import SimplePoint from "../Points/SimplePoint";
import TypesPoint from "../../backend/models/TypesPoint";
import StatusPoint from "../../backend/models/StatusPoint";
import "@Styles/ovverideMapStyle.scss";

const Map = () => {
    return (
        <MapContainer className={styles.mapContainer} center={[55.7887, 49.1221]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
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