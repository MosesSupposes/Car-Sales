import React from 'react'
import { useDispatch } from 'react-redux'

import { removeFeature } from '../actions'

export default function AddedFeature (props) {
  const dispatch = useDispatch()

  return (
    <li>
      <button 
        className="button" 
        onClick={() => dispatch(removeFeature(props.feature))}>
          X
      </button>
      {props.feature.name}
    </li>
  )
}


