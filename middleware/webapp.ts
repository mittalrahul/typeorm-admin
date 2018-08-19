import { readFileSync } from 'fs';
const fs = require("fs");
const path = require("path"); 
const express = require("express");
const app = express();

const template = readFileSync(path.join(__dirname, "../view/index.html")).toString();

export default function(routePrefix) {
    app.engine("html", function(filepath, options, callback) {
        fs.readFile(filepath, function(error, content) {
            if(error) {
                return callback(error);
            } else {
                var rendered = content.toString().replace("<routePrefix>", options.routePrefix);
                
                return callback(null, rendered);
            }
        });
    });
    
    app.set('views', path.join(__dirname, "../view/"));
    
    app.set("view engine", "html");
    
    app.use('*.*', express.static(path.join(__dirname, "../view/")));
    
    app.get("*", (req, res) => {
        res.render("index", {
            routePrefix: routePrefix
        });
    });

    return app;
};