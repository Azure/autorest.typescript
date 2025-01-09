import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(endpointParam: string, options?: VersionedParamInServerVersionsClientOptions): VersionedParamInServerVersionsClient;
export default createClient;

export declare interface Routes {
    (path: "/server/versions/versioned/without-api-version"): WithoutApiVersion;
    (path: "/server/versions/versioned/with-query-api-version"): WithQueryApiVersion;
    (path: "/server/versions/versioned/with-path-api-version/{apiVersion}", apiVersion: string): WithPathApiVersion;
    (path: "/server/versions/versioned/with-query-old-api-version"): WithQueryOldApiVersion;
}

export declare type VersionedParamInServerVersionsClient = Client & {
    path: Routes;
};

export declare interface VersionedParamInServerVersionsClientOptions extends ClientOptions {
}

export declare interface WithoutApiVersion {
    head(options?: WithoutApiVersionParameters): StreamableMethod<WithoutApiVersion200Response>;
}

export declare interface WithoutApiVersion200Response extends HttpResponse {
    status: "200";
}

export declare type WithoutApiVersionParameters = RequestParameters;

export declare interface WithPathApiVersion {
    head(options?: WithPathApiVersionParameters): StreamableMethod<WithPathApiVersion200Response>;
}

export declare interface WithPathApiVersion200Response extends HttpResponse {
    status: "200";
}

export declare type WithPathApiVersionParameters = RequestParameters;

export declare interface WithQueryApiVersion {
    head(options?: WithQueryApiVersionParameters): StreamableMethod<WithQueryApiVersion200Response>;
}

export declare interface WithQueryApiVersion200Response extends HttpResponse {
    status: "200";
}

export declare type WithQueryApiVersionParameters = WithQueryApiVersionQueryParam & RequestParameters;

export declare interface WithQueryApiVersionQueryParam {
    queryParameters: WithQueryApiVersionQueryParamProperties;
}

export declare interface WithQueryApiVersionQueryParamProperties {
    "api-version": string;
}

export declare interface WithQueryOldApiVersion {
    head(options?: WithQueryOldApiVersionParameters): StreamableMethod<WithQueryOldApiVersion200Response>;
}

export declare interface WithQueryOldApiVersion200Response extends HttpResponse {
    status: "200";
}

export declare type WithQueryOldApiVersionParameters = WithQueryOldApiVersionQueryParam & RequestParameters;

export declare interface WithQueryOldApiVersionQueryParam {
    queryParameters: WithQueryOldApiVersionQueryParamProperties;
}

export declare interface WithQueryOldApiVersionQueryParamProperties {
    "api-version": string;
}

export { }
