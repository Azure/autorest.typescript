import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface AzureEmbeddingModel {
    embedding: number[];
}

export declare function createModel(options?: ModelClientOptionalParams): ModelContext;

export declare function get(context: ModelContext, options?: GetOptionalParams): Promise<number[]>;

export declare interface GetOptionalParams extends OperationOptions {
}

export declare class ModelClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ModelClientOptionalParams);
    get(options?: GetOptionalParams): Promise<number[]>;
    put(body: number[], options?: PutOptionalParams): Promise<void>;
    post(body: AzureEmbeddingModel, options?: PostOptionalParams): Promise<AzureEmbeddingModel>;
}

export declare interface ModelClientOptionalParams extends ClientOptions {
}

export declare interface ModelContext extends Client {
}

export declare function post(context: ModelContext, body: AzureEmbeddingModel, options?: PostOptionalParams): Promise<AzureEmbeddingModel>;

export declare interface PostOptionalParams extends OperationOptions {
}

export declare function put(context: ModelContext, body: number[], options?: PutOptionalParams): Promise<void>;

export declare interface PutOptionalParams extends OperationOptions {
}

export declare type Versions = "2022-12-01-preview";

export { }
