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
    sendAsText: (text: string, options?: StringBodySendAsTextOptionalParams) => Promise<void>;
    getAsText: (options?: StringBodyGetAsTextOptionalParams) => Promise<string>;
    sendAsJson: (text: string, options?: StringBodySendAsJsonOptionalParams) => Promise<void>;
    getAsJson: (options?: StringBodyGetAsJsonOptionalParams) => Promise<string>;
}

export declare interface StringBodySendAsJsonOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface StringBodySendAsTextOptionalParams extends OperationOptions {
    contentType?: string;
}

export { }
