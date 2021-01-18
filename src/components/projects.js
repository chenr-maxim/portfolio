import React from "react"
import projectStyles from "../../static/styles/projects.module.css"
import coffee_note_art from "../../static/images/projects/coffeenote/coffee_note_project.png"
import socialtree_art from "../../static/images/projects/socialtree/socialtree_project.png"
import noted_art from "../../static/images/projects/noted/noted_project.jpg"

function importAll(r) {
  return r.keys().map(r);
}

// const coffeeNoteImages = importAll(require.context('../../static/images/projects/coffeenote', false,  /\.(png|jpe?g|svg)$/));
// const notedImages = importAll(require.context('../../static/images/projects/noted', false,  /\.(png|jpe?g|svg)$/));
// const socialtreeImages = importAll(require.context('../../static/images/projects/socialtree', false,  /\.(png|jpe?g|svg)$/));

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [

      ]
      // coffeeNoteImages: [
      //   ...coffeeNoteImages
      // ],
      // notedImages: [
      //   ...notedImages
      // ],
      // socialtreeImages: [
      //   ...socialtreeImages
      // ]
    };
  }

  switchImage() {
    if(this.state.currentImage < this.state.images.length - 1) {
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
    setInterval(this.switchImage, 5000);
  }

  render() {
    return (
      <>
        {/* <div className="slideshow-container">
          <img
            src={this.state.images[this.state.currentImage]}
            alt="project images"
          />
        </div> */}
        <div className={projectStyles.container} id="projects">
          <img
            className={projectStyles.imgSize}
            alt="coffee_note_art"
            // style={{width: '80%'}}
            src={coffee_note_art}
          >
          </img>
          <img
            className={projectStyles.imgSize}
            alt="noted_project_art"
            // style={{width: '80%', paddingLeft:'5vw'}}
            src={noted_art}
          >
          </img>
          <img
            className={projectStyles.imgSize}
            alt="social_tree_art"
            // style={{width: '95%', paddingLeft: '30vw'}}
            src={socialtree_art}
          >
          </img>
        </div>
      </>
    )  
  }
}