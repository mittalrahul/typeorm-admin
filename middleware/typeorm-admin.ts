const app = require("express")();

app.get("/typeorm-config", (req, res) => {
    console.log(global["typeormMetadataArgsStorage"]["columns"]);
    res.send(global["typeormMetadataArgsStorage"]);
});

export default app;