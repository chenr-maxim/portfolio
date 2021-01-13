import React from "react"
import portfolioStyles from "../../public/styles/portfolio.module.css"
import profilePic from "../../public/static/images/profile_pic.png"
import resume from "../../public/static/Resume-10_25_2019.pdf"

export default function Portfolio() {
  return (
    <>
    <div className={portfolioStyles.profileImg}>
      <img
        src={profilePic}
        alt="profile"
      >
      </img>
    </div>
    <div id="introText" className={portfolioStyles.container}>
      <div className={portfolioStyles.textContainer}> 
        <div className={portfolioStyles.name}>  Maxim Chen </div>
        <div className={portfolioStyles.text}>
          <div> Software Engineer with experience in interaction design and ui/ux. </div>
          <div> Based out of the San Francisco Bay Area, driven with a passion for anything design, photography, and music. </div> 
        </div>
        <div className={portfolioStyles.socialLinks}>
          <a
            style={{margin: '25px 0 25px 0', paddingTop:'0px'}} 
            href={resume}>
            Resume
          </a>
          <h2 style={{fontWeight:'bold'}}> Connect with me </h2>
          <a 
            // style={{textDecoration: 'none'}}
            href={'https://www.behance.net/chenmaxim/'}>
            Behance
          </a>
          <br/>
          <a
            // style={{textDecoration: 'none'}} 
            href={'https://www.linkedin.com/in/maximrchen/'}>
            LinkedIn
          </a>
          <br/>
          <a
            // style={{textDecoration: 'none'}}  
            href={'https://github.com/chenr-maxim'}>
            Github
          </a>
          <br/>
          {/* <a 
            // style={{textDecoration: 'none'}} 
            href={'https://www.instagram.com/m520.n/'}>
            Instagram
          </a> */}
          <a 
            // style={{textDecoration: 'none'}} 
            href={'mailto:chenr.maxim@gmail.com'}>
            Email
          </a>
        </div>
      </div>
    </div>
    </>
  )
}