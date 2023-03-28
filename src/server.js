require('dotenv').config(); // Load environment variables from .env file
const colors = require('colors'); // Using color for console

const express = require('express');
const configViewEngine = require('./Config/viewEngine');
const initWebRoutes = require('./routes/web');

let app = express();

configViewEngine(app);

initWebRoutes(app);

let port = process.env.PORT || 6500 ;

app.listen(port, () => {
    // console using color
    console.log(`App is running on http://localhost:${port}`.yellow.bgWhite);
});