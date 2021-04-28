import React from "react"
import pic01 from "../images/me.jpg"

const About = props => (
  <article
    id="about"
    className={`${props.article === "about" ? "active" : ""} ${
      props.articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <h2 className="major">About</h2>
    <span className="image main">
      <img src={pic01} alt="Portrait" />
    </span>
    <p>
      Hi there! This is me. My name is Andrej and I am just another 25 year old
      kid that is chasing his dreams.
    </p>
    <p>
      Currently I live in Birmingham, UK. However I have big plans to try and
      live in as many places as I can through my life.
    </p>
    <p>
      Apart from coding I love E-Sports, JDM, photography, cinematography,
      skateboarding, table tennis, billiard, badminton and just having a great
      time.
    </p>
    <p>Don't be shy and contact me for whatever reason you would like.</p>
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  </article>
)

export default About
