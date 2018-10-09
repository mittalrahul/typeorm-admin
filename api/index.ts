import express from "express";

import entityRoutes from "./entity";
import adminMetaData from "../admin-meta-data";

export default function(authCheckHandler, loginHandler, logoutHandler) {
    var app = express.Router();
    
    app.post("/login", loginHandler);
    app.post("/logout", authCheckHandler, logoutHandler);

    app.get("/get-entity-config", authCheckHandler, (_req, res) => {
        res.json(adminMetaData);
    });

    app.use("/entities", authCheckHandler, entityRoutes);
    
    app.get("*", (req, res) => {
        res.sendStatus(404);
    });

    return app;
};