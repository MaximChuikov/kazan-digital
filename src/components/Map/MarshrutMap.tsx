import React, {useCallback, useEffect, useState} from 'react';
import {LayerGroup, LayersControl, MapContainer, Marker, Polyline, TileLayer, useMapEvents} from "react-leaflet";
import styles from './map.module.scss'
import SimplePoint from "../Points/SimplePoint";
import "@Styles/ovverideMapStyle.css";
import DraggableMarker from "@Components/DraggableMarker/DraggableMarker";
import {Icon, LatLngExpression} from "leaflet";
import AddMarkerBtn from "@Components/AddMarkerBtn/AddMarkerBtn";
import TypesPoint from "../../backend/models/TypesPoint";
import ChangeMapStatusToRayon from "@Components/AddMarkerBtn/ChangeMapStatusToRayon";
import MarketModal from "@Modals/MarketModal/MarketModal";
import AddPointModal from "../../backend/models/AddPointModal";
import PointController from "../../backend/controllers/PointController";
import Point from "../../backend/models/Point";

const MarshrutMap = () => {

    function getPoints() {
        return PointController.getAllUserPoint()
    }

    const getRoadMarker = (img:string,position:LatLngExpression) => {
        return (<Marker
            icon={new Icon({
                iconUrl: "/images/icons/" + img,
                iconSize: [30, 30],
            })}
            position={position}
        />);
    }

    const polyline: LatLngExpression[] = [
        [55.831524, 49.061103],
        [55.832034, 49.061154],
        [55.832254, 49.061492],
        [55.832866, 49.061426],
        [55.832900, 49.061161],
        [55.833251, 49.061147],
        [55.833287, 49.062034],
        [55.833971, 49.061516],
        [55.835124, 49.063614],
        [55.835053, 49.063800],
        [55.834706, 49.063720],
        [55.834710, 49.064650]
    ]

    const [allPoints, setAllPoints] = useState(getPoints())

    const [position, setPosition] = useState<LatLngExpression>([55.833062, 49.061846]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            const panels = document.getElementsByClassName("leaflet-control-layers-toggle")
            const elements = Array.prototype.slice.call(panels);
            elements[0].style.backgroundImage = "url('images/setting.png')"
        }, 200)
        return () => clearTimeout(timerId)
    }, [])

    return (
        <MapContainer
            className={styles.mapContainer}
            center={position}
            minZoom={13}
            zoom={17}
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*<ChangeMapStatusToRayon/>*/}

            {getRoadMarker('start-point.png', [55.831524, 49.0609])}
            {getRoadMarker('location.png', [55.83490, 49.064520])}



            <Polyline pathOptions={{
                fillColor: "85BB65"
            }} positions={polyline} />

            {
                allPoints.filter(p => p.type === TypesPoint.ProblemPlace).map((p, key) => (
                    <SimplePoint point={p} key={key} updateCallBack={getPoints}/>
                ))
            }

            <LayersControl position="topright">
                <LayersControl.Overlay name="Пандусы" checked>
                    <LayerGroup>
                        {
                            allPoints.filter(p => p.type === TypesPoint.Ramp).map((p, key) => (
                                <SimplePoint point={p} key={key} updateCallBack={getPoints}/>
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Светофоры со звуком" checked>
                    <LayerGroup>
                        {
                            allPoints.filter(p => p.type === TypesPoint.TrafficLightSignal).map((p, key) => (
                                <SimplePoint point={p} key={key} updateCallBack={getPoints}/>
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Лифты" checked>
                    <LayerGroup>
                        {
                            allPoints.filter(p => p.type === TypesPoint.Elevator).map((p, key) => (
                                <SimplePoint point={p} key={key} updateCallBack={getPoints}/>
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Туалеты" checked>
                    <LayerGroup>
                        {
                            allPoints.filter(p => p.type === TypesPoint.Toilet).map((p, key) => (
                                <SimplePoint point={p} key={key} updateCallBack={getPoints}/>
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
};

export default MarshrutMap;