const path = require("path"); 
const express = require("express");
const fs = require("fs");
import app from "./middleware/typeorm-admin";
import adminWebapp from "./middleware/webapp";

export default function(authCheck: Function, login: Function, logout: Function, routePrefix="/admin") {
    app.engine("html", function(filepath, options, callback) {
        fs.readFile(filepath, function(error, content) {
            if(error) {
                return callback(error);
            } else {
                var rendered = content.toString().replace(/<routePrefix>/g, options.routePrefix);
                
                return callback(null, rendered);
            }
        });
    });
    
    app.set('views', path.join(__dirname, "./view/"));
    
    app.set("view engine", "html");
    
    app.use(`${routePrefix}/static`, express.static(path.join(__dirname, "./view")));
    
    app.post(`${routePrefix}/login`, login);
    
    app.use(authCheck);
    
    app.get(`${routePrefix}/logout`, logout);

    app.use(routePrefix, adminWebapp(routePrefix));
    
    return app;
};

export {EntityAdmin} from "./decorators/EntityAdmin";
export {ColumnAdmin} from "./decorators/ColumnAdmin";
