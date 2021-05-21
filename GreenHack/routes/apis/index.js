const express = require('express');
const router = express.Router();

//배출량
router.get('/emissions', async (req, res) => {
    try{
       const emissions = await Emissions.findAll({});
       console.log(emissions);
       return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.USER_READ_ALL_SUCCESS, emissions));
    }catch(error){
        console.error(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.USER_READ_ALL_FAIL));
    }
})

module.exports = router;