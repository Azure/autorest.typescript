import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { ErrorResponse } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { Paged } from '@azure/core-paging';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare type AzureCoreClient = Client & {
    path: Routes;
};

export declare interface AzureCoreClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare function buildMultiCollection(items: string[], parameterName: string): string;

declare function createClient({ apiVersion, ...options }?: AzureCoreClientOptions): AzureCoreClient;
export default createClient;

export declare interface CreateOrReplace200Response extends HttpResponse {
    status: "200";
    body: UserOutput;
}

export declare interface CreateOrReplace201Response extends HttpResponse {
    status: "201";
    body: UserOutput;
}

export declare interface CreateOrReplaceBodyParam {
    body: User;
}

export declare interface CreateOrReplaceDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface CreateOrReplaceDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & CreateOrReplaceDefaultHeaders;
}

export declare type CreateOrReplaceParameters = CreateOrReplaceBodyParam & RequestParameters;

export declare interface CreateOrUpdate {
    patch(options: CreateOrUpdateParameters): StreamableMethod<CreateOrUpdate200Response | CreateOrUpdate201Response | CreateOrUpdateDefaultResponse>;
    put(options: CreateOrReplaceParameters): StreamableMethod<CreateOrReplace200Response | CreateOrReplace201Response | CreateOrReplaceDefaultResponse>;
    get(options?: GetParameters): StreamableMethod<Get200Response | GetDefaultResponse>;
    delete(options?: DeleteParameters): StreamableMethod<Delete204Response | DeleteDefaultResponse>;
}

export declare interface CreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: UserOutput;
}

export declare interface CreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: UserOutput;
}

export declare interface CreateOrUpdateBodyParam {
    body: UserResourceMergeAndPatch;
}

export declare interface CreateOrUpdateDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface CreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & CreateOrUpdateDefaultHeaders;
}

export declare interface CreateOrUpdateMediaTypesParam {
    contentType: "application/merge-patch+json";
}

export declare type CreateOrUpdateParameters = CreateOrUpdateMediaTypesParam & CreateOrUpdateBodyParam & RequestParameters;

export declare interface Delete204Response extends HttpResponse {
    status: "204";
}

export declare interface DeleteDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface DeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & DeleteDefaultHeaders;
}

export declare type DeleteParameters = RequestParameters;

export declare interface Export {
    post(options: ExportParameters): StreamableMethod<Export200Response | ExportDefaultResponse>;
}

export declare interface Export200Response extends HttpResponse {
    status: "200";
    body: UserOutput;
}

export declare interface ExportDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface ExportDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & ExportDefaultHeaders;
}

export declare type ExportParameters = ExportQueryParam & RequestParameters;

export declare interface ExportQueryParam {
    queryParameters: ExportQueryParamProperties;
}

export declare interface ExportQueryParamProperties {
    format: string;
}

export declare interface FirstItemOutput {
    readonly id: number;
}

export declare interface Get200Response extends HttpResponse {
    status: "200";
    body: UserOutput;
}

export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

export declare interface GetDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface GetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & GetDefaultHeaders;
}

export declare type GetPage<TPage> = (pageLink: string, maxPageSize?: number) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

export declare type GetParameters = RequestParameters;

export declare function isUnexpected(response: CreateOrUpdate200Response | CreateOrUpdate201Response | CreateOrUpdateDefaultResponse): response is CreateOrUpdateDefaultResponse;

export declare function isUnexpected(response: CreateOrReplace200Response | CreateOrReplace201Response | CreateOrReplaceDefaultResponse): response is CreateOrReplaceDefaultResponse;

export declare function isUnexpected(response: Get200Response | GetDefaultResponse): response is GetDefaultResponse;

export declare function isUnexpected(response: Delete204Response | DeleteDefaultResponse): response is DeleteDefaultResponse;

export declare function isUnexpected(response: List200Response | ListDefaultResponse): response is ListDefaultResponse;

export declare function isUnexpected(response: ListWithPage200Response | ListWithPageDefaultResponse): response is ListWithPageDefaultResponse;

export declare function isUnexpected(response: ListWithParameters200Response | ListWithParametersDefaultResponse): response is ListWithParametersDefaultResponse;

export declare function isUnexpected(response: ListWithCustomPageModel200Response | ListWithCustomPageModelDefaultResponse): response is ListWithCustomPageModelDefaultResponse;

export declare function isUnexpected(response: Export200Response | ExportDefaultResponse): response is ExportDefaultResponse;

export declare function isUnexpected(response: ListFirstItem200Response | ListFirstItemDefaultResponse): response is ListFirstItemDefaultResponse;

export declare function isUnexpected(response: ListSecondItem200Response | ListSecondItemDefaultResponse): response is ListSecondItemDefaultResponse;

export declare interface List {
    get(options?: ListParameters): StreamableMethod<List200Response | ListDefaultResponse>;
}

export declare interface List200Response extends HttpResponse {
    status: "200";
    body: PagedUserOutput;
}

export declare interface ListDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface ListDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & ListDefaultHeaders;
}

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

export declare type ListItemInputExtensibleEnum = string;

export declare type ListParameters = ListQueryParam & RequestParameters;

export declare interface ListQueryParam {
    queryParameters?: ListQueryParamProperties;
}

export declare interface ListQueryParamProperties {
    top?: number;
    skip?: number;
    maxpagesize?: number;
    orderby?: string;
    filter?: string;
    select?: string;
    expand?: string;
}

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

export declare type PagedFirstItemOutput = Paged<FirstItemOutput>;

export declare type PagedSecondItemOutput = Paged<SecondItemOutput>;

export declare type PagedUserOutput = Paged<UserOutput>;

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
    (path: "/azure/core/basic/users/{id}", id: number): CreateOrUpdate;
    (path: "/azure/core/basic/users"): List;
    (path: "/azure/core/basic/page"): ListWithPage;
    (path: "/azure/core/basic/parameters"): ListWithParameters;
    (path: "/azure/core/basic/custom-page"): ListWithCustomPageModel;
    (path: "/azure/core/basic/users/{id}:export", id: number): Export;
    (path: "/azure/core/basic/first-item"): ListFirstItem;
    (path: "/azure/core/basic/second-item"): ListSecondItem;
}

export declare interface SecondItemOutput {
    readonly name: string;
}

export declare interface User {
    name: string;
    orders?: Array<UserOrder>;
}

export declare interface UserListResultsOutput {
    items: Array<UserOutput>;
    nextLink?: string;
}

export declare interface UserOrder {
    userId: number;
    detail: string;
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

export declare type UserResourceMergeAndPatch = Partial<User>;

export { }
