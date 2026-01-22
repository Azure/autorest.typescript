import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: HeaderClientOptions): HeaderClient;
export default createClient;

export declare interface HeaderApiVersion {
    post(options?: HeaderApiVersionParameters): StreamableMethod<HeaderApiVersion200Response>;
}

export declare interface HeaderApiVersion200Response extends HttpResponse {
    status: "200";
}

export declare interface HeaderApiVersionHeaderParam {
    headers: RawHttpHeadersInput & HeaderApiVersionHeaders;
}

export declare interface HeaderApiVersionHeaders {
    "x-ms-version": string;
}

export declare type HeaderApiVersionParameters = HeaderApiVersionHeaderParam & RequestParameters;

export declare type HeaderClient = Client & {
    path: Routes;
};

export declare interface HeaderClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/azure/client-generator-core/api-version/header"): HeaderApiVersion;
}

export { }
