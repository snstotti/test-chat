import React from 'react'

export default function ListMessage() {
    return (
        <div>
            <ul className="list-group" style={{ maxWidth: 800 }}>
                <li className="list-group-item active" aria-current="true">An active item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
    )
}
