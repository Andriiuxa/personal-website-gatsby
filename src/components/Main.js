import React from "react"
import PropTypes from "prop-types"
import Intro from "./Intro"
import Contact from "./Contact"
import About from "./About"
import Work from "./Work"

class Main extends React.Component {
  render = () => (
    <div
      ref={this.props.setWrapperRef}
      id="main"
      style={this.props.timeout ? { display: "flex" } : { display: "none" }}
    >
      <Intro {...this.props} />
      <Work {...this.props} />
      <About {...this.props} />
      <Contact {...this.props} />
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
