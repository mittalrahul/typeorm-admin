const express = require("express");
const app = express.Router();

export default function(routePrefix) {    
    app.get("*", (req, res) => {
        res.render("index", {
            routePrefix: routePrefix
        });
    });

    return app;
};