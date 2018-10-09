import _ from "lodash";
import adminMetaData from "../../admin-meta-data";

export function getAllEntities(_req, res) {
    res.json(_.values(adminMetaData).map(obj => ({
        name: obj["name"],
        label: obj["label"]
    })));
}