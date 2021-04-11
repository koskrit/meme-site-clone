const got = require('got')

export default async (req, res) => {

    try {
        let id = req.query.id
        let {body:image} = await got(`https://img-9gag-fun.9cache.com/photo/${id}_700bwp.webp`)
  
      res.send(`<div><h1>this is the image</h1>
      <img src ="https://img-9gag-fun.9cache.com/photo/${id}_700bwp.webp"/>
      </div>`);
   } catch (error) {
      res.send(error.message);
   }
};
