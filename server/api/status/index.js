'use strict';


import * as auth from '../../auth/auth.service';

var express = require('express');
var controller = require('./status.controller');
var router = express.Router();


router.get('/me/outBound/skip/:offset/filter/:fType', auth.isAuthenticated(), controller.outBound);
router.get('/me/inBound/skip/:offset/filter/:fType', auth.isAuthenticated(), controller.inBound);
router.get('/world', auth.isAuthenticated(), controller.getWorld);


// router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.upsert);
router.patch('/:id', auth.isAuthenticated(), controller.patch);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
