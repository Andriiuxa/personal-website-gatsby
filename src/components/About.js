import React from "react"
import pic01 from "../images/pic01.jpg"

const About = props => (
  <article
    id="About"
    className={`${props.article === "about" ? "active" : ""} ${
      props.articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <h2 className="major">About</h2>
    <span className="image main">
      <img src={pic01} alt="" />
    </span>
    <p>TEMP</p>
    <p>TEMP</p>
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  </article>
)

export default About
