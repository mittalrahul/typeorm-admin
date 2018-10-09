import ColumnConfig from "../type/column";
import AdminMetaData from "../admin-meta-data";

function setDefaultConfig(config, defaultConfig): any {
    let toReturn = {};

    Object.keys(defaultConfig).forEach(key => {
        toReturn[key] = config && (config[key] || defaultConfig[key]);
    });
    
    return toReturn;
};

/**
 * Decorator Factory for Text type column.
 * @param {Object} config
 * @param {boolean} config.required. Default: false
 * @param {boolean} config.multiline. Default: false
 * @param {number} config.maxLength. Default: 200
 * @param {string} config.label. Default: Column Name
 * @param {string} config.hint. Optional
 */
export function TexField(config?: {
    required: boolean,
    multiline: boolean,
    maxLength: number,
    label: string,
    hint: string
}) {
    config = setDefaultConfig(config, {
        required: false,
        multiline: false,
        maxLength: 200,
        label: "",
        type: "text"
    });

    return function(EntityRef, columnName) {
        config.label = config.label || columnName;

        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    };
};

/**
 * Decorator Factory for Number type column.
 * @param {Object} config
 * @param {boolean} config.required: (Default: false),
 * @param {string} config.label: (Default: Column Name),
 * @param {string} config.hint: (Optional),
 * @param {number} config.min: (Optional),
 * @param {number} config.max: (Optional),
 * @param {number} config.default: (Default: 0)
 * }
 */
export function NumberField(config?: {
    required: boolean,
    label: string,
    hint: string,
    min: number,
    max: number,
    default: number
}) {
    config = setDefaultConfig(config, {
        required: false,
        label: "",
        default: 0,
        type: "number"
    });

    return function(EntityRef, columnName) {
        config.label = config.label || columnName;
        
        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    }
};

export function EmailField(config?: {
    required: boolean,
    label: string,
    hint: string
}) {
    config = setDefaultConfig(config, {
        required: false,
        label: "",
        type: "email"
    });

    return function(EntityRef, columnName) {
        config.label  = config.label || columnName;

        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    }
};

export function DropdownField(config?: {
    required: boolean,
    multiple: boolean,
    label: string,
    hint: string,
    options: Array<{label: string, value: any}>
}) {
    config = setDefaultConfig(config, {
        required: false,
        multiple: false,
        label: "",
        options: [],
        type: "dropdown"
    });
    
    return function(EntityRef, columnName) {
        config.label  = config.label || columnName;

        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    }
};

export function DatepickerField(config?: {
    required: boolean,
    label: string,
    hint: string
}) {
    return function(EntityRef, columnName) {
        config.label  = config.label || columnName;

        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    }
};

export function CheckboxField(config?: {
    required: boolean,
    label: string,
    hint: string
}) {
    return function(EntityRef, columnName) {
        config.label  = config.label || columnName;

        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    }
};

export function RadioField(config?: {
    required: boolean,
    label: string,
    hint: string
}) {
    return function(EntityRef, columnName) {
        config.label  = config.label || columnName;

        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    }
};

export function FileField(config?: {
    required: boolean,
    label: string,
    hint: string
}) {
    return function(EntityRef, columnName) {
        config.label  = config.label || columnName;

        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    }
};

export function RelationField(config?: {
    required: boolean,
    label: string,
    hint: string
}) {
    return function(EntityRef, columnName) {
        config.label  = config.label || columnName;

        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    }
};

export function MarkdownField(config?: {
    required: boolean,
    label: string,
    hint: string
}) {
    return function(EntityRef, columnName) {
        config.label  = config.label || columnName;

        AdminMetaData[EntityRef.constructor.name] = AdminMetaData[EntityRef.constructor.name] || {};
        AdminMetaData[EntityRef.constructor.name].columns = AdminMetaData[EntityRef.constructor.name].columns || [];
        
        AdminMetaData[EntityRef.constructor.name].columns.push(config);
    }
};
