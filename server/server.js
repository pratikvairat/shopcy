const mysql = require("mysql2");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const port = 9000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'ShopCy',
});
app.get('/product/category', (req, res) => {
    const category = req.query.category;
    var SQLQuery = "SELECT * FROM product WHERE category= ? ";
    var values = [category];
    pool.query(SQLQuery, values, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            console.log(result);
            res.json({ result })
        }
    })
})
app.get("/product/id", (req, res) => {
    const id = req.query.id;
    var SQLQuery = "SELECT url FROM Image WHERE product_id= ? ";
    var values = [id];
    pool.query(SQLQuery, values, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            res.json({ result });
        }
    })
});
app.post("/registerUser", (req, res) => {
    console.log(req.body);
    const bodyArray = Object.values(req.body);
    const [name, surname, email, passd, addressLine1, addressLine2, city, state, pincode] = bodyArray;
    var SQLQuery = "INSERT INTO user(name,surname,email,passd,addressLine1,addressLine2,city,state,pincode) VALUES (?,?,?,?,?,?,?,?,?)";
    var values = [name, surname, email, passd, addressLine1, addressLine2, city, state, pincode];
    console.log(values);
    console.log(name);
    pool.query(SQLQuery, values, (error, result) => {
        if (error) {
            console.log(error);
            res.send("Cannot Register Right Now");
        } else {
            console.log("Register Successful")
            res.send("success");
        }
    })
});
app.post("/login",(req,res)=>{
    console.log(req.body);
    const bodyArray=Object.values(req.body);
    const [email,passd]=bodyArray;
    console.log(bodyArray);
    var SQLQuery="SELECT email FROM user WHERE email = ?";
    var values=[email];
    pool.query(SQLQuery,values,(error,result)=>{
        if(error){
            res.send("serverfault")
        }else if(result===null){
            console.log(result);
            res.send("NoUser");
        }else{
            var SQL="SELECT email,passd FROM user WHERE email= ? AND passd= ?";
            var value=[email,passd];
            pool.query(SQL,value,(e,r)=>{
                if(e){
                    console.log("error")
                    res.send("serverfault")
                }else if(r===null){
                    console.log("null");
                    res.send("wrongcredintial");
                }else{
                    console.log(r);
                    res.send("success");
                }
            })
        }
    })
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});