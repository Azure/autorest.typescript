import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: XmsClientRequestIdClientOptions): XmsClientRequestIdClient;
export default createClient;

export declare interface Get {
    get(options?: GetParameters): StreamableMethod<Get204Response>;
}

export declare interface Get204Response extends HttpResponse {
    status: "204";
}

export declare interface GetHeaderParam {
    headers?: RawHttpHeadersInput & GetHeaders;
}

export declare interface GetHeaders {
    "x-ms-client-request-id"?: string;
}

export declare type GetParameters = GetHeaderParam & RequestParameters;

export declare interface Routes {
    (path: "/azure/special-headers/x-ms-client-request-id/"): Get;
}

export declare type XmsClientRequestIdClient = Client & {
    path: Routes;
};

export declare interface XmsClientRequestIdClientOptions extends ClientOptions {
}

export { }
