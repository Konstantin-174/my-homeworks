import React from 'react'
import {Message} from './Message';

const messageData = {
    avatar: 'https://sun9-6.userapi.com/c10590/u103687503/114052910/y_e4de20af.jpg',
    name: 'Bender Rodriguez',
    message: 'Откуда дурак выбраться не может — туда умный не залезает',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
