const express = require('express');
const router = express.Router();
const controller = require('../controller/user-controller');
const auth = require('../controller/auth');
const data_controller = require('../controller/data-controller');

router.get('/', controller.getLogin);
router.post('/login', auth.isUserAuthorized, controller.postLogin);
router.get('/admin-pages/data', auth.isTokenAuthorized, data_controller.getData);
router.get('/admin-pages/data/:page', auth.isTokenAuthorized, data_controller.getDataPage);
router.get('/admin-pages/edit', auth.isTokenAuthorized, controller.getEdit);
router.get('/admin-pages/support', auth.isTokenAuthorized, controller.getSupport);
router.post('/api/data-baru', auth.isTokenAuthorized, data_controller.postData);
router.get('/logout', auth.isLogOut, controller.getLogOut)



router.get('/table', (req, res, next) => {
    res.render('./dev/table');
});

router.get('/page', (req, res, next) => {
    res.render('./dev/pagination');
});



module.exports = router;