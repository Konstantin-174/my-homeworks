import React from 'react'
import classes from './Message.module.scss'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: React.FC<MessageType> = ({avatar,
                                                   name,
                                                   message,
                                                   time}) => {
    return (
        <div className={classes.messageWrap}>
            <div className={classes.ava}>
                IMG
            </div>
            <div className={classes.contentWrap}>
               <div className={classes.textWrap}>
                   <div className={classes.name}>
                       {name}
                   </div>
                   <div className={classes.message}>
                       {message}
                   </div>
               </div>
                <div className={classes.time}>
                    {time}
                </div>
            </div>
        </div>
    )
}

