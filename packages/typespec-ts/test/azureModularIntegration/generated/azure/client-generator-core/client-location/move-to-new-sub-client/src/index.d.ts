import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

declare interface ArchiveOperationsArchiveProductOptionalParams extends OperationOptions {
}

export declare interface ArchiveOperationsOperations {
    archiveProduct: (options?: ArchiveOperationsArchiveProductOptionalParams) => Promise<void>;
}

export { isRestError }

export declare class MoveToNewSubClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: MoveToNewSubClientOptionalParams);
    readonly archiveOperations: ArchiveOperationsOperations;
    readonly productOperations: ProductOperationsOperations;
}

export declare interface MoveToNewSubClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

declare interface ProductOperationsListProductsOptionalParams extends OperationOptions {
}

export declare interface ProductOperationsOperations {
    listProducts: (options?: ProductOperationsListProductsOptionalParams) => Promise<void>;
}

export { RestError }

export { }
