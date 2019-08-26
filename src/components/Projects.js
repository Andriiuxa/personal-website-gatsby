import React from "react"
import screen01 from "../images/android/screen01.jpeg"
import screen02 from "../images/smart-brain/smart-brain01.jpeg"
import screen03 from "../images/jobs-search/jobs-search01.jpeg"

const Work = props => (
  <article
    id="projects"
    className={`${props.article === "projects" ? "active" : ""} ${
      props.articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <h2 className="major">Projects</h2>
    <h4>
      Survival Toolkit - Java, Google Maps/Places API, Open Weather API.{" "}
      <a href="https://github.com/Andriiuxa/Survival-Toolkit">GITHUB URL.</a>
    </h4>
    <p>
      An Android Application that has been designed to help people survive if
      getting lost in the forest. The project has been done as part of my
      individual project at university. The app has not been published in Market
      Place yet, since it’s an unfinished product, however you can check its
      current state on GitHub.
    </p>
    <span className="image main">
      <img src={screen01} alt="" />
    </span>
    <h4>
      <a href="https://smart-brain-react.herokuapp.com/">Smart Brain</a> -
      React.js, Node.js, Express.js, PostreSQL, Clarifai API.{" "}
      <a href="https://github.com/Andriiuxa/Face-Recognition-App">
        GITHUB URL.
      </a>
    </h4>
    <p>
      The project has been done on my own just to have a taste of React
      framework mainlys. The idea of the application is to detect a face in the
      picture that it gets provided it, by using Clarifai face detection API.
      The login system has been implemented as well, that is communicating with
      a Node.js server with PostgreSQL database. There are many small features
      in this application which you just need to see by yourself.
      https://smart-brain-react.herokuapp.com/
    </p>
    <span className="image main">
      <img src={screen02} alt="" />
    </span>
    <h4>
      Jobs Search App - React-Native.js, Google Cloud Functions, Firebase, Expo
      API, Goole Maps API, Indeed Jobs API.{" "}
      <a href="https://github.com/Andriiuxa/React-Native/tree/master/job-search">
        GITHUB URL.
      </a>
    </h4>
    <p>
      Android and iOS application that was supposed to replicate a well known
      Tinder app, but for jobs. Probably my latest and greatest work yet. Login
      with your Facebook account, set your location, then the app will fetch the
      developer jobs around you from the Indeed Jobs API, create you a deck of
      jobs that you can swipe through , swipe left – dislike, swipe right –
      like, all of the jobs that have been liked will be saved in a special
      place. When you are done swiping, you can go through the jobs you have
      liked previously, read them in more detail and if you are 100% sure about
      your decision, you can click apply!
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
