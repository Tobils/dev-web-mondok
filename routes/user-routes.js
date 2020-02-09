const express = require('express');
const router = express.Router();
const controller = require('../controller/user-controller');
const auth = require('../controller/auth');

router.get('/', controller.getLogin);
router.post('/login', auth.isUserAuthorized, controller.postLogin);
router.get('/admin-pages/data', auth.isTokenAuthorized, controller.getData);
router.get('/admin-pages/edit', auth.isTokenAuthorized, controller.getEdit);
router.get('/admin-pages/support', auth.isTokenAuthorized, controller.getSupport);
router.get('/logout', auth.isLogOut, controller.getLogOut)
router.get('/table', (req, res, next) => {
    res.render('table');
});
router.post('/api/data-baru', (req, res, next) => {
    var pic = req.pic;
    console.log(pic);
    res.render('admin-pages-edit', {
        pageTitle: "Edit",
        userName: "suhada",
        hover: true
    });
});

module.exports = router;