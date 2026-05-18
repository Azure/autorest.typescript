import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class MediaTypeClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: MediaTypeClientOptionalParams);
    readonly stringBody: StringBodyOperations;
}

export declare interface MediaTypeClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

declare interface StringBodyGetAsJsonOptionalParams extends OperationOptions {
}

declare interface StringBodyGetAsTextOptionalParams extends OperationOptions {
}

export declare interface StringBodyOperations {
    getAsJson: (options?: StringBodyGetAsJsonOptionalParams) => Promise<string>;
    sendAsJson: (text: string, options?: StringBodySendAsJsonOptionalParams) => Promise<void>;
    getAsText: (options?: StringBodyGetAsTextOptionalParams) => Promise<string>;
    sendAsText: (text: string, options?: StringBodySendAsTextOptionalParams) => Promise<void>;
}

declare interface StringBodySendAsJsonOptionalParams extends OperationOptions {
}

declare interface StringBodySendAsTextOptionalParams extends OperationOptions {
}

export { }
