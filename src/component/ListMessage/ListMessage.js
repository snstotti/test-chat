import React from 'react'
import './ListMessage.css'

export default function ListMessage({ dbValue }) {

     /**
     * рендер списка сообщений
     * @param  {object} list - Объект сообщений (уникальный ключ, значение) полученный с сервера.
     * @return {array} - Массив единиц списка со значениями
     */

    const itemList = (list) => {
        let arrItem = []
        for (let item in list) {
            arrItem.push(<li key={item} className="list-group__item">{list[item]}</li>)
        }
        return arrItem
    }
    
    if (!dbValue) return '...Loading'
    return (
        <div>
            <ul className="list-group" style={{ maxWidth: 800 }}>
                {itemList(dbValue)}
            </ul>
        </div>
    )
}
