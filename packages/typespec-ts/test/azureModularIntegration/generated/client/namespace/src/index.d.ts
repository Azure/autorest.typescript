import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ClientNamespaceFirstClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientNamespaceFirstClientOptionalParams);
    getFirst(options?: GetFirstOptionalParams): Promise<FirstClientResult>;
}

export declare interface ClientNamespaceFirstClientOptionalParams extends ClientOptions {
}

export declare class ClientNamespaceSecondClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientNamespaceSecondClientOptionalParams);
    getSecond(options?: GetSecondOptionalParams): Promise<SecondClientResult>;
}

export declare interface ClientNamespaceSecondClientOptionalParams extends ClientOptions {
}

export declare interface FirstClientResult {
    name: string;
}

export declare interface GetFirstOptionalParams extends OperationOptions {
}

export declare interface GetSecondOptionalParams extends OperationOptions {
}

export declare type SecondClientEnumType = "second";

export declare interface SecondClientResult {
    type: SecondClientEnumType;
}

export { }
