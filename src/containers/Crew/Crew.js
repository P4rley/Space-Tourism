import React, { useState } from "react";
import "./crew.css";
import crewImg from "../../assets/crew/image-douglas-hurley.png";
import crewImg4 from "../../assets/crew/image-anousheh-ansari.png";
import crewImg2 from "../../assets/crew/image-mark-shuttleworth.png";
import crewImg3 from "../../assets/crew/image-victor-glover.png";

const Crew = () => {
  const [crewone, setCrewone] = useState(true);
  const [crewtwo, setCrewtwo] = useState(false);
  const [crewthree, setCrewthree] = useState(false);
  const [crewfour, setCrewfour] = useState(false);

  const [activecrewone, setActivecrewone] = useState(true);
  const [activecrewtwo, setActivecrewtwo] = useState(false);
  const [activecrewthree, setActivecrewthree] = useState(false);
  const [activecrewfour, setActivecrewfour] = useState(false);

  const handleCrewone = () => {
    setCrewone(true);
    setCrewtwo(false);
    setCrewthree(false);
    setCrewfour(false);

    setActivecrewone(true);
    setActivecrewtwo(false);
    setActivecrewthree(false);
    setActivecrewfour(false);
  };

  const handleCrewtwo = () => {
    setCrewone(false);
    setCrewtwo(true);
    setCrewthree(false);
    setCrewfour(false);

    setActivecrewone(false);
    setActivecrewtwo(true);
    setActivecrewthree(false);
    setActivecrewfour(false);
  };
  const handleCrewthree = () => {
    setCrewone(false);
    setCrewtwo(false);
    setCrewthree(true);
    setCrewfour(false);

    setActivecrewone(false);
    setActivecrewtwo(false);
    setActivecrewthree(true);
    setActivecrewfour(false);
  };

  const handleCrewfour = () => {
    setCrewone(false);
    setCrewtwo(false);
    setCrewthree(false);
    setCrewfour(true);

    setActivecrewone(false);
    setActivecrewtwo(false);
    setActivecrewthree(false);
    setActivecrewfour(true);
  };

  return (
    <div className="space__crew section__padding">
      <h5 className="space__crew-heading">
        <span>02</span>Meet Your Crew
      </h5>

      <div className="space__crew-container">
        <div className="space__crew-container-contentA">
          {crewone ? (
            <>
              <h2>
                <span>COMMANDER</span> <br /> Douglas Hurley
              </h2>
              <p>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </>
          ) : null}

          {crewtwo ? (
            <>
              <h2>
                <span>Mission Specialist</span> <br /> Mark Shuttleworth
              </h2>
              <p>
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </>
          ) : null}

          {crewthree ? (
            <>
              <h2>
                <span>Pilot</span> <br /> Victor Glover
              </h2>
              <p>
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
              </p>
            </>
          ) : null}

          {crewfour ? (
            <>
              <h2>
                <span>Flight Engineer</span> <br /> Anousheh Ansari
              </h2>
              <p>
                Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.
              </p>
            </>
          ) : null}
          <ul>
            <li
              onClick={handleCrewone}
              className={activecrewone ? "active" : ""}
            ></li>
            <li
              onClick={handleCrewtwo}
              className={activecrewtwo ? "active" : ""}
            ></li>
            <li
              onClick={handleCrewthree}
              className={activecrewthree ? "active" : ""}
            ></li>
            <li
              onClick={handleCrewfour}
              className={activecrewfour ? "active" : ""}
            ></li>
          </ul>
        </div>
        <div className="space__crew-container-contentB">
          {crewone ? <img src={crewImg} alt="douglas-hurley" /> : null}
          {crewtwo ? <img src={crewImg2} alt="douglas-hurley" /> : null}
          {crewthree ? <img src={crewImg3} alt="douglas-hurley" /> : null}
          {crewfour ? <img src={crewImg4} alt="douglas-hurley" /> : null}
        </div>
      </div>
    </div>
  );
};

export default Crew;
