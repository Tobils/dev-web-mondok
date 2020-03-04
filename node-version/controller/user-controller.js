const cookiesExpiredSeconds = 300;
var db_select = require('../model/db_select');


exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: "Login",
        contentTitle: "Admin Panel"
    });
}


exports.postLogin = (req, res, next) => {
    const token = req.token;
    res.cookie('token', token, { httpOnly: true, maxAge: cookiesExpiredSeconds * 1000 });
    db_select.dbSelect(cb => {
        let page_data = [];
        for (var i = 0; i < 5; i++) {
            page_data[i] = i + 1;
        }
        res.render('admin-pages-data', {
            pageTitle: "Data",
            userName: req.username,
            data: "active",
            edit: "",
            support: "",
            dokumen: cb,
            count: page_data
        });
    });
}


exports.getLogOut = (req, res, next) => {
    const token = req.token;
    console.log("token saat keluar : ", token);
    res.cookie('token', token, { httpOnly: true, maxAge: Date.now() }); // destroy cookies
    res.render('login', {
        pageTitle: "Login",
        contentTitle: "Selamat Datang"
    });
}


exports.getEdit = (req, res, next) => {
    res.render('admin-pages-edit', {
        pageTitle: "Edit",
        userName: req.username,
        data: "",
        edit: "active",
        support: "",
    });
}


exports.getSupport = (req, res, next) => {
    res.render('admin-pages-support', {
        pageTitle: "Support",
        userName: req.username,
        data: "",
        edit: "",
        support: "active",
    });
}