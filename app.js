const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect("mongodb://localhost/RYD_Test", { useNewUrlParser: true, useFindAndModify: false });
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Product.create({
//     itemName: 'LYNX 125B',
//     itemPrice: '1400.00',
//     productType: 'vehicle',
//     subType: 'atv',
//     imageUrl: 'https://www.jjjimports.com/upfiles/1540563070pic3.jpg'
// })

app.get('/', (req, res) => {
    res.redirect('/index');
})

app.get('/index', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.log(err);
        }

        else {
            res.render('index', {products: products});
        }
    })
})

app.get('/index/:product', (req, res) => {
    Product.find({
        productType: req.params.product
    }, (err, foundProducts) => {
        if (err) {
            console.log(err);
        }

        else {
            res.render('show', {products: foundProducts});
        }
    })
})

app.get('/index/:productType/:subType', (req, res) => {

})

app.listen(3000, () => {console.log('Server has started..')})