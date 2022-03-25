import React, { Component } from 'react'
import Commitee from "./Testmon.js"
import "./Testmonialls.css"

export default class Testmonials extends Component {

state = {
    cardsInformation: [
      {
        id: 1,
        name: "Cody Foster",
        position: "Founder of advisor excel",
        des:
          "Whether it is through his viral TED talk, his compelling live keynotes or his in demand virtual training," ,       

        icon: "https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1581453312252-PZT45H066SE8QEF2BST9/OurTeam-Photos-CodyFoster.png"
      },
      {
        id: 2,
        name: "judy joel",
        position: "US field department manger at pampred chef",
        des:
          "Whether it is through his viral TED talk, his compelling live keynotes or his in demand virtual training," ,       

        icon: "https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1560891722973-7S28MV8CUG8MZI6O5PGQ/JudyJoel.jpg"
      },
      {
        id: 3,
        name: "draby hawkins",
        position: "Meeting planner & services cordinator at furnature first",
        des:
          "Whether it is through his viral TED talk, his compelling live keynotes or his in demand virtual training," ,       

        icon: "https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1560892955376-VIS15R7M456ZKVVTC6CJ/DarbyHawkins.jpg"
      },
      {
        id: 1,
        name: "tracy christman",
        position: "Founder of advisor excel",
        des:
          "vice president of vendor alliance at budget blinds" ,       

        icon: "https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1560893083999-56ZXO8YR2HWTU70HVYQD/TracyChristman.jpg"
      },
      
      
    ]
  };

  render() {
    return (
        <div className="commit-style testmonials">
          <div className='container'>
          <div className="testHead">
              <div className="line"></div>
              <h3>Speaking Testimonials</h3>
          </div>
          <Commitee Info = {this.state.cardsInformation} />
          </div>
        </div>
    )
}
}