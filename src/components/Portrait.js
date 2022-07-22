import React from 'react';
import './Portrait.css';
import { Link } from 'react-router-dom'

import Tooltip from '@mui/material/Tooltip';

// needs image to display in the portrait itself

class Portrait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)

    return (
      <Tooltip title={"Anonymous " + this.props.props.props.name}>
        <Link to={"/interview/" + this.props.props.name} style={{textDecoration: "none"}}>
          <div className="portrait-container">
            <img src={this.props.props.props.path_image} className="portrait-image"/>
          </div>
        </Link>
      </Tooltip>
    )
  }
}

export default Portrait;