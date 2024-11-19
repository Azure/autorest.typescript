import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(endpointParam: string, version: Versions, options?: VersioningMadeOptionalClientOptions): VersioningMadeOptionalClient;
export default createClient;

export declare interface Routes {
    (path: "/test"): Test;
}

export declare interface Test {
    post(options: TestParameters): StreamableMethod<Test200Response>;
}

export declare interface Test200Response extends HttpResponse {
    status: "200";
    body: TestModelOutput;
}

export declare interface TestBodyParam {
    body: TestModel;
}

export declare interface TestModel {
    prop: string;
    changedProp?: string;
}

export declare interface TestModelOutput {
    prop: string;
    changedProp?: string;
}

export declare type TestParameters = TestQueryParam & TestBodyParam & RequestParameters;

export declare interface TestQueryParam {
    queryParameters?: TestQueryParamProperties;
}

export declare interface TestQueryParamProperties {
    param?: string;
}

export declare type VersioningMadeOptionalClient = Client & {
    path: Routes;
};

export declare interface VersioningMadeOptionalClientOptions extends ClientOptions {
}

export declare type Versions = "v1" | "v2";

export { }
