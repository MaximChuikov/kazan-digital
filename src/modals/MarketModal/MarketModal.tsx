import React from "react"
import styles from "./MarketModal.module.scss"

const MarketModal = () => {
    const modals = [
        {name: "пандус", img: "/images/icons/pandus.png"},
        {name: "проблемные места", img: "/images/icons/barier.png"}, {name: "лифт", img: "/images/icons/lift.png"},
        {name: "туалет", img: "/images/icons/toilet.png"}, {name: "светофор", img: "/images/icons/lights.png"}
    ];
    const getModalItem = ({name, img}: { name: string, img: string }) => {
        return (<div className={styles.modalItem}>
            <img src={img} alt={name} id={name} className={styles.itemIcon}/>
            <span className={styles.itemText}>{name}</span>
        </div>);
    }
    return (<div className={styles.marketModal}>
        <span className={styles.modalText}>Добавить точку</span>
        <div className={styles.modalItems}>
            {modals.map(x => getModalItem(x))}
        </div>
    </div>)
}
export default MarketModal