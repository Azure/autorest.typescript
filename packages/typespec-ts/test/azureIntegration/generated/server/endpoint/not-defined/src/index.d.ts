import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import { RestError } from '@azure/core-rest-pipeline';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(endpointParam: string, options?: NotDefinedParamInServerEndpointClientOptions): NotDefinedParamInServerEndpointClient;
export default createClient;

export { isRestError }

export declare type NotDefinedParamInServerEndpointClient = Client & {
    path: Routes;
};

export declare interface NotDefinedParamInServerEndpointClientOptions extends ClientOptions {
}

export { RestError }

export declare interface Routes {
    (path: "/server/endpoint/not-defined/valid"): Valid;
}

export declare interface Valid {
    head(options?: ValidParameters): StreamableMethod<Valid200Response>;
}

export declare interface Valid200Response extends HttpResponse {
    status: "200";
}

export declare type ValidParameters = RequestParameters;

export { }
