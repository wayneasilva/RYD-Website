const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    itemName: String,
    itemPrice: String,
    productType: String,
    subType: String,
    imageUrl: String
})

module.exports = mongoose.model('Product', productSchema);