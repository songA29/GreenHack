const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
const { Emissions } = require('../../models'); //models/index가 정의된 상대경로
const { RecyclingStatus } = require('../../models'); //models/index가 정의된 상대경로

//배출량
router.get('/emissions', async (req, res) => {
    try{
       const emissions = await Emissions.findAll({
        attributes: ['year', 'total_emissions', 'waste_incineration'],
        });
       console.log(emissions);

       return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.API_READ_ALL_SUCCESS, emissions));
    }catch(error){
        console.error(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.API_READ_ALL_FAIL));
    }
})

//재활용 현황
router.get('/status', async (req, res) => {
    try{
       const status = await RecyclingStatus.findAll({
        attributes: ['category', 'recycled_waste_volume', 'sales_volume', 'total_sales', 'price_per_ton'],
        });
       console.log(status);

       return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.API_READ_ALL_SUCCESS, status));
    }catch(error){
        console.error(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.API_READ_ALL_FAIL));
    }
})
module.exports = router;