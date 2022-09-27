import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.svg'

export default function NavBar() {

  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setscrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      window.scrollY >= 600 ? setscrolled(true) : setscrolled(false)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function onUpdateActiveLink(activeLink) {
    setActiveLink(activeLink)
  }

  return (
    <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active nav-link" : "nav-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active nav-link" : "nav-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active nav-link" : "nav-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <div className="navbar-text">
            <div className="social">
              <a href="https://www.facebook.com/basel.h.alsharif/" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/basel__sh" rel="noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/its.__.basel/" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <button><span>Let's Connect</span></button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}