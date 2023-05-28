import React, {useCallback, useEffect, useState} from 'react';
import {LayerGroup, LayersControl, MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import styles from './map.module.scss'
import SimplePoint from "../Points/SimplePoint";
import StatusPoint from "../../backend/models/StatusPoint";
import "@Styles/ovverideMapStyle.css";
import DraggableMarker from "@Components/DraggableMarker/DraggableMarker";
import {LatLngExpression} from "leaflet";
import AddMarkerBtn from "@Components/AddMarkerBtn/AddMarkerBtn";
import TypesPoint from "../../backend/models/TypesPoint";
import ChangeMapStatusToRayon from "@Components/AddMarkerBtn/ChangeMapStatusToRayon";
import MarketModal from "@Modals/MarketModal/MarketModal";
import AddPointModal from "../../backend/models/AddPointModal";
import PointController from "../../backend/controllers/PointController";
import Point from "../../backend/models/Point";

const Map = () => {

    function getPoints() {
        return PointController.getAllUserPoint()
    }
    const [allPoints, setAllPoints] = useState(getPoints())


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
    const addMarkerToDB = (x: number, y: number) => {
        if (term) {
            let point: Point = {
                x: x,
                y: y,
                type: term?.type,
                status: 1,
                description: term.description,
                evaluations: [],
                votes: [],
                rating: term.term,
                countVotesToCreate: 0,
                countVotesToDelete: 0,
                createDate: new Date()
            }
            PointController.addPoint(point)
            setDraggablePos(null);
        }
    }
    const draggable = () => {
        return draggablePos && term ?
            <DraggableMarker startPosition={draggablePos}
                             img={term.image}
                             addMarker={addMarkerToDB}
                             type={term.type}/> : <></>
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
            <ChangeMapStatusToRayon/>
            <LayersControl position="topright">
                <LayersControl.Overlay name="Пандусы" checked>
                    <LayerGroup>
                        {
                            allPoints.filter(p => p.type === TypesPoint.Ramp).map((p, key) => (
                                <SimplePoint key={key} {...p} />
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Светофоры со звуком" checked>
                    <LayerGroup>
                        {
                            allPoints.filter(p => p.type === TypesPoint.TrafficLightSignal).map((p, key) => (
                                <SimplePoint key={key} {...p} />
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Лифты" checked>
                    <LayerGroup>
                        {
                            allPoints.filter(p => p.type === TypesPoint.Elevator).map((p, key) => (
                                <SimplePoint key={key} {...p} />
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Туалеты" checked>
                    <LayerGroup>
                        {
                            allPoints.filter(p => p.type === TypesPoint.Toilet).map((p, key) => (
                                <SimplePoint key={key} {...p} />
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Препятствия" checked>
                    <LayerGroup>
                        {
                            allPoints.filter(p => p.type === TypesPoint.ProblemPlace).map((p, key) => (
                                <SimplePoint key={key} {...p} />
                            ))
                        }
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
};

export default Map;