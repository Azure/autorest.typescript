import { TestCodeModel } from "@autorest/testmodeler";
import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

export function generateRLCSamples(model: TestCodeModel, project: Project) {
    const {
        generateSample
    } = getAutorestOptions();
    if (!generateSample || !(model as TestCodeModel)?.testModel?.mockTest?.exampleGroups) {
        return;
    }


}