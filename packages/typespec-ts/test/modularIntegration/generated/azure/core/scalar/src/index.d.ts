import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface AzureLocationModel {
    location: string;
}

export declare function createScalar(options?: ScalarClientOptionalParams): ScalarContext;

export declare function get(context: ScalarContext, options?: GetOptionalParams): Promise<string>;

export declare interface GetOptionalParams extends OperationOptions {
}

export declare function header(context: ScalarContext, region: string, options?: HeaderOptionalParams): Promise<void>;

export declare interface HeaderOptionalParams extends OperationOptions {
}

export declare function post(context: ScalarContext, body: AzureLocationModel, options?: PostOptionalParams): Promise<AzureLocationModel>;

export declare interface PostOptionalParams extends OperationOptions {
}

export declare function put(context: ScalarContext, body: string, options?: PutOptionalParams): Promise<void>;

export declare interface PutOptionalParams extends OperationOptions {
}

export declare function query(context: ScalarContext, region: string, options?: QueryOptionalParams): Promise<void>;

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

export declare interface ScalarContext extends Client {
}

export { }
