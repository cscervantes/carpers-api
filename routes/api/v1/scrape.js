const { SCRAPE_CONTROLLER } = require('../../../controller')

module.exports = async (router) => {

    router.get('/scrape', await SCRAPE_CONTROLLER.Home);

    router.post('/scrape/validate', await SCRAPE_CONTROLLER.Validate)
}