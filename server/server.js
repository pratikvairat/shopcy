const mysql=require("mysql2");
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
app.use(cors());
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pool=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'ShopCy',
});

app.post('/product/thumbnail',)