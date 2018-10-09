import express from "express";
import AdminMetaData from "../admin-meta-data";

const app = express();

app.get("/typeorm-config", (req, res) => {
    // console.log(global["typeormMetadataArgsStorage"]["columns"]);
    console.log(AdminMetaData);
    res.send(AdminMetaData);
});

export default app;