import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(endpointParam: string, version: Versions, options?: VersioningReturnTypeChangedFromClientOptions): VersioningReturnTypeChangedFromClient;
export default createClient;

export declare interface Routes {
    (path: "/test"): Test;
}

export declare interface Test {
    post(options: TestParameters): StreamableMethod<Test200Response>;
}

export declare interface Test200Response extends HttpResponse {
    status: "200";
    body: string;
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
