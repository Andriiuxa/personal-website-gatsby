import React from "react"

const Contact = props => (
  <article
    id="contact"
    className={`${props.article === "contact" ? "active" : ""} ${
      props.articleTimeout ? "timeout" : ""
    }`}
    style={{ display: "none" }}
  >
    <h2 className="major">Contact</h2>
    <form method="post" action="https://formspree.io/andriuska96@gmail.com">
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Reset" />
        </li>
      </ul>
    </form>
    <ul className="icons">
      <li>
        <a
          href="https://www.facebook.com/andrej.gorovoj"
          className="icon fa-facebook"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/andrej-gorovoj-a48798130"
          className="icon fa-linkedin"
        >
          <span className="label">Linkedin</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/Andriiuxa" className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/andr1uxaa/"
          className="icon fa-instagram"
        >
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCgr_qabMg8VcZKQHhFjj6KA/featured"
          className="icon fa-youtube"
        >
          <span className="label">Youtube</span>
        </a>
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

export default Contact
