const express = require('express');
const router = express.Router();
const productListingController = require('../controllers/productListingControllers');

router.get('/', productListingController.getProducts);

router.get('/:id', productListingController.getProductById);

router.put('/:id/bid', productListingController.updateBid);

module.exports = router;