import React from 'react'
import {AffairType} from './HW2';
import styles from './Affairs.module.scss'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

const Affair: React.FC<AffairPropsType> = ({
                                               affair,
                                               deleteAffairCallback
                                           }) => {
    const deleteCallback = () => {
        deleteAffairCallback(affair._id)
    }// need to fix

    return (
        <div className={styles.affairWrap}>
            <div className={styles.affairText}>
                {affair.name}
            </div>
            <button onClick={deleteCallback}
                    className={styles.affairBtn}
            >X
            </button>
        </div>
    )
}

export default Affair
