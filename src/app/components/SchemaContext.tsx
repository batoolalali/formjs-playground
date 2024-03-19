'use client';

import { createContext, useContext, useState } from 'react';

const SchemaContext = createContext<any>(null);

export const SchemaProvider: React.FC<any> = ({ children }) => {
    const [schema, setSchema] = useState<any>({
        "components": [
        ],
        "schemaVersion": 15,
        "exporter": {
            "name": "Avertra  Editor",
            "version": "1.0.0"
        },
        "type": "default",
        "id": "Form_1v99ha5",
        "executionPlatform": "Camunda Platform",
        "executionPlatformVersion": "7.16.0"
    }
    );
    return (
        <SchemaContext.Provider value={{ schema, setSchema }}>
            {children}
        </SchemaContext.Provider>
    );
};

export const useSchema = () => {
    return useContext(SchemaContext);
};