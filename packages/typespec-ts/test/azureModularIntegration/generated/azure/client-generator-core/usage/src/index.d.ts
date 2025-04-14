import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface InputModel {
    name: string;
}

export declare interface InputToInputOutputOptionalParams extends OperationOptions {
}

export declare interface ModelInReadOnlyPropertyOptionalParams extends OperationOptions {
}

export declare interface OrphanModel {
    modelName: string;
    description: string;
}

export declare interface OrphanModelSerializableOptionalParams extends OperationOptions {
}

export declare interface OutputModel {
    name: string;
}

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
    orphanModelSerializable(body: any, options?: OrphanModelSerializableOptionalParams): Promise<void>;
    modelInReadOnlyProperty(body: RoundTripModel, options?: ModelInReadOnlyPropertyOptionalParams): Promise<RoundTripModel>;
    outputToInputOutput(options?: OutputToInputOutputOptionalParams): Promise<OutputModel>;
    inputToInputOutput(body: InputModel, options?: InputToInputOutputOptionalParams): Promise<void>;
}

export declare interface UsageClientOptionalParams extends ClientOptions {
}

export { }
