# nodejs-login-JWT
aplikasi untuk authentifikasi login form menggunakan Json Web Token

---
## Packages npm
   - `npm install express`
   - `npm install jsonwebtoken`
   - `npm install nodemon --save`
   - `npm install dotenv`
   - `npm install ejs`
   - `npm install mysql`
   - `npm install cookie-parser`
   - `npm install body-parser`
   - `npm install node-xlsx`
---
## Setting project 
- `npm init`
---
## Edit package.json
```json
{
    "name": "nodejs-login-jwt",
    "version": "1.0.0",
    "description": "aplikasi login menggunakan auth JWT",
    "main": "app.js",
    "dependencies": {
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "jsonwebtoken": "^8.5.1",
        "nodemon": "^2.0.2"
    },
    "devDependencies": {},
    "scripts": {
        "start": "nodemon app.js"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/Tobils/nodejs-login-JWT.git"
    },
    "author": "dv.suhada@gmail.com",
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/Tobils/nodejs-login-JWT/issues"
    },
    "homepage": "https://github.com/Tobils/nodejs-login-JWT#readme"
}
```
---
## Generate privatkey.pem dan publickey.pem
- `openssl genrsa -out private.pem 2048`
- `openssl rsa -in private.pem -pubout -out public.pem`
- gunakan algorithm `RS256` saat verify dan sign, sign menggunakan privatekey sedangkan verify menggunakan publickey
---
## Jalankan project : 
- `npm start`
---
- menggunakan konsep MVC [Model View Controller], buat directory sebagai berikut :
    - controller --> `untuk controller, pengatur antara model dan views`
    - routes --> `routing setiap path`
        - login home --> `method GET, path /` 
        - login auth --> `method POST, path /login` --> true ? `/admin-pages`
        - admin-pages --> `method GET, path /admin-pages/data`
        - admin-pages --> `method GET, path /admin-pages/edit`
        - admin-pages --> `method GET, path /admin-pages/support`
        - logout --> `method GET, path /logout`

    - model --> `load model database`
    - views --> `tampilan pada user, form login dan pages admin`
---
## CRUD [Create, Read, Update, Delete] Databases :
- `mysql -u root -p`
- set password dan user mysql : `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'` : user : root, pass : password
- `create database login_jwt;`
- `USE login_jwt;`
- `CREATE TABLE table_user ( id smallint unsigned not null auto_increment, name varchar(20) not null, password varchar(20) not null, constraint pk_example primary key (id) );`
- `INSERT INTO table_user ( id, name, password) VALUES ( null, 'tobil', '123acbd' );`
- `INSERT INTO table_user ( id, name, password) VALUES ( null, 'tiyas', '234manokwari' );`
---
## session, cookies dan token management
- ketika logout, set cookies expired now. sehingga sessio token jwt harus sama dengan session cookie.
    ```js
    exports.getLogin = (req, res, next) => {
        res.cookie('no-token', { expires: Date.now() });
        res.render('login', {
            pageTitle: "Login",
            contentTitle: "Selamat Datang",
            path: '/'
        });
    }
    ```

---
## Structure directory project :
<p align="center">
<img src="./img/dir_structure.png">
<br>
Gambar 1.1 structure directory
</p>


---
## Jalankan Browser
- localhost:3030/
<p align="center">
<img src="./img/login-page.png">
<br>
Gambar 1.2 halaman login
<br>
<br>
<br>
<br>
<img src="./img/admin-page.png">
<br>
Gambar 1.2 halaman admin
</p>

--
## PostgreSQL
- [link](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)

---
## UI/UX
    - edit table feature 
    - register feature [done]

---
## Database
- membuat database
    - `create database mondok;`
- membuat table_user
    - `USE mondok;`
    - `CREATE TABLE table_user ( id smallint unsigned not null auto_increment, name varchar(20) not null, password varchar(20) not null, constraint pk_example primary key (id) );`
    - `INSERT INTO table_user ( id, name, password) VALUES ( null, 'tobil', '123acbd' );`
    - `INSERT INTO table_user ( id, name, password) VALUES ( null, 'tiyas', '234manokwari' );`
- membuat table_data_dokumen
    - `USE mondok;`
    - `CREATE TABLE table_data_dokumen ( id smallint unsigned not null auto_increment, pic varchar(20), no_odner varchar(20), nama_dokumen varchar(500), no_dokumen varchar(20), nama_laporan varchar(500), halaman INT UNSIGNED, tahun varchar(100), keterangan varchar(1000),  constraint pk_example primary key (id) );`

---
## Form Wajib diisi
- konsep
    ```
    tidak boleh ada form isian yang kosong, dapat dilakukan dengan menambahkan required mark, sehingga form tidak dapat di submit sebelum terisi dengan lengkap.
    ```
    ```html
     <input type="text" required pattern=".*\S+.*" title="This field is required" name="pic" placeholder="PIC" />
    ```

---
## Responsif Table
- pencarian element table
    ```js
     <script>
        function myFunction() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toLowerCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[5]; // td ke lima adalah kolom nama laporan
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toLowerCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    </script>
    ``` 

---
## Dockerisasi
- docker-compose.yml
  ```yml
  version: '3'
  services:
      db:
          image: mysql:5.7
          ports:
              - "3306:3306"
          expose:
              - "3306"
          networks:
              - docker_mevn
          environment:
              MYSQL_ROOT_PASSWORD: password
              MYSQL_DATABASE: mondok
              MYSQL_USER: root
              MYSQL_PASSWORD: password
      app:
          image: tobil/mondok:v1.0.0
          networks:
              - docker_mevn
          ports:
              - "3000:3000"
          expose:
              - "3000"
          environment:
              DB_HOST: db
              DB_USER: root
              DB_PASS: password
              DB_PORT: "3306"
              DB_NAME: mondok
  networks:
      docker_mevn:
          driver: bridge
  volumes:
    my-datavolume:
  ```
- Dockerfile
  ```js
  FROM node:10-alpine

  # Create app directory
  WORKDIR /usr/src/app

  # Install app dependencies
  # A wildcard is used to ensure both package.json AND package-lock.json are copied
  # where available (npm@5+)
  COPY package*.json ./

  RUN npm install
  # If you are building your code for production
  # RUN npm ci --only=production

  # Bundle app source
  COPY . .

  EXPOSE 3000
  CMD [ "node", "app.js" ]
  ```

- build docker images
  - `docker build -t tobil/mondok:v1.0.0 .`

- running image : `docker-compose up -d`
- docker volume : ``

---
## Hover Nav
- menambahkan kelas is-active untnuk hover nav yang aktif

---
## Handling Empty Data
- konsep 
    ```
    dilakukan dengan  mengatur perulangan data pada tr, jika kosong tampilkan tulisan bahwa data kosong
    ```

---
## Pagination
berdasarkan banyaknya halaman yang bisa ditampilkam.


---
## Referensi
- [stackoverflow : cookie](https://stackoverflow.com/questions/27978868/destroy-cookie-nodejs)
- [stackoverflow : variable undefined](https://www.tutorialrepublic.com/faq/how-to-determine-if-variable-is-undefined-or-null-in-javascript.php)
- [jwt ref #1](https://medium.com/better-programming/authentication-and-authorization-using-jwt-with-node-js-4099b2e6ca1f)
- [jwt ref #2](https://medium.com/swlh/a-practical-guide-for-jwt-authentication-using-nodejs-and-express-d48369e7e6d4)
- [jwt ref #3](https://www.codementor.io/@olatundegaruba/5-steps-to-authenticating-node-js-with-jwt-7ahb5dmyr)
- [jwt ref #4](https://medium.com/@siddharthac6/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e)
- [jwt ref #5](https://tutorialedge.net/nodejs/nodejs-jwt-authentication-tutorial/)
- [codepen admin page](https://codepen.io/buyubaya/pen/LjezyJ)
- [codepen login page](https://codepen.io/tomasvn/pen/GqXEOg)
- [generate private key dan public key](https://gist.github.com/ygotthilf/baa58da5c3dd1f69fae9#gistcomment-2932501)
- [jQuery table](https://mdbootstrap.com/plugins/jquery/table-editor/)
- [Dynamic table](http://talkerscode.com/webtricks/add-edit-and-delete-rows-from-table-dynamically-using-javascript.php)
- [Pagination Table](https://codepen.io/yasser-mas/pen/pyWPJd?__cf_chl_jschl_tk__=6c2bdaec8810b0ec50d4c68ca9d74d48ce1a491f-1581348119-0-AT32g5XccKcSK6dDzs_K-qS3XRXfJLFtYwdLFPidnEPzqRApEaYzKXmleY-mtqCjTLev6bJwdvA775v6kON3U2wlreHyoGmOnljASCOkNfbxfTOfprydXvLlYu63ocxHjQz7LpUJQJ4uXtVxipGPW3cUsuXTfs9RgXf65J25t9Egx0y7yOEc10tuQeldIDnUir0lpXmLB5FyrT6-51Y8u521oN-KpWxRt_wQ4kvv1DYTXrnoAp8xbhmltpSXQBaANzbu3YtBHXq4Yu8Ix2DBxDHfZOiICT0rwic5rsBo1FU_J7Cp0Q7b_tZkZfLIDyyb_R-Bv-Tn0FLWTAM5ay4-ovfESil-9E_m-6ihjPhL2qF1)
