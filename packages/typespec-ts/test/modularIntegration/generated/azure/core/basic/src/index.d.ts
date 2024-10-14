import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class BasicClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: BasicClientOptionalParams);
    createOrUpdate(id: number, resource: User, options?: CreateOrUpdateOptionalParams): Promise<User>;
    createOrReplace(id: number, resource: User, options?: CreateOrReplaceOptionalParams): Promise<User>;
    get(id: number, options?: GetOptionalParams): Promise<User>;
    list(options?: ListOptionalParams): PagedAsyncIterableIterator<User>;
    delete(id: number, options?: DeleteOptionalParams): Promise<void>;
    export(id: number, format: string, options?: ExportOptionalParams): Promise<User>;
    exportAllUsers(format: string, options?: ExportAllUsersOptionalParams): Promise<UserList>;
}

export declare interface BasicClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

export declare interface CreateOrReplaceOptionalParams extends OperationOptions {
}

export declare interface CreateOrUpdateOptionalParams extends OperationOptions {
    contentType?: string;
}

export declare interface DeleteOptionalParams extends OperationOptions {
}

export declare interface ExportAllUsersOptionalParams extends OperationOptions {
}

export declare interface ExportOptionalParams extends OperationOptions {
}

export declare interface GetOptionalParams extends OperationOptions {
}

export declare interface ListOptionalParams extends OperationOptions {
    top?: number;
    skip?: number;
    maxpagesize?: number;
    orderby?: string[];
    filter?: string;
    select?: string[];
    expand?: string[];
}

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare interface User {
    readonly id: number;
    name: string;
    orders?: UserOrder[];
    readonly etag: string;
}

export declare interface UserList {
    users: User[];
}

export declare interface UserOrder {
    readonly id: number;
    userId: number;
    detail: string;
}

export { }
