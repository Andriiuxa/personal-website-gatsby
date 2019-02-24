import React from "react"
import PropTypes from "prop-types"
import About from "./About"
import Contact from "./Contact"
import Work from "./Work"
import Resume from "./Resume"

const Main = props => (
  <div
    ref={props.setWrapperRef}
    id="main"
    style={props.timeout ? { display: "flex" } : { display: "none" }}
  >
    <About {...props} />
    <Work {...props} />
    <Resume {...props} />
    <Contact {...props} />
  </div>
)

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
