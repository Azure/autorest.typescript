import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function createRepeatability(options?: RepeatabilityClientOptionalParams): RepeatabilityContext;

export declare function immediateSuccess(context: RepeatabilityContext, repeatabilityRequestID: string, repeatabilityFirstSent: Date, options?: ImmediateSuccessOptionalParams): Promise<void>;

export declare interface ImmediateSuccessOptionalParams extends OperationOptions {
}

export declare type ImmediateSuccessResponseRepeatabilityResult = "accepted" | "rejected";

export declare class RepeatabilityClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RepeatabilityClientOptionalParams);
    immediateSuccess(repeatabilityRequestID: string, repeatabilityFirstSent: Date, options?: ImmediateSuccessOptionalParams): Promise<void>;
}

export declare interface RepeatabilityClientOptionalParams extends ClientOptions {
}

export declare interface RepeatabilityContext extends Client {
}

export { }
