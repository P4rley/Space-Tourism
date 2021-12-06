import React, { useState } from "react";
import "./destination.css";
// import { destinations } from "../../data.json";
import imageOne from "../../assets/destination/image-moon.png";
import imageTwo from "../../assets/destination/image-mars.png";
import imageThree from "../../assets/destination/image-europa.png";
import imageFour from "../../assets/destination/image-titan.png";

function Destination() {
  const [moon, setmoon] = useState(true);
  const [mars, setmars] = useState(false);
  const [europa, seteuropa] = useState(false);
  const [titan, settitan] = useState(false);

  const [activemoon, setActiveMoon] = useState(false);
  const [activemars, setActiveMars] = useState(false);
  const [activeeuropa, setActiveEuropa] = useState(false);
  const [activetitan, setActiveTitan] = useState(false);

  const handleMoon = () => {
    setmars(false);
    settitan(false);
    seteuropa(false);
    setmoon(true);
    setActiveMoon(true);
    setActiveMars(false);
    setActiveEuropa(false);
    setActiveTitan(false);
  };

  const handleMars = () => {
    setmars(true);
    settitan(false);
    seteuropa(false);
    setmoon(false);
    setActiveMoon(false);
    setActiveMars(true);
    setActiveEuropa(false);
    setActiveTitan(false);
  };

  const handleEuropa = () => {
    setmars(false);
    settitan(false);
    seteuropa(true);
    setmoon(false);
    setActiveMoon(false);
    setActiveMars(false);
    setActiveEuropa(true);
    setActiveTitan(false);
  };

  const handleTitan = () => {
    setmars(false);
    settitan(true);
    seteuropa(false);
    setmoon(false);
    setActiveMoon(false);
    setActiveMars(false);
    setActiveEuropa(false);
    setActiveTitan(true);
  };

  return (
    <div className="space__destination section__padding" id="destination">
      <h5 className="space__destination-heading">
        <span>01</span> Pick Your Destination
      </h5>

      <div className="space__destination-container">
        <div className="space__destination-container-contentA">
          {moon ? <img src={imageOne} alt="#"></img> : null}
          {mars ? <img src={imageTwo} alt="#"></img> : null}
          {europa ? <img src={imageThree} alt="#"></img> : null}
          {titan ? <img src={imageFour} alt="#"></img> : null}
        </div>
        <div className="space__destination-container-contentB">
          <ul className="space__destination-container-contentB_header">
            <li
              onClick={handleMoon}
              className={activemoon ? "li active" : "li"}
            >
              Moon
            </li>
            <li
              onClick={handleMars}
              className={activemars ? "li active" : "li"}
            >
              Mars
            </li>
            <li
              onClick={handleEuropa}
              className={activeeuropa ? "li active" : "li"}
            >
              Europa
            </li>
            <li
              onClick={handleTitan}
              className={activetitan ? "li active" : "li"}
            >
              Titan
            </li>
          </ul>
          {moon ? (
            <div>
              <h1 className="space__destination-container-contentB_title">
                Moon
              </h1>
              <p className="space__destination-container-contentB_desc">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className="space__destination-container-contentB-data">
                <div>
                  <h3>Avg. Distance</h3>
                  <p>384,400 KM</p>
                </div>

                <div>
                  <h3>Est. Travel Time</h3>
                  <p>3 Days</p>
                </div>
              </div>
            </div>
          ) : null}

          {mars ? (
            <div>
              <h1 className="space__destination-container-contentB_title">
                Mars
              </h1>
              <p className="space__destination-container-contentB_desc">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
              <div className="space__destination-container-contentB-data">
                <div>
                  <h3>Avg. Distance</h3>
                  <p>225 mil. KM</p>
                </div>

                <div>
                  <h3>Est. Travel Time</h3>
                  <p>9 months</p>
                </div>
              </div>
            </div>
          ) : null}

          {europa ? (
            <div>
              <h1 className="space__destination-container-contentB_title">
                Europa
              </h1>
              <p className="space__destination-container-contentB_desc">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <div className="space__destination-container-contentB-data">
                <div>
                  <h3>Avg. Distance</h3>
                  <p>628 mil. km</p>
                </div>

                <div>
                  <h3>Est. Travel Time</h3>
                  <p>3 years</p>
                </div>
              </div>
            </div>
          ) : null}

          {titan ? (
            <div>
              <h1 className="space__destination-container-contentB_title">
                Titan
              </h1>
              <p className="space__destination-container-contentB_desc">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
              <div className="space__destination-container-contentB-data">
                <div>
                  <h3>Avg. Distance</h3>
                  <p>1.6 bil. km</p>
                </div>

                <div>
                  <h3>Est. Travel Time</h3>
                  <p>7 years</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Destination;
