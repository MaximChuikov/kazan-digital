import React from "react"
import styles from "./AddMarket.module.scss"

const AddMarkerBtn = ({onClick}: { onClick?: () => void }) => {
    return (
        <div className={styles.addMarket}>
            <div className={styles.addMarketBtn} onClick={onClick}>
                <img src={"/images/add_market.png"} alt={"add market"}/>
            </div>
            <span className={styles.addMarketText}>
                Добавить точку
            </span>
        </div>
    )
}
export default AddMarkerBtn