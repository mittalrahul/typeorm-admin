import ColumnConfig from "./column";

class EntityConfig {
    label: string;
    name: string;
    ref: Function;
    columns: Array<ColumnConfig>;
};

export default EntityConfig;