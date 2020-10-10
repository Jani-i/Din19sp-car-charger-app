import React from 'react'
import Locations from './Locations'

export default function Marker(props) {
  return (
    <div>
      <div>
        {props.locations.map(location => <Locations key={location.name}{...location} />)}
      </div>
    </div>
  )
}
