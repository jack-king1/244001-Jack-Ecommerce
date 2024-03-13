//const sql = require("mssql");
const sql = require("mssql");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(express.json());
app.use(cors());

const sqlConfig = {
    server: "172.187.184.173",
    database: "jackkingEcomDB",
    user: "sa",
    password: "Cheesecake!1",
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

sql.connect(sqlConfig, function (err) {
    if (err) console.log(err);
});

app.get("/", (req, res) => {
    res.send("Default root found!");
});

app.get("/getitem", (req, res) => {
    res.send("getting item!");
});

//get item id from
app.get("/getitem/:itemid", (req, res) => {
    const itemid = req.params.videoid;
    res.send(`getting item: ${itemid}`);
    console.log(req);
});

//multiply number using routes and params inside the url.
app.get("/multiply/:numberone&:numbertwo", (req, res) => {
    const n1 = req.params.numberone;
    const n2 = req.params.numbertwo;
    res.send(`${n1} x ${n2}: ${n1 * n2}`);
});

//http://localhost:3000/multiplyquery?numberone=1&numbertwo=4
//%20 adds a space in a URL.
//using routes rather
app.get("/employees/", (req, res) => {
    const n1 = req.query.numberone;
    const n2 = req.query.numbertwo;
    const employeename = req.query.name;
    res.send(`${n1} x ${n2}: ${n1 * n2} Name: ${employeename}`);
});

//passing params into the req query
app.get("/employees", (req, res) => {
    const emplpoyeeid = req.query.employeeid;
    res.send(`Employees rout: ${emplpoyeeid}`);
});

//get country code using query e.g. http://localhost:3000/countries/?countryCode1=UK&countryCode2=AR
app.get("/countries/", async (req, res) => {
    const countryCode1 = req.query.countryCode1;
    const countryCode2 = req.query.countryCode2;
    try {
        await sql.connect(sqlConfig);
        let request = new sql.Request();
        request.input("country_id1", sql.VarChar, countryCode1);
        request.input("country_id2", sql.VarChar, countryCode2);
        const query =
            "SELECT * FROM countries WHERE country_id = @country_id1 OR country_id = @country_id2";
        const result = await request.query(query);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

//country ID using params where country e.g. http://localhost:3000/countries/UK
app.get("/countries/:countryId", async (req, res) => {
    const countryCode = req.params.countryId;
    try {
        await sql.connect(sqlConfig);
        let request = new sql.Request();
        request.input("country_id2", sql.VarChar, countryCode);
        const query = "SELECT * FROM countries WHERE country_id = @country_id2";
        const result = await request.query(query);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

//post data to database
app.post("/newproduct", async (req, res) => {
    console.log("@newproduct post");
    try {
        const productName = req.body.productname;
        const productDesc = req.body.productdesc;
        const localprice = req.body.price;
        const localsizeid = req.body.sizeid;
        const localtypeid = req.body.typeid;

        await sql.connect(sqlConfig);
        let request = new sql.Request();
        request.input("productname", sql.VarChar, productName);
        request.input("productdesc", sql.VarChar, productDesc);
        request.input("price", sql.Decimal, localprice);
        request.input("sizeid", sql.Int, localsizeid);
        request.input("typeid", sql.Int, localtypeid);

        const query =
            "INSERT INTO Products VALUES (@productname, @productdesc, @price ,@sizeid, @typeid);";
        const result = await request.query(query);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

//fetch all products as json to display on prodyct page.
app.get("/products", async (req, res) => {
    try {
        await sql.connect(sqlConfig);
        let request = new sql.Request();
        const query =
            "SELECT * FROM Products JOIN ProductImages on product_id = ProductImages.fk_product_id JOIN OnSale on product_id = OnSale.fk_product_id";
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
        await sql.connect(sqlConfig);
        let request = new sql.Request();
        request.input("productid", sql.VarChar, selectedproductid);
        const query =
            "SELECT * FROM Products JOIN ProductImages on product_id = ProductImages.fk_product_id JOIN OnSale on product_id = OnSale.fk_product_id WHERE Products.product_id = @productid";
        const result = await request.query(query);
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
        await sql.connect(sqlConfig);
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

app.delete("/deleteproduct/:productId", async (req, res) => {
    const productId = req.params.productId;
    try {
        await sql.connect(sqlConfig);
        let request = new sql.Request();
        request.input("productId", sql.Int, productId);
        let query = "DELETE...";
        const result = request.query();
    } catch (err) {
        console.log(err);
    }
});

//Open a connection on port 3000
app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});
