import React from 'react'
import './ListMessage.css'

export default function ListMessage({ setList,dbValue }) {
    
    const itemList = (list) => {
        
        let arrItem = []
        for (let item in list) {
            arrItem.push(<li key={item} className="list-group__item">{list[item]}</li>) 
        }
        return arrItem
    }
    
    return (
        <div>
            <ul className="list-group" style={{ maxWidth: 800 }}>
                {itemList(dbValue)}
            </ul>
        </div>
    )
}
