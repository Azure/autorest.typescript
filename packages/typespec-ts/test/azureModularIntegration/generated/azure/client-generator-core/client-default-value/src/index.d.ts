import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ClientDefaultValueClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientDefaultValueClientOptionalParams);
    getHeaderParameter(options?: GetHeaderParameterOptionalParams): Promise<void>;
    getPathParameter(segment1: string, segment2: string, options?: GetPathParameterOptionalParams): Promise<void>;
    getOperationParameter(name: string, options?: GetOperationParameterOptionalParams): Promise<void>;
    putModelProperty(body: ModelWithDefaultValues, options?: PutModelPropertyOptionalParams): Promise<ModelWithDefaultValues>;
}

export declare interface ClientDefaultValueClientOptionalParams extends ClientOptions {
}

export declare interface GetHeaderParameterOptionalParams extends OperationOptions {
    accept?: string;
    customHeader?: string;
}

export declare interface GetOperationParameterOptionalParams extends OperationOptions {
    pageSize?: number;
    format?: string;
}

export declare interface GetPathParameterOptionalParams extends OperationOptions {
    segment1?: string;
}

export declare interface ModelWithDefaultValues {
    name: string;
    timeout?: number;
    tier?: string;
    retry?: boolean;
}

export declare interface PutModelPropertyOptionalParams extends OperationOptions {
}

export { }
