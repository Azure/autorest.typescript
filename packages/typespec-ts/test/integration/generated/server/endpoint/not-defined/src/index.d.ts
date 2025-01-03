import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

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
