const NineGag = require("9gag");
const Scraper = NineGag.Scraper;
const Downloader = NineGag.Downloader;
const got = require("got");

async function memes() {
   try {
      let { body: posts } = await got("https://9gag.com/v1/featured-posts");

      return posts;
   } catch (err) {
      return err.message;
   }
}

export default async (req, res) => {
   let posts = await memes();

   res.json({ data: posts });
};
