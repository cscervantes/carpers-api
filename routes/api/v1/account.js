const { ACCOUNT_CONTROLLER } = require('../../../controller')

module.exports = async (router) => {
    router.get('/accounts', await ACCOUNT_CONTROLLER.Lists);
    router.post('/accounts/login', await ACCOUNT_CONTROLLER.Login);
}