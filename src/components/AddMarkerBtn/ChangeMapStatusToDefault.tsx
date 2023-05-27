import React from "react"
import styles from "./AddMarket.module.scss"
import {useNavigate} from "react-router-dom";

const ChangeMapStatusToDefault = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.rayon}>
            <div className={styles.addMarketBtn} onClick={() => {
                navigate("/")
            }}>
                <img src={"/images/to-default-map.png"} alt={"К карте"}/>
            </div>
            <span className={styles.addMarketText}>
                обратно к карте
            </span>
        </div>
    )
}
export default ChangeMapStatusToDefault