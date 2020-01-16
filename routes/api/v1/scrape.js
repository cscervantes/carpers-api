const extract = require('../../../extractor')

module.exports = async (router) => {

    router.get('/scrape', (req, res, next) => {
        try{
            // console.log(req)
            res.status(200).send(req.originalUrl)
        }catch(e){
            console.log(e)
            next(e)
        }
    });

    router.post('/scrape/validate', await extract)
}