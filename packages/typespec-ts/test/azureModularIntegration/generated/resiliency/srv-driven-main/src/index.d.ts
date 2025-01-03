import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface AddOperationOptionalParams extends OperationOptions {
}

export declare interface FromNoneOptionalParams extends OperationOptions {
    newParameter?: string;
}

export declare interface FromOneOptionalOptionalParams extends OperationOptions {
    parameter?: string;
    newParameter?: string;
}

export declare interface FromOneRequiredOptionalParams extends OperationOptions {
    newParameter?: string;
}

export declare enum KnownVersions {
    v1 = "v1",
    v2 = "v2"
}

export declare class ResiliencyServiceDrivenClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, serviceDeploymentVersion: string, options?: ResiliencyServiceDrivenClientOptionalParams);
    fromOneOptional(options?: FromOneOptionalOptionalParams): Promise<void>;
    fromOneRequired(parameter: string, options?: FromOneRequiredOptionalParams): Promise<void>;
    fromNone(options?: FromNoneOptionalParams): Promise<void>;
    addOperation(options?: AddOperationOptionalParams): Promise<void>;
}

export declare interface ResiliencyServiceDrivenClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export { }
