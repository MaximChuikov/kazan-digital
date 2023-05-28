import React, {useCallback, useEffect, useState} from 'react';
import {LayerGroup, LayersControl, MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import styles from './map.module.scss'
import SimplePoint from "../Points/SimplePoint";
import StatusPoint from "../../backend/models/StatusPoint";
import "@Styles/ovverideMapStyle.css";
import DraggableMarker from "@Components/DraggableMarker/DraggableMarker";
import {LatLngExpression} from "leaflet";
import AddMarkerBtn from "@Components/AddMarkerBtn/AddMarkerBtn";
import TypesPointList from "../../backend/models/TypesPoint";
import ChangeMapStatusToRayon from "@Components/AddMarkerBtn/ChangeMapStatusToRayon";
import MarketModal from "@Modals/MarketModal/MarketModal";
import AddPointModal from "../../backend/models/AddPointModal";

const Map = () => {
    const [canAdd, setCanAdd] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [draggablePos, setDraggablePos] = useState<LatLngExpression | null>(null)
    const [position, setPosition] = useState<LatLngExpression>([55.7887, 49.1221]);
    const [term, setTerm] = useState<AddPointModal | null>(null)
    const addBtnClick = useCallback(() => setIsOpenModal(true), []);
    const onModalClose = useCallback((term: AddPointModal) => {
        setIsOpenModal(false);
        setCanAdd(true);
        setTerm(term)
    }, []);
    const modalRoot = () => {
        return isOpenModal ? <MarketModal onClose={onModalClose}/> : <></>
    }
    const draggable = () => {
        return draggablePos && term ? <DraggableMarker startPosition={draggablePos} img={term.image}/> : <></>
    }
    const addMarker = useCallback((e: any) => {
        if (canAdd) {
            const pos = e.latlng
            if (pos) {
                setDraggablePos(pos)
                setCanAdd(false)
            } else {
                setDraggablePos(null);
            }
        }
    }, [canAdd]);
    useEffect(() => {
        const timerId = setTimeout(() => {
            const panels = document.getElementsByClassName("leaflet-control-layers-toggle")
            const elements = Array.prototype.slice.call(panels);
            elements[0].style.backgroundImage = "url('images/setting.png')"
        }, 200)
        return () => clearTimeout(timerId)
    }, [])
    const MapEventsWrapper = ({handleClick}: { handleClick: any }) => {
        useMapEvents({
            click: handleClick,
        });
        return <></>
    }
    return (
        <MapContainer
            className={styles.mapContainer}
            center={position}
            minZoom={13}
            zoom={14}
            scrollWheelZoom={false}>
            <MapEventsWrapper handleClick={addMarker}/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AddMarkerBtn onClick={addBtnClick}/>
            {modalRoot()}
            {draggable()}
            <ChangeMapStatusToRayon />
            <LayersControl position="topright">
                <LayersControl.Overlay name="Пандусы" checked>
                    <LayerGroup>
                        <SimplePoint x={55.785} y={49.166} type={TypesPointList.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.755} y={49.176} type={TypesPointList.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.715} y={49.136} type={TypesPointList.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.795} y={49.106} type={TypesPointList.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.725} y={49.126} type={TypesPointList.Ramp} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Светофоры со звуком" checked>
                    <LayerGroup>
                        <SimplePoint x={55.780} y={49.164} type={TypesPointList.TrafficLightSignal}
                                     status={StatusPoint.Active} evaluations={[]} createDate={new Date()}/>\
                        <SimplePoint x={55.781} y={49.163} type={TypesPointList.TrafficLightSignal}
                                     status={StatusPoint.Active} evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.782} y={49.162} type={TypesPointList.TrafficLightSignal}
                                     status={StatusPoint.Active} evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.783} y={49.161} type={TypesPointList.TrafficLightSignal}
                                     status={StatusPoint.Active} evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Лифты" checked>
                    <LayerGroup>
                        <SimplePoint x={55.715} y={49.112} type={TypesPointList.Elevator} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Туалеты" checked>
                    <LayerGroup>
                        <SimplePoint x={55.715} y={49.106} type={TypesPointList.Toilet} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Препятствия" checked>
                    <LayerGroup>
                        <SimplePoint x={55.725} y={49.166} type={TypesPointList.Obstacle} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.705} y={49.163} type={TypesPointList.Obstacle} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                        <SimplePoint x={55.765} y={49.164} type={TypesPointList.Obstacle} status={StatusPoint.Active}
                                     evaluations={[]} createDate={new Date()}/>
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
};

export default Map;