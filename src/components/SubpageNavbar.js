import React from 'react';
import './SubpageNavbar.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

class SubpageNavbar extends React.Component {
  render() {
    return (
      <div className="subpage-navbar-div">
        <Link to="/" style={{textDecoration: "none"}}>
          <div className="subpage-navbar-left">
            <ArrowBackIcon/>
            <h3 className="subpage-navbar-left-text">Back to homepage</h3>
          </div>
        </Link>
        <div className="subpage-navbar-center-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="subpage-navbar-right">

        </div>
      </div>
    )
  }
}

export default SubpageNavbar;