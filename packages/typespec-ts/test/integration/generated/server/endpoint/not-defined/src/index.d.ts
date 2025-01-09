import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(endpointParam: string, options?: NotDefinedParamInServerEndpointClientOptions): NotDefinedParamInServerEndpointClient;
export default createClient;

export declare type NotDefinedParamInServerEndpointClient = Client & {
    path: Routes;
};

export declare interface NotDefinedParamInServerEndpointClientOptions extends ClientOptions {
}

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
