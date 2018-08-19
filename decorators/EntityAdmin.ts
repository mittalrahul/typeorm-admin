import EntityConfig from "../type/entity";
import AdminMetaData from "../admin-meta-data";

export function EntityAdmin(config?: EntityConfig) {
    config = config || {} as EntityConfig;

    delete config.name;
    delete config.ref;
    
    return function(target) {
        var entityConfig = new EntityConfig();
        entityConfig.ref = target;
        entityConfig.name = target.name;
        entityConfig.label = config.label || target.name;
        entityConfig.columns = AdminMetaData[entityConfig.label].columns;

        AdminMetaData[entityConfig.label] = entityConfig;
    };
};