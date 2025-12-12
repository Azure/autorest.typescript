import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface GetHealthStatusOptionalParams extends OperationOptions {
}

export declare class MoveToRootClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: MoveToRootClientOptionalParams);
    getHealthStatus(options?: GetHealthStatusOptionalParams): Promise<void>;
    readonly resourceOperations: ResourceOperationsOperations;
}

export declare interface MoveToRootClientOptionalParams extends ClientOptions {
}

export declare interface ResourceOperationsGetResourceOptionalParams extends OperationOptions {
}

export declare interface ResourceOperationsOperations {
    getResource: (options?: ResourceOperationsGetResourceOptionalParams) => Promise<void>;
}

export { }
