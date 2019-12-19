import React, { Component } from "react";
import Header from "../../partials/Header";
import Parent from "../../Parent";
import SocialSecurity from "./SocialSecurity";
import Education from "./Education";
import Language from "./Language";
import FamilyNo from "./FamilyNo";
import Occupation from "./Occupation";

class MoreOverview extends Component {
  render() {
    return (
      <body className="">
        <div className="kvs-wrapper">
          <div className="container-fluid main-wrapper p-0">
            <aside className="sidebar">
              <div className="card">
                <Header />
                <div className="card-body">
                  <div className="overview overview-list">
                    <div className="overview-header">
                      <h3>
                        <i className="material-icons">keyboard_backspace</i>
                        <span>Overview</span>
                      </h3>
                    </div>
                    <div className="overview-body">

                        <SocialSecurity />
                        <Education />
                        <Language />
                        <FamilyNo />
                        <Occupation />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </body>
    );
  }
}
export default MoreOverview;