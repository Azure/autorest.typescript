import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface AzureLocationModel {
    location: string;
}

export declare interface GetOptionalParams extends OperationOptions {
}

export declare interface HeaderOptionalParams extends OperationOptions {
}

export declare enum KnownVersions {
    v2022_12_01_preview = "2022-12-01-preview"
}

export declare interface PostOptionalParams extends OperationOptions {
    contentType?: "application/json";
}

export declare interface PutOptionalParams extends OperationOptions {
    contentType?: "application/json";
}

export declare interface QueryOptionalParams extends OperationOptions {
}

export declare class ScalarClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ScalarClientOptionalParams);
    query(region: string, options?: QueryOptionalParams): Promise<void>;
    header(region: string, options?: HeaderOptionalParams): Promise<void>;
    post(body: AzureLocationModel, options?: PostOptionalParams): Promise<AzureLocationModel>;
    put(body: string, options?: PutOptionalParams): Promise<void>;
    get(options?: GetOptionalParams): Promise<string>;
}

export declare interface ScalarClientOptionalParams extends ClientOptions {
}

export { }
