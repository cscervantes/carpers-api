const { validate } = require('../../carpers/lambdas')
const createError = require('http-errors')
const Scrape = {}

Scrape.Home = async (req, res, next) => {
    try{
        res.status(200).send(req.originalUrl)
    }catch(e){
        next(createError(e))
    }
}

Scrape.Validate = async (req, res, next) => {
    try{
        // console.log(req.body)
        let urls = await validate(req.body.url, req.body.filters)
        res.status(200).send(urls)
    }catch(e){
        next(createError(e))
    }
}

module.exports = Scrape