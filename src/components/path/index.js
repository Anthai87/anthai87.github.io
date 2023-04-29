import React from "react";
import "./style.css";

export const PathContact = () => {
  return (
    <div id="path" className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__links">
              <a href="http://localhost:3000/">
                <i className="fa fa-home"></i>
                Home
              </a>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PathAbout = () => {
  return (
    <div className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__links">
              <a href="http://localhost:3000/">
                <i className="fa fa-home"></i>
                Home
              </a>
              <span>About</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const PathFashion = () => {
  return (
    <div className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__links">
              <a href="http://localhost:3000/">
                <i className="fa fa-home"></i>
                Home
              </a>
              <span>Fashion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
