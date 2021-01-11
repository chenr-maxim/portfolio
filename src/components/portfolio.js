import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import portfolioStyles from "../../public/styles/portfolio.module.css"
import profilePic from "../../public/static/images/profile_pic.png"
import resume from "../../public/static/Resume-10_25_2019.pdf"

export default function portfolio() {
  return (
    <>
    <div className={portfolioStyles.profileImg}>
      <img
        src={profilePic}
        alt="profile"
      >
      </img>
    </div>
    <div id="introText" className={portfolioStyles.textContainer}>
      <div className={portfolioStyles.text}> 
        <div className={portfolioStyles.name}>  Maxim Chen </div>
        <div style={{padding: '25px 0 0 0'}}>
          Software Engineer with experience in UI/UX design
        </div>
        <div style={{padding: '25px 0 0 0'}}>
          Based out of the San Francisco Bay Area, with a passion for anything design, photography, and music.
        </div> 

        <div className={portfolioStyles.socialLinks}>
          <a
            style={{padding: '25px 0 25px 0', textDecoration: 'underline'}} 
            href={resume} >
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
          <a 
            // style={{textDecoration: 'none'}} 
            href={'https://www.instagram.com/m520.n/'}>
            Instagram
          </a>
        </div>
        <div id="projects">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit ornare convallis. Praesent sollicitudin, nisi ac placerat porttitor, ex massa aliquam augue, sed laoreet enim diam at urna. Suspendisse sagittis enim a gravida vulputate. Donec a erat ac lorem ullamcorper molestie. Maecenas et tincidunt purus. Donec vitae nisl porta, commodo ligula sed, sollicitudin tortor. Nulla facilisi. Nullam varius ipsum sed sem porttitor, sit amet convallis ligula dignissim.
            Pellentesque aliquet massa vel elit gravida, eget mollis nunc suscipit. Phasellus pellentesque libero at mi ultrices porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In turpis nibh, lobortis sit amet lectus ultricies, dapibus facilisis urna. Maecenas ac quam tempus, ornare eros sed, interdum sapien. Nullam laoreet egestas nulla, non sodales eros suscipit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor nisi lorem, sit amet commodo tellus dictum tristique.
            Cras eu lectus a sapien dapibus dictum a nec libero. Donec gravida non est eu tincidunt. Nam auctor diam et mauris pretium, in lacinia tellus hendrerit. Mauris eleifend bibendum sem, in bibendum ante condimentum eu. Morbi vel arcu convallis ante porta faucibus et tincidunt mi. Phasellus vitae mauris fermentum, ullamcorper ligula nec, porttitor metus. Integer nec volutpat nibh. Etiam sed lorem sed justo posuere volutpat in fermentum elit. Phasellus finibus velit eget aliquet vulputate. Nam hendrerit bibendum tortor, vel vehicula mauris tristique a. Ut mollis neque scelerisque, viverra ipsum quis, gravida felis. Aliquam vel sodales lacus, posuere placerat lorem. Fusce rutrum ultrices arcu, et hendrerit eros tincidunt eleifend. Integer sed lacinia dolor, eu tincidunt enim. Cras ut leo nisl.
            Sed molestie velit eleifend varius volutpat. Donec sagittis tortor in justo vulputate pulvinar. Cras turpis turpis, posuere nec convallis non, ultrices eu odio. Pellentesque et dapibus nibh, feugiat dictum justo. Phasellus a venenatis dolor. Aenean tincidunt ac nibh at maximus. Vivamus magna lorem, laoreet at vestibulum sit amet, eleifend quis sapien. Mauris consectetur volutpat ligula, eu semper dui ornare ac. Vivamus purus felis, dictum vel pulvinar et, maximus porttitor leo. Nullam sit amet arcu maximus, molestie velit sit amet, convallis sem. Curabitur blandit ornare eros, id placerat nibh iaculis ac. Suspendisse eget placerat sapien. Nullam cursus vestibulum mollis. Duis ut enim non ante porta euismod in vel libero. Quisque mi tortor, luctus ut varius vitae, consectetur vel justo. Aliquam posuere eleifend justo, nec mattis ante tincidunt at.
            Nulla dictum eros vel est lacinia vehicula. Donec at lacinia nibh, et placerat felis. Maecenas pulvinar felis eget dui efficitur fermentum. Aenean fermentum placerat justo feugiat sagittis. Duis ipsum quam, molestie et viverra non, luctus ut enim. Aenean pharetra molestie ipsum sed maximus. Maecenas egestas, metus bibendum facilisis mattis, orci tortor placerat justo, quis tincidunt massa nibh et mauris. Vestibulum maximus quam quis consequat finibus.
          </div>
          <br/>
          <div id="temp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit ornare convallis. Praesent sollicitudin, nisi ac placerat porttitor, ex massa aliquam augue, sed laoreet enim diam at urna. Suspendisse sagittis enim a gravida vulputate. Donec a erat ac lorem ullamcorper molestie. Maecenas et tincidunt purus. Donec vitae nisl porta, commodo ligula sed, sollicitudin tortor. Nulla facilisi. Nullam varius ipsum sed sem porttitor, sit amet convallis ligula dignissim.
            Pellentesque aliquet massa vel elit gravida, eget mollis nunc suscipit. Phasellus pellentesque libero at mi ultrices porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In turpis nibh, lobortis sit amet lectus ultricies, dapibus facilisis urna. Maecenas ac quam tempus, ornare eros sed, interdum sapien. Nullam laoreet egestas nulla, non sodales eros suscipit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor nisi lorem, sit amet commodo tellus dictum tristique.
            Cras eu lectus a sapien dapibus dictum a nec libero. Donec gravida non est eu tincidunt. Nam auctor diam et mauris pretium, in lacinia tellus hendrerit. Mauris eleifend bibendum sem, in bibendum ante condimentum eu. Morbi vel arcu convallis ante porta faucibus et tincidunt mi. Phasellus vitae mauris fermentum, ullamcorper ligula nec, porttitor metus. Integer nec volutpat nibh. Etiam sed lorem sed justo posuere volutpat in fermentum elit. Phasellus finibus velit eget aliquet vulputate. Nam hendrerit bibendum tortor, vel vehicula mauris tristique a. Ut mollis neque scelerisque, viverra ipsum quis, gravida felis. Aliquam vel sodales lacus, posuere placerat lorem. Fusce rutrum ultrices arcu, et hendrerit eros tincidunt eleifend. Integer sed lacinia dolor, eu tincidunt enim. Cras ut leo nisl.
            Sed molestie velit eleifend varius volutpat. Donec sagittis tortor in justo vulputate pulvinar. Cras turpis turpis, posuere nec convallis non, ultrices eu odio. Pellentesque et dapibus nibh, feugiat dictum justo. Phasellus a venenatis dolor. Aenean tincidunt ac nibh at maximus. Vivamus magna lorem, laoreet at vestibulum sit amet, eleifend quis sapien. Mauris consectetur volutpat ligula, eu semper dui ornare ac. Vivamus purus felis, dictum vel pulvinar et, maximus porttitor leo. Nullam sit amet arcu maximus, molestie velit sit amet, convallis sem. Curabitur blandit ornare eros, id placerat nibh iaculis ac. Suspendisse eget placerat sapien. Nullam cursus vestibulum mollis. Duis ut enim non ante porta euismod in vel libero. Quisque mi tortor, luctus ut varius vitae, consectetur vel justo. Aliquam posuere eleifend justo, nec mattis ante tincidunt at.
            Nulla dictum eros vel est lacinia vehicula. Donec at lacinia nibh, et placerat felis. Maecenas pulvinar felis eget dui efficitur fermentum. Aenean fermentum placerat justo feugiat sagittis. Duis ipsum quam, molestie et viverra non, luctus ut enim. Aenean pharetra molestie ipsum sed maximus. Maecenas egestas, metus bibendum facilisis mattis, orci tortor placerat justo, quis tincidunt massa nibh et mauris. Vestibulum maximus quam quis consequat finibus.
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
    </div>
    <div id="temp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit ornare convallis. Praesent sollicitudin, nisi ac placerat porttitor, ex massa aliquam augue, sed laoreet enim diam at urna. Suspendisse sagittis enim a gravida vulputate. Donec a erat ac lorem ullamcorper molestie. Maecenas et tincidunt purus. Donec vitae nisl porta, commodo ligula sed, sollicitudin tortor. Nulla facilisi. Nullam varius ipsum sed sem porttitor, sit amet convallis ligula dignissim.
        Pellentesque aliquet massa vel elit gravida, eget mollis nunc suscipit. Phasellus pellentesque libero at mi ultrices porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In turpis nibh, lobortis sit amet lectus ultricies, dapibus facilisis urna. Maecenas ac quam tempus, ornare eros sed, interdum sapien. Nullam laoreet egestas nulla, non sodales eros suscipit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor nisi lorem, sit amet commodo tellus dictum tristique.
        Cras eu lectus a sapien dapibus dictum a nec libero. Donec gravida non est eu tincidunt. Nam auctor diam et mauris pretium, in lacinia tellus hendrerit. Mauris eleifend bibendum sem, in bibendum ante condimentum eu. Morbi vel arcu convallis ante porta faucibus et tincidunt mi. Phasellus vitae mauris fermentum, ullamcorper ligula nec, porttitor metus. Integer nec volutpat nibh. Etiam sed lorem sed justo posuere volutpat in fermentum elit. Phasellus finibus velit eget aliquet vulputate. Nam hendrerit bibendum tortor, vel vehicula mauris tristique a. Ut mollis neque scelerisque, viverra ipsum quis, gravida felis. Aliquam vel sodales lacus, posuere placerat lorem. Fusce rutrum ultrices arcu, et hendrerit eros tincidunt eleifend. Integer sed lacinia dolor, eu tincidunt enim. Cras ut leo nisl.
        Sed molestie velit eleifend varius volutpat. Donec sagittis tortor in justo vulputate pulvinar. Cras turpis turpis, posuere nec convallis non, ultrices eu odio. Pellentesque et dapibus nibh, feugiat dictum justo. Phasellus a venenatis dolor. Aenean tincidunt ac nibh at maximus. Vivamus magna lorem, laoreet at vestibulum sit amet, eleifend quis sapien. Mauris consectetur volutpat ligula, eu semper dui ornare ac. Vivamus purus felis, dictum vel pulvinar et, maximus porttitor leo. Nullam sit amet arcu maximus, molestie velit sit amet, convallis sem. Curabitur blandit ornare eros, id placerat nibh iaculis ac. Suspendisse eget placerat sapien. Nullam cursus vestibulum mollis. Duis ut enim non ante porta euismod in vel libero. Quisque mi tortor, luctus ut varius vitae, consectetur vel justo. Aliquam posuere eleifend justo, nec mattis ante tincidunt at.
        Nulla dictum eros vel est lacinia vehicula. Donec at lacinia nibh, et placerat felis. Maecenas pulvinar felis eget dui efficitur fermentum. Aenean fermentum placerat justo feugiat sagittis. Duis ipsum quam, molestie et viverra non, luctus ut enim. Aenean pharetra molestie ipsum sed maximus. Maecenas egestas, metus bibendum facilisis mattis, orci tortor placerat justo, quis tincidunt massa nibh et mauris. Vestibulum maximus quam quis consequat finibus.
      </div>
    </>
  )
}