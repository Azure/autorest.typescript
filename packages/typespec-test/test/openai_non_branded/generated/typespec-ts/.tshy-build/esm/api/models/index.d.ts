import { ListModelsResponse, Model, DeleteModelResponse } from "../../models/models.js";
import { ModelsDeleteOperation200Response, ModelsDeleteOperationDefaultResponse, ModelsList200Response, ModelsListDefaultResponse, ModelsRetrieve200Response, ModelsRetrieveDefaultResponse, OpenAIContext as Client } from "../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { ModelsListOptions, ModelsRetrieveOptions, ModelsDeleteOperationOptions } from "../../models/options.js";
export declare function _listSend(context: Client, options?: ModelsListOptions): StreamableMethod<ModelsList200Response | ModelsListDefaultResponse>;
export declare function _listDeserialize(result: ModelsList200Response | ModelsListDefaultResponse): Promise<ListModelsResponse>;
export declare function list(context: Client, options?: ModelsListOptions): Promise<ListModelsResponse>;
export declare function _retrieveSend(context: Client, model: string, options?: ModelsRetrieveOptions): StreamableMethod<ModelsRetrieve200Response | ModelsRetrieveDefaultResponse>;
export declare function _retrieveDeserialize(result: ModelsRetrieve200Response | ModelsRetrieveDefaultResponse): Promise<Model>;
export declare function retrieve(context: Client, model: string, options?: ModelsRetrieveOptions): Promise<Model>;
export declare function _deleteOperationSend(context: Client, model: string, options?: ModelsDeleteOperationOptions): StreamableMethod<ModelsDeleteOperation200Response | ModelsDeleteOperationDefaultResponse>;
export declare function _deleteOperationDeserialize(result: ModelsDeleteOperation200Response | ModelsDeleteOperationDefaultResponse): Promise<DeleteModelResponse>;
export declare function deleteOperation(context: Client, model: string, options?: ModelsDeleteOperationOptions): Promise<DeleteModelResponse>;
//# sourceMappingURL=index.d.ts.map