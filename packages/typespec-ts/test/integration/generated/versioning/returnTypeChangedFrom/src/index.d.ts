import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RawHttpHeaders } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(endpointParam: string, version: Versions, options?: VersioningReturnTypeChangedFromClientOptions): VersioningReturnTypeChangedFromClient;
export default createClient;

export declare interface Routes {
    (path: "/test"): Test;
}

export declare interface Test {
    post(options: TestParameters): StreamableMethod<Test200Response>;
}

export declare interface Test200Headers {
    "content-type": "application/json";
}

export declare interface Test200Response extends HttpResponse {
    status: "200";
    body: string;
    headers: RawHttpHeaders & Test200Headers;
}

export declare interface TestBodyParam {
    body: string;
}

export declare type TestParameters = TestBodyParam & RequestParameters;

export declare type VersioningReturnTypeChangedFromClient = Client & {
    path: Routes;
};

export declare interface VersioningReturnTypeChangedFromClientOptions extends ClientOptions {
}

export declare type Versions = "v1" | "v2";

export { }
