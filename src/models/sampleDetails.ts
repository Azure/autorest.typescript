export interface SampleDetails {
    sampleFileName: string,
    clientClassName: string,
    clientPackageName: string,
    operationGroupName: string,
    operationDescription: string,
    hasBody: boolean,
    hasOptional: boolean,
    bodySchemaNames: string[],
    operationName: string,
    samples: SampleElement[],
    isTopLevel: boolean,
    isPaging: boolean,
}

export interface SampleElement {
    sampleFunctionName: string,
    clientParameterNames: string,
    methodParameterNames: string,
    clientParamAssignments: string[],
    methodParamAssignments: string[],
    originalFileLocation?: string
}