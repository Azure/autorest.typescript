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

export declare function isUnexpected(response: Export200Response | ExportDefaultResponse): response is ExportDefaultResponse;

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

export declare type PagedUserOutput = Paged<UserOutput>;

export declare function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

export declare type PaginateReturn<TResult> = TResult extends {
    body: {
        value?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

export declare interface PagingOptions<TResponse> {
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

export declare interface Routes {
    (path: "/azure/core/basic/users/{id}", id: number): CreateOrUpdate;
    (path: "/azure/core/basic/users"): List;
    (path: "/azure/core/basic/users/{id}:export", id: number): Export;
}

export declare interface User {
    name: string;
    orders?: Array<UserOrder>;
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
