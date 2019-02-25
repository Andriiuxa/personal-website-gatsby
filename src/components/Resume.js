import React from "react"
import cv from "../images/cv.jpg"

const openLink = () => {
  return window.open(
    "https://drive.google.com/open?id=1XiT_k0ApfrS_HguFrEsLLmnjcmxxwK6b"
  )
}

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
      <button onClick={openLink}>Download</button>
    </div>
    <img id="cv" src={cv} alt="cv" />
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  </article>
)

export default Resume
