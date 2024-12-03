import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type EnumV2 = "enumMemberV2";

export declare interface ModelV2 {
    prop: string;
    enumProp: EnumV2;
    unionProp: UnionV2;
}

export declare class RemovedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: RemovedClientOptionalParams);
    v2(body: ModelV2, options?: V2OptionalParams): Promise<ModelV2>;
}

export declare interface RemovedClientOptionalParams extends ClientOptions {
}

export declare type UnionV2 = string | number;

export declare interface V2OptionalParams extends OperationOptions {
}

export declare type Versions = "v1" | "v2";

export { }
