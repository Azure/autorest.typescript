import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { ErrorResponse } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { PathUncheckedResponse } from '@azure-rest/core-client';
import type { RawHttpHeaders } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AzureCorePageClient = Client & {
    path: Routes;
};

export declare interface AzureCorePageClientOptions extends ClientOptions {
    apiVersion?: string;
}

declare function createClient({ apiVersion, ...options }?: AzureCorePageClientOptions): AzureCorePageClient;
export default createClient;

export declare interface FirstItemOutput {
    readonly id: number;
}

export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

export declare type GetPage<TPage> = (pageLink: string) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

export declare function isUnexpected(response: ListWithPage200Response | ListWithPageDefaultResponse): response is ListWithPageDefaultResponse;

export declare function isUnexpected(response: ListWithParameters200Response | ListWithParametersDefaultResponse): response is ListWithParametersDefaultResponse;

export declare function isUnexpected(response: ListWithCustomPageModel200Response | ListWithCustomPageModelDefaultResponse): response is ListWithCustomPageModelDefaultResponse;

export declare function isUnexpected(response: ListFirstItem200Response | ListFirstItemDefaultResponse): response is ListFirstItemDefaultResponse;

export declare function isUnexpected(response: ListSecondItem200Response | ListSecondItemDefaultResponse): response is ListSecondItemDefaultResponse;

export declare interface ListFirstItem {
    get(options?: ListFirstItemParameters): StreamableMethod<ListFirstItem200Response | ListFirstItemDefaultResponse>;
}

export declare interface ListFirstItem200Response extends HttpResponse {
    status: "200";
    body: PagedFirstItemOutput;
}

export declare interface ListFirstItemDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface ListFirstItemDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & ListFirstItemDefaultHeaders;
}

export declare type ListFirstItemParameters = RequestParameters;

export declare interface ListItemInputBody {
    inputName: string;
}

export declare type ListItemInputExtensibleEnum = "First" | "Second";

export declare interface ListSecondItem {
    get(options?: ListSecondItemParameters): StreamableMethod<ListSecondItem200Response | ListSecondItemDefaultResponse>;
}

export declare interface ListSecondItem200Response extends HttpResponse {
    status: "200";
    body: PagedSecondItemOutput;
}

export declare interface ListSecondItemDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface ListSecondItemDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & ListSecondItemDefaultHeaders;
}

export declare type ListSecondItemParameters = RequestParameters;

export declare interface ListWithCustomPageModel {
    get(options?: ListWithCustomPageModelParameters): StreamableMethod<ListWithCustomPageModel200Response | ListWithCustomPageModelDefaultResponse>;
}

export declare interface ListWithCustomPageModel200Response extends HttpResponse {
    status: "200";
    body: UserListResultsOutput;
}

export declare interface ListWithCustomPageModelDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface ListWithCustomPageModelDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & ListWithCustomPageModelDefaultHeaders;
}

export declare type ListWithCustomPageModelParameters = RequestParameters;

export declare interface ListWithPage {
    get(options?: ListWithPageParameters): StreamableMethod<ListWithPage200Response | ListWithPageDefaultResponse>;
}

export declare interface ListWithPage200Response extends HttpResponse {
    status: "200";
    body: PagedUserOutput;
}

export declare interface ListWithPageDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface ListWithPageDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & ListWithPageDefaultHeaders;
}

export declare type ListWithPageParameters = RequestParameters;

export declare interface ListWithParameters {
    get(options: ListWithParametersParameters): StreamableMethod<ListWithParameters200Response | ListWithParametersDefaultResponse>;
}

export declare interface ListWithParameters200Response extends HttpResponse {
    status: "200";
    body: PagedUserOutput;
}

export declare interface ListWithParametersBodyParam {
    body: ListItemInputBody;
}

export declare interface ListWithParametersDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface ListWithParametersDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & ListWithParametersDefaultHeaders;
}

export declare type ListWithParametersParameters = ListWithParametersQueryParam & ListWithParametersBodyParam & RequestParameters;

export declare interface ListWithParametersQueryParam {
    queryParameters?: ListWithParametersQueryParamProperties;
}

export declare interface ListWithParametersQueryParamProperties {
    another?: ListItemInputExtensibleEnum;
}

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<TPage>;
}

export declare interface PagedFirstItemOutput {
    value: Array<FirstItemOutput>;
    nextLink?: string;
}

export declare interface PagedSecondItemOutput {
    value: Array<SecondItemOutput>;
    nextLink?: string;
}

export declare interface PagedUserOutput {
    value: Array<UserOutput>;
    nextLink?: string;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

export declare type PaginateReturn<TResult> = TResult extends {
    body: {
        value?: infer TPage;
    };
} | {
    body: {
        items?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

export declare interface PagingOptions<TResponse> {
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

export declare interface Routes {
    (path: "/azure/core/page/page"): ListWithPage;
    (path: "/azure/core/page/parameters"): ListWithParameters;
    (path: "/azure/core/page/custom-page"): ListWithCustomPageModel;
    (path: "/azure/core/page/first-item"): ListFirstItem;
    (path: "/azure/core/page/second-item"): ListSecondItem;
}

export declare interface SecondItemOutput {
    readonly name: string;
}

export declare interface UserListResultsOutput {
    items: Array<UserOutput>;
    nextLink?: string;
}

export declare interface UserOrderOutput {
    readonly id: number;
    userId: number;
    detail: string;
}

export declare interface UserOutput {
    readonly id: number;
    name: string;
    orders?: Array<UserOrderOutput>;
    readonly etag: string;
}

export { }
