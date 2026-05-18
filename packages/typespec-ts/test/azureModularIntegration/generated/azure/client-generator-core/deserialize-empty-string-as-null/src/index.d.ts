import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare class DeserializeEmptyStringAsNullClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DeserializeEmptyStringAsNullClientOptionalParams);
    get(options?: GetOptionalParams): Promise<ResponseModel>;
}

export declare interface DeserializeEmptyStringAsNullClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export declare interface GetOptionalParams extends OperationOptions {
}

export { isRestError }

export declare interface ResponseModel {
    sampleUrl: string;
}

export { RestError }

export { }
