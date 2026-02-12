import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ContinuablePage<TElement, TPage = TElement[]> = TPage & {
    continuationToken?: string;
};

export declare interface FirstItem {
    readonly id: number;
}

export declare enum KnownVersions {
    V20221201Preview = "2022-12-01-preview"
}

export declare interface ListFirstItemOptionalParams extends OperationOptions {
}

export declare interface ListItemInputBody {
    inputName: string;
}

export declare type ListItemInputExtensibleEnum = "First" | "Second";

export declare interface ListSecondItemOptionalParams extends OperationOptions {
}

export declare interface ListWithCustomPageModelOptionalParams extends OperationOptions {
}

export declare interface ListWithPageOptionalParams extends OperationOptions {
}

export declare interface ListWithParametersOptionalParams extends OperationOptions {
    another?: ListItemInputExtensibleEnum;
}

export declare class PageClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PageClientOptionalParams);
    withParameterizedNextLink(select: string, options?: WithParameterizedNextLinkOptionalParams): PagedAsyncIterableIterator<User>;
    listWithCustomPageModel(options?: ListWithCustomPageModelOptionalParams): PagedAsyncIterableIterator<User>;
    listWithParameters(bodyInput: ListItemInputBody, options?: ListWithParametersOptionalParams): PagedAsyncIterableIterator<User>;
    listWithPage(options?: ListWithPageOptionalParams): PagedAsyncIterableIterator<User>;
    listSecondItem(options?: ListSecondItemOptionalParams): PagedAsyncIterableIterator<SecondItem>;
    listFirstItem(options?: ListFirstItemOptionalParams): PagedAsyncIterableIterator<FirstItem>;
}

export declare interface PageClientOptionalParams extends ClientOptions {
    apiVersion?: string;
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

export declare interface WithParameterizedNextLinkOptionalParams extends OperationOptions {
    includePending?: boolean;
}

export { }
