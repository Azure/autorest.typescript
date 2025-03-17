import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(endpointParam: string, options?: NotVersionedParamInServerVersionsClientOptions): NotVersionedParamInServerVersionsClient;
export default createClient;

export declare type NotVersionedParamInServerVersionsClient = Client & {
    path: Routes;
};

export declare interface NotVersionedParamInServerVersionsClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/server/versions/not-versioned/without-api-version"): WithoutApiVersion;
    (path: "/server/versions/not-versioned/with-query-api-version"): WithQueryApiVersion;
    (path: "/server/versions/not-versioned/with-path-api-version/{apiVersion}", apiVersion: string): WithPathApiVersion;
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

export { }
