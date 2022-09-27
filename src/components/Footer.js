import {useState} from "react"
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.svg'

export default function Footer() {

  let [email, setEmail] = useState("")

  return (
    <footer>
      <Container>
        <div className="newsletter">
          <Row className="align-items-center">
            <Col sm={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter & Never miss latest updates</h3>
            </Col>
            <Col sm={12} md={6} xl={7}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="new-email">
                  <div className="input-wrapper">
                    <input type="email" name="newsletterEmail" value={email} placeholder="Email Address" onChange={e => setEmail(e.target.value)}/>
                  </div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
        <div className="footer-content">
          <Row className="align-items-center justify-content-between">
            <Col sm={6} className="text-center text-sm-start pb-4 pb-sm-0">
              <a href="https://google.com" className="navbar-brand">
                <img src={logo} alt="logo"/>
              </a>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
              <div className="social">
                <a href="https://www.facebook.com/basel.h.alsharif/" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/basel__sh" rel="noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/its.__.basel/" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              </div>
              <p>Copyright 2022, All Rights Reserved</p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}