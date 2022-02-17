export interface SampleGroup {
    sampleFileName: string,
    hasBody: boolean,
    bodySchemaNames: string[],
    clientClassName: string,
    clientPackageName: string,
    samples: SampleDetails[],
}

export interface SampleDetails {
    sampleFunctionName: string,
    clientParameterNames: string,
    methodParameterNames: string,
    clientParamAssignments: string[],
    methodParamAssignments: string[],
    originalFileLocation?: string,
    operationName: string,
    isTopLevel: boolean,
    isPaging: boolean,
    operationGroupName: string,
    operationDescription: string,
    clientClassName: string,
}