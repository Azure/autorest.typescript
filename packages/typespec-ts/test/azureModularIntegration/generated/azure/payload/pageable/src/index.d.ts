import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

export declare interface ListOptionalParams extends OperationOptions {
    maxpagesize?: number;
}

export declare class PageableClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PageableClientOptionalParams);
    list(options?: ListOptionalParams): PagedAsyncIterableIterator<User>;
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

declare interface User {
    name: string;
}

export { }
