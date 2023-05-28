import React from "react"
import styles from "./AddMarket.module.scss"
import {useNavigate} from "react-router-dom";

const ChangeMapStatusToRayon = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.rayon}>
            <div className={styles.addMarketBtn} onClick={() => {
                navigate("/rayon")
            }}>
                <img src={"/images/rayon.png"} alt={"add market"}/>
            </div>
            <span className={styles.addMarketText}>
                качество района города
            </span>
        </div>
    )
}
export default ChangeMapStatusToRayon