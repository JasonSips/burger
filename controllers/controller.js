// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

// dependencies
var express = require("express");
var router = express.Router();
// creates our index route
router.get("/" , function(req, res){
    res.render("index");
});
// export routes 
module.exports = router;