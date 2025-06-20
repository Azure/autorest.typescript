import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class DeserializeEmptyStringAsNullClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DeserializeEmptyStringAsNullClientOptionalParams);
    get(options?: GetOptionalParams): Promise<ResponseModel>;
}

export declare interface DeserializeEmptyStringAsNullClientOptionalParams extends ClientOptions {
}

export declare interface GetOptionalParams extends OperationOptions {
}

export declare interface ResponseModel {
    sampleUrl: string;
}

export { }
