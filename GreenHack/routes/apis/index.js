const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
const { Emissions } = require('../../models'); //models/index가 정의된 상대경로

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