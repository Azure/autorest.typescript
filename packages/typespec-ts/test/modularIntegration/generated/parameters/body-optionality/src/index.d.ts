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
    requiredExplicit(body: BodyModel, options?: RequiredExplicitOptionalParams): Promise<void>;
    requiredImplicit(name: string, options?: RequiredImplicitOptionalParams): Promise<void>;
    readonly optionalExplicit: OptionalExplicitOperations;
}

export declare interface BodyOptionalityClientOptionalParams extends ClientOptions {
}

export declare interface OptionalExplicitOmitOptionalParams extends OperationOptions {
    body?: BodyModel;
}

export declare interface OptionalExplicitOperations {
    set: (options?: OptionalExplicitSetOptionalParams) => Promise<void>;
    omit: (options?: OptionalExplicitOmitOptionalParams) => Promise<void>;
}

export declare interface OptionalExplicitSetOptionalParams extends OperationOptions {
    body?: BodyModel;
}

export declare interface RequiredExplicitOptionalParams extends OperationOptions {
}

export declare interface RequiredImplicitOptionalParams extends OperationOptions {
}

export { }
