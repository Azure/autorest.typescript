import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class EnumConflictClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: EnumConflictClientOptionalParams);
    readonly secondOperations: SecondOperationsOperations;
    readonly firstOperations: FirstOperationsOperations;
}

export declare interface EnumConflictClientOptionalParams extends ClientOptions {
}

export declare interface FirstModel {
    status: Status;
    name: string;
}

export declare interface FirstOperationsFirstOptionalParams extends OperationOptions {
}

export declare interface FirstOperationsOperations {
    first: (body: FirstModel, options?: FirstOperationsFirstOptionalParams) => Promise<FirstModel>;
}

export declare interface SecondModel {
    status: SecondStatus;
    description: string;
}

export declare interface SecondOperationsOperations {
    second: (body: SecondModel, options?: SecondOperationsSecondOptionalParams) => Promise<SecondModel>;
}

export declare interface SecondOperationsSecondOptionalParams extends OperationOptions {
}

export declare type SecondStatus = "running" | "stopped";

export declare type Status = "active" | "inactive";

export { }
