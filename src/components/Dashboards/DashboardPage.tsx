import React from 'react';
import ColoredDiagramsContainer from "@Components/Dashboards/ColoredDiagrams/ColoredDiagramsContainer";
import ColoredTable, {IColoredTableData} from "@Components/Dashboards/ColoredDiagrams/ColoredTable/ColoredTable";
import RoundDiagram, {IRoundDiagramData} from "@Components/Dashboards/ColoredDiagrams/RoundDiagram/RoundDiagram";
import Table, {ITableProps} from "@Components/Dashboards/ColoredDiagrams/Table/Table";
import styles from './dash.module.scss'

const DashboardPage = () => {

    const tableData: IColoredTableData = {
        valuePostfix: "шт.",
        diagram: [
            {
                title: "Пандусы в районе A",
                value: 46,
                stats: {
                    isIncrease: true,
                    text: "Создано 5 пандусов за этот месяц"
                }
            },
            {
                title: "Пандусы в районе A",
                value: 22,
                stats: {
                    isIncrease: true,
                    text: "Создано 5 пандусов за этот месяц"
                }
            },
            {
                title: "Пандусы в районе A",
                value: 11,
                stats: {
                    isIncrease: true,
                    text: "Создано 2 пандуса за этот месяц"
                }
            },
            {
                title: "Пандусы в районе A",
                value: 67,
                stats: {
                    isIncrease: false,
                    text: "Отмечено 3 пандуса как сломанных за этот месяц"
                }
            },
            {
                title: "Пандусы в районе A",
                value: 32,
                stats: {
                    isIncrease: true,
                    text: "Создано 5 пандусов за этот месяц"
                }
            }
            ,
            {
                title: "Пандусы в районе A",
                value: 18,
                stats: {
                    isIncrease: false,
                    text: "Отмечено 3 пандуса как сломанных за этот месяц"
                }
            }
        ]
    }

    const roundData: IRoundDiagramData = {
        valuePostfix: "шт.",
        diagram: [
            {value: 46},
            {value: 22},
            {value: 11},
            {value: 67},
            {value: 32},
            {value: 18}
        ],
        centerDiagram: {
            title: "Общее количество пандусов в Казани",
            value: 46,
            stats: {isIncrease: false, text: "Создано 6 пандусов"}
        }
    }

    const rayonTableData: ITableProps = {
        headers: ["Адрес", "id пандуса", "Рейтинг", "Дата создания"],
        tableData: [
            {
                isIncrease: true,
                columns: [
                    { value: "Улица Чернышевского, 16" },
                    { value: 4 },
                    { value: 4.1, postfix: "звёзд", stats: { isIncrease: true, text: "+0.3" } },
                    { value: "14.03.2022" }
                ]
            },
            {
                isIncrease: false,
                columns: [
                    { value: "Улица Ленина, 10" },
                    { value: 2 },
                    { value: 3.5, postfix: "звёзд", stats: { isIncrease: false, text: "-0.7" } },
                    { value: "21.06.2022" }
                ]
            },
            {
                isIncrease: true,
                columns: [
                    { value: "Проспект Гагарина, 5" },
                    { value: 7 },
                    { value: 4.8, postfix: "звёзд", stats: { isIncrease: true, text: "+0.5" } },
                    { value: "05.09.2022" }
                ]
            },
            {
                isIncrease: false,
                columns: [
                    { value: "Улица Пушкина, 25" },
                    { value: 5 },
                    { value: 2.3, postfix: "звёзд", stats: { isIncrease: false, text: "-0.9" } },
                    { value: "12.12.2022" }
                ]
            },
            {
                isIncrease: true,
                columns: [
                    { value: "Проезд Советский, 8" },
                    { value: 1 },
                    { value: 4.5, postfix: "звёзд", stats: { isIncrease: true, text: "+0.2" } },
                    { value: "03.02.2023" }
                ]
            },
            {
                isIncrease: true,
                columns: [
                    { value: "Улица Горького, 12" },
                    { value: 3 },
                    { value: 3.8, postfix: "звёзд", stats: { isIncrease: true, text: "+0.6" } },
                    { value: "17.07.2023" }
                ]
            },
            {
                isIncrease: false,
                columns: [
                    { value: "Площадь Революции, 1" },
                    { value: 6 },
                    { value: 2.1, postfix: "звёзд", stats: { isIncrease: false, text: "-1.2" } },
                    { value: "28.11.2023" }
                ]
            },
            {
                isIncrease: true,
                columns: [
                    { value: "Набережная Волги, 3" },
                    { value: 9 },
                    { value: 4.3, postfix: "звёзд", stats: { isIncrease: true, text: "+0.9" } },
                    { value: "09.04.2024" }
                ]
            }
        ]
    };



    return (
        <div className={styles.font}>
            <ColoredDiagramsContainer
                TableComponent={<ColoredTable {...tableData} />}
                PieComponent={<RoundDiagram {...roundData}/>}
            />
            <h4>Статистика по району A</h4>
            <Table {...rayonTableData}/>
        </div>
    );
};

export default DashboardPage;