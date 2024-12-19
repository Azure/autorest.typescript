import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type NewEnum = "newEnumMember";

export declare interface NewModel {
    newProp: string;
    enumProp: NewEnum;
    unionProp: NewUnion;
}

export declare interface NewOpInNewInterfaceOptionalParams extends OperationOptions {
}

export declare interface NewOpOptionalParams extends OperationOptions {
}

export declare type NewUnion = string | number;

export declare class RenamedFromClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: RenamedFromClientOptionalParams);
    newOp(newQuery: string, body: NewModel, options?: NewOpOptionalParams): Promise<NewModel>;
    newOpInNewInterface(body: NewModel, options?: NewOpInNewInterfaceOptionalParams): Promise<NewModel>;
}

export declare interface RenamedFromClientOptionalParams extends ClientOptions {
}

export declare type Versions = "v1" | "v2";

export { }
