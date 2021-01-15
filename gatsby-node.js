const fetch = require('node-fetch');

const MEDIA_NODE_TYPE = `MEDIA`
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${process.env.ACCESS_TOKEN}`;

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions
  const userData = await fetch(url, {method: 'GET'})
    .then((res) => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
  
  userData.data.forEach(media => {
    createNode({
      ...media,
      id: createNodeId(media.id),
      parent: null,
      children: [],
      internal: {
        type: MEDIA_NODE_TYPE,
        contentDigest: createContentDigest(userData),
      }
    })
  })

  return
}