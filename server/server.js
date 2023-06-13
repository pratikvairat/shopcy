const mysql=require("mysql2");

const pool=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'ShopCy',
});

app.post('/product/thumbnail',)