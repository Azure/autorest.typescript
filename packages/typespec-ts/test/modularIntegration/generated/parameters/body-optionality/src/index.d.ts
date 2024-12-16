import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BodyModel {
    name: string;
}

export declare class BodyOptionalityClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: BodyOptionalityClientOptionalParams);
    readonly optionalExplicit: OptionalExplicitOperations;
    requiredImplicit(name: string, options?: RequiredImplicitOptionalParams): Promise<void>;
    requiredExplicit(body: BodyModel, options?: RequiredExplicitOptionalParams): Promise<void>;
}

export declare interface BodyOptionalityClientOptionalParams extends ClientOptions {
}

export declare interface OptionalExplicitOmitOptionalParams extends OperationOptions {
    body?: BodyModel;
    contentType?: "application/json";
}

export declare interface OptionalExplicitOperations {
    omit: (options?: OptionalExplicitOmitOptionalParams) => Promise<void>;
    set: (options?: OptionalExplicitSetOptionalParams) => Promise<void>;
}

export declare interface OptionalExplicitSetOptionalParams extends OperationOptions {
    body?: BodyModel;
    contentType?: "application/json";
}

export declare interface RequiredExplicitOptionalParams extends OperationOptions {
}

export declare interface RequiredImplicitOptionalParams extends OperationOptions {
}

export { }
