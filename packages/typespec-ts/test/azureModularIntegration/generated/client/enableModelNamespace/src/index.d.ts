import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ClientclientnamespacefirstFirstClientResult {
    name: string;
}

export declare interface ClientclientnamespacesecondSecondClientResult {
    type: ClientclientnamespacesecondsubSecondClientEnumType;
}

export declare type ClientclientnamespacesecondsubSecondClientEnumType = "second";

export declare class ClientNamespaceFirstClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientNamespaceFirstClientOptionalParams);
    getFirst(options?: GetFirstOptionalParams): Promise<ClientclientnamespacefirstFirstClientResult>;
}

export declare interface ClientNamespaceFirstClientOptionalParams extends ClientOptions {
}

export declare class ClientNamespaceSecondClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientNamespaceSecondClientOptionalParams);
    getSecond(options?: GetSecondOptionalParams): Promise<ClientclientnamespacesecondSecondClientResult>;
}

export declare interface ClientNamespaceSecondClientOptionalParams extends ClientOptions {
}

export declare interface GetFirstOptionalParams extends OperationOptions {
}

export declare interface GetSecondOptionalParams extends OperationOptions {
}

export { }
