import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class EmptyClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: EmptyClientOptionalParams);
    postRoundTripEmpty(body: EmptyInputOutput, options?: PostRoundTripEmptyOptionalParams): Promise<EmptyInputOutput>;
    getEmpty(options?: GetEmptyOptionalParams): Promise<EmptyOutput>;
    putEmpty(input: EmptyInput, options?: PutEmptyOptionalParams): Promise<void>;
}

export declare interface EmptyClientOptionalParams extends ClientOptions {
}

export declare interface EmptyInput {
}

export declare interface EmptyInputOutput {
}

export declare interface EmptyOutput {
}

export declare interface GetEmptyOptionalParams extends OperationOptions {
}

export declare interface PostRoundTripEmptyOptionalParams extends OperationOptions {
}

export declare interface PutEmptyOptionalParams extends OperationOptions {
}

export { }
