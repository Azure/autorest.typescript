import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare type EnumV2 = "enumMemberV2";

declare type EnumV3 = "enumMemberV1" | "enumMemberV2Preview";

declare interface ModelV2 {
    prop: string;
    enumProp: EnumV2;
    unionProp: UnionV2;
}

declare interface ModelV3 {
    id: string;
    enumProp: EnumV3;
}

export declare interface ModelV3OptionalParams extends OperationOptions {
}

export declare class RemovedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: RemovedClientOptionalParams);
    modelV3(body: ModelV3, options?: ModelV3OptionalParams): Promise<ModelV3>;
    v2(body: ModelV2, options?: V2OptionalParams): Promise<ModelV2>;
}

export declare interface RemovedClientOptionalParams extends ClientOptions {
}

declare type UnionV2 = string | number;

export declare interface V2OptionalParams extends OperationOptions {
}

declare type Versions = "v1" | "v2preview" | "v2";

export { }
