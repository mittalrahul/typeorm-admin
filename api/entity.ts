import express from "express";

import {getAllEntities, getRows, createRow} from "./controllers";

const app = express.Router();

app.get("/", getAllEntities);

app.route("/:entityName")
    .get(getRows)
    .post(createRow);

export default app;