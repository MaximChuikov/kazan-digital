import React from "react"
import style from "./Main.module.scss"
import Map from "@Components/Map/Map";

const Main = () => {
    return (
        <div className={style.mainPage}>
            <Map/>
        </div>
    )
}
export default Main