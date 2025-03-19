import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

export declare interface _LinkResponse {
    pets: Pet[];
    next?: string;
}

export declare function _linkResponseDeserializer(item: any): _LinkResponse;

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

export declare interface _RequestHeaderResponseBodyResponse {
    pets: Pet[];
    nextToken?: string;
}

export declare function _requestHeaderResponseBodyResponseDeserializer(item: any): _RequestHeaderResponseBodyResponse;

export declare interface _RequestQueryResponseBodyResponse {
    pets: Pet[];
    nextToken?: string;
}

export declare function _requestQueryResponseBodyResponseDeserializer(item: any): _RequestQueryResponseBodyResponse;

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
