import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ListByScopeOptionalParams extends OperationOptions {
}

export declare type ListByScopeResponse = {
    body: Resource[];
};

export declare interface ListOptionalParams extends OperationOptions {
}

export declare type ListResponse = {
    body: Resource[];
};

export declare class OverloadClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: OverloadClientOptionalParams);
    listByScope(scope: string, options?: ListByScopeOptionalParams): Promise<ListByScopeResponse>;
    list(options?: ListOptionalParams): Promise<ListResponse>;
}

export declare interface OverloadClientOptionalParams extends ClientOptions {
}

export declare interface Resource {
    id: string;
    name: string;
    scope: string;
}

export { }
