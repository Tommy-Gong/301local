const{ Address } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');

module.exports = async (req, res) => {
    try {
        const { user } = req.params
        const { address } = req.body
        const info = {
            ...address,
            userId: user
        }
        const adr = Address.createAddress(info)
        
        if (!adr) throw new Error(createErrorResponse(400, 'Could not create address'))
       
        res.status(201).json();
    } catch (e) {
        logger.error({e}, 'Error adding address')
        res.status(400).json(e)
        
    }
}