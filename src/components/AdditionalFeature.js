import React from 'react';
import { useDispatch } from 'react-redux'
import { addFeature } from '../actions'

export default function AdditionalFeature (props) {
  const dispatch = useDispatch()

  return (
    <li>
      <button 
        className="button"
        onClick={() => dispatch(addFeature(props.feature))}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
