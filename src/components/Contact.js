import {useState} from "react"
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import contactImage from "../assets/img/contact-img.svg";

export default function Contact() {

  window.onscroll = () => {
    if(window.scrollY >= document.querySelector(".contact").offsetTop - 500) {
      document.querySelector(".contact img").classList.add("animate")
    }
  }

  let initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  }
  let [formData, setFormData] = useState(initialFormData)
  let [buttonText, setButtonText] = useState("Send")

  function onFormUpdate(event) {
    let {name, value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setButtonText("Sending...")
    // Send Form Data Here
    setButtonText("Send")
    setFormData(initialFormData)
  }

  return (
    <section className="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="d-none d-md-block text-center pe-3">
            <img src={contactImage} alt="Contact Us"/>
          </Col>
          <Col sm={12} md={6} className="ps-md-3">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={12} md={6} className="px-1 pb-2">
                  <input type="text" name="firstName" value={formData.firstName} placeholder="First Name" onChange={onFormUpdate} required/>
                </Col>
                <Col sm={12} md={6} className="px-1 pb-2">
                  <input type="text" name="lastName" value={formData.lastName} placeholder="Last Name" onChange={onFormUpdate} required/>
                </Col>
                <Col sm={12} md={6} className="px-1 pb-2">
                  <input type="email" name="email" value={formData.email} placeholder="Email Address" onChange={onFormUpdate} required/>
                </Col>
                <Col sm={12} md={6} className="px-1 pb-2">
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} placeholder="Phone Number" onChange={onFormUpdate} required/>
                </Col>
                <Col sm={12} className="px-1">
                  <textarea name="message" value={formData.message} placeholder="Message" onChange={onFormUpdate}/>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}