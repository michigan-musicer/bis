import React from 'react';
import './SubpageNavbar.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

class SubpageNavbar extends React.Component {
  render() {
    return (
      <div className="subpage-navbar-div">
        <div className="subpage-navbar-left">
          <ArrowBackIcon/>
          <h3 className="subpage-navbar-left-text">Back to homepage</h3>
        </div>
        {/* <div className="profile-navbar-right">
          {/* this is not in the left container, but we do want the
          same difference (no left border) */}{/*
          <h3 className="profile-navbar-left-text">Previous</h3>
          <h3 className="profile-navbar-right-item">Read a random interview</h3>
          <h3 className="profile-navbar-right-item">Next</h3>
        </div> */}
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