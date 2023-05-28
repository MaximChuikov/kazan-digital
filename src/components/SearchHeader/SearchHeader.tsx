import React from "react";
import styles from "./Search.Header.module.scss";

const SearchHeader = () => {
    const [searchName, setSearchName] = React.useState("")
    const places = [
        {name: "ИТ-Парк", pos: {x: 55.780168, y: 49.133722}},
        {name: "Всероссийское общество слепых", pos: {x: 55.830382, y: 49.064193}}
    ];
    const results = places.filter(x => x.name.toLowerCase().startsWith(searchName.toLowerCase()) && searchName.length > 0);
    const getResults = () => {
        const getResult = (result: any) => {
            return <span className={styles.result}>{result.name}</span>
        }
        return (<div className={styles.searchResult}>
            {results.map(x => getResult(x))}
        </div>)
    }
    return (<div className={styles.searchHeader}>
        <div className={styles.searchBar}>
            <img src={"/images/search.png"} alt={"search"} className={styles.icon}/>
            <input className={styles.searchInput} value={searchName} onChange={(e: any) => {
                setSearchName(e.target.value)
            }} placeholder={"Поиск адреса"}/>
        </div>
        {
            results.length > 0 ? getResults() : ''
        }
    </div>)
}
export default SearchHeader