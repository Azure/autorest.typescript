import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(endpointParam: string, options?: SingleParamInServerPathClientOptions): SingleParamInServerPathClient;
export default createClient;

export declare interface MyOp {
    head(options?: MyOpParameters): StreamableMethod<MyOp200Response>;
}

export declare interface MyOp200Response extends HttpResponse {
    status: "200";
}

export declare type MyOpParameters = RequestParameters;

export declare interface Routes {
    (path: "/server/path/single/myOp"): MyOp;
}

export declare type SingleParamInServerPathClient = Client & {
    path: Routes;
};

export declare interface SingleParamInServerPathClientOptions extends ClientOptions {
}

export { }
