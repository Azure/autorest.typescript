import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(endpointParam: string, { apiVersion, ...options }?: MultipleParamInServerPathClientOptions): MultipleParamInServerPathClient;
export default createClient;

export declare type MultipleParamInServerPathClient = Client & {
    path: Routes;
};

export declare interface MultipleParamInServerPathClientOptions extends ClientOptions {
    apiVersion?: Versions;
}

export declare interface NoOperationParams {
    get(options?: NoOperationParamsParameters): StreamableMethod<NoOperationParams204Response>;
}

export declare interface NoOperationParams204Response extends HttpResponse {
    status: "204";
}

export declare type NoOperationParamsParameters = RequestParameters;

export declare interface Routes {
    (path: "/"): NoOperationParams;
    (path: "/{keyword}", keyword: string): WithOperationPathParam;
}

export declare type Versions = "v1.0";

export declare interface WithOperationPathParam {
    get(options?: WithOperationPathParamParameters): StreamableMethod<WithOperationPathParam204Response>;
}

export declare interface WithOperationPathParam204Response extends HttpResponse {
    status: "204";
}

export declare type WithOperationPathParamParameters = RequestParameters;

export { }
