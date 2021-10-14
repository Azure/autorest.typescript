export interface SampleDetails {
    clientClassName: string,
    clientPackageName: string,
    operationGroupName: string,
    operationDescription: string,
    operationName: string,
    bodySchemaName: string,
    sampleFunctionName: string,
    bodyParamName: string,
    clientParameterNames: string,
    methodParameterNames: string,
    exampleValue: string,
    hasBody: boolean,
    methodParamAssignments: string[],
    clientParamAssignments: string[],

}