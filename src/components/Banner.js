import {useState, useEffect} from "react"
import {Container, Row, Col} from "react-bootstrap"
import bannerImg from "../assets/img/header-img.svg"

export default function Banner() {

  let [text, setText] = useState("")
  let toRotate = ["Web Developer", "Web Designer"]
  let [loopNum, setLoopNum] = useState(0)
  let [isDeleting, setIsDeleting] = useState(false)
  let [delta, setDelta] = useState(300 - Math.random() * 100)
  let period = 2000

  useEffect(() => {

    let ticker = setInterval(() => {
      tick()
    }, delta)

    function tick() {
      let currentWordIndex = loopNum % toRotate.length
      let fullTxt = toRotate[currentWordIndex]
      let updatedText = isDeleting ? fullTxt.substring(0, text.length - 1) : fullTxt.substring(0, text.length + 1)
      setText(updatedText)
      if(isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
      if(!isDeleting && updatedText === fullTxt) {
        setIsDeleting(true)
        setDelta(period);
      }
      else if(isDeleting && updatedText === "") {
        setIsDeleting(false)
        setLoopNum(prevLoopNum => prevLoopNum + 1)
        setDelta(500);
      }
    }

    return () => {clearInterval(ticker)}
  }, [text])




  return (
    <main id="home" className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>Hi! I'm basel the <span className="wrap">{text}</span>
            </h1>
            <p>
              Weka is a collection of machine learning algorithms for data mining tasks. It contains tools for data preparation, classification, regression, clustering, association rules mining, and visualization.Found only on the islands of New Zealand, the Weka is a flightless bird with an inquisitive nature. The name is pronounced like this, and the bird sounds like this.
              Weka is open source software issued under the GNU General Public License.
            </p>
            <a href="#contact">Let's Connect <span><i className="fa-solid fa-arrow-right"></i></span></a>
          </Col>
          <Col md={6} xl={5} className="d-none d-md-block">
            <img src={bannerImg} alt="banner Img"/>
          </Col>
        </Row>
      </Container>
    </main>
  )
}