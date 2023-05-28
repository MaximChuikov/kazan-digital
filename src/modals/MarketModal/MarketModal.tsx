import React, {useState} from "react"
import styles from "./MarketModal.module.scss"
import ProblemTypes from "../../backend/models/ProblemTypes";
import TypesPoint from "../../backend/models/TypesPoint";
import AddPointModal from "../../backend/models/AddPointModal";
import * as Icon from 'react-feather';

interface ModalItem {
    name: string,
    img: string,
    color: string,
    type: TypesPoint
}

const MarketModal = ({onClose,closeModalPage}: { onClose: (value: AddPointModal) => void,closeModalPage:()=>void }) => {
    const [selectItem, setSelectedItem] = useState<ModalItem | null>(null);
    const [step, setStep] = useState<number>(1);
    const [term, setTerm] = useState<ProblemTypes | null>(null);
    const [description, setDescription] = useState<string>("");

    const terms = [
        {value: ProblemTypes.low, text: "несколько часов"},
        {value: ProblemTypes.medium, text: "несколько дней"},
        {value: ProblemTypes.hard, text: "дольше"}
    ];
    const goodTerms = [
        {value: ProblemTypes.low, text: "хорошее"},
        {value: ProblemTypes.medium, text: "не очень, но пользоваться можно"},
        {value: ProblemTypes.hard, text: "пользоваться невозможно"}
    ];
    const modals = [
        {name: "пандус", img: "/images/icons/pandus.png", color: "#B39DDB", type: TypesPoint.Ramp},
        {
            name: "проблемные места",
            img: "/images/icons/barier.png",
            color: "#EF9A9A",
            type: TypesPoint.ProblemPlace
        },
        {name: "лифт", img: "/images/icons/lift.png", color: "#C8E6C9", type: TypesPoint.Elevator},
        {name: "туалет", img: "/images/icons/toilet.png", color: "#B3E5FC", type: TypesPoint.Toilet},
        {name: "светофор", img: "/images/icons/lights.png", color: "#FFECB3", type: TypesPoint.TrafficLightSignal}
    ];
    const closeModal = () => {
        closeModalPage()
    }
    const getAddModalText = () => {
        if (selectItem) {
            switch (selectItem!.type) {
                case TypesPoint.ProblemPlace:
                    return "Ожидаемый срок препятствия"
                default:
                    return "качество " + selectItem.name + "а"
            }
        } else {
            return "";
        }
    }
    const saveSelectItem = () => {
        if (selectItem) {
            setStep(2);
        }
    }
    const saveMarker = () => {
        if (term !== null && selectItem) {
            const result = {
                type: selectItem.type,
                description: description,
                term: term,
                image: selectItem.img
            }
            onClose(result)
        }
    }
    const getModalItem = (item: ModalItem, canClick = false, index = 0) => {
        const changeItem = () => {
            if (canClick) {
                setSelectedItem(item)
            }
        }
        return (
            <div className={styles.modalItem + " " + (selectItem?.name === item.name && canClick && styles.selectItem)}
                 onClick={changeItem} key={index.toString()}>
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
    const getRadioItem = (value: ProblemTypes, text: string, index: number) => {
        const changeTerm = () => {
            setTerm(value)
        }
        return (
            <div className={styles.radioItem} key={index.toString()}>
                <input type="radio" name={"term"} id={value.toString()} value={value} onClick={changeTerm}/>
                <label>{text}</label>
            </div>
        )
    }
    const getFirstStep = () => {
        return (<div className={styles.marketModal}>
            <Icon.X className={styles.close} onClick={closeModal}/>
            <span className={styles.modalText}>Добавить точку</span>
            <div className={styles.modalItems}>
                {modals.map((x, index) => getModalItem(x, true, index))}
            </div>
            <button className={styles.modalBtn} onClick={saveSelectItem}>Сохранить</button>
        </div>)
    }
    const getSecondStep = () => {
        return (<div className={styles.marketModal}>
            <Icon.X className={styles.close} onClick={closeModal}/>
            <span className={styles.modalText}>Добавить точку</span>
            {getModalItem(selectItem!)}
            <input
                className={styles.modalInput}
                placeholder={"Описание"}
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <span className={styles.modalDescription}>{getAddModalText()}</span>
            <fieldset className={styles.radioSet}>
                {selectItem?.type === TypesPoint.ProblemPlace ?
                    terms.map((x, index) => getRadioItem(x.value, x.text, index)) :
                    goodTerms.map((x, index) => getRadioItem(x.value, x.text, index))
                }
            </fieldset>
            <button className={styles.modalBtn} onClick={saveMarker}>Сохранить</button>
        </div>)
    }
    return (
        <div className={styles.modal}>
            {
                step === 1 && getFirstStep()
            }
            {
                step === 2 && getSecondStep()
            }
        </div>
    )
}
export default MarketModal