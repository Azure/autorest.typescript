import { CodeModel } from "@autorest/codemodel";
import { ClientOptions } from "../models/clientDetails";
import { ExampleModel, TestCodeModel } from "@autorest/tests/dist/src/core/model"

export function transformSamples(
    codeModel: CodeModel,
    options: ClientOptions
): ExampleModel[] {
    return getAllExamples(codeModel);
}

export function getAllExamples(codeModel: TestCodeModel) {
    let examplesModels: ExampleModel[] = [];
    if (codeModel?.testModel?.mockTest?.exampleGroups !== undefined) {
        for(const exampleGroups of codeModel.testModel.mockTest.exampleGroups) {
            examplesModels = examplesModels.concat(exampleGroups.examples);
        }        
    }
    return examplesModels;
}
