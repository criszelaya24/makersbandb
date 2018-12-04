const express = require('express');
const router = express.Router();
const property_controller = require('../controllers/property.controller');

// router.get('/test', user_controller.test);

router.post('/create', property_controller.property_create);

router.get('/:id', property_controller.property_details);

router.put('/:id/update', property_controller.property_update);

router.delete('/:id/delete', property_controller.property_delete);

module.exports = router;
