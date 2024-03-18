import { OpenAIContext } from "../../api/OpenAIContext.js";
import { ListModelsResponse, Model, DeleteModelResponse } from "../../models/models.js";
import { ModelsListOptions, ModelsRetrieveOptions, ModelsDeleteOperationOptions } from "../../models/options.js";
export interface ModelsOperations {
    list: (options?: ModelsListOptions) => Promise<ListModelsResponse>;
    retrieve: (model: string, options?: ModelsRetrieveOptions) => Promise<Model>;
    deleteOperation: (model: string, options?: ModelsDeleteOperationOptions) => Promise<DeleteModelResponse>;
}
export declare function getModels(context: OpenAIContext): {
    list: (options?: ModelsListOptions) => Promise<ListModelsResponse>;
    retrieve: (model: string, options?: ModelsRetrieveOptions) => Promise<Model>;
    deleteOperation: (model: string, options?: ModelsDeleteOperationOptions) => Promise<DeleteModelResponse>;
};
export declare function getModelsOperations(context: OpenAIContext): ModelsOperations;
//# sourceMappingURL=index.d.ts.map