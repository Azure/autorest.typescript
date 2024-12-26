import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface AzureEmbeddingModel {
    embedding: number[];
}

export declare interface GetOptionalParams extends OperationOptions {
}

export declare enum KnownVersions {
    v2022_12_01_preview = "2022-12-01-preview"
}

export declare class ModelClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ModelClientOptionalParams);
    post(body: AzureEmbeddingModel, options?: PostOptionalParams): Promise<AzureEmbeddingModel>;
    put(body: number[], options?: PutOptionalParams): Promise<void>;
    get(options?: GetOptionalParams): Promise<number[]>;
}

export declare interface ModelClientOptionalParams extends ClientOptions {
}

export declare interface PostOptionalParams extends OperationOptions {
}

export declare interface PutOptionalParams extends OperationOptions {
}

export { }
