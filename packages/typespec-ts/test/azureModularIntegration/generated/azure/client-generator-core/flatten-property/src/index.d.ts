import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ChildFlattenModel {
    summary: string;
    description: string;
    age: number;
}

export declare interface ChildModel {
    description: string;
    age: number;
}

export declare interface FlattenModel {
    name: string;
    description: string;
    age: number;
}

export declare class FlattenPropertyClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: FlattenPropertyClientOptionalParams);
    putNestedFlattenModel(input: NestedFlattenModel, options?: PutNestedFlattenModelOptionalParams): Promise<NestedFlattenModel>;
    putFlattenModel(input: FlattenModel, options?: PutFlattenModelOptionalParams): Promise<FlattenModel>;
}

export declare interface FlattenPropertyClientOptionalParams extends ClientOptions {
}

export declare interface NestedFlattenModel {
    name: string;
    summary: string;
    properties: ChildModel;
}

export declare interface PutFlattenModelOptionalParams extends OperationOptions {
}

export declare interface PutNestedFlattenModelOptionalParams extends OperationOptions {
}

export { }
