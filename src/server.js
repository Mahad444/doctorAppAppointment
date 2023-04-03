require('dotenv').config(); // Load environment variables from .env file
const colors = require('colors'); // Using color for console
const ConnectionDB = require('./Config/connectionDB'); // Connect to database
const express = require('express');
const configViewEngine = require('./Config/viewEngine');
const initWebRoutes = require('./routes/web');

let app = express();

configViewEngine(app);

ConnectionDB(); 

initWebRoutes(app);

let port = process.env.PORT || 6500 ; 

app.listen(port, () => {
    // console using color
    console.log("#".bgBlue+"Stand".bgBlue+"With".bgYellow+"Ukraine".bgYellow);
    // i stand with palestine
    console.log("I".bgRed+"Stand".bgBlack+"With".bgWhite+"Palestine".bgGreen);
    console.log("Black Lives Matter".bgBlack);
    console.log(`App is running on http://localhost:${port}`.black.bgGreen); 
});