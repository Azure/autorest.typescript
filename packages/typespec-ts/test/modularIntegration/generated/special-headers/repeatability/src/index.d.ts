import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface ImmediateSuccessOptionalParams extends OperationOptions {
}

export declare class RepeatabilityClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RepeatabilityClientOptionalParams);
    immediateSuccess(repeatabilityRequestID: string, repeatabilityFirstSent: Date, options?: ImmediateSuccessOptionalParams): Promise<void>;
}

export declare interface RepeatabilityClientOptionalParams extends ClientOptions {
}

export { }
