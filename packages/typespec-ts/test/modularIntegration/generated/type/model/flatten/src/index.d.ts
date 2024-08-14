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

export declare class FlattenClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: FlattenClientOptionalParams);
    putFlattenModel(input: FlattenModel, options?: PutFlattenModelOptionalParams): Promise<FlattenModel>;
    putNestedFlattenModel(input: NestedFlattenModel, options?: PutNestedFlattenModelOptionalParams): Promise<NestedFlattenModel>;
}

export declare interface FlattenClientOptionalParams extends ClientOptions {
}

export declare interface FlattenModel {
    name: string;
    properties: ChildModel;
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
