import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ChildFlattenModel {
    summary: string;
    properties: ChildModel;
}

export declare interface ChildModel {
    description: string;
    age: number;
}

export declare interface FlattenModel {
    name: string;
    properties: ChildModel;
}

export declare class FlattenPropertyClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: FlattenPropertyClientOptionalParams);
    putFlattenModel(input: FlattenModel, options?: PutFlattenModelOptionalParams): Promise<FlattenModel>;
    putNestedFlattenModel(input: NestedFlattenModel, options?: PutNestedFlattenModelOptionalParams): Promise<NestedFlattenModel>;
}

export declare interface FlattenPropertyClientOptionalParams extends ClientOptions {
}

export declare interface FlattenPropertyContext extends Client {
}

export declare interface NestedFlattenModel {
    name: string;
    properties: ChildFlattenModel;
}

export declare interface PutFlattenModelOptionalParams extends OperationOptions {
}

export declare interface PutNestedFlattenModelOptionalParams extends OperationOptions {
}

export { }
