import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.scss'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    filter: FilterType
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

const Affairs: React.FC<AffairsPropsType> = ({
                                                 data,
                                                 setFilter,
                                                 deleteAffairCallback,
                                                 filter
                                             }) => {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => {
        setFilter('all')
    } // need to fix
    const setHigh = () => {
        setFilter('high')
    }
    const setMiddle = () => {
        setFilter('middle')
    }
    const setLow = () => {
        setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}
                    className={filter === 'all' ? styles.active : styles.btn}>
                All
            </button>
            <button onClick={setHigh}
                    className={filter === 'high' ? styles.active : styles.btn}>
                High
            </button>
            <button onClick={setMiddle}
                    className={filter === 'middle' ? styles.active : styles.btn}>
                Middle
            </button>
            <button onClick={setLow}
                    className={filter === 'low' ? styles.active : styles.btn}>
                Low
            </button>
        </div>
    )
}

export default Affairs
