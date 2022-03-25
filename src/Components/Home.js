import React, { Component } from "react";
import FifthSec from "./FifthSec/FifthSec";
import FirstSec from "./FirstSec/FirstSec";
import FourthSec from "./FourthSec/FourthSec";
import LastSec from "./LastSec/LastSec";
import PreLastSec from "./PreLastSec/PreLastSec";
import FeaturedCom from "./SecondSec/featured";
import SeventhSec from "./SeventhSec/SeventhSec";
import Companines from "./SexthSec/Companies";
import Testmonials from "./Testmonials/Testmoinalls";
import ThirdSec from "./ThirdSec/ThirdSec";

class Home extends Component {
  render() {
    return (  
        <div className="home">
            <FirstSec />
            <FeaturedCom />
            <ThirdSec />
            <FourthSec />
            <FifthSec />
            <Companines />
            <SeventhSec />
            <Testmonials />
            <PreLastSec />
            <LastSec />
        </div>
    );
  }
}

export default Home;
