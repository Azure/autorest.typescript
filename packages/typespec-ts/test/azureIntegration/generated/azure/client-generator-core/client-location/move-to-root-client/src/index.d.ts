import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: MoveToRootClientClientOptions): MoveToRootClientClient;
export default createClient;

export declare interface GetHealthStatus {
    get(options?: GetHealthStatusParameters): StreamableMethod<GetHealthStatus204Response>;
}

export declare interface GetHealthStatus204Response extends HttpResponse {
    status: "204";
}

export declare type GetHealthStatusParameters = RequestParameters;

export declare interface GetResource {
    get(options?: GetResourceParameters): StreamableMethod<GetResource204Response>;
}

export declare interface GetResource204Response extends HttpResponse {
    status: "204";
}

export declare type GetResourceParameters = RequestParameters;

export declare type MoveToRootClientClient = Client & {
    path: Routes;
};

export declare interface MoveToRootClientClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/azure/client-generator-core/client-location/move-to-root-client/resource"): GetResource;
    (path: "/azure/client-generator-core/client-location/move-to-root-client/health"): GetHealthStatus;
}

export { }
