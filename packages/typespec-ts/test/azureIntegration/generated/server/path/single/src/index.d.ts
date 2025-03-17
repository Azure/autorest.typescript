import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

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
