import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(endpointParam: string, version: Versions, options?: VersioningRenamedFromClientOptions): VersioningRenamedFromClient;
export default createClient;

export declare type NewEnum = "newEnumMember";

export declare type NewEnumOutput = "newEnumMember";

export declare interface NewModel {
    newProp: string;
    enumProp: NewEnum;
    unionProp: NewUnion;
}

export declare interface NewModelOutput {
    newProp: string;
    enumProp: NewEnumOutput;
    unionProp: NewUnionOutput;
}

export declare interface NewOp {
    post(options: NewOpParameters): StreamableMethod<NewOp200Response>;
}

export declare interface NewOp200Response extends HttpResponse {
    status: "200";
    body: NewModelOutput;
}

export declare interface NewOpBodyParam {
    body: NewModel;
}

export declare interface NewOpInNewInterface {
    post(options: NewOpInNewInterfaceParameters): StreamableMethod<NewOpInNewInterface200Response>;
}

export declare interface NewOpInNewInterface200Response extends HttpResponse {
    status: "200";
    body: NewModelOutput;
}

export declare interface NewOpInNewInterfaceBodyParam {
    body: NewModel;
}

export declare type NewOpInNewInterfaceParameters = NewOpInNewInterfaceBodyParam & RequestParameters;

export declare type NewOpParameters = NewOpQueryParam & NewOpBodyParam & RequestParameters;

export declare interface NewOpQueryParam {
    queryParameters: NewOpQueryParamProperties;
}

export declare interface NewOpQueryParamProperties {
    newQuery: string;
}

export declare type NewUnion = string | number;

export declare type NewUnionOutput = string | number;

export declare interface Routes {
    (path: "/test"): NewOp;
    (path: "/interface/test"): NewOpInNewInterface;
}

export declare type VersioningRenamedFromClient = Client & {
    path: Routes;
};

export declare interface VersioningRenamedFromClientOptions extends ClientOptions {
}

export declare type Versions = "v1" | "v2";

export { }
