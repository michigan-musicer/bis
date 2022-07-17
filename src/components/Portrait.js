import React from 'react';
import './Portrait.css';
import { Link } from 'react-router-dom'

import Tooltip from '@mui/material/Tooltip';

// needs image to display in the portrait itself
// needs info to display in preview port on hover only (current hover and not last hover)
  // probably want to pass a prop that is set on hover 


class Portrait extends React.Component {
  render() {
    
    return (
      <Tooltip title="placeholder">
        <Link to="/interview" style={{textDecoration: "none"}}>
          <div className="portrait-container">
            <img src={this.props.img} className="portrait-image"/>
          </div>
        </Link>
      </Tooltip>
    )
  }
}

export default Portrait;