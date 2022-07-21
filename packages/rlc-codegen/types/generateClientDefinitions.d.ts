import { Paths } from "./interfaces.js";
export interface RLCModel {
    libraryName: string;
    srcPath: string;
    paths: Paths;
}
export declare function buildClientDefinitions(model: RLCModel, options: {
    importedParameters: Set<string>;
    importedResponses: Set<string>;
    clientImports: Set<string>;
}): {
    path: string;
    content: string;
};
