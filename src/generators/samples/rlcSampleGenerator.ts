import { TestCodeModel } from "@autorest/testmodeler/dist/src/core/model";
import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

export function generateRLCSamples(model: TestCodeModel, project: Project) {
    const {
        generateSample
    } = getAutorestOptions();
    if (!generateSample || !model?.testModel?.mockTest?.exampleGroups) {
        return;
    }


}