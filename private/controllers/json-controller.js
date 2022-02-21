/*
 * Project: JSON Hero
 * Author Abir SHeikh
 * Date: Feb 19, 2022
 */

// modules
const mongoose = require('mongoose');
const JSON_SCHEMA = require('../database/schemas/json-schema');
const USER_SCHEMA = require('../database/schemas/user-schema');
const TOKEN_SCHEMA = require('../database/schemas/token-schema');
const is_valid_json = require('../validators/json-validator');
const Database = require('../database/database');
const encrypt = require('../utils/encrypt');
const CONFIG = require('../config/config');

// module scaffolding
const controller = {};

// initializing database
const json_database = new Database(CONFIG.DATABASE_STRING, JSON_SCHEMA, 'JSON');
const user_database = new Database(CONFIG.DATABASE_STRING, USER_SCHEMA, 'User');
const token_database = new Database(CONFIG.DATABASE_STRING, TOKEN_SCHEMA, 'TOKEN');
json_database.init();
user_database.init();
token_database.init();

// controller for auth
controller.auth = (req, res, next) => {
    if (req.body.email || req.body.password) {
        user_database.get({
            email: req.body.email,
            password: encrypt(req.body.password)
        }).then(data => {
            if (data.length == 0) {
                res.status(401).send('unauthorized');
            } else {
                res.locals.uid = data[0]._id;
                next();
            }
        }).catch(error => {
            next(error);
        })
    } else if (req.cookies.session) {
        token_database.get({
            token: encrypt(req.cookies.session)
        }).then(data => {
            if (data.length == 0) {
                res.status(401).send('unauthorized');
            } else {
                res.locals.uid = data[0].id;
                next();
            }
        }).catch(error => {
            next(error);
        })
    } else {
        res.status(401).send('unauthorized');
    }
}

// controller for storing json
controller.store = (req, res, next) => {
    const DATA = {
        uid: res.locals.uid,
        nickname: req.body.nickname
    };
    // no need to verify json as mongoose will do it
    if (typeof req.body.json == 'object') {
        DATA.json = JSON.stringify(req.body.json);
    } else {
        DATA.json = req.body.json;
    }
    json_database.add(DATA).then(data => {
        res.status(201).send(data);
    }).catch(error => {
        if (error instanceof mongoose.Error.ValidationError) { // if error caused for invalid data
            res.status(400).send('invalid data');
        } else {
            next(error); // if caused for other reason error handler middleware
        }
    })
}

// get json
controller.get = (req, res, next) => {
    json_database.get({
        _id: req.params.id
    }).then(data => {
        if (req.query.info == 'true') {
            res.send({
                nickname: data[0].nickname,
                json: JSON.parse(data[0].json)
            })
        } else {
            res.send(JSON.parse(data[0].json));
        }
    }).catch(error => {
        next(error)
    })
}

// get all json by uid
controller.all = (req, res, next) => {
    json_database.get({
        uid: req.params.uid
    }, {
        _id: 0,
        uid: 0
    }).then(data => {
        res.send(data);
    }).catch(error => {
        next(error);
    })
}

// update json
controller.update = (req, res, next) => {
    json_database.get({
        _id: req.params.id
    }).then(data => {
        if (data.length == 0) {
            res.status(400).send('not found');
        } else {
            const UPDATE = {
                nickname: req.body.nickname ? req.body.nickname : data[0].nickname,
                uid: data[0].uid
            }
            // no need to verify json as mongoose will do it
            if (typeof req.body.json == 'object') {
                UPDATE.json = JSON.stringify(req.body.json);
            } else {
                UPDATE.json = req.body.json;
            }

            json_database.update({_id: req.params.id}, UPDATE, {_id: 0, uid: 0}).then(data => {
                res.send({
                    nickname: data.nickname,
                    json: JSON.parse(data.json)
                });
            }).catch(error => {
                
        if (error instanceof mongoose.Error.ValidationError) { // if error caused for invalid data
            res.status(400).send('invalid data');
        } else {
            next(error); // if caused for other reason error handler middleware
        }
            })
        }
    }).catch(error => {
        next(error);
    });
}

// delete json
controller.delete = (req, res, next) => {
    json_database.get({_id: req.params.id}).then(data => {
        if(data.length == 0){
            res.status(404).send('not found');
        }else{
            json_database.delete(req.params.id).then(data => {
                res.send('deleted');
            }).catch(error => {
                next(error);
            })
        }
    }).catch(error => {
        next(error);
    })
}
// exports module
module.exports = controller;