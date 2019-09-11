import React from 'react';
import { connect } from 'react-redux'

import { removeFeature } from '../actions'

const AddedFeature = props => {
  return (
    <li>
      <button 
        className="button" 
        onClick={() => props.removeFeature(props.feature)}>
          X
      </button>
      {props.feature.name}
    </li>
  );
};

function mapDispatchToProps() {
  return {
    removeFeature
  }
}

export default connect(
  null,
  mapDispatchToProps()
)(AddedFeature);
