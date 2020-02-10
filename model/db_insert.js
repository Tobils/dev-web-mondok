const db = require('../model/db_config');

module.exports.dbInsert = function(pic, no_odner, nama_dokumen, no_dokumen, nama_laporan, halaman, tahun, keterangan, cb) {
    db.connect((err) => {
        let val = false;
        let sql = "INSERT INTO table_data_dokumen (id, pic, no_odner, nama_dokumen, no_dokumen, nama_laporan, halaman, tahun, keterangan) VALUES (null, '" +
            pic + "','" +
            no_odner + "','" +
            nama_dokumen + "','" +
            no_dokumen + "','" +
            nama_laporan + "','" +
            halaman + "','" +
            tahun + "','" +
            keterangan + "');";

        db.query(sql, function(err, results) {
            if (err) {
                cb(false);
                throw err;
            } else {
                console.log(results);
                cb(true);
            }
        });
    })
}