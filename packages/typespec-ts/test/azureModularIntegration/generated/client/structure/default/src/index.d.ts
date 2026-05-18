import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

declare interface BarFiveOptionalParams extends OperationOptions {
}

export declare interface BarOperations {
    six: (options?: BarSixOptionalParams) => Promise<void>;
    five: (options?: BarFiveOptionalParams) => Promise<void>;
}

declare interface BarSixOptionalParams extends OperationOptions {
}

export declare interface BazFooOperations {
    seven: (options?: BazFooSevenOptionalParams) => Promise<void>;
}

declare interface BazFooSevenOptionalParams extends OperationOptions {
}

export declare interface BazOperations {
    foo: BazFooOperations;
}

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group" | "client-operation-group";

declare interface FooFourOptionalParams extends OperationOptions {
}

export declare interface FooOperations {
    four: (options?: FooFourOptionalParams) => Promise<void>;
    three: (options?: FooThreeOptionalParams) => Promise<void>;
}

declare interface FooThreeOptionalParams extends OperationOptions {
}

export { isRestError }

export declare interface OneOptionalParams extends OperationOptions {
}

declare interface QuxBarNineOptionalParams extends OperationOptions {
}

export declare interface QuxBarOperations {
    nine: (options?: QuxBarNineOptionalParams) => Promise<void>;
}

declare interface QuxEightOptionalParams extends OperationOptions {
}

export declare interface QuxOperations {
    bar: QuxBarOperations;
    eight: (options?: QuxEightOptionalParams) => Promise<void>;
}

export { RestError }

export declare class ServiceClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: ServiceClientOptionalParams);
    readonly bar: BarOperations;
    readonly foo: FooOperations;
    readonly qux: QuxOperations;
    readonly baz: BazOperations;
    two(options?: TwoOptionalParams): Promise<void>;
    one(options?: OneOptionalParams): Promise<void>;
}

export declare interface ServiceClientOptionalParams extends ClientOptions {
}

export declare interface TwoOptionalParams extends OperationOptions {
}

export { }
