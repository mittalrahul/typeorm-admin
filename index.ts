import express from "express";
import path from "path"; 
import fs from "fs";

import adminMetaData from "./admin-meta-data";
import adminWebapp from "./middleware/webapp";
import apiRoutesFactory from "./api";

export default function(connectionObj: any, authCheck: Function, login: Function, logout: Function, routePrefix="/admin") {
    const app = express();
    adminMetaData.connection = connectionObj;
    
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
    
    app.use(`${routePrefix}/api`, apiRoutesFactory(authCheck, login, logout));
    
    // Serve webapp
    app.use(`${routePrefix}/static`, express.static(path.join(__dirname, "./view")));
    app.use(routePrefix, adminWebapp(routePrefix));
    
    return app;
};

export {EntityAdmin} from "./decorators/EntityAdmin";
export * from "./decorators/ColumnAdmin";
