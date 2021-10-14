import { CodeModel, SchemaType } from "@autorest/codemodel";
import { ClientOptions } from "../models/clientDetails";
import { SampleDetails } from "../models/sampleDetails";
import { TestCodeModel } from "@autorest/tests/dist/src/core/model"
import { getLanguageMetadata } from "../utils/languageHelpers";
import { getAutorestOptions } from "../autorestSession";

export function transformSamples(
    codeModel: CodeModel,
    options: ClientOptions
): SampleDetails[] {
    return getAllExamples(codeModel);
}

export function getAllExamples(codeModel: TestCodeModel) {
    const { packageDetails } = getAutorestOptions();
    let examplesModels: SampleDetails[] = [];
    if (codeModel?.testModel?.mockTest?.exampleGroups !== undefined) {
        for(const exampleGroups of codeModel.testModel.mockTest.exampleGroups) {
            for(const example of exampleGroups.examples) {
                const sample: SampleDetails = {
                    operationDescription: getLanguageMetadata(example.operation.language).description,
                    operationName: getLanguageMetadata(example.operation.language).name,
                    operationGroupName: getLanguageMetadata(example.operationGroup.language).name,
                    clientClassName: getLanguageMetadata(codeModel.language).name,
                    clientPackageName: packageDetails.name,
                    clientParameterNames: "",
                    methodParameterNames: "",
                    bodySchemaName: "",
                    sampleFunctionName: example.name,
                    bodyParamName: "",
                    exampleValue: "",

                }
                const clientParameterNames = [];
                for(const clientParameter of example.clientParameters) {
                    if (clientParameter.exampleValue.schema.type === SchemaType.Constant) {
                        continue;
                    }
                    clientParameterNames.push(getLanguageMetadata(clientParameter.exampleValue.language).name);
                }
                if (clientParameterNames.length > 0) {
                    sample.clientParameterNames = clientParameterNames.join(", ");
                }
                const methodParameterNames = []
                for(const methodParameter of example.methodParameters) {
                    if (methodParameter.exampleValue.schema.type === SchemaType.Constant) {
                        continue;
                    }
                    methodParameterNames.push(getLanguageMetadata(methodParameter.exampleValue.language).name);
                }
                if (methodParameterNames.length > 0) {
                    sample.methodParameterNames = methodParameterNames.join(", ");
                }
                examplesModels.push(sample);
            }
            
        }        
    }
    return examplesModels;
}
