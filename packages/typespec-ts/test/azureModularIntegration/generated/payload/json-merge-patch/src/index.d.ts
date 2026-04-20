import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface CreateResourceOptionalParams extends OperationOptions {
}

export declare interface InnerModel {
    name?: string;
    description?: string;
}

export declare class JsonMergePatchClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: JsonMergePatchClientOptionalParams);
    updateOptionalResource(options?: UpdateOptionalResourceOptionalParams): Promise<Resource>;
    updateResource(body: ResourcePatch, options?: UpdateResourceOptionalParams): Promise<Resource>;
    createResource(body: Resource, options?: CreateResourceOptionalParams): Promise<Resource>;
}

export declare interface JsonMergePatchClientOptionalParams extends ClientOptions {
}

export declare interface Resource {
    name: string;
    description?: string;
    map?: Record<string, InnerModel>;
    array?: InnerModel[];
    intValue?: number;
    floatValue?: number;
    innerModel?: InnerModel;
    intArray?: number[];
}

export declare interface ResourcePatch {
    description?: string;
    map?: Record<string, InnerModel>;
    array?: InnerModel[];
    intValue?: number;
    floatValue?: number;
    innerModel?: InnerModel;
    intArray?: number[];
}

export declare interface UpdateOptionalResourceOptionalParams extends OperationOptions {
    body?: ResourcePatch;
}

export declare interface UpdateResourceOptionalParams extends OperationOptions {
}

export { }
