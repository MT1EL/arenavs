import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function Home(props) {
  return (
    <section className="homeSection">
      <div className="homeHeader">
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
        <img
          src="https://arenavs.com/spartan.png"
          alt="solider picture"
          className="firstSoldire"
        />
      </div>
      <div className="secondHome">
        <div className="discoverButton">
          <button href="#home">Discover more </button>
          <div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        {/* <div className="homeTwoAbsolute"> */}
        <img
          src="https://arenavs.com/african.png"
          alt="second solider"
          className="secondSolider"
        />
        <div className="downloadGrid">
          <a
            href="https://apps.apple.com/us/app/arena-master/id1527871139"
            className="appleStore"
          >
            <img src="https://arenavs.com/appstore.svg" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.Sambrela.ArenaMaster&hl=en&gl=US"
            className="appStore"
          >
            <img src="https://arenavs.com/googleplay.svg" />
          </a>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Home;
