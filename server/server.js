const mysql=require("mysql2");
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
app.use(cors());
const port = 9000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pool=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pratik@123',
    database: 'ShopCy',
});

app.get('/product/category',(req,res)=>{
    const category=req.query.category;
    var SQLQuery="SELECT * FROM product WHERE category= ? ";
    var values=[category];
    pool.query(SQLQuery,values,(error,result)=>{
        if(error){
            res.send(error);
        }else{
            
            console.log(result);
            res.json({result})
        }
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});