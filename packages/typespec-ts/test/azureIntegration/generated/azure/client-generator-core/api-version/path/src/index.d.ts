import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: PathClientOptions): PathClient;
export default createClient;

export declare interface PathApiVersion {
    post(options?: PathApiVersionParameters): StreamableMethod<PathApiVersion200Response>;
}

export declare interface PathApiVersion200Response extends HttpResponse {
    status: "200";
}

export declare type PathApiVersionParameters = RequestParameters;

export declare type PathClient = Client & {
    path: Routes;
};

export declare interface PathClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/azure/client-generator-core/api-version/path/{version}", version: string): PathApiVersion;
}

export { }
