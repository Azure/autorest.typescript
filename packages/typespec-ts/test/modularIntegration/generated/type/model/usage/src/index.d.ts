import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface InputAndOutputOptionalParams extends OperationOptions {
}

export declare interface InputOptionalParams extends OperationOptions {
}

export declare interface InputOutputRecord {
    requiredProp: string;
}

export declare interface InputRecord {
    requiredProp: string;
}

export declare interface OutputOptionalParams extends OperationOptions {
}

export declare interface OutputRecord {
    requiredProp: string;
}

export declare class UsageClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: UsageClientOptionalParams);
    inputAndOutput(body: InputOutputRecord, options?: InputAndOutputOptionalParams): Promise<InputOutputRecord>;
    output(options?: OutputOptionalParams): Promise<OutputRecord>;
    input(input: InputRecord, options?: InputOptionalParams): Promise<void>;
}

export declare interface UsageClientOptionalParams extends ClientOptions {
}

export { }
