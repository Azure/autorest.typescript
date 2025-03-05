import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ClientNamespaceFirstClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientNamespaceFirstClientOptionalParams);
    getFirst(options?: GetFirstOptionalParams): Promise<ClientNamespaceFirstModelFirstClientResult>;
}

export declare interface ClientNamespaceFirstClientOptionalParams extends ClientOptions {
}

export declare interface ClientNamespaceFirstModelFirstClientResult {
    name: string;
}

export declare class ClientNamespaceSecondClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientNamespaceSecondClientOptionalParams);
    getSecond(options?: GetSecondOptionalParams): Promise<ClientNamespaceSecondModelSecondClientResult>;
}

export declare interface ClientNamespaceSecondClientOptionalParams extends ClientOptions {
}

export declare type ClientNamespaceSecondModelSecondClientEnumType = "second";

export declare interface ClientNamespaceSecondModelSecondClientResult {
    type: ClientNamespaceSecondModelSecondClientEnumType;
}

export declare interface GetFirstOptionalParams extends OperationOptions {
}

export declare interface GetSecondOptionalParams extends OperationOptions {
}

export { }
