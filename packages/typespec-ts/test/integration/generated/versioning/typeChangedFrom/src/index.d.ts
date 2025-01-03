import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(endpointParam: string, version: Versions, options?: VersioningTypeChangedFromClientOptions): VersioningTypeChangedFromClient;
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
    changedProp: string;
}

export declare interface TestModelOutput {
    prop: string;
    changedProp: string;
}

export declare type TestParameters = TestQueryParam & TestBodyParam & RequestParameters;

export declare interface TestQueryParam {
    queryParameters: TestQueryParamProperties;
}

export declare interface TestQueryParamProperties {
    param: string;
}

export declare type VersioningTypeChangedFromClient = Client & {
    path: Routes;
};

export declare interface VersioningTypeChangedFromClientOptions extends ClientOptions {
}

export declare type Versions = "v1" | "v2";

export { }
