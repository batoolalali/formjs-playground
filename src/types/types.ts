export interface Component{
    id: string,
    key?: string,
    label: string,
    layout: Layout,
    type: string,
    description?: string,
    action?: string,
    serializeToString?: boolean,
    validate? : Validate,
    defaultValue? : any,
    decimalDigits? : number,
    increment? : string,
    disabled? : boolean,
    readonly? : boolean,
    conditional? : Conditional,
    appearance?: Appearance,
    properties?: any,
    dateLabel?: string,
    disallowPassedDates? : boolean,
    valuesKey? : string,
    valuesExpression?: string,
    values?: any,
    text?: string,
    alt?: string,
    source?: string,
    rowCount?: number,
    dataSource?: string,
    columns?: Columns,

}

export interface Columns{
    label: string,
    key: string,
}

export interface Appearance{
    prefixAdorner?: string,
    suffixAdorner?: string,
}

export interface Conditional{
    hide: string,
}

export interface Validate{
    required?: boolean,
    pattern?: string,
    min?: number,
    max?: number,
    minLength?: number,
    maxLength?: number,

}

export interface Layout{
    row: string,
    columns: number | null
}


export interface Exporter{
    name: string,
    version: string,
}


export interface Schema{
    components: Component[],
    executionPlatform?: string,
    executionPlatformVersion?: string,
    exporter?: Exporter,
    id: string,
    schemaVersion?: number,
    type:string
}
