var faker = require('faker');

for (var i = 0; i < 10; i++) {
    console.log("Produit-"+[i]+": "+ faker.commerce.productName() +" - "+faker.commerce.price()+"€");
};