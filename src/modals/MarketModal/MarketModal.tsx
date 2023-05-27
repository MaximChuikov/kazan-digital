import React, {useState} from "react"
import styles from "./MarketModal.module.scss"

interface ModalItem {
    name: string,
    img: string,
    color: string
}

const MarketModal = () => {
    const [selectItem, setSelectedItem] = useState<ModalItem | null>(null);
    const modals = [
        {name: "пандус", img: "/images/icons/pandus.png", color: "#B39DDB"},
        {name: "проблемные места", img: "/images/icons/barier.png", color: "#EF9A9A"},
        {name: "лифт", img: "/images/icons/lift.png", color: "#C8E6C9"},
        {name: "туалет", img: "/images/icons/toilet.png", color: "#B3E5FC"},
        {name: "светофор", img: "/images/icons/lights.png", color: "#FFECB3"}
    ];
    const saveSelectItem = () => {

    }
    const getModalItem = (item: ModalItem) => {
        const changeItem = () => {
            setSelectedItem(item)
            const el = document.getElementById(item.name);
            el?.classList.add()
        }
        return (<div className={styles.modalItem + " "  + (selectItem?.name === item.name && styles.selectItem)}
                     onClick={changeItem}>
            <img
                src={item.img}
                alt={item.name}
                className={styles.itemIcon}
                style={{
                    borderColor: item.color
                }}/>
            <span className={styles.itemText}>{item.name}</span>
        </div>);
    }
    return (
        <div className={styles.modal}>
            <div className={styles.marketModal}>
                <span className={styles.modalText}>Добавить точку</span>
                <div className={styles.modalItems}>
                    {modals.map(x => getModalItem(x))}
                </div>
                <button className={styles.modalBtn} onClick={saveSelectItem}>Сохранить</button>
            </div>
        </div>
    )
}
export default MarketModal