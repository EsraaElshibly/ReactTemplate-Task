import React, { Component } from "react";
import "./Testmonialls.css"

export default class Commitee extends Component {

  render() {

    let { Info } = this.props;

    let commit = Info.map(committeeInfo => {
      return (
        <div className="col-lg-3 col-sm-6 col-12 commit-parent">
          {/******** Start PArent Div ******/}
            <div  key={committeeInfo.id} className="parent" >
              {/******* Start Showing Icon for Each committee ********/}
              <div className="img ">
                <img src={committeeInfo.icon} />
              </div>
              {/******* End Showing Icon for Each committee ********/}

              {/****** Start Showing Name for Each committee ******/}
              <div className="info">
                <h3>{committeeInfo.name}</h3>
                <p className="commit-head">{committeeInfo.des}</p>
              </div>
              {/****** End Showing Name for Each committee ******/}
              </div>

          {/***** End Parent Div *****/}
        </div>
      );
    });
    return <div className="row">
      {commit}
      <div className="row lastEndLine">
          <div className="col-4">
              <div className="line"></div>
          </div>
          <div className="col-4">
              <div className="line"></div>
          </div>
          <div className="col-4">
              <div className="line"></div>
          </div>
      </div>
      <div className="buttons">
          <button className="bttn">See all</button>
      </div>
    </div>;
  }
}
