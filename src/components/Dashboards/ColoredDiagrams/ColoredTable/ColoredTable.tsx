import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import classNames from 'classnames'
import style from './table.module.scss'

export const COLORS = [
  '#00C49F',
  '#673AB7',
  '#B1D43B',
  '#E91E63',
  '#FFE900',
  '#FF5722',
  '#F44336',
  '#FF9800',
  '#9C27B0',
  '#5FCF6F'
]
export function getColor(position: number) {
  return COLORS[position % COLORS.length]
}

export interface IColoredTableData {
  diagram: {
    title: string
    value: number
    stats: {
      isIncrease: boolean
      text: string
    }
  }[]
  valuePostfix: string
}

const ColoredTable = ({ diagram, valuePostfix }: IColoredTableData) => {
  if (diagram.length === 0) return <></>

  return (
    <div className={style.tableContainer}>
      {diagram.map((row, index) => (
        <div className={style.tableRow} key={index} style={{ borderLeft: `6px solid ${getColor(index)}` }}>
          <div>{row.title}</div>
          <div className={style.value}>{`${row.value} ${valuePostfix}`}</div>
          <div className={style.stats}>
            <ArrowUpwardIcon className={classNames(style.arrow, !row.stats.isIncrease && style.redArr)} />
            {`${row.stats.text} ${valuePostfix}`}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ColoredTable
