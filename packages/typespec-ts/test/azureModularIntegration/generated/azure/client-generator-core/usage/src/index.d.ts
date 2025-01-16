import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface InputModel {
    name: string;
}

export declare interface InputToInputOutputOptionalParams extends OperationOptions {
}

export declare interface ModelInReadOnlyPropertyOptionalParams extends OperationOptions {
}

declare interface OutputModel {
    name: string;
}

export declare interface OutputToInputOutputOptionalParams extends OperationOptions {
}

declare interface ResultModel {
    name: string;
}

declare interface RoundTripModel {
    readonly result: ResultModel;
}

export declare class UsageClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: UsageClientOptionalParams);
    modelInReadOnlyProperty(body: RoundTripModel, options?: ModelInReadOnlyPropertyOptionalParams): Promise<RoundTripModel>;
    outputToInputOutput(options?: OutputToInputOutputOptionalParams): Promise<OutputModel>;
    inputToInputOutput(body: InputModel, options?: InputToInputOutputOptionalParams): Promise<void>;
}

export declare interface UsageClientOptionalParams extends ClientOptions {
}

export { }
