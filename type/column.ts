const fieldTypes = [
    "text",
    "email",
    "number",
    "select",
    "datepicker",
    "textarea",
    "checkbox",
    "radio",
    "file",
    "markdown-editor",
    "relation"
];

class ColumnConfig {
    type: string;
    label: string;
    name: string;
    field: string;
    options?: Array<any>;
    
    constructor() {
        this.type = "text";
    }

    setType(type: string) {
        this.type = fieldTypes.indexOf(type) >= 0 ? type : "text";
    }
};

export default ColumnConfig;