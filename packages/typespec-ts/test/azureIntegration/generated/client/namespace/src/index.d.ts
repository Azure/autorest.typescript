import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type ClientNamespaceClient = Client & {
    path: Routes;
};

export declare interface ClientNamespaceClientOptions extends ClientOptions {
}

declare function createClient(options?: ClientNamespaceClientOptions): ClientNamespaceClient;
export default createClient;

export declare interface FirstClientResultOutput {
    name: string;
}

export declare interface GetFirst {
    get(options?: GetFirstParameters): StreamableMethod<GetFirst200Response>;
}

export declare interface GetFirst200Response extends HttpResponse {
    status: "200";
    body: FirstClientResultOutput;
}

export declare type GetFirstParameters = RequestParameters;

export declare interface GetSecond {
    get(options?: GetSecondParameters): StreamableMethod<GetSecond200Response>;
}

export declare interface GetSecond200Response extends HttpResponse {
    status: "200";
    body: SecondClientResultOutput;
}

export declare type GetSecondParameters = RequestParameters;

export declare interface Routes {
    (path: "/client/client-namespace/second"): GetSecond;
    (path: "/client/client-namespace/first"): GetFirst;
}

export declare type SecondClientEnumTypeOutput = string;

export declare interface SecondClientResultOutput {
    type: SecondClientEnumTypeOutput;
}

export { }
