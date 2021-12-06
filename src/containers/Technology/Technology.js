import React, { useState } from "react";
import "./technology.css";
import imageOne from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import imageTwo from "../../assets/technology/image-space-capsule-portrait.jpg";
import imageThree from "../../assets/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  const [vehicle, setVehicle] = useState(true);
  const [capsule, setCapsule] = useState(false);
  const [spaceport, setSpaceport] = useState(false);

  const [activevehicle, setActivevehicle] = useState(true);
  const [activecapsule, setActivecapsule] = useState(false);
  const [activespaceport, setActivespaceport] = useState(false);

  const handleVehicle = () => {
    setVehicle(true);
    setCapsule(false);
    setSpaceport(false);

    setActivevehicle(true);
    setActivecapsule(false);
    setActivespaceport(false);
  };

  const handleCapsule = () => {
    setVehicle(false);
    setCapsule(true);
    setSpaceport(false);

    setActivevehicle(false);
    setActivecapsule(true);
    setActivespaceport(false);
  };

  const handleSpaceport = () => {
    setVehicle(false);
    setCapsule(false);
    setSpaceport(true);

    setActivevehicle(false);
    setActivecapsule(false);
    setActivespaceport(true);
  };

  return (
    <div className="space__technology section__padding">
      <h2 className="space__technology-heading">
        <span>03</span> Space launch 101
      </h2>
      <div className="space__technology-container">
        <ul className="space__technology-container_number">
          <li onClick={handleVehicle} className={activevehicle ? "active" : ""}>
            1
          </li>
          <li
            onClick={handleSpaceport}
            className={activespaceport ? "active" : ""}
          >
            2
          </li>
          <li onClick={handleCapsule} className={activecapsule ? "active" : ""}>
            3
          </li>
        </ul>
        <div className="space__technology-container_contentA">
          {vehicle ? (
            <>
              <h5>The terminology...</h5>
              <h1>Launch Vehicle</h1>
              <p>
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </>
          ) : null}

          {spaceport ? (
            <>
              <h5>The terminology...</h5>
              <h1>Spaceport</h1>
              <p>
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </>
          ) : null}

          {capsule ? (
            <>
              <h5>The terminology...</h5>
              <h1>Space capsule</h1>
              <p>
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </>
          ) : null}
        </div>
        <div className="space__technology-container_contentB">
          {vehicle ? <img src={imageOne} alt="" /> : null}
          {spaceport ? <img src={imageTwo} alt="" /> : null}
          {capsule ? <img src={imageThree} alt="" /> : null}
        </div>
      </div>
    </div>
  );
};

export default Technology;
