import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class MediaTypeClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: MediaTypeClientOptionalParams);
    readonly stringBody: StringBodyOperations;
}

export declare interface MediaTypeClientOptionalParams extends ClientOptions {
}

export declare interface StringBodyGetAsJsonOptionalParams extends OperationOptions {
}

export declare interface StringBodyGetAsTextOptionalParams extends OperationOptions {
}

export declare interface StringBodyOperations {
    getAsJson: (options?: StringBodyGetAsJsonOptionalParams) => Promise<string>;
    sendAsJson: (text: string, options?: StringBodySendAsJsonOptionalParams) => Promise<void>;
    getAsText: (options?: StringBodyGetAsTextOptionalParams) => Promise<string>;
    sendAsText: (text: string, options?: StringBodySendAsTextOptionalParams) => Promise<void>;
}

export declare interface StringBodySendAsJsonOptionalParams extends OperationOptions {
}

export declare interface StringBodySendAsTextOptionalParams extends OperationOptions {
}

export { }
