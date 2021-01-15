import React, { useState, useEffect } from "react"
import {Container, Row} from "react-bootstrap"
import photoItemStyles from "../../static/styles/photoitems.module.css"
import { graphql, useStaticQuery } from "gatsby";

const PhotoItems = () => {
  const mediaData = useStaticQuery(graphql`
  query {    
    allMedia {
      nodes {
        id
        caption
        media_url
        media_type
        permalink
      }
    }
  }`);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if(mediaData) {
      let images = [...mediaData.allMedia.nodes];
      images = images.filter((image) => {
        if(image.media_type !== "VIDEO" ) {
          return true;
        }
      });
      setImages(images);
    }
  }, [])
  return (
    <>
      <Container fluid style={{padding: '0 0 0 0'}}>
        <Row noGutters={true}>
          <div className={photoItemStyles.container}>
            {images.map((item, index) => (
              <div className={photoItemStyles.images} key={index}>
                <img
                  src={item.media_url}
                ></img>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default PhotoItems;