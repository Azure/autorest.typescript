import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

export declare function createPage(options?: PageClientOptionalParams): PageContext;

export declare interface FirstItem {
    readonly id: number;
}

export declare function listFirstItem(context: PageContext, options?: ListFirstItemOptionalParams): PagedAsyncIterableIterator<FirstItem>;

export declare interface ListFirstItemOptionalParams extends OperationOptions {
}

export declare interface ListItemInputBody {
    inputName: string;
}

export declare type ListItemInputExtensibleEnum = "First" | "Second";

export declare function listSecondItem(context: PageContext, options?: ListSecondItemOptionalParams): PagedAsyncIterableIterator<SecondItem>;

export declare interface ListSecondItemOptionalParams extends OperationOptions {
}

export declare function listWithCustomPageModel(context: PageContext, options?: ListWithCustomPageModelOptionalParams): PagedAsyncIterableIterator<User>;

export declare interface ListWithCustomPageModelOptionalParams extends OperationOptions {
}

export declare function listWithPage(context: PageContext, options?: ListWithPageOptionalParams): PagedAsyncIterableIterator<User>;

export declare interface ListWithPageOptionalParams extends OperationOptions {
}

export declare function listWithParameters(context: PageContext, bodyInput: ListItemInputBody, options?: ListWithParametersOptionalParams): PagedAsyncIterableIterator<User>;

export declare interface ListWithParametersOptionalParams extends OperationOptions {
    another?: ListItemInputExtensibleEnum;
}

export declare class PageClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PageClientOptionalParams);
    listWithPage(options?: ListWithPageOptionalParams): PagedAsyncIterableIterator<User>;
    listWithParameters(bodyInput: ListItemInputBody, options?: ListWithParametersOptionalParams): PagedAsyncIterableIterator<User>;
    listWithCustomPageModel(options?: ListWithCustomPageModelOptionalParams): PagedAsyncIterableIterator<User>;
    listFirstItem(options?: ListFirstItemOptionalParams): PagedAsyncIterableIterator<FirstItem>;
    listSecondItem(options?: ListSecondItemOptionalParams): PagedAsyncIterableIterator<SecondItem>;
}

export declare interface PageClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface PageContext extends Client {
}

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings extends PageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<ContinuablePage<TElement, TPage>>;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare interface SecondItem {
    readonly name: string;
}

export declare interface User {
    readonly id: number;
    name: string;
    orders?: UserOrder[];
    readonly etag: string;
}

export declare interface UserOrder {
    readonly id: number;
    userId: number;
    detail: string;
}

export { }
