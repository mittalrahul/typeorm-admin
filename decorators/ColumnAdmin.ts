import ColumnConfig from "../type/column";
import AdminMetaData from "../admin-meta-data";

export function ColumnAdmin(config?: ColumnConfig) {
    config = config || {} as ColumnConfig;

    return function(target, columnName) {
        var columnConfig = new ColumnConfig();
        columnConfig.name = columnName;
        columnConfig.label = config.label || columnName;
        columnConfig.setType(config.type);

        AdminMetaData[target.constructor.name] = AdminMetaData[target.constructor.name] || {};
        AdminMetaData[target.constructor.name].columns = AdminMetaData[target.constructor.name].columns || [];
        
        AdminMetaData[target.constructor.name].columns.push(columnConfig);
    };
};