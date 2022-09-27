import {Container} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharpLeft from "../assets/img/color-sharp.png"
import {nanoid} from "nanoid"

export default function Skills() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const skillsData = [
    {
      id: nanoid(),
      url: meter1,
      title: "Web Development"
    },
    {
      id: nanoid(),
      url: meter2,
      title: "Brand Identity"
    },
    {
      id: nanoid(),
      url: meter3,
      title: "Logo Design"
    },
    {
      id: nanoid(),
      url: meter2,
      title: "Web Designer"
    }
  ];

  return (
    <section id="skills" className="skills">
      <Container>
        <div className="skills-container">
          <div className="section-head">
            <h2>Skills</h2>
            <p>lorem lorem loremloremlorem loremlorem lorem lorem loremlorem lorem loremloremlorem lorem lorem lorem lorem loremloremloremv lorem lorem</p>
          </div>
          <Carousel responsive={responsive} infinite={true}>
            {
              skillsData.map((skill) => {
                return (
                  <div key={skill.id} className="skill">
                    <img src={skill.url} alt="Meter"/>
                    <h4 className="title">{skill.title}</h4>
                  </div>
                )
              })
            }
          </Carousel> 
        </div>
      </Container>
      <img src={colorSharpLeft} className="bg-image-left" alt="colorSharp"/>
    </section>
  )
}