//import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
//Products belong to category
Products.belongsTo(Category, {
    foreignKey: 'category_id'
});
//Categories have many products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});
//Products belongtoMany Tags
Product.belongsToMany(Tag, {
    through: ProductTag,
    as: 'product_tags',
    foreignKey: 'product_id'
});
//Tags belongToMany Products
Tag.belongsToMany(Product, {
    through: ProductTag,
    as: 'product_tags',
    foreignKey: 'tag_id'
});
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};