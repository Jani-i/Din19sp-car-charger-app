import React from 'react'
import Information from './Information'

export default function Infopicker(props) {
    return (
        <div className="List">
            {props.locations.map(location => <Information key={location.name}{...location} />)}
        </div>
    )
}
