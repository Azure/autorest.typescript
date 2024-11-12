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
    V20221201Preview = "2022-12-01-preview"
}

export declare interface PostOptionalParams extends OperationOptions {
}

export declare interface PutOptionalParams extends OperationOptions {
}

export declare interface QueryOptionalParams extends OperationOptions {
}

export declare class ScalarClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ScalarClientOptionalParams);
    get(options?: GetOptionalParams): Promise<string>;
    put(body: string, options?: PutOptionalParams): Promise<void>;
    post(body: AzureLocationModel, options?: PostOptionalParams): Promise<AzureLocationModel>;
    header(region: string, options?: HeaderOptionalParams): Promise<void>;
    query(region: string, options?: QueryOptionalParams): Promise<void>;
}

export declare interface ScalarClientOptionalParams extends ClientOptions {
}

export { }
