import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface DeleteModelOptionalParams extends OperationOptions {
}

export declare interface GetModelOptionalParams extends OperationOptions {
}

export declare interface HeadModelOptionalParams extends OperationOptions {
}

export declare interface PatchModelOptionalParams extends OperationOptions {
}

export declare interface PostModelOptionalParams extends OperationOptions {
}

export declare interface PutModelOptionalParams extends OperationOptions {
}

export declare interface PutReadOnlyModelOptionalParams extends OperationOptions {
}

export declare interface ReadOnlyModel {
    readonly optionalNullableIntList?: number[];
    readonly optionalStringRecord?: Record<string, string>;
}

export declare class VisibilityClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: VisibilityClientOptionalParams);
    putReadOnlyModel(input: ReadOnlyModel, options?: PutReadOnlyModelOptionalParams): Promise<ReadOnlyModel>;
    deleteModel(input: VisibilityModel, options?: DeleteModelOptionalParams): Promise<void>;
    postModel(input: VisibilityModel, options?: PostModelOptionalParams): Promise<void>;
    patchModel(input: VisibilityModel, options?: PatchModelOptionalParams): Promise<void>;
    putModel(input: VisibilityModel, options?: PutModelOptionalParams): Promise<void>;
    headModel(input: VisibilityModel, options?: HeadModelOptionalParams): Promise<void>;
    getModel(input: VisibilityModel, options?: GetModelOptionalParams): Promise<VisibilityModel>;
}

export declare interface VisibilityClientOptionalParams extends ClientOptions {
}

export declare interface VisibilityModel {
    readonly readProp: string;
    queryProp: number;
    createProp: string[];
    updateProp: number[];
    deleteProp: boolean;
}

export { }
