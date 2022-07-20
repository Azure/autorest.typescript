export interface SampleGroup {
    sampleFileName: string,
    clientFactoryFuncName: string;
    clientClassName: string,
    clientPackageName: string,
    samples: SampleDetails[],
    importedTypes?: string[],
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