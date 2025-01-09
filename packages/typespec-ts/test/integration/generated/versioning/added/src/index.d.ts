import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RawHttpHeadersInput } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(endpointParam: string, version: Versions, options?: VersioningAddedClientOptions): VersioningAddedClient;
export default createClient;

export declare type EnumV1 = "enumMemberV1" | "enumMemberV2";

export declare type EnumV1Output = "enumMemberV1" | "enumMemberV2";

export declare type EnumV2 = "enumMember";

export declare type EnumV2Output = "enumMember";

export declare interface ModelV1 {
    prop: string;
    enumProp: EnumV1;
    unionProp: UnionV1;
}

export declare interface ModelV1Output {
    prop: string;
    enumProp: EnumV1Output;
    unionProp: UnionV1Output;
}

export declare interface ModelV2 {
    prop: string;
    enumProp: EnumV2;
    unionProp: UnionV2;
}

export declare interface ModelV2Output {
    prop: string;
    enumProp: EnumV2Output;
    unionProp: UnionV2Output;
}

export declare interface Routes {
    (path: "/v1"): V1;
    (path: "/v2"): V2;
    (path: "/interface-v2/v2"): V2InInterface;
}

export declare type UnionV1 = string | number;

export declare type UnionV1Output = string | number;

export declare type UnionV2 = string | number;

export declare type UnionV2Output = string | number;

export declare interface V1 {
    post(options: V1Parameters): StreamableMethod<V1200Response>;
}

export declare interface V1200Response extends HttpResponse {
    status: "200";
    body: ModelV1Output;
}

export declare interface V1BodyParam {
    body: ModelV1;
}

export declare interface V1HeaderParam {
    headers: RawHttpHeadersInput & V1Headers;
}

export declare interface V1Headers {
    "header-v2": string;
}

export declare type V1Parameters = V1HeaderParam & V1BodyParam & RequestParameters;

export declare interface V2 {
    post(options: V2Parameters): StreamableMethod<V2200Response>;
}

export declare interface V2200Response extends HttpResponse {
    status: "200";
    body: ModelV2Output;
}

export declare interface V2BodyParam {
    body: ModelV2;
}

export declare interface V2InInterface {
    post(options: V2InInterfaceParameters): StreamableMethod<V2InInterface200Response>;
}

export declare interface V2InInterface200Response extends HttpResponse {
    status: "200";
    body: ModelV2Output;
}

export declare interface V2InInterfaceBodyParam {
    body: ModelV2;
}

export declare type V2InInterfaceParameters = V2InInterfaceBodyParam & RequestParameters;

export declare type V2Parameters = V2BodyParam & RequestParameters;

export declare type VersioningAddedClient = Client & {
    path: Routes;
};

export declare interface VersioningAddedClientOptions extends ClientOptions {
}

export declare type Versions = "v1" | "v2";

export { }
