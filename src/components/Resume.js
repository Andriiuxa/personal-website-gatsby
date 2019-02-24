import React from "react"
import MyDocument from "./MyDocument"

const Resume = props => (
  <article
    id="resume"
    className={`${props.article === "resume" ? "active" : ""} ${
      props.articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <div id="top-bar">
      <h2 className="major">Resume</h2>
      <a href="../images/cv.pdf" download="Andrej Gorovoj CV">
        <button>Download</button>
      </a>
    </div>
    <MyDocument />
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  </article>
)

export default Resume
