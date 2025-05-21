import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type EnumV1 = "enumMember";

export declare type EnumV2 = "enumMemberV1" | "enumMemberV2";

export declare interface ModelV1 {
    prop: string;
    enumProp: EnumV1;
    unionProp: UnionV1;
}

export declare interface ModelV2 {
    prop: string;
    removedProp: string;
    enumProp: EnumV2;
    unionProp: UnionV2;
}

export declare interface ModelV3 {
    id: string;
}

export declare interface ModelV3OptionalParams extends OperationOptions {
}

export declare class RemovedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: RemovedClientOptionalParams);
    modelV3(body: ModelV3, options?: ModelV3OptionalParams): Promise<ModelV3>;
    v2(body: ModelV2, param: string, options?: V2OptionalParams): Promise<ModelV2>;
    v1(body: ModelV1, options?: V1OptionalParams): Promise<ModelV1>;
    v1InInterface(body: ModelV1, options?: V1InInterfaceOptionalParams): Promise<ModelV1>;
}

export declare interface RemovedClientOptionalParams extends ClientOptions {
}

export declare type UnionV1 = string | number;

export declare type UnionV2 = string | number | number;

export declare interface V1InInterfaceOptionalParams extends OperationOptions {
}

export declare interface V1OptionalParams extends OperationOptions {
}

export declare interface V2OptionalParams extends OperationOptions {
}

export declare type Versions = "v1" | "v2preview";

export { }
