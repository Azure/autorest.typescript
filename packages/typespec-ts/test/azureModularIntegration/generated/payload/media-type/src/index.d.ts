import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export { isRestError }

export declare class MediaTypeClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: MediaTypeClientOptionalParams);
    readonly stringBody: StringBodyOperations;
}

export declare interface MediaTypeClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export { RestError }

declare interface StringBodyGetAsJsonOptionalParams extends OperationOptions {
}

export declare type StringBodyGetAsJsonResponse = {
    body: string;
};

declare interface StringBodyGetAsTextOptionalParams extends OperationOptions {
}

export declare type StringBodyGetAsTextResponse = {
    body: string;
};

export declare interface StringBodyOperations {
    getAsJson: (options?: StringBodyGetAsJsonOptionalParams) => Promise<StringBodyGetAsJsonResponse>;
    sendAsJson: (text: string, options?: StringBodySendAsJsonOptionalParams) => Promise<void>;
    getAsText: (options?: StringBodyGetAsTextOptionalParams) => Promise<StringBodyGetAsTextResponse>;
    sendAsText: (text: string, options?: StringBodySendAsTextOptionalParams) => Promise<void>;
}

declare interface StringBodySendAsJsonOptionalParams extends OperationOptions {
}

declare interface StringBodySendAsTextOptionalParams extends OperationOptions {
}

export { }
