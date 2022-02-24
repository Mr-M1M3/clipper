/*
 * Project: JSON Hero
 * Author Abir SHeikh
 * Date: Feb 3, 2022
 */

// require modules
const express = require('express');
const CONFIG = require('./private/config/config');
const user = require('./private/routers/user');
const json = require('./private/routers/json');
const cookie_parser = require('cookie-parser');

// handling exception that might happen
if(!CONFIG.PORT){
    throw new Error(`Expected PORT number at CONFIG file`);
}

// initialize server
const server = express();

// static files provider
server.use(express.static('./frontend/public'));

// parsers
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cookie_parser());

// routes
server.use('/user', user);
server.use('/json', json);

// 404 handler
server.use((req, res, next) => {
    res.status(404).send('not found');
});

// handling errors
server.use((error, req, res, next) => {
    if(error.status == 400){
            res.status(400).send('invalid data');
    }else{
        console.log(error);
        res.status(500).send('internal server error');
    }
})

// listens to server
server.listen(CONFIG.PORT, (error) => {
    if(error){
        console.error(error.message);
    }else{
        console.log(`Server listening at port ${CONFIG.PORT}`);
    }
})