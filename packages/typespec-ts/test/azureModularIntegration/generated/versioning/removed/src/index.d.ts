import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type EnumV2 = "enumMemberV2";

export declare type EnumV3 = "enumMemberV1" | "enumMemberV2Preview";

export declare interface ModelV2 {
    prop: string;
    enumProp: EnumV2;
    unionProp: string | number;
}

export declare interface ModelV3 {
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

export declare interface V2OptionalParams extends OperationOptions {
}

export declare type Versions = "v1" | "v2preview" | "v2";

export { }
