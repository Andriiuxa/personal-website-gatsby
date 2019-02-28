import React from "react"
import screen01 from "../images/android/screen01.jpeg"
import screen02 from "../images/smart-brain/smart-brain01.jpeg"
import screen03 from "../images/jobs-search/jobs-search01.jpeg"

const Work = props => (
  <article
    id="work"
    className={`${props.article === "work" ? "active" : ""} ${
      props.articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <h2 className="major">Work</h2>
    <p>Survival Toolkit - Java, Google API, Open Weather API</p>
    <span className="image main">
      <img src={screen01} alt="" />
    </span>
    <p>Smart Brain - React.js, Node.js, Firebase</p>
    <span className="image main">
      <img src={screen02} alt="" />
    </span>
    <p>
      Jobs Search App - React-Native.js, Google Cloud Functions, Firebase, Expo
      API, Goole Maps API, Indeed Jobs API
    </p>
    <span className="image main">
      <img src={screen03} alt="" />
    </span>
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  </article>
)

export default Work
