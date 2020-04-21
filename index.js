const express = require("express");
const app = express();

require('dotenv').config()
conf = {
    port: parseInt( process.env.DEPLOY_PORT) ,
};

app.get("", function (req, res) {
    return res.send({
        "message" : "deployed at heroku"
    })
})


app.listen(  conf.port, function () {
    console.log(`Listening to port ${conf.port}`);
})