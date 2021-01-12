import React from "react"
import projectStyles from "../../public/styles/projects.module.css"
import coffee_note_art from "../../public/static/images/coffee_note_project.png"
import socialtree_art from "../../public/static/images/socialtree_project.png"
import noted_art from "../../public/static/images/noted_project.jpg"

export default function Projects() {
  return (
    <div className={projectStyles.container}>
      <div 
        alt="coffee_note_art"
        id="projects"
        >
        <h4> Projects </h4>
        <img
          alt="coffee_note_art"
          style={{width: '85%'}}
          src={coffee_note_art}
        >
        </img>
        <img
          alt="noted_project_art"
          style={{width: '90%', paddingLeft:'5vw'}}
          src={noted_art}
        >
        </img>
        <img
          alt="social_tree_art"
          style={{width: '95%', paddingLeft: '25vw'}}
          src={socialtree_art}
        >
        </img>
      </div>
    </div>
  )
}