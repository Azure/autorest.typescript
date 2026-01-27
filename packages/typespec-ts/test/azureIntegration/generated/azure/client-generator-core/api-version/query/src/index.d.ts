import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient({ apiVersion, ...options }?: QueryClientOptions): QueryClient;
export default createClient;

export declare interface QueryApiVersion {
    post(options?: QueryApiVersionParameters): StreamableMethod<QueryApiVersion200Response>;
}

export declare interface QueryApiVersion200Response extends HttpResponse {
    status: "200";
}

export declare type QueryApiVersionParameters = RequestParameters;

export declare type QueryClient = Client & {
    path: Routes;
};

export declare interface QueryClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface Routes {
    (path: "/azure/client-generator-core/api-version/query"): QueryApiVersion;
}

export { }
