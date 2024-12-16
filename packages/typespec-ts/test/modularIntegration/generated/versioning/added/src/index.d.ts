import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class AddedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: AddedClientOptionalParams);
    v2InInterface(body: ModelV2, options?: V2InInterfaceOptionalParams): Promise<ModelV2>;
    v2(body: ModelV2, options?: V2OptionalParams): Promise<ModelV2>;
    v1(body: ModelV1, headerV2: string, options?: V1OptionalParams): Promise<ModelV1>;
}

export declare interface AddedClientOptionalParams extends ClientOptions {
}

export declare type EnumV1 = "enumMemberV1" | "enumMemberV2";

export declare type EnumV2 = "enumMember";

export declare interface ModelV1 {
    prop: string;
    enumProp: EnumV1;
    unionProp: UnionV1;
}

export declare interface ModelV2 {
    prop: string;
    enumProp: EnumV2;
    unionProp: UnionV2;
}

export declare type UnionV1 = string | number;

export declare type UnionV2 = string | number;

export declare interface V1OptionalParams extends OperationOptions {
}

export declare interface V2InInterfaceOptionalParams extends OperationOptions {
}

export declare interface V2OptionalParams extends OperationOptions {
}

export declare type Versions = "v1" | "v2";

export { }
