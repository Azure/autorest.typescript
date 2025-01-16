import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare type NewEnum = "newEnumMember";

declare interface NewModel {
    newProp: string;
    enumProp: NewEnum;
    unionProp: NewUnion;
}

export declare interface NewOpInNewInterfaceOptionalParams extends OperationOptions {
}

export declare interface NewOpOptionalParams extends OperationOptions {
}

declare type NewUnion = string | number;

export declare class RenamedFromClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: RenamedFromClientOptionalParams);
    newOpInNewInterface(body: NewModel, options?: NewOpInNewInterfaceOptionalParams): Promise<NewModel>;
    newOp(body: NewModel, newQuery: string, options?: NewOpOptionalParams): Promise<NewModel>;
}

export declare interface RenamedFromClientOptionalParams extends ClientOptions {
}

declare type Versions = "v1" | "v2";

export { }
