import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group" | "client-operation-group";

export declare class FirstClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: FirstClientOptionalParams);
    four(options?: FourOptionalParams): Promise<void>;
    three(options?: ThreeOptionalParams): Promise<void>;
    two(options?: TwoOptionalParams): Promise<void>;
    one(options?: OneOptionalParams): Promise<void>;
}

export declare interface FirstClientOptionalParams extends ClientOptions {
}

export declare interface FiveOptionalParams extends OperationOptions {
}

export declare interface FourOptionalParams extends OperationOptions {
}

export declare interface OneOptionalParams extends OperationOptions {
}

export declare class SecondClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: SecondClientOptionalParams);
    six(options?: SixOptionalParams): Promise<void>;
    five(options?: FiveOptionalParams): Promise<void>;
}

export declare interface SecondClientOptionalParams extends ClientOptions {
}

export declare interface SixOptionalParams extends OperationOptions {
}

export declare interface ThreeOptionalParams extends OperationOptions {
}

export declare interface TwoOptionalParams extends OperationOptions {
}

export { }
