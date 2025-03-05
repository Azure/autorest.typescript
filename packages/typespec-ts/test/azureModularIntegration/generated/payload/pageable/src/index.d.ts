import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

export declare class PageableClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PageableClientOptionalParams);
    readonly serverDrivenPagination: ServerDrivenPaginationOperations;
}

export declare interface PageableClientOptionalParams extends ClientOptions {
}

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare interface Pet {
    id: string;
    name: string;
}

export declare interface ServerDrivenPaginationContinuationTokenOperations {
    requestHeaderResponseHeader: (options?: ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderOptionalParams) => PagedAsyncIterableIterator<Pet>;
    requestQueryResponseHeader: (options?: ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderOptionalParams) => PagedAsyncIterableIterator<Pet>;
    requestHeaderResponseBody: (options?: ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyOptionalParams) => PagedAsyncIterableIterator<Pet>;
    requestQueryResponseBody: (options?: ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyOptionalParams) => PagedAsyncIterableIterator<Pet>;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyOptionalParams extends OperationOptions {
    token?: string;
    foo?: string;
    bar?: string;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderOptionalParams extends OperationOptions {
    token?: string;
    foo?: string;
    bar?: string;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyOptionalParams extends OperationOptions {
    token?: string;
    foo?: string;
    bar?: string;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderOptionalParams extends OperationOptions {
    token?: string;
    foo?: string;
    bar?: string;
}

export declare interface ServerDrivenPaginationLinkOptionalParams extends OperationOptions {
}

export declare interface ServerDrivenPaginationOperations {
    link: (options?: ServerDrivenPaginationLinkOptionalParams) => PagedAsyncIterableIterator<Pet>;
    continuationToken: ServerDrivenPaginationContinuationTokenOperations;
}

export { }
