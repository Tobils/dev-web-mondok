var xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');
var db_insert = require('../model/db_insert');

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
    if (typeof(item.pic) === 'undefined') {
        item["pic"] = "";
        console.log(typeof(item.pic));

    } else if (typeof(item.no_odner) === 'undefined') {
        item["no_odner"] = "";
        console.log(typeof(item.no_odner));

    } else if (typeof(item.nama_dokumen) === 'undefined') {
        item["nama_dokumen"] = "";
        console.log(typeof(item.nama_dokumen));

    } else if (typeof(item.no_dokumen) === 'undefined') {
        item["no_dokumen"] = "";
        console.log(typeof(item.no_dokumen));

    } else if (typeof(item.nama_laporan) === 'undefined') {
        item["nama_laporan"] = "";
        console.log(typeof(item.nama_laporan));

    } else if (typeof(item.halaman) === 'undefined') {
        item["halaman"] = "";
        console.log(typeof(item.halaman));

    } else if (typeof(item.tahun) === 'undefined') {
        item["tahun"] = "";
        console.log(typeof(item.tahun));

    } else if (typeof(item.keterangan) === 'undefined') {
        item["keterangan"] = "";
        console.log(typeof(item.keterangan));
    }


    db_insert.dbInsert(item.pic, item.no_odner, item.nama_dokumen, item.no_dokumen, item.nama_laporan, item.halaman, item.tahun, item.keterangan, (cb) => {
        console.log(cb);
    });
}


// format data
/*
id, pic, no odner, nama dokumen, no dokumen, nama laporan, halaman, tahun, keterangan
*/