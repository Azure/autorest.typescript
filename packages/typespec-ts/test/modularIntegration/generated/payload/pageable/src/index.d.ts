import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

export declare class PageableClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PageableClientOptionalParams);
    readonly xmlPagination: XmlPaginationOperations;
    readonly pageSize: PageSizeOperations;
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

export declare interface PageSizeListWithoutContinuationOptionalParams extends OperationOptions {
}

export declare interface PageSizeListWithPageSizeOptionalParams extends OperationOptions {
    pageSize?: number;
}

export declare interface PageSizeOperations {
    listWithPageSize: (options?: PageSizeListWithPageSizeOptionalParams) => PagedAsyncIterableIterator<Pet>;
    listWithoutContinuation: (options?: PageSizeListWithoutContinuationOptionalParams) => PagedAsyncIterableIterator<Pet>;
}

export declare interface Pet {
    id: string;
    name: string;
}

export declare interface ServerDrivenPaginationContinuationTokenOperations {
    requestHeaderNestedResponseBody: (options?: ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyOptionalParams) => PagedAsyncIterableIterator<Pet>;
    requestQueryNestedResponseBody: (options?: ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyOptionalParams) => PagedAsyncIterableIterator<Pet>;
    requestHeaderResponseHeader: (options?: ServerDrivenPaginationContinuationTokenRequestHeaderResponseHeaderOptionalParams) => PagedAsyncIterableIterator<Pet>;
    requestQueryResponseHeader: (options?: ServerDrivenPaginationContinuationTokenRequestQueryResponseHeaderOptionalParams) => PagedAsyncIterableIterator<Pet>;
    requestHeaderResponseBody: (options?: ServerDrivenPaginationContinuationTokenRequestHeaderResponseBodyOptionalParams) => PagedAsyncIterableIterator<Pet>;
    requestQueryResponseBody: (options?: ServerDrivenPaginationContinuationTokenRequestQueryResponseBodyOptionalParams) => PagedAsyncIterableIterator<Pet>;
}

export declare interface ServerDrivenPaginationContinuationTokenRequestHeaderNestedResponseBodyOptionalParams extends OperationOptions {
    token?: string;
    foo?: string;
    bar?: string;
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

export declare interface ServerDrivenPaginationContinuationTokenRequestQueryNestedResponseBodyOptionalParams extends OperationOptions {
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

export declare interface ServerDrivenPaginationLinkStringOptionalParams extends OperationOptions {
}

export declare interface ServerDrivenPaginationNestedLinkOptionalParams extends OperationOptions {
}

export declare interface ServerDrivenPaginationOperations {
    nestedLink: (options?: ServerDrivenPaginationNestedLinkOptionalParams) => PagedAsyncIterableIterator<Pet>;
    linkString: (options?: ServerDrivenPaginationLinkStringOptionalParams) => PagedAsyncIterableIterator<Pet>;
    link: (options?: ServerDrivenPaginationLinkOptionalParams) => PagedAsyncIterableIterator<Pet>;
    continuationToken: ServerDrivenPaginationContinuationTokenOperations;
}

export declare interface XmlPaginationListWithContinuationOptionalParams extends OperationOptions {
    marker?: string;
}

export declare interface XmlPaginationListWithNextLinkOptionalParams extends OperationOptions {
}

export declare interface XmlPaginationOperations {
    listWithNextLink: (options?: XmlPaginationListWithNextLinkOptionalParams) => PagedAsyncIterableIterator<XmlPet>;
    listWithContinuation: (options?: XmlPaginationListWithContinuationOptionalParams) => PagedAsyncIterableIterator<XmlPet>;
}

export declare interface XmlPet {
    id: string;
    name: string;
}

export { }
