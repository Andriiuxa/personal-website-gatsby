import React from "react"
import pic01 from "../images/me.jpeg"

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
      <img src={pic01} alt="" />
    </span>
    <p>
      Hi there! This is me. Just another 23 year old kid that is chasing his
      dreams.
    </p>
    <p>
      Born in Lithuania in a Russian family one thing I've been always
      passionate about is new technologies (thanks to dad and grandpas for
      igniting me). To pursue my dream of being able to constantly travel the
      world and explore new places, cultures, people and technologies while not
      running out of money, becoming an expert in my field of knowledge and also
      enjoying what I do. I've decided to leave my home and family and come to
      United Kingdom to study at one of the best Engineering Faculties in the
      country at Coventry University. After three years I was standing outside
      the university buildings holding my degree in Computer Science and
      thinking "what's now?", "what's next?".
    </p>
    <p>
      So at the moment I am focused on expanding my knowledge in React.js,
      React-Native.js, Node.js, Gatsby.js, Firebase, Microservices, Serverless
      architecture, etc... By working on my own projects, freelancing, working
      at a full-time job, so that one day I can build that next "million dollar"
      app, retire hapily and travel the world for the rest of my life.
    </p>
    <p>
      Yes, I know you think I am very naive, but don't worry, in a few years you
      will see me on TV talking about how everything is possible if you just
      have a dream and follow it :)
    </p>
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    />
  </article>
)

export default About
