import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare interface AzureLocationModel {
    location: string;
}

export declare interface GetOptionalParams extends OperationOptions {
}

export declare type GetResponse = {
    body: string;
};

export declare interface HeaderOptionalParams extends OperationOptions {
}

export { isRestError }

export declare enum KnownVersions {
    V20221201Preview = "2022-12-01-preview"
}

export declare interface PostOptionalParams extends OperationOptions {
}

export declare interface PutOptionalParams extends OperationOptions {
}

export declare interface QueryOptionalParams extends OperationOptions {
}

export { RestError }

export declare class ScalarClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ScalarClientOptionalParams);
    query(region: string, options?: QueryOptionalParams): Promise<void>;
    header(region: string, options?: HeaderOptionalParams): Promise<void>;
    post(body: AzureLocationModel, options?: PostOptionalParams): Promise<AzureLocationModel>;
    put(body: string, options?: PutOptionalParams): Promise<void>;
    get(options?: GetOptionalParams): Promise<GetResponse>;
}

export declare interface ScalarClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export { }
