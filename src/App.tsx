import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import Map from "./components/Map/Map";
import 'leaflet/dist/leaflet.css'
import Backend from "./pages/back/Backend";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Map />}/>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
            <Route path="/back" element={<Backend />}/>
        </Routes>
    );
}

export default App;
