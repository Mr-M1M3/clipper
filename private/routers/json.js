/*
 * Project: JSON Hero
 * Author Abir SHeikh
 * Date: Feb 19, 2022
 */

// requires module
const express = require('express');
const controller = require('../controllers/json-controller');

// router object to use
const ROUTER = express.Router();


ROUTER.post('/add', controller.auth, controller.store);
ROUTER.get('/:id', controller.get);
ROUTER.get('/all/:uid', controller.all);
ROUTER.put('/update/:id', controller.auth, controller.update);
ROUTER.delete('/delete/:id', controller.auth, controller.delete);
module.exports = ROUTER;