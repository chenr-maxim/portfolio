import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import projectStyles from "../../static/styles/projects.module.css"
import portfolioStyles from "../../static/styles/portfolio.module.css"
import socialtree_art from "../../static/images/projects/socialtree/socialtree_project.png"

function importAll(r) {
  return r.keys().map(r);
}

const coffeeNoteImages = importAll(require.context('../../static/images/projects/coffeenote', false,  /\.(png|jpe?g|svg)$/));
const notedImages = importAll(require.context('../../static/images/projects/noted', false,  /\.(png|jpe?g|svg)$/));

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      coffeeNoteImages: [
        ...coffeeNoteImages
      ],
      notedImages: [
        ...notedImages
      ]
    };
  }

  switchImage() {
    if(this.state.currentImage < this.state.coffeeNoteImages.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 3000);
  }

  render() {
    return (
      <>
        <div className={projectStyles.projectsContainer} id="projects">
          <Container style={{padding: '0 0 0 0'}}>
            <Row>
              <Col style={{padding: '0 0 0 0'}} lg={10}>
                <div className={projectStyles.slideshowContainer}>
                  <img
                    className={projectStyles.imgSize}
                    src={this.state.coffeeNoteImages[this.state.currentImage]}
                    alt="project images"
                  />
                </div>
              </Col>
              <Col lg={2}>
                <div className={projectStyles.projectText}> 
                  coffee note 
                  <p className={projectStyles.projectText}>
                    coffee note is your personal coffee brewing log and companion. 
                    This project let's you keep track of the coffee you buy, logging
                    each of your daily brew methods, ratios and personal notes. And connect the perfect
                    song for your coffee.
                    <br/>
                    <br/>
                    coffee note is built with a react front-end and node.js/mongodb backend.
                    On behance there is an in-depth write-up of the design decisions, a prototype and all the app screen interfaces.  
                    coffee note is also hosted on heroku. Note: coffee note is built for mobile applications, either 
                    resize the browser for mobile screens, or view on mobile.
                    <br/>
                    <br/>
                    Check it out <a style={{fontWeight: 'bold'}} className={portfolioStyles.socialLinks} 
                    href={'https://www.behance.net/gallery/109689077/coffee-note-coffee-companion'}> here </a>
                    <br/>
                    <br/>
                    <a style={{fontWeight: 'bold'}} className={portfolioStyles.socialLinks} 
                    href={'https://coffeenote.herokuapp.com/'}> demo </a>
                    <br/>
                    <br/>
                    <a style={{fontWeight: 'bold'}} className={portfolioStyles.socialLinks} 
                    href={'https://github.com/nateychau/coffee_notes'}> github code </a>
                  </p>
                </div>
              </Col>
            </Row>
            <hr className={projectStyles.hr}/>
            <Row>
              <Col style={{padding: '0 0 0 0'}} lg={10}>
                <div className={projectStyles.slideshowContainer}>
                <img
                  className={projectStyles.imgSize}
                  src={this.state.notedImages[this.state.currentImage]}
                  alt="project images"
                />
              </div>
              </Col>
              <Col lg={2}>
                <div className={projectStyles.projectText}> 
                  noted
                  <p className={projectStyles.projectText}>
                    noted is a simple and easy to use note-taking application, that's designed in mind
                    to write down any ideas, thoughts and notes. noted has a simple to navigate folder
                    and note interface and experience. With easy to pick up features like categorizing, sharing,
                    saving, moving and deleting your notes. 
                    <br/>
                    <br/>
                    noted desktop version currently is a work in progress, however, I've fleshed out
                    the mobile designs. I have all the mobile app screens and a prototype on behance.
                    <br/>
                    <br/>
                    Check it out <a style={{fontWeight: 'bold'}} className={portfolioStyles.socialLinks} 
                    href={'https://www.behance.net/gallery/106911087/Noted-A-notetaking-app'}> here </a>
                    <br/>
                    <br/>
                    <a style={{fontWeight: 'bold'}} className={portfolioStyles.socialLinks} 
                    href={'https://medium.com/@chenr.maxim/noted-aa1bb7ec99a0'}> Design decisions write-up  </a> 
                    <br />
                    <br />
                    <a style={{fontWeight: 'bold'}} className={portfolioStyles.socialLinks} 
                    href={'https://github.com/chenr-maxim/notetaking_app'}> github code </a>
                  </p>
                </div>
              </Col>
            </Row>
            <hr className={projectStyles.hr}/>
            <Row>
              <Col style={{padding: '0 0 0 0'}} lg={10}>
                <img
                  className={projectStyles.socialTreeImage}
                  alt="social_tree_art"
                  src={socialtree_art}
                >
                </img>
              </Col>
              <Col lg={2}>
              <div className={projectStyles.projectText}> 
                  socialtree
                  <p className={projectStyles.projectText}>
                    socialtree is a redesign of the modern smartlinks that are appearing all over the web.
                    Targeted towards people who want to share their socials in a concise and clean way. 
                    Designed in mind especially for artists/bands release new music, as clear way to share where to
                    find all their socials and how to check it out what's new.
                    <br/>
                    <br/>
                    socialtree currently is a design layout proof of concept. In my behance portfolio,
                    I talk more about the layout and there's an included prototype.  
                    <br/>
                    <br/>
                    Check it out <a style={{fontWeight: 'bold'}} className={portfolioStyles.socialLinks} 
                    href={'https://www.behance.net/gallery/107450713/social-tree'}> here </a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )  
  }
}