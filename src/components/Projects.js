import {Container, Nav, Tab, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import colorSharpRight from "../assets/img/color-sharp2.png"
import project1 from "../assets/img/project-img1.png"
import project2 from "../assets/img/project-img2.png"
import project3 from "../assets/img/project-img3.png"
import {nanoid} from "nanoid"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Projects() {

  const projectsData = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: project1,
      id: nanoid()
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: project2,
      id: nanoid()
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: project3,
      id: nanoid()
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: project3,
      id: nanoid()
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: project1,
      id: nanoid()
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: project2,
      id: nanoid()
    },
  ];
  
  return (
    <section id="projects" className="projects">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => 
            <div className={isVisible ? "section-head animate__animated animate__bounce" : "section-head"}>
              <h2>Projects</h2>
              <p>
                lorem lorem loremloremlorem loremlorem lorem lorem loremlorem lorem loremloremlorem lorem lorem lorem lorem loremloremloremv lorem lorem
                lorem lorem loremloremlorem loremlorem lorem lorem loremlorem lorem loremloremlorem lorem lorem lorem lorem loremloremloremv lorem lorem
                lorem lorem loremloremlorem loremlorem
              </p>
            </div>
          }
        </TrackVisibility>
        <Tab.Container defaultActiveKey="firstTab">
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="firstTab">Tab One</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="secondTab">Tab Two</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="thirdTab">Tab Three</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="firstTab">
              <Row>
                {
                  projectsData.map(project => {
                    return (
                      <Col key={project.id} sm={12} md={6} xl={4}>
                        <div className="proj-imgbox">
                          <img src={project.imgUrl} alt="project"/>
                          <div className="prject-desc">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="secondTab">some Content For second tab</Tab.Pane>
            <Tab.Pane eventKey="thirdTab">some Content For third tab</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      <img src={colorSharpRight} className="bg-image-right" alt="colorSharp"/>
    </section>
  )
}