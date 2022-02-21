/*
 * Project: JSON Hero
 * Author Abir SHeikh
 * Date: Feb 9, 2022
 */

// modules
const mongoose = require('mongoose');
const is_valid_json = require('../../validators/json-validator');
const is_valid_nickname = require('../../validators/nickname-validator');
// token schema
const JSON_SCHEMA = new mongoose.Schema({
    nickname: {
        type: String, 
        required: true,
        validate: {
            validator: is_valid_nickname
        }
    },
    uid: {
        type: String,
        required: true
    },
    json: {
        type: String,
        required: true,
        validate: {
            validator: is_valid_json
        }
    }
});

// exports this schema 
module.exports = JSON_SCHEMA;