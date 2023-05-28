import React from "react";
import styles from "./Search.Header.module.scss";

const SearchHeader = ({setPosition, createRoadMock}: {
    setPosition: (pos: {
        x: number,
        y: number
    }) => void,
    createRoadMock: () => void
}) => {
    const [searchName, setSearchName] = React.useState("")
    const places = [
        {name: "Петербургская ул., 52", pos: {x: 55.780168, y: 49.133722}},
        {name: "ул. Серова, 7", pos: {x: 55.830382, y: 49.064193}},
        {name: "ул. Гагарина, 121", pos: {x: 55.834841, y: 49.064561}}
    ];
    const find = () => {
        if (places.map(x => x.name.toLowerCase()).includes(searchName.toLowerCase())) {
            const place = places.find(x => x.name.toLowerCase() === searchName.toLowerCase());
            if (place) {
                setPosition(place.pos)
            }
        }
    }
    const createRoad = () => {
        if (searchName.length) {
            createRoadMock()
        }
    }
    return (<div className={styles.searchHeader}>
        <div className={styles.searchBar}>
            <div className={styles.findItems}>
                <img src={"/images/search.png"} alt={"search"} className={styles.icon}/>
                <input className={styles.searchInput} value={searchName} onChange={(e: any) => {
                    setSearchName(e.target.value)
                }} placeholder={"Поиск адреса"}/>
            </div>
            <div className={styles.searchResult}>
                <button onClick={find}>Найти</button>
                <button onClick={createRoad} className={styles.ml2}>Построить маршрут до</button>
            </div>
        </div>
    </div>)
}
export default SearchHeader