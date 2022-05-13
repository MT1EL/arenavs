import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import spartan from "../images/Home&About/spartan.png";
import african from "../images/Home&About/african.png";
import appStore from "../images/Home&About/appstore.svg";
import GooglePlay from "../images/Home&About/GooglePlay.png";
function Home() {
  return (
    <section className="homeSection">
      <div className="homeHeader" id="home">
        <div>
          <p className="title">
            ARENA AWAITS YOU,<span> MY LORD</span>
          </p>
          <p className="homeParagraph">
            Fight to Earn <br />
            Arena Master - tokenized battle-style game combining Play-to-Win &
            Play-to-Earn modes
          </p>
        </div>
        <img src={spartan} alt="solider" className="firstSoldire" />
      </div>
      <div className="secondHome">
        <div className="discoverButton">
          <a href="#AboutUs">
            <button>Discover more </button>
          </a>
          <div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>

        <img src={african} alt="second solider" className="secondSolider" />
        <div className="downloadGrid">
          <a
            href="https://apps.apple.com/us/app/arena-master/id1527871139"
            className="appleStore"
          >
            <img src={appStore} alt="appstore link" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.Sambrela.ArenaMaster&hl=en&gl=US"
            className="appStore"
          >
            <img src={GooglePlay} alt="googleplay link" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
