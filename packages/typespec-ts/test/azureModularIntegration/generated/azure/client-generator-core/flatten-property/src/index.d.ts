import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface ChildFlattenModel {
    summary: string;
    properties: ChildModel;
}

declare interface ChildModel {
    description: string;
    age: number;
}

declare interface FlattenModel {
    name: string;
    properties: ChildModel;
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

declare interface NestedFlattenModel {
    name: string;
    properties: ChildFlattenModel;
}

export declare interface PutFlattenModelOptionalParams extends OperationOptions {
}

export declare interface PutNestedFlattenModelOptionalParams extends OperationOptions {
}

export { }
