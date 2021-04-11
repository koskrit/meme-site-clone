const got = require('got')


export default async (req,res)  => {
    try{
    let {body}= await got("https://9gag.com/v1/featured-posts")
    res.json({body})
    }
    catch(err){
        res.send(err.message)
    }

}