var count_table = 0;
var count_row = 1;

function edit_row(no) {
    var elem = document.getElementById("edit_button");

    if (elem.value == "Edit") {
        elem.value = "Simpan";
        var pic = document.getElementById("new_pic" + no);
        var no_odner = document.getElementById("new_no_odner" + no);
        var nama_dokumen = document.getElementById("new_nama_dokumen" + no);
        var no_dokumen = document.getElementById("new_no_dokumen" + no);
        var nama_laporan = document.getElementById("new_nama_laporan" + no);
        var halaman = document.getElementById("new_halaman" + no);
        var tahun = document.getElementById("new_tahun" + no);
        var keterangan = document.getElementById("new_keterangan" + no);


        var pic_data = pic.innerHTML;
        var no_odner_data = no_odner.innerHTML;
        var nama_dokumen_data = nama_dokumen.innerHTML;
        var no_dokumen_data = no_dokumen.innerHTML;
        var nama_laporan_data = nama_laporan.innerHTML;
        var halaman_data = halaman.innerHTML;
        var tahun_data = tahun.innerHTML;
        var keterangan_data = keterangan.innerHTML;

        pic.innerHTML = "<input type='text' id='pic_text" + no + "'value='" + pic_data + "'>";
        no_odner.innerHTML = "<input type='text' id='no_odner_text" + no + "' value='" + no_odner_data + "'>";
        nama_dokumen.innerHTML = "<input type='text' id='nama_dokumen_text" + no + "'value='" + nama_dokumen_data + "'>";
        no_dokumen.innerHTML = "<input type='text' id='no_dokumen_text" + no + "' value='" + no_dokumen_data + "'>";
        nama_laporan.innerHTML = "<input type='text' id='nama_laporan_text" + no + "'value='" + nama_laporan_data + "'>";
        halaman.innerHTML = "<input type='text' id='halaman_text" + no + "' value='" + halaman_data + "'>";
        tahun.innerHTML = "<input type='text' id='tahun_text" + no + "'value='" + tahun_data + "'>";
        keterangan.innerHTML = "<input type='text' id='keterangan_text" + no + "' value='" + keterangan_data + "'>";

    } else {
        elem.value = "Edit";
        save_edit(no);
    }

}

function save_edit(no_row) {
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length);

    var new_pic_data = document.getElementById("pic_text" + no_row).value;
    var new_no_odner_data = document.getElementById("no_odner_text" + no_row).value;
    var new_nama_dokumen_data = document.getElementById("nama_dokumen_text" + no_row).value;
    var new_no_dokumen_data = document.getElementById("no_dokumen_text" + no_row).value;
    var new_nama_laporan_data = document.getElementById("nama_laporan_text" + no_row).value;
    var new_halaman_data = document.getElementById("halaman_text" + no_row).value;
    var new_tahun_data = document.getElementById("tahun_text" + no_row).value;
    var new_keterangan_data = document.getElementById("keterangan_text" + no_row).value;


    /**
     * insert value to table
     */
    var row = table.insertRow(table_len);
    var cell1 = row.insertCell(0); // NO
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);

    /**
     * set id
     */
    row.id = "row" + table_len;
    cell2.id = "new_pic" + table_len;
    cell3.id = "new_no_odner" + table_len;
    cell4.id = "new_nama_dokumen" + table_len;
    cell5.id = "new_no_dokumen" + table_len;
    cell6.id = "new_nama_laporan" + table_len;
    cell7.id = "new_halaman" + table_len;
    cell8.id = "new_tahun" + table_len;
    cell9.id = "new_keterangan" + table_len;

    /**
     * set value to html
     */
    cell1.innerHTML = count_row;
    cell2.innerHTML = new_pic_data;
    cell3.innerHTML = new_no_odner_data;
    cell4.innerHTML = new_nama_dokumen_data;
    cell5.innerHTML = new_no_dokumen_data;
    cell6.innerHTML = new_nama_laporan_data;
    cell7.innerHTML = new_halaman_data;
    cell8.innerHTML = new_tahun_data;
    cell9.innerHTML = new_keterangan_data;

    /**
     * create button save
     */
    var btn_edit = document.createElement('input');
    btn_edit.type = "button";
    btn_edit.id = "edit_button";
    btn_edit.value = "Edit";
    btn_edit.className = "edit";
    btn_edit.onclick = function() {
        edit_row(table_len);
    };

    /**
     * create button delete 
     */
    var btn_delete = document.createElement('input');
    btn_delete.type = "button";
    btn_delete.value = "Delete";
    btn_delete.className = "delete";
    btn_delete.onclick = function() {
        delete_row(table_len);
    };

    cell10.appendChild(btn_edit);
    cell10.appendChild(btn_delete);

    count_table++;
    count_row++;
    var no_table = document.getElementById("no_table");
    no_table.innerHTML = count_row;

}



function save_row(no_row) {
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length);

    var new_pic_data = document.getElementById("new_pic" + no_row).value;
    var new_no_odner_data = document.getElementById("new_no_odner" + no_row).value;
    var new_nama_dokumen_data = document.getElementById("new_nama_dokumen" + no_row).value;
    var new_no_dokumen_data = document.getElementById("new_no_dokumen" + no_row).value;
    var new_nama_laporan_data = document.getElementById("new_nama_laporan" + no_row).value;
    var new_halaman_data = document.getElementById("new_halaman" + no_row).value;
    var new_tahun_data = document.getElementById("new_tahun" + no_row).value;
    var new_keterangan_data = document.getElementById("new_keterangan" + no_row).value;


    /**
     * insert value to table
     */
    var row = table.insertRow(table_len);
    var cell1 = row.insertCell(0); // NO
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);

    /**
     * set id
     */
    row.id = "row" + table_len;
    cell2.id = "new_pic" + table_len;
    cell3.id = "new_no_odner" + table_len;
    cell4.id = "new_nama_dokumen" + table_len;
    cell5.id = "new_no_dokumen" + table_len;
    cell6.id = "new_nama_laporan" + table_len;
    cell7.id = "new_halaman" + table_len;
    cell8.id = "new_tahun" + table_len;
    cell9.id = "new_keterangan" + table_len;

    /**
     * set value to html
     */
    cell1.innerHTML = count_row;
    cell2.innerHTML = new_pic_data;
    cell3.innerHTML = new_no_odner_data;
    cell4.innerHTML = new_nama_dokumen_data;
    cell5.innerHTML = new_no_dokumen_data;
    cell6.innerHTML = new_nama_laporan_data;
    cell7.innerHTML = new_halaman_data;
    cell8.innerHTML = new_tahun_data;
    cell9.innerHTML = new_keterangan_data;

    /**
     * create button save
     */
    var btn_edit = document.createElement('input');
    btn_edit.type = "button";
    btn_edit.id = "edit_button";
    btn_edit.value = "Edit";
    btn_edit.className = "edit";
    btn_edit.onclick = function() {
        edit_row(table_len);
    };

    /**
     * create button delete 
     */
    var btn_delete = document.createElement('input');
    btn_delete.type = "button";
    btn_delete.value = "Delete";
    btn_delete.className = "delete";
    btn_delete.onclick = function() {
        delete_row(table_len);
    };

    cell10.appendChild(btn_edit);
    cell10.appendChild(btn_delete);

    count_table++;
    count_row++;
    var no_table = document.getElementById("no_table");
    no_table.innerHTML = count_row;

}


function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
    count_table--;
    var no_table = document.getElementById("no_table");
    no_table.innerHTML = count_row;

}

/**
 * Tambah function 
 */

function tambah_baris() {
    var elem = document.getElementById("add_button");

    /**
     * jika value button == Tambah, buat table tambah
     * jika button selesai, hide div input
     */
    var input = document.getElementById("input");

    if (elem.value == "Tambah") {
        /**
         * display block
         */
        input.style.display = "block";

        /**
         * create element 
         * <table align='center' cellspacing=2 cellpadding=5 id="input_table" border=1>
         *      <tr id="row">
         *          <td></td>
         *           ...
         *          <td></td>
         *      </tr>
         * </table>
         */

        // len table exist
        var table = document.getElementById("data_table");
        var table_len = (table.rows.length) - 1;

        // <table align='center' cellspacing=2 cellpadding=5 id="input_table" border=1>
        var table_input = document.createElement('table');
        table_input.align = "center";
        table_input.cellspacing = 2;
        table_input.cellpadding = 5;
        table_input.id = "input_table";
        table_input.border = 1;

        // <tr id="row">
        var new_row = document.createElement('tr');
        new_row.id = "row" + table_len;

        // <td>
        var td_no = document.createElement('td');
        var td_new_pic = document.createElement('td');
        var td_new_no_odner = document.createElement('td');
        var td_new_nama_dokumen = document.createElement('td');
        var td_new_no_dokumen = document.createElement('td');
        var td_new_nama_laporan = document.createElement('td');
        var td_new_halaman = document.createElement('td');
        var td_new_tahun = document.createElement('td');
        var td_new_keterangan = document.createElement('td');
        var td_btn = document.createElement('td');

        // <input id="id"+table_len>
        var new_pic = document.createElement('input');
        var new_no_odner = document.createElement("input");
        var new_nama_dokumen = document.createElement("input");
        var new_no_dokumen = document.createElement("input");
        var new_nama_laporan = document.createElement("input");
        var new_halaman = document.createElement("input");
        var new_tahun = document.createElement("input");
        var new_keterangan = document.createElement("input");


        td_no.id = "no_table";
        new_pic.id = "new_pic" + table_len;
        new_no_odner.id = "new_no_odner" + table_len;
        new_nama_dokumen.id = "new_nama_dokumen" + table_len;
        new_no_dokumen.id = "new_no_dokumen" + table_len;
        new_nama_laporan.id = "new_nama_laporan" + table_len;
        new_halaman.id = "new_halaman" + table_len;
        new_tahun.id = "new_tahun" + table_len;
        new_keterangan.id = "new_keterangan" + table_len;


        /**
         * create button 
         * <td>
         * <input type="button" id="save_button1" value="Save" class="save" onclick="save_row('1')">
         * <input type="button" value="Delete" class="delete" onclick="delete_row('1')">
         * </td>
         */

        /**
         * create button save
         */
        var btn_save = document.createElement('input');
        btn_save.type = "button";
        btn_save.id = "save_button";
        btn_save.value = "Save";
        btn_save.className = "save";
        btn_save.onclick = function() {
            save_row(table_len);
        };

        /**
         * append child input to td
         * <td>
         *      <input id="">
         *      </input>
         * <td>
         */
        td_no.innerHTML = count_row;
        td_new_pic.appendChild(new_pic);
        td_new_no_odner.appendChild(new_no_odner);
        td_new_nama_dokumen.appendChild(new_nama_dokumen);
        td_new_no_dokumen.appendChild(new_no_dokumen);
        td_new_nama_laporan.appendChild(new_nama_laporan);
        td_new_halaman.appendChild(new_halaman);
        td_new_tahun.appendChild(new_tahun);
        td_new_keterangan.appendChild(new_keterangan);
        td_btn.appendChild(btn_save);

        /**
         * append child td to tr
         * <tr id="row">
         * <td>...</td>
         * </tr>
         */
        var new_row = document.createElement('tr');
        new_row.id = "row" + table_len;
        new_row.appendChild(td_no);
        new_row.appendChild(td_new_pic);
        new_row.appendChild(td_new_no_odner);
        new_row.appendChild(td_new_nama_dokumen);
        new_row.appendChild(td_new_no_dokumen);
        new_row.appendChild(td_new_nama_laporan);
        new_row.appendChild(td_new_halaman);
        new_row.appendChild(td_new_tahun);
        new_row.appendChild(td_new_keterangan);
        new_row.appendChild(td_btn);


        /**
         * clone header
         * <th>PIC</th>
         * ...
         * <th>Edit</th>
         */

        var header_table_data = document.getElementById("data_table_header");
        var header_table_input = header_table_data.cloneNode(true);
        header_table_input.id = "input_table_header";

        /**
         * append all child to input table
         */
        table_input.appendChild(header_table_input);
        table_input.appendChild(new_row);

        /**
         * append table to div input
         */
        input.appendChild(table_input);


        elem.value = "Selesai";
        /**
         * hapus penambahan child header
         */
        input.removeChild(input.childNodes[0]);

    } else {
        elem.value = "Tambah";
        input.style.display = "none";

    }
}