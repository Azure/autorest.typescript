import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface GetOptionalParams extends OperationOptions {
}

export declare class JsonClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: JsonClientOptionalParams);
    send(body: JsonEncodedNameModel, options?: SendOptionalParams): Promise<void>;
    get(options?: GetOptionalParams): Promise<JsonEncodedNameModel>;
}

export declare interface JsonClientOptionalParams extends ClientOptions {
}

export declare interface JsonEncodedNameModel {
    defaultName: boolean;
}

export declare interface SendOptionalParams extends OperationOptions {
}

export { }
