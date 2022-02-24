export interface SampleDetails {
    clientClassName: string,
    clientPackageName: string,
    operationGroupName: string,
    operationDescription: string,
    operationName: string,
    hasBody: boolean,
    hasOptional: boolean,
    bodySchemaName: string,
    sampleFunctionName: string,
    clientParameterNames: string,
    methodParameterNames: string,
    methodParamAssignments: string[],
    clientParamAssignments: string[],
    isTopLevel: boolean,
    isPaging: boolean,
    originalFileLocation?: string
    isAnyTypeBody?: boolean,
    importedTypes?: string[]
}