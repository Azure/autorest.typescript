import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient($host: string, options?: MediaTypesClientOptions): MediaTypesClient;
export default createClient;

export declare interface GetByOverloadParent {
    post(options: GetByOverloadParentParameters): StreamableMethod<GetByOverloadParent200Response>;
}

export declare interface GetByOverloadParent200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare interface GetByOverloadParentBodyParam {
    body: SourcePath | string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | string;
}

export declare interface GetByOverloadParentMediaTypesParam {
    contentType: "application/pdf" | "application/json" | "image/jpeg" | "image/png" | "image/tiff" | "text/plain";
}

export declare type GetByOverloadParentParameters = GetByOverloadParentMediaTypesParam & GetByOverloadParentBodyParam & RequestParameters;

export declare interface GetBySharedRouteForBytes200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare interface GetBySharedRouteForBytesBodyParam {
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export declare interface GetBySharedRouteForBytesMediaTypesParam {
    contentType: "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";
}

export declare type GetBySharedRouteForBytesParameters = GetBySharedRouteForBytesMediaTypesParam & GetBySharedRouteForBytesBodyParam & RequestParameters;

export declare interface GetBySharedRouteForModel200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare interface GetBySharedRouteForModelBodyParam {
    body: SourcePath;
}

export declare interface GetBySharedRouteForModelMediaTypesParam {
    contentType: "application/json";
}

export declare type GetBySharedRouteForModelParameters = GetBySharedRouteForModelMediaTypesParam & GetBySharedRouteForModelBodyParam & RequestParameters;

export declare interface GetBySharedRouteForString {
    post(options: GetBySharedRouteForStringParameters): StreamableMethod<GetBySharedRouteForString200Response>;
    post(options: GetBySharedRouteForModelParameters): StreamableMethod<GetBySharedRouteForModel200Response>;
    post(options: GetBySharedRouteForBytesParameters): StreamableMethod<GetBySharedRouteForBytes200Response>;
}

export declare interface GetBySharedRouteForString200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare interface GetBySharedRouteForStringBodyParam {
    body: string;
}

export declare interface GetBySharedRouteForStringMediaTypesParam {
    contentType: "text/plain";
}

export declare type GetBySharedRouteForStringParameters = GetBySharedRouteForStringMediaTypesParam & GetBySharedRouteForStringBodyParam & RequestParameters;

export declare interface GetByUnionOnly {
    post(options: GetByUnionOnlyParameters): StreamableMethod<GetByUnionOnly200Response>;
}

export declare interface GetByUnionOnly200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare interface GetByUnionOnlyBodyParam {
    body: SourcePath | string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | string;
}

export declare interface GetByUnionOnlyMediaTypesParam {
    contentType: "application/pdf" | "application/json" | "image/jpeg" | "image/png" | "image/tiff" | "text/plain";
}

export declare type GetByUnionOnlyParameters = GetByUnionOnlyMediaTypesParam & GetByUnionOnlyBodyParam & RequestParameters;

export declare type MediaTypesClient = Client & {
    path: Routes;
};

export declare interface MediaTypesClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/mediatypes/union"): GetByUnionOnly;
    (path: "/mediatypes/shared-route"): GetBySharedRouteForString;
    (path: "/mediatypes/overload"): GetByOverloadParent;
}

export declare interface SourcePath {
    source: string;
}

export { }
