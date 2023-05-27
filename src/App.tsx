import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import Map from "./components/Map/Map";
import 'leaflet/dist/leaflet.css'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Map />}/>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
        </Routes>
    );
}

export default App;
