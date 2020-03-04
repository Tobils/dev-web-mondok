const db = require('../model/db_config');

module.exports.dbSelect = function(cb) {
    db.connect((err) => {
            let sql = "SELECT * FROM table_data_dokumen";
            db.query(sql, function(err, results) {
                if (err) throw err;
                cb(results);
            });
        })
        // next();
}