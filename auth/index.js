let jwt = require('jsonwebtoken')
var createError = require('http-errors');
module.exports = (req, res, next) => {
    const bearer = req.headers["authorization"]

    if(typeof bearer !== 'undefined'){
        const bearerToken = bearer.split(" ")[1]
        jwt.verify(bearerToken, 'carpers', (err, result)=>{
            if(err){
                next(createError(403))
            }else{
                next()
            }
        })

    }else{
        // res.sendStatus(401)
        next(createError(401))
    }
}