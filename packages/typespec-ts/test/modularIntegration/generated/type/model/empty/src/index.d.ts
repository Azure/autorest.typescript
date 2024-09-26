import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function createEmpty(options?: EmptyClientOptionalParams): EmptyContext;

export declare class EmptyClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: EmptyClientOptionalParams);
    putEmpty(input: EmptyInput, options?: PutEmptyOptionalParams): Promise<void>;
    getEmpty(options?: GetEmptyOptionalParams): Promise<EmptyOutput>;
    postRoundTripEmpty(body: EmptyInputOutput, options?: PostRoundTripEmptyOptionalParams): Promise<EmptyInputOutput>;
}

export declare interface EmptyClientOptionalParams extends ClientOptions {
}

export declare interface EmptyContext extends Client {
}

export declare interface EmptyInput {
}

export declare interface EmptyInputOutput {
}

export declare interface EmptyOutput {
}

export declare function getEmpty(context: EmptyContext, options?: GetEmptyOptionalParams): Promise<EmptyOutput>;

export declare interface GetEmptyOptionalParams extends OperationOptions {
}

export declare function postRoundTripEmpty(context: EmptyContext, body: EmptyInputOutput, options?: PostRoundTripEmptyOptionalParams): Promise<EmptyInputOutput>;

export declare interface PostRoundTripEmptyOptionalParams extends OperationOptions {
}

export declare function putEmpty(context: EmptyContext, input: EmptyInput, options?: PutEmptyOptionalParams): Promise<void>;

export declare interface PutEmptyOptionalParams extends OperationOptions {
}

export { }
