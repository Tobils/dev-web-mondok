var xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');

var obj = xlsx.parse(__dirname + '/data-berkas.xls'); // parses a file
var data_all = obj[obj.length - 1].data;

var berkas = {};
var id_berkas = 'berkas';
berkas[id_berkas] = [];

for (var i = 2; i < data_all.length - 1; i++) {
    var item = {
        id: data_all[i][0],
        pic: data_all[i][1],
        no_odner: data_all[i][2],
        nama_dokumen: data_all[i][3],
        no_dokumen: data_all[i][4],
        nama_laporan: data_all[i][5],
        halaman: data_all[i][6],
        tahun: data_all[i][7],
        keterangan: data_all[i][8],
    }
    berkas[id_berkas].push(item);
}

// console.log(berkas);
const p = path.join(
    path.dirname(process.mainModule.filename),
    'berkas.json'
)
fs.writeFile(p, JSON.stringify(berkas), err => {
    console.log(err);
})



// format data
/*
id, pic, no odner, nama dokumen, no dokumen, nama laporan, halaman, tahun, keterangan
*/