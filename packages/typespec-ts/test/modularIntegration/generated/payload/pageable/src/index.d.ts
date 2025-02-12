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

export declare interface ServerDrivenPaginationLinkOptionalParams extends OperationOptions {
}

export declare interface ServerDrivenPaginationOperations {
    link: (options?: ServerDrivenPaginationLinkOptionalParams) => PagedAsyncIterableIterator<Pet>;
}

export { }
