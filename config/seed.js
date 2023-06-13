require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Raw Flower', sortOrder: 10 },
    { name: 'Gummies', sortOrder: 20 },
    { name: 'Candies', sortOrder: 30 },
    { name: 'Tinctures-Base Oil', sortOrder: 40 },
    { name: 'Topicals', sortOrder: 50 },
    { name: 'Marshmallows', sortOrder: 60 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
   
    { name: "R4", emoji: "https://images.leafly.com/flower-images/acapulco.jpg", category: categories[0], price: 16.99 },
    { name: "ACDC", emoji: "https://images.leafly.com/flower-images/allen-wrench.jpg", category: categories[0], price: 16.99 },
    { name: "MW", emoji: "https://leafly-public.imgix.net/strains/photos/IaYQshrPTxiD2BOWHO1n_AnimalMints.png", category: categories[0], price: 16.99 },
    { name: "DD", emoji: "https://images.leafly.com/flower-images/raspberry-kush-fixed.jpg", category: categories[0], price: 16.99 },
    { name: "MW/DHDS", emoji: "https://images.leafly.com/flower-images/zT6M2MASsyZK8U9tZ9JA_MANGO%20HAZE-251-edited.jpg", category: categories[0], price: 16.99 },
    { name: "LemD", emoji: "https://images.leafly.com/flower-images/PINK-LEMONADE-020-fixed.jpg", category: categories[0], price: 16.99 },
    { name: "Sativa", emoji: "https://images.leafly.com/flower-images/nyc-diesel.jpg", category: categories[0], price: 16.99 },
    { name: "Indica", emoji: "https://images.leafly.com/flower-images/monkey-thunder.jpg", category: categories[0], price: 16.99 },
    { name: "Cotton candy", emoji: "https://images.leafly.com/flower-images/MK-ULTRA-082.jpg", category: categories[0], price: 16.99 },
    { name: "Cheese", emoji: "https://images.leafly.com/flower-images/mango-kush.jpg", category: categories[0], price: 16.99 },
    { name: "Lilac diesel", emoji: "https://images.leafly.com/flower-images/lemon-meringue.jpg", category: categories[0], price: 16.99 },
    { name: "Citral glue", emoji: "https://images.leafly.com/flower-images/LAVENDER-060.jpg", category: categories[0], price: 16.99 },
    { name: "Sleep CBG", emoji: "https://images.leafly.com/flower-images/lemon-cake.jpg", category: categories[1], price: 42.99 },
    { name: "Sleep CBD/ACDC", emoji: "https://images.leafly.com/flower-images/lemon-kush.jpg", category: categories[1], price: 42.99 },
    { name: "Sleep Indica", emoji: "https://images.leafly.com/flower-images/lambs-bread.png", category: categories[1], price: 42.99 },
    { name: "Lift", emoji: "https://images.leafly.com/flower-images/kosher-tangie.jpg", category: categories[1], price: 42.99 },
    { name: "Recovery", emoji: "https://images.leafly.com/flower-images/purple-punch-fixed.jpg", category: categories[1], price: 42.99 },
    { name: "Daytime CBG", emoji: "https://images.leafly.com/flower-images/primus.jpg", category: categories[1], price: 42.99 },
    { name: "CBD/CBN", emoji: "https://images.leafly.com/flower-images/pink-champagne-fixed.jpg", category: categories[2], price: 42.99 },
    { name: "Lemongrass", emoji: "https://images.leafly.com/flower-images/pineapple-super-silver-haze.jpg", category: categories[2], price: 31.99 },
    { name: "Watermelon", emoji: "https://images.leafly.com/flower-images/pineapple-express.png", category: categories[2], price: 31.99 },
    { name: "Woe", emoji: "https://images.leafly.com/flower-images/platinum-gsc.jpg", category: categories[2], price: 31.99 },
    { name: "CBG", emoji: "https://images.leafly.com/flower-images/nyc-diesel.jpg", category: categories[2], price: 31.99 },
    { name: "Indica glycerin", emoji: "https://images.leafly.com/flower-images/og-kush.png", category: categories[3], price: 31.99 },
    { name: "Sativa", emoji: "https://images.leafly.com/flower-images/orange-skunk.jpg", category: categories[3], price: 44.99 },
    { name: "Union custom", emoji: "https://images.leafly.com/flower-images/orange-crush.jpg", category: categories[3], price: 44.99 },
    { name: "CBN MCT", emoji: "https://images.leafly.com/flower-images/o4MhnTW2QK2LicV68uiY_CHOCOLOPE-212-edited.jpg", category: categories[3], price: 44.99 },
    { name: "Chaga", emoji: "https://images.leafly.com/flower-images/nyc-diesel.jpg", category: categories[3], price: 44.99 },
    { name: "Garden of Bloom", emoji: "https://images.leafly.com/flower-images/northern-lights.png", category: categories[4], price: 44.99 },
    { name: "Garden of Peace", emoji: "https://images.leafly.com/flower-images/msT3hV3gTeKW9Kwrhtqn_BLUEBERRY%20CHEESECAKE-259-edited.jpg", category: categories[4], price: 44.99 },
    { name: "Lip Lover", emoji: "https://images.leafly.com/flower-images/monkey-thunder.jpg", category: categories[4], price: 44.99 },
    { name: "Massage Oil Cream", emoji: "https://images.leafly.com/flower-images/MK-ULTRA-082.jpg", category: categories[4], price: 44.99 },
    { name: "No 10", emoji: "https://images.leafly.com/flower-images/LAVENDER-060.jpg", category: categories[4], price: 24.99 },
    { name: "Therapeutic Touch", emoji: "https://images.leafly.com/flower-images/Kn55a7RPeQfB8yxYHVcQ_white%20cbg%202.jpg", category: categories[4], price: 24.99 },
    { name: "Soaps", emoji: "https://images.leafly.com/flower-images/KIMBO-KUSH-030.jpg", category: categories[4], price: 24.99 },
    { name: "TLC Cream Small",emoji:'https://images.leafly.com/flower-images/frankenstein.jpg', category: categories[4], emoji: "oz", price: 24.99 },
    { name: "TLC Cream Large", emoji: "https://images.leafly.com/flower-images/jack-herer.jpg", category: categories[4], price: 24.99 },
    { name: "Bath Balms sm", emoji: "https://images.leafly.com/flower-images/jr.jpg", category: categories[4], price: 24.99 },
    { name: "Bath Balms lg", emoji: "https://images.leafly.com/flower-images/dutch-treat.jpg", category: categories[4], price: 24.99 },
    { name: "Indica", emoji: "https://images.leafly.com/flower-images/durban-poison.jpg", category: categories[5], price: 24.99 },
    { name: "Sative", emoji: "https://images.leafly.com/flower-images/flMvWRExSXSewuwawFG6_WHITE%20FIRE-358-edited.jpg", category: categories[5], price: 24.99 },
    { name: "CBG", emoji: "https://images.leafly.com/flower-images/grape-ape.jpg", category: categories[5], price: 24.99 }
  ]);

  console.log(items)

  process.exit();

})();