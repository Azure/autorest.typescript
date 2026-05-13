import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import { RestError } from '@azure/core-rest-pipeline';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient({ apiVersion, ...options }?: PathClientOptions): PathClient;
export default createClient;

export { isRestError }

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
    apiVersion?: string;
}

export { RestError }

export declare interface Routes {
    (path: "/azure/client-generator-core/api-version/path/{version}", version: string): PathApiVersion;
}

export { }
