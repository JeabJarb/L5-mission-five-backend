const express = require('express');
const router = express.Router();
const productListingController = require('../controllers/productListingControllers');

router.get('/', productListingController.getProductListingItems);

module.exports = router;