import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import { RestError } from '@azure/core-rest-pipeline';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(endpointParam: string, { apiVersion, ...options }?: MultipleParamInServerPathClientOptions): MultipleParamInServerPathClient;
export default createClient;

export { isRestError }

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

export { RestError }

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
