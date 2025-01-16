import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group" | "client-operation-group";

export declare interface Group1FourOptionalParams extends OperationOptions {
}

export declare interface Group1OneOptionalParams extends OperationOptions {
}

export declare interface Group1Operations {
    four: (options?: Group1FourOptionalParams) => Promise<void>;
    three: (options?: Group1ThreeOptionalParams) => Promise<void>;
    one: (options?: Group1OneOptionalParams) => Promise<void>;
}

export declare interface Group1ThreeOptionalParams extends OperationOptions {
}

export declare interface Group2FiveOptionalParams extends OperationOptions {
}

export declare interface Group2Operations {
    six: (options?: Group2SixOptionalParams) => Promise<void>;
    five: (options?: Group2FiveOptionalParams) => Promise<void>;
    two: (options?: Group2TwoOptionalParams) => Promise<void>;
}

export declare interface Group2SixOptionalParams extends OperationOptions {
}

export declare interface Group2TwoOptionalParams extends OperationOptions {
}

export declare class TwoOperationGroupClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: TwoOperationGroupClientOptionalParams);
    readonly group2: Group2Operations;
    readonly group1: Group1Operations;
}

export declare interface TwoOperationGroupClientOptionalParams extends ClientOptions {
}

export { }
