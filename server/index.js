require("dotenv").config();
const sql = require("mssql");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(express.json());
app.use(cors());

// const sqlConfig = {
//     server: "172.187.184.173",
//     database: "jackkingEcomDB",
//     user: "sa",
//     password: "Cheesecake!1",
//     pool: {
//         min: 0,
//         max: 10,
//         idleTimeoutMillis: 30000,
//     },
//     options: {
//         encrypt: false,
//         trustServerCertificate: true,
//     },
// };

const sqlConfig = {
    server: process.env.DB_HOST,
    database: "jackkingEcomDB",
    user: "jack",
    password: process.env.DB_PASS,
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

const sqlLocal = {
    server: "localhost",
    database: "jackkingEcomDB",
    user: "jack",
    password: "password",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

sql.connect(sqlLocal, function (err) {
    if (err) console.log(err);
    else console.log("Connected!");
});

//fetch all products as json to display on prodyct page.
app.get("/products", async (req, res) => {
    console.log("@/products");
    try {
        let request = new sql.Request();
        const query =
            "SELECT product_id, fk_category_size_id, fk_category_type_id, product_name, product_desc, image_url, price, sale_percentage FROM Products JOIN OnSale on OnSale.fk_product_id = Products.product_id JOIN ProductImages PI on PI.fk_product_id = Products.product_id JOIN Images on Images.image_id = PI.fk_image_id ";
        const result = await request.query(query);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

//get all relevant product data where product id matches and filter the rows for selected id.
app.get("/products/:productid", async (req, res) => {
    const selectedproductid = req.params.productid;
    console.log("ProductID: ", selectedproductid);
    try {
        let request = new sql.Request();
        request.input("productid", sql.VarChar, selectedproductid);
        const query =
            "SELECT product_id, fk_category_size_id, fk_category_type_id, product_name, product_desc, image_url, price, sale_percentage FROM Products JOIN OnSale on OnSale.fk_product_id = Products.product_id JOIN ProductImages PI on PI.fk_product_id = Products.product_id JOIN Images on Images.image_id = PI.fk_image_id   WHERE Products.product_id = @productid";
        const result = await request.query(query);
        console.log(result);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

//get product highlights as a seperate table.
app.get("/products/:productid/highlights", async (req, res) => {
    const selectedproductid = req.params.productid;
    try {
        let request = new sql.Request();
        request.input("productid", sql.VarChar, selectedproductid);
        const query =
            "SELECT * FROM Highlights WHERE fk_product_id = @productid";
        const result = await request.query(query);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

//Open a connection on port 3000
app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});
