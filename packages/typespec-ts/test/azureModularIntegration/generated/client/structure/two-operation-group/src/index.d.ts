import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group" | "client-operation-group";

export declare interface FiveOptionalParams extends OperationOptions {
}

export declare interface FourOptionalParams extends OperationOptions {
}

export declare interface OneOptionalParams extends OperationOptions {
}

export declare interface SixOptionalParams extends OperationOptions {
}

export declare interface ThreeOptionalParams extends OperationOptions {
}

export declare class TwoOperationGroupClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: TwoOperationGroupClientOptionalParams);
    six(options?: SixOptionalParams): Promise<void>;
    five(options?: FiveOptionalParams): Promise<void>;
    two(options?: TwoOptionalParams): Promise<void>;
    four(options?: FourOptionalParams): Promise<void>;
    three(options?: ThreeOptionalParams): Promise<void>;
    one(options?: OneOptionalParams): Promise<void>;
}

export declare interface TwoOperationGroupClientOptionalParams extends ClientOptions {
}

export declare interface TwoOptionalParams extends OperationOptions {
}

export { }
