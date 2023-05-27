import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import 'leaflet/dist/leaflet.css'
import Main from './pages/Main';
import Backend from "@Pages/back/Backend";
import RayonMap from "@Components/RayonMap/RayonMap";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/back" element={<Backend />}/>
            <Route path="/rayon" element={<RayonMap/>}/>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
        </Routes>
    );
}

export default App;
