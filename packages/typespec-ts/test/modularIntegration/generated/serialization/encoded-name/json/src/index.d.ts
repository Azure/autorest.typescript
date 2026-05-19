import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface GetOptionalParams extends OperationOptions {
}

export declare class JsonClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: JsonClientOptionalParams);
    get(options?: GetOptionalParams): Promise<JsonEncodedNameModel>;
    send(body: JsonEncodedNameModel, options?: SendOptionalParams): Promise<void>;
}

export declare interface JsonClientOptionalParams extends ClientOptions {
}

export declare interface JsonEncodedNameModel {
    defaultName: boolean;
}

export declare interface SendOptionalParams extends OperationOptions {
}

export { }
