import adminMetaData from "../../admin-meta-data";

export function getRows(req, res) {
    adminMetaData.connection.getRepository(req.params.entityName).find().then(rows => {
        res.json({
            count: rows.length,
            items: rows
        });
    });
};

export function createRow(req, res) {
    console.log(req.body);
    res.status(201).json({
        message: `${req.params.entityName} created successfully`,
        data: req.body
    });
};
