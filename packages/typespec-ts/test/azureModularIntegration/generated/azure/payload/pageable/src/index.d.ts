import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ListOptionalParams extends OperationOptions {
    maxpagesize?: number;
}

export declare class PageableClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PageableClientOptionalParams);
    list(options?: ListOptionalParams): Promise<PagedUser>;
}

export declare interface PageableClientOptionalParams extends ClientOptions {
}

export declare interface PagedUser {
    value: User[];
    nextLink?: string;
}

export declare interface User {
    name: string;
}

export { }
