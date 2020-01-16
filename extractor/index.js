const { validate } = require('../../carpers/lambdas')
module.exports = async (req, res, next) => {
    try{
        // console.log(req.body)
        let urls = await validate(req.body.url, req.body.filters)
        res.status(200).send(urls)
    }catch(e){
        console.log(e)
        next(e)
    }
}