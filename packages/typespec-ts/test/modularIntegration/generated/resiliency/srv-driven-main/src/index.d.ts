import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function addOperation(context: ResiliencyServiceDrivenContext, options?: AddOperationOptionalParams): Promise<void>;

export declare interface AddOperationOptionalParams extends OperationOptions {
}

export declare function createResiliencyServiceDriven(endpointParam: string, serviceDeploymentVersion: string, options?: ResiliencyServiceDrivenClientOptionalParams): ResiliencyServiceDrivenContext;

export declare function fromNone(context: ResiliencyServiceDrivenContext, options?: FromNoneOptionalParams): Promise<void>;

export declare interface FromNoneOptionalParams extends OperationOptions {
    newParameter?: string;
}

export declare function fromOneOptional(context: ResiliencyServiceDrivenContext, options?: FromOneOptionalOptionalParams): Promise<void>;

export declare interface FromOneOptionalOptionalParams extends OperationOptions {
    parameter?: string;
    newParameter?: string;
}

export declare function fromOneRequired(context: ResiliencyServiceDrivenContext, parameter: string, options?: FromOneRequiredOptionalParams): Promise<void>;

export declare interface FromOneRequiredOptionalParams extends OperationOptions {
    newParameter?: string;
}

export declare class ResiliencyServiceDrivenClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, serviceDeploymentVersion: string, options?: ResiliencyServiceDrivenClientOptionalParams);
    addOperation(options?: AddOperationOptionalParams): Promise<void>;
    fromNone(options?: FromNoneOptionalParams): Promise<void>;
    fromOneRequired(parameter: string, options?: FromOneRequiredOptionalParams): Promise<void>;
    fromOneOptional(options?: FromOneOptionalOptionalParams): Promise<void>;
}

export declare interface ResiliencyServiceDrivenClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface ResiliencyServiceDrivenContext extends Client {
}

export { }
