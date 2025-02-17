import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group" | "client-operation-group";

export declare class FirstClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: FirstClientOptionalParams);
    readonly group4: Group4Operations;
    readonly group3: Group3Operations;
    one(options?: OneOptionalParams): Promise<void>;
}

export declare interface FirstClientOptionalParams extends ClientOptions {
}

export declare interface FiveOptionalParams extends OperationOptions {
}

export declare interface Group3Operations {
    three: (options?: Group3ThreeOptionalParams) => Promise<void>;
    two: (options?: Group3TwoOptionalParams) => Promise<void>;
}

export declare interface Group3ThreeOptionalParams extends OperationOptions {
}

export declare interface Group3TwoOptionalParams extends OperationOptions {
}

export declare interface Group4FourOptionalParams extends OperationOptions {
}

export declare interface Group4Operations {
    four: (options?: Group4FourOptionalParams) => Promise<void>;
}

export declare interface Group5Operations {
    six: (options?: Group5SixOptionalParams) => Promise<void>;
}

export declare interface Group5SixOptionalParams extends OperationOptions {
}

export declare interface OneOptionalParams extends OperationOptions {
}

export declare class SecondClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: SecondClientOptionalParams);
    readonly group5: Group5Operations;
    five(options?: FiveOptionalParams): Promise<void>;
}

export declare interface SecondClientOptionalParams extends ClientOptions {
}

export { }
