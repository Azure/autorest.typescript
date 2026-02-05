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
    putFlattenReadOnlyModel(body: Solution, options?: PutFlattenReadOnlyModelOptionalParams): Promise<Solution>;
    putFlattenUnknownModel(input: FlattenUnknownModel, options?: PutFlattenUnknownModelOptionalParams): Promise<FlattenUnknownModel>;
    putNestedFlattenModel(input: NestedFlattenModel, options?: PutNestedFlattenModelOptionalParams): Promise<NestedFlattenModel>;
    putFlattenModel(input: FlattenModel, options?: PutFlattenModelOptionalParams): Promise<FlattenModel>;
}

export declare interface FlattenPropertyClientOptionalParams extends ClientOptions {
}

export declare interface FlattenUnknownModel {
    name: string;
    properties?: any;
}

export declare interface NestedFlattenModel {
    name: string;
    summary: string;
    properties: ChildModel;
}

export declare interface PutFlattenModelOptionalParams extends OperationOptions {
}

export declare interface PutFlattenReadOnlyModelOptionalParams extends OperationOptions {
}

export declare interface PutFlattenUnknownModelOptionalParams extends OperationOptions {
}

export declare interface PutNestedFlattenModelOptionalParams extends OperationOptions {
}

export declare interface Solution {
    name: string;
    readonly solutionId?: string;
    readonly title?: string;
    readonly content?: string;
    readonly solutionIdPropertiesOptionalSolutionId?: string;
    readonly titlePropertiesOptionalTitle?: string;
    readonly contentPropertiesOptionalContent?: string;
}

export declare interface SolutionProperties {
    readonly solutionId?: string;
    readonly title?: string;
    readonly content?: string;
}

export { }
