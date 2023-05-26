import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';

function App() {
    return (
        <Routes>
            <Route path="*" element={<div className={styles.appBody}>error</div>}/>
        </Routes>
    );
}

export default App;
