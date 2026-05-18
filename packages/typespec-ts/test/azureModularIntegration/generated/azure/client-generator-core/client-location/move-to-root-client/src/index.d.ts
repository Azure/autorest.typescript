import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare interface GetHealthStatusOptionalParams extends OperationOptions {
}

export { isRestError }

export declare class MoveToRootClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: MoveToRootClientOptionalParams);
    readonly resourceOperations: ResourceOperationsOperations;
    getHealthStatus(options?: GetHealthStatusOptionalParams): Promise<void>;
}

export declare interface MoveToRootClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

declare interface ResourceOperationsGetResourceOptionalParams extends OperationOptions {
}

export declare interface ResourceOperationsOperations {
    getResource: (options?: ResourceOperationsGetResourceOptionalParams) => Promise<void>;
}

export { RestError }

export { }
