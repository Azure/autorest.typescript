import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(endpointParam: string, version: Versions, options?: VersioningRemovedClientOptions): VersioningRemovedClient;
export default createClient;

export declare type EnumV2 = "enumMemberV2";

export declare type EnumV2Output = "enumMemberV2";

export declare type EnumV3 = "enumMemberV1" | "enumMemberV2Preview";

export declare type EnumV3Output = "enumMemberV1" | "enumMemberV2Preview";

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

export declare interface ModelV3 {
    post(options: ModelV3Parameters): StreamableMethod<ModelV3200Response>;
}

export declare interface ModelV3200Response extends HttpResponse {
    status: "200";
    body: ModelV3Output;
}

declare interface ModelV3_2 {
    id: string;
    enumProp: EnumV3;
}

export declare interface ModelV3BodyParam {
    body: ModelV3_2;
}

export declare interface ModelV3Output {
    id: string;
    enumProp: EnumV3Output;
}

export declare type ModelV3Parameters = ModelV3BodyParam & RequestParameters;

export declare interface Routes {
    (path: "/v2"): V2;
    (path: "/v3"): ModelV3;
}

export declare type UnionV2 = string | number;

export declare type UnionV2Output = string | number;

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

export declare type V2Parameters = V2BodyParam & RequestParameters;

export declare type VersioningRemovedClient = Client & {
    path: Routes;
};

export declare interface VersioningRemovedClientOptions extends ClientOptions {
}

export declare type Versions = "v1" | "v2preview" | "v2";

export { }
