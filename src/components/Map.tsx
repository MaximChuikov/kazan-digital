import React from 'react';
import {MapContainer, Marker, Popup, TileLayer, Tooltip} from "react-leaflet";

const Map = () => {
    return (
        <MapContainer style={{width: "100%", minHeight: "100vh"}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    <Tooltip>
                        Я ТОЧКА
                    </Tooltip>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;