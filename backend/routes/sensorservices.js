const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get('/sensor/getFileData', (req,res)=> {
    
    console.log(req.params);
    console.log('sensor data:', 0);
    return res.status(200).send(0);
})
 
module.exports = router;