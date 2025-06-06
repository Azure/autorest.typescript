import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface BodyModel {
    name: string;
}

export declare class BodyOptionalityClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: BodyOptionalityClientOptionalParams);
    requiredImplicit(name: string, options?: RequiredImplicitOptionalParams): Promise<void>;
    requiredExplicit(body: BodyModel, options?: RequiredExplicitOptionalParams): Promise<void>;
    readonly optionalExplicit: OptionalExplicitOperations;
}

export declare interface BodyOptionalityClientOptionalParams extends ClientOptions {
}

export declare interface OptionalExplicitOmitOptionalParams extends OperationOptions {
    body?: BodyModel;
}

export declare interface OptionalExplicitOperations {
    omit: (options?: OptionalExplicitOmitOptionalParams) => Promise<void>;
    set: (options?: OptionalExplicitSetOptionalParams) => Promise<void>;
}

export declare interface OptionalExplicitSetOptionalParams extends OperationOptions {
    body?: BodyModel;
}

export declare interface RequiredExplicitOptionalParams extends OperationOptions {
}

export declare interface RequiredImplicitOptionalParams extends OperationOptions {
}

export { }
