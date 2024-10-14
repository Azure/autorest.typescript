import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BarFiveOptionalParams extends OperationOptions {
}

export declare interface BarOperations {
    five: (options?: BarFiveOptionalParams) => Promise<void>;
    six: (options?: BarSixOptionalParams) => Promise<void>;
}

export declare interface BarSixOptionalParams extends OperationOptions {
}

export declare interface BazFooOperations {
    seven: (options?: BazFooSevenOptionalParams) => Promise<void>;
}

export declare interface BazFooSevenOptionalParams extends OperationOptions {
}

export declare interface BazOperations {
    foo: BazFooOperations;
}

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group" | "client-operation-group";

export declare interface FooFourOptionalParams extends OperationOptions {
}

export declare interface FooOperations {
    three: (options?: FooThreeOptionalParams) => Promise<void>;
    four: (options?: FooFourOptionalParams) => Promise<void>;
}

export declare interface FooThreeOptionalParams extends OperationOptions {
}

export declare interface OneOptionalParams extends OperationOptions {
}

export declare interface QuxBarNineOptionalParams extends OperationOptions {
}

export declare interface QuxBarOperations {
    nine: (options?: QuxBarNineOptionalParams) => Promise<void>;
}

export declare interface QuxEightOptionalParams extends OperationOptions {
}

export declare interface QuxOperations {
    eight: (options?: QuxEightOptionalParams) => Promise<void>;
    bar: QuxBarOperations;
}

export declare class ServiceClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: ServiceClientOptionalParams);
    one(options?: OneOptionalParams): Promise<void>;
    two(options?: TwoOptionalParams): Promise<void>;
    readonly baz: BazOperations;
    readonly qux: QuxOperations;
    readonly foo: FooOperations;
    readonly bar: BarOperations;
}

export declare interface ServiceClientOptionalParams extends ClientOptions {
}

export declare interface TwoOptionalParams extends OperationOptions {
}

export { }
