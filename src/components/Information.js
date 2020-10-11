import React from 'react'

export default function Information(props) {
    return (
        <div>
            <ul className="Listpiece">
                <h2> {props.name} </h2>
                <div> {props.slow}, cost: {props.scost} </div>
                <div> {props.fast}, cost: {props.fcost} </div>
            </ul>
        </div>
    )
}
