import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function createUsage(options?: UsageClientOptionalParams): UsageContext;

export declare interface InputModel {
    name: string;
}

export declare function inputToInputOutput(context: UsageContext, body: InputModel, options?: InputToInputOutputOptionalParams): Promise<void>;

export declare interface InputToInputOutputOptionalParams extends OperationOptions {
}

export declare function modelInReadOnlyProperty(context: UsageContext, body: RoundTripModel, options?: ModelInReadOnlyPropertyOptionalParams): Promise<RoundTripModel>;

export declare interface ModelInReadOnlyPropertyOptionalParams extends OperationOptions {
}

export declare interface OrphanModel {
    name: string;
}

export declare interface OutputModel {
    name: string;
}

export declare function outputToInputOutput(context: UsageContext, options?: OutputToInputOutputOptionalParams): Promise<OutputModel>;

export declare interface OutputToInputOutputOptionalParams extends OperationOptions {
}

export declare interface ResultModel {
    name: string;
}

export declare interface RoundTripModel {
    readonly result: ResultModel;
}

export declare class UsageClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: UsageClientOptionalParams);
    inputToInputOutput(body: InputModel, options?: InputToInputOutputOptionalParams): Promise<void>;
    outputToInputOutput(options?: OutputToInputOutputOptionalParams): Promise<OutputModel>;
    modelInReadOnlyProperty(body: RoundTripModel, options?: ModelInReadOnlyPropertyOptionalParams): Promise<RoundTripModel>;
}

export declare interface UsageClientOptionalParams extends ClientOptions {
}

export declare interface UsageContext extends Client {
}

export { }
