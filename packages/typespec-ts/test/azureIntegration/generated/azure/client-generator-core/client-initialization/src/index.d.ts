import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare interface BlobPropertiesOutput {
    name: string;
    size: number;
    contentType: string;
    createdOn: string;
}

export declare interface ChildClientDeleteStandalone {
    delete(options?: ChildClientDeleteStandaloneParameters): StreamableMethod<ChildClientDeleteStandalone204Response>;
}

export declare interface ChildClientDeleteStandalone204Response extends HttpResponse {
    status: "204";
}

export declare type ChildClientDeleteStandaloneParameters = RequestParameters;

export declare interface ChildClientGetStandalone {
    get(options?: ChildClientGetStandaloneParameters): StreamableMethod<ChildClientGetStandalone200Response>;
}

export declare interface ChildClientGetStandalone200Response extends HttpResponse {
    status: "200";
    body: BlobPropertiesOutput;
}

export declare type ChildClientGetStandaloneParameters = RequestParameters;

export declare interface ChildClientWithQuery {
    get(options?: ChildClientWithQueryParameters): StreamableMethod<ChildClientWithQuery204Response>;
}

export declare interface ChildClientWithQuery204Response extends HttpResponse {
    status: "204";
}

export declare type ChildClientWithQueryParameters = ChildClientWithQueryQueryParam & RequestParameters;

export declare interface ChildClientWithQueryQueryParam {
    queryParameters?: ChildClientWithQueryQueryParamProperties;
}

export declare interface ChildClientWithQueryQueryParamProperties {
    format?: string;
}

declare function createClient(options?: ServiceClientOptions): ServiceClient;
export default createClient;

export declare interface HeaderParamWithBody {
    post(options: HeaderParamWithBodyParameters): StreamableMethod<HeaderParamWithBody204Response>;
}

export declare interface HeaderParamWithBody204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderParamWithBodyBodyParam {
    body: Input;
}

export declare interface HeaderParamWithBodyHeaderParam {
    headers: RawHttpHeadersInput & HeaderParamWithBodyHeaders;
}

export declare interface HeaderParamWithBodyHeaders {
    name: string;
}

export declare type HeaderParamWithBodyParameters = HeaderParamWithBodyHeaderParam & HeaderParamWithBodyBodyParam & RequestParameters;

export declare interface HeaderParamWithQuery {
    get(options: HeaderParamWithQueryParameters): StreamableMethod<HeaderParamWithQuery204Response>;
}

export declare interface HeaderParamWithQuery204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderParamWithQueryHeaderParam {
    headers: RawHttpHeadersInput & HeaderParamWithQueryHeaders;
}

export declare interface HeaderParamWithQueryHeaders {
    name: string;
}

export declare type HeaderParamWithQueryParameters = HeaderParamWithQueryQueryParam & HeaderParamWithQueryHeaderParam & RequestParameters;

export declare interface HeaderParamWithQueryQueryParam {
    queryParameters: HeaderParamWithQueryQueryParamProperties;
}

export declare interface HeaderParamWithQueryQueryParamProperties {
    id: string;
}

export declare interface Input {
    name: string;
}

export declare interface MixedParamsWithBody {
    post(options: MixedParamsWithBodyParameters): StreamableMethod<MixedParamsWithBody204Response>;
}

export declare interface MixedParamsWithBody204Response extends HttpResponse {
    status: "204";
}

export declare interface MixedParamsWithBodyBodyParam {
    body: {
        name: string;
    };
}

export declare interface MixedParamsWithBodyHeaderParam {
    headers: RawHttpHeadersInput & MixedParamsWithBodyHeaders;
}

export declare interface MixedParamsWithBodyHeaders {
    name: string;
}

export declare type MixedParamsWithBodyParameters = MixedParamsWithBodyQueryParam & MixedParamsWithBodyHeaderParam & MixedParamsWithBodyBodyParam & RequestParameters;

export declare interface MixedParamsWithBodyQueryParam {
    queryParameters: MixedParamsWithBodyQueryParamProperties;
}

export declare interface MixedParamsWithBodyQueryParamProperties {
    region: string;
}

export declare interface MixedParamsWithQuery {
    get(options: MixedParamsWithQueryParameters): StreamableMethod<MixedParamsWithQuery204Response>;
}

export declare interface MixedParamsWithQuery204Response extends HttpResponse {
    status: "204";
}

export declare interface MixedParamsWithQueryHeaderParam {
    headers: RawHttpHeadersInput & MixedParamsWithQueryHeaders;
}

export declare interface MixedParamsWithQueryHeaders {
    name: string;
}

export declare type MixedParamsWithQueryParameters = MixedParamsWithQueryQueryParam & MixedParamsWithQueryHeaderParam & RequestParameters;

export declare interface MixedParamsWithQueryQueryParam {
    queryParameters: MixedParamsWithQueryQueryParamProperties;
}

export declare interface MixedParamsWithQueryQueryParamProperties {
    region: string;
    id: string;
}

export declare interface MultipleParamsWithBody {
    post(options: MultipleParamsWithBodyParameters): StreamableMethod<MultipleParamsWithBody204Response>;
}

export declare interface MultipleParamsWithBody204Response extends HttpResponse {
    status: "204";
}

export declare interface MultipleParamsWithBodyBodyParam {
    body: Input;
}

export declare interface MultipleParamsWithBodyHeaderParam {
    headers: RawHttpHeadersInput & MultipleParamsWithBodyHeaders;
}

export declare interface MultipleParamsWithBodyHeaders {
    name: string;
}

export declare type MultipleParamsWithBodyParameters = MultipleParamsWithBodyQueryParam & MultipleParamsWithBodyHeaderParam & MultipleParamsWithBodyBodyParam & RequestParameters;

export declare interface MultipleParamsWithBodyQueryParam {
    queryParameters: MultipleParamsWithBodyQueryParamProperties;
}

export declare interface MultipleParamsWithBodyQueryParamProperties {
    region: string;
}

export declare interface MultipleParamsWithQuery {
    get(options: MultipleParamsWithQueryParameters): StreamableMethod<MultipleParamsWithQuery204Response>;
}

export declare interface MultipleParamsWithQuery204Response extends HttpResponse {
    status: "204";
}

export declare interface MultipleParamsWithQueryHeaderParam {
    headers: RawHttpHeadersInput & MultipleParamsWithQueryHeaders;
}

export declare interface MultipleParamsWithQueryHeaders {
    name: string;
}

export declare type MultipleParamsWithQueryParameters = MultipleParamsWithQueryQueryParam & MultipleParamsWithQueryHeaderParam & RequestParameters;

export declare interface MultipleParamsWithQueryQueryParam {
    queryParameters: MultipleParamsWithQueryQueryParamProperties;
}

export declare interface MultipleParamsWithQueryQueryParamProperties {
    region: string;
    id: string;
}

export declare interface ParamAliasWithAliasedName {
    get(options?: ParamAliasWithAliasedNameParameters): StreamableMethod<ParamAliasWithAliasedName204Response>;
}

export declare interface ParamAliasWithAliasedName204Response extends HttpResponse {
    status: "204";
}

export declare type ParamAliasWithAliasedNameParameters = RequestParameters;

export declare interface ParamAliasWithOriginalName {
    get(options?: ParamAliasWithOriginalNameParameters): StreamableMethod<ParamAliasWithOriginalName204Response>;
}

export declare interface ParamAliasWithOriginalName204Response extends HttpResponse {
    status: "204";
}

export declare type ParamAliasWithOriginalNameParameters = RequestParameters;

export declare interface PathParamDeleteStandalone {
    delete(options?: PathParamDeleteStandaloneParameters): StreamableMethod<PathParamDeleteStandalone204Response>;
}

export declare interface PathParamDeleteStandalone204Response extends HttpResponse {
    status: "204";
}

export declare type PathParamDeleteStandaloneParameters = RequestParameters;

export declare interface PathParamGetStandalone {
    get(options?: PathParamGetStandaloneParameters): StreamableMethod<PathParamGetStandalone200Response>;
}

export declare interface PathParamGetStandalone200Response extends HttpResponse {
    status: "200";
    body: BlobPropertiesOutput;
}

export declare type PathParamGetStandaloneParameters = RequestParameters;

export declare interface PathParamWithQuery {
    get(options?: PathParamWithQueryParameters): StreamableMethod<PathParamWithQuery204Response>;
}

export declare interface PathParamWithQuery204Response extends HttpResponse {
    status: "204";
}

export declare type PathParamWithQueryParameters = PathParamWithQueryQueryParam & RequestParameters;

export declare interface PathParamWithQueryQueryParam {
    queryParameters?: PathParamWithQueryQueryParamProperties;
}

export declare interface PathParamWithQueryQueryParamProperties {
    format?: string;
}

export declare interface Routes {
    (path: "/azure/client-generator-core/client-initialization/header-param/with-query"): HeaderParamWithQuery;
    (path: "/azure/client-generator-core/client-initialization/header-param/with-body"): HeaderParamWithBody;
    (path: "/azure/client-generator-core/client-initialization/multiple-params/with-query"): MultipleParamsWithQuery;
    (path: "/azure/client-generator-core/client-initialization/multiple-params/with-body"): MultipleParamsWithBody;
    (path: "/azure/client-generator-core/client-initialization/mixed-params/with-query"): MixedParamsWithQuery;
    (path: "/azure/client-generator-core/client-initialization/mixed-params/with-body"): MixedParamsWithBody;
    (path: "/azure/client-generator-core/client-initialization/path/{blobName}/with-query", blobName: string): PathParamWithQuery;
    (path: "/azure/client-generator-core/client-initialization/path/{blobName}/get-standalone", blobName: string): PathParamGetStandalone;
    (path: "/azure/client-generator-core/client-initialization/path/{blobName}", blobName: string): PathParamDeleteStandalone;
    (path: "/azure/client-generator-core/client-initialization/param-alias/{blob}/with-aliased-name", blob: string): ParamAliasWithAliasedName;
    (path: "/azure/client-generator-core/client-initialization/param-alias/{blobName}/with-original-name", blobName: string): ParamAliasWithOriginalName;
    (path: "/azure/client-generator-core/client-initialization/child-client/{blobName}/with-query", blobName: string): ChildClientWithQuery;
    (path: "/azure/client-generator-core/client-initialization/child-client/{blobName}/get-standalone", blobName: string): ChildClientGetStandalone;
    (path: "/azure/client-generator-core/client-initialization/child-client/{blobName}", blobName: string): ChildClientDeleteStandalone;
}

export declare type ServiceClient = Client & {
    path: Routes;
};

export declare interface ServiceClientOptions extends ClientOptions {
}

export { }
