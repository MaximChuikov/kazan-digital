import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import 'leaflet/dist/leaflet.css'
import Main from './pages/Main';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
        </Routes>
    );
}

export default App;
