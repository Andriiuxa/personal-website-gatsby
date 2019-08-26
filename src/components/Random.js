import React from "react"
import Instagram from "./Instagram"
import Youtube from "./Youtube"
import challenger from "../images/challenger.png"
import setup from "../images/setup.jpg"
import banned from "../images/banned.jpg"

const Random = props => (
  <article
    id="random"
    className={`${props.article === "random" ? "active" : ""} ${
      props.articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <div id="top-bar">
      <h2 className="major">Random</h2>
    </div>
    <p>
      Oh yeah, besides being a developer I really like to Travel, do
      Photography, Cinematography and Gaming.
    </p>
    <h4>
      Here are my latest{" "}
      <a href="https://www.instagram.com/andr1uxaa/">Instagram</a> posts.
    </h4>
    <Instagram />
    <h4>
      And my latest{" "}
      <a href="https://www.youtube.com/channel/UCgr_qabMg8VcZKQHhFjj6KA">
        Youtube
      </a>{" "}
      video
    </h4>
    <Youtube />
    <h3 style={{ marginTop: 10 }}>
      <ul>
        <li>
          <h5>
            My{" "}
            <a href="https://steamprofile.com/sig/76561198168712786/">Steam</a>{" "}
            (CSGO - Highest Global Elite, PUBG)
          </h5>
        </li>
        <li>
          <h5>
            Battle.net Tag (Overwatch - Highest Diamond, SC2 - Highest Platinum)
            - Andriuxa#2954
          </h5>
        </li>
        <li>
          <h5>Origin (BF3, BF4, BF1, Apex Legends) - BestKarthus</h5>
        </li>
        <li>
          <h5>LOL EUW (Highest Master) - RuskiHacker</h5>
        </li>
        <li>
          <h5>LOL RU (Highest Challenger top 50) - tempname57864</h5>
        </li>
        <img width="100%" src={banned} />
        <h5>LOL Accounts Permabanned: 6</h5>
      </ul>
    </h3>
    <img width="100%" src={challenger} />
    <h3>Oh yeah, and this is my dream setup.</h3>
    <img width="100%" src={setup} />
    <ul>
      <li>
        <h5>Sony A7 iii + Tamron 28-75 mm F2.8</h5>
      </li>
      <li>
        <h5>Joby Tripod for long exposures</h5>
      </li>
      <li>
        <h5>LG 24MP88HV - 24 inch IPS Full HD 60Hz Monitor</h5>
      </li>
      <li>
        <h5>
          Razer Blade 15 - 144Hz Screen, i7 8750H, GTX 1070 Max-Q, 16GB 2666Hz
          Dual Channel Ram, 1TB Samsung 970 Evo SSD
        </h5>
      </li>
      <li>
        <h5>Drevo Tyrfing V2 Mechanical Keyboard, Brown Switches</h5>
      </li>
      <li>
        <h5>Razer DeathAdder Elite</h5>
      </li>
      <li>
        <h5>Steelseries QCK Small mousepad</h5>
      </li>
      <li>
        <h5>Sony WH1000XM3 Headphones</h5>
      </li>
    </ul>
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  </article>
)

export default Random
