import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="space__home section__padding" id="home">
      <div className="space__home-container">
        <div className="space__home-container_contentA">
          <h5>So, You Want To Travel To</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="space__home-container_contentB">
          <a href="/destination" className="space__home-container_contentB-btn">
            <button type="button">
              <p> EXPLORE</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
