// const express = require('express');
import express from 'express';
const homePageController = require('../controllers/homePageController');

// init all web pages

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homePageController.getHomePage); 
    return app.use('/', router);
};



module.exports = initWebRoutes;