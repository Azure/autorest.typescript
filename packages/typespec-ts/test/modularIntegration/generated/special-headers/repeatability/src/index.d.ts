import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ImmediateSuccessOptionalParams extends OperationOptions {
}

export declare class RepeatabilityClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RepeatabilityClientOptionalParams);
    immediateSuccess(repeatabilityRequestId: string, repeatabilityFirstSent: Date, options?: ImmediateSuccessOptionalParams): Promise<void>;
}

export declare interface RepeatabilityClientOptionalParams extends ClientOptions {
}

export { }
