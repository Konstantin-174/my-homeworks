import React from 'react'
import {AffairType} from './HW2';

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
        <div>
            {affair.name}

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
