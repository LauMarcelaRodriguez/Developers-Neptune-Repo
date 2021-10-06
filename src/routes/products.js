const express = require ('express');
const router = express.Router();

router.get('/products/add-product',(req,res)=> {
    res.render('products/all-products');
});

router.post('/products/all-products', async (req,res)=> {
    console.log(req.body);
});





module.exports = router;