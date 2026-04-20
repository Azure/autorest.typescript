import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BarOperations {
    test: (options?: BarTestOptionalParams) => Promise<void>;
}

export declare interface BarTestOptionalParams extends OperationOptions {
}

export declare class Combined {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: CombinedOptionalParams);
    readonly bar: BarOperations;
    readonly foo: FooOperations;
}

export declare interface CombinedOptionalParams extends ClientOptions {
}

export declare interface FooOperations {
    test: (options?: FooTestOptionalParams) => Promise<void>;
}

export declare interface FooTestOptionalParams extends OperationOptions {
}

export declare type VersionsA = "av1" | "av2";

export declare type VersionsB = "bv1" | "bv2";

export { }
