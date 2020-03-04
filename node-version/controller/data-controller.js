var db_insert = require('../model/db_insert');
var db_select = require('../model/db_select');

exports.postData = ((req, res, next) => {
    var pic = req.body.pic;
    var no_odner = req.body.no_odner;
    var nama_dokumen = req.body.nama_dokumen;
    var no_dokumen = req.body.no_dokumen;
    var nama_laporan = req.body.nama_laporan;
    var halaman = req.body.halaman;
    var tahun = req.body.tahun;
    var keterangan = req.body.keterangan;

    db_insert.dbInsert(pic, no_odner, nama_dokumen, no_dokumen, nama_laporan, halaman, tahun, keterangan, (cb) => {
        if (cb == true) {
            res.render('admin-pages-edit', {
                pageTitle: "Edit",
                userName: "suhada",
                data: "",
                edit: "active",
                support: ""
            });
        } else {
            res.render('admin-pages-edit', {
                pageTitle: "Edit",
                userName: "suhada",
                data: "",
                edit: "active",
                support: ""
            });
        }
    });
});


// default data 
exports.getData = (req, res, next) => {
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
    })
}

// data based on page 
// algoritma embuat center 5 point 
exports.getDataPage = (req, res, next) => {
    db_select.dbSelect(cb => {
        var cnt = req.params.page;
        let page_data = [];

        res.render('admin-pages-data', {
            pageTitle: "Data",
            userName: req.username,
            data: "active",
            edit: "",
            support: "",
            dokumen: cb,
            count: page_data
        });
    })
}