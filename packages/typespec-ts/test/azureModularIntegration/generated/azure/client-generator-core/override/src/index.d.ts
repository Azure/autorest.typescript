import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface GroupParametersGroupOptionalParams extends OperationOptions {
}

export declare interface GroupParametersOperations {
    group: (param1: string, param2: string, options?: GroupParametersGroupOptionalParams) => Promise<void>;
}

export declare class OverrideClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: OverrideClientOptionalParams);
    readonly removeOptionalParameter: RemoveOptionalParameterOperations;
    readonly requireOptionalParameter: RequireOptionalParameterOperations;
    readonly groupParameters: GroupParametersOperations;
    readonly reorderParameters: ReorderParametersOperations;
}

export declare interface OverrideClientOptionalParams extends ClientOptions {
}

export declare interface RemoveOptionalParameterOperations {
    removeOptional: (param1: string, options?: RemoveOptionalParameterRemoveOptionalOptionalParams) => Promise<void>;
}

export declare interface RemoveOptionalParameterRemoveOptionalOptionalParams extends OperationOptions {
    param2?: string;
}

export declare interface ReorderParametersOperations {
    reorder: (param1: string, param2: string, options?: ReorderParametersReorderOptionalParams) => Promise<void>;
}

export declare interface ReorderParametersReorderOptionalParams extends OperationOptions {
}

export declare interface RequireOptionalParameterOperations {
    requireOptional: (param1: string, param2: string, options?: RequireOptionalParameterRequireOptionalOptionalParams) => Promise<void>;
}

export declare interface RequireOptionalParameterRequireOptionalOptionalParams extends OperationOptions {
}

export { }
