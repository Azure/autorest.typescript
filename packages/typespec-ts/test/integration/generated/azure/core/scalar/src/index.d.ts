import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AzureCoreScalarClient = Client & {
    path: Routes;
};

export declare interface AzureCoreScalarClientOptions extends ClientOptions {
}

export declare interface AzureLocationModel {
    location: string;
}

export declare interface AzureLocationModelOutput {
    location: string;
}

declare function createClient(options?: AzureCoreScalarClientOptions): AzureCoreScalarClient;
export default createClient;

export declare interface Get {
    get(options?: GetParameters): StreamableMethod<Get200Response>;
    put(options: PutParameters): StreamableMethod<Put204Response>;
    post(options: PostParameters): StreamableMethod<Post200Response>;
}

export declare interface Get200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare type GetParameters = RequestParameters;

export declare interface Header {
    post(options: HeaderParameters): StreamableMethod<Header204Response>;
}

export declare interface Header204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderHeaderParam {
    headers: RawHttpHeadersInput & HeaderHeaders;
}

export declare interface HeaderHeaders {
    region: string;
}

export declare type HeaderParameters = HeaderHeaderParam & RequestParameters;

export declare interface Post200Response extends HttpResponse {
    status: "200";
    body: AzureLocationModelOutput;
}

export declare interface PostBodyParam {
    body: AzureLocationModel;
}

export declare type PostParameters = PostBodyParam & RequestParameters;

export declare interface Put204Response extends HttpResponse {
    status: "204";
}

export declare interface PutBodyParam {
    body: string;
}

export declare type PutParameters = PutBodyParam & RequestParameters;

export declare interface Query {
    post(options: QueryParameters): StreamableMethod<Query204Response>;
}

export declare interface Query204Response extends HttpResponse {
    status: "204";
}

export declare type QueryParameters = QueryQueryParam & RequestParameters;

export declare interface QueryQueryParam {
    queryParameters: QueryQueryParamProperties;
}

export declare interface QueryQueryParamProperties {
    region: string;
}

export declare interface Routes {
    (path: "/azure/core/scalar/azureLocation"): Get;
    (path: "/azure/core/scalar/azureLocation/header"): Header;
    (path: "/azure/core/scalar/azureLocation/query"): Query;
}

export { }
