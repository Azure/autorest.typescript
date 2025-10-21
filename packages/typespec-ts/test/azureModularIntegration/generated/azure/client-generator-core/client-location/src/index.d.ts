import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ArchiveOperationsArchiveProductOptionalParams extends OperationOptions {
}

export declare interface ArchiveOperationsOperations {
    archiveProduct: (options?: ArchiveOperationsArchiveProductOptionalParams) => Promise<void>;
}

declare interface Blob_2 {
    id: string;
    name: string;
    size: number;
    path: string;
}
export { Blob_2 as Blob }

export declare class ClientLocationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientLocationClientOptionalParams);
    getHealthStatus(options?: GetHealthStatusOptionalParams): Promise<void>;
    readonly archiveOperations: ArchiveOperationsOperations;
    readonly moveMethodParameterToClient: MoveMethodParameterToClientOperations;
    readonly moveToRootClient: MoveToRootClientOperations;
    readonly moveToNewSubClient: MoveToNewSubClientOperations;
    readonly moveToExistingSubClient: MoveToExistingSubClientOperations;
}

export declare interface ClientLocationClientOptionalParams extends ClientOptions {
}

export declare interface GetHealthStatusOptionalParams extends OperationOptions {
}

export declare interface MoveMethodParameterToClientBlobOperationsGetBlobOptionalParams extends OperationOptions {
}

export declare interface MoveMethodParameterToClientBlobOperationsOperations {
    getBlob: (storageAccount: string, container: string, blob: string, options?: MoveMethodParameterToClientBlobOperationsGetBlobOptionalParams) => Promise<Blob_2>;
}

export declare interface MoveMethodParameterToClientOperations {
    blobOperations: MoveMethodParameterToClientBlobOperationsOperations;
}

export declare interface MoveToExistingSubClientAdminOperationsDeleteUserOptionalParams extends OperationOptions {
}

export declare interface MoveToExistingSubClientAdminOperationsGetAdminInfoOptionalParams extends OperationOptions {
}

export declare interface MoveToExistingSubClientAdminOperationsOperations {
    deleteUser: (options?: MoveToExistingSubClientAdminOperationsDeleteUserOptionalParams) => Promise<void>;
    getAdminInfo: (options?: MoveToExistingSubClientAdminOperationsGetAdminInfoOptionalParams) => Promise<void>;
}

export declare interface MoveToExistingSubClientOperations {
    userOperations: MoveToExistingSubClientUserOperationsOperations;
    adminOperations: MoveToExistingSubClientAdminOperationsOperations;
}

export declare interface MoveToExistingSubClientUserOperationsGetUserOptionalParams extends OperationOptions {
}

export declare interface MoveToExistingSubClientUserOperationsOperations {
    getUser: (options?: MoveToExistingSubClientUserOperationsGetUserOptionalParams) => Promise<void>;
}

export declare interface MoveToNewSubClientOperations {
    productOperations: MoveToNewSubClientProductOperationsOperations;
}

export declare interface MoveToNewSubClientProductOperationsListProductsOptionalParams extends OperationOptions {
}

export declare interface MoveToNewSubClientProductOperationsOperations {
    listProducts: (options?: MoveToNewSubClientProductOperationsListProductsOptionalParams) => Promise<void>;
}

export declare interface MoveToRootClientOperations {
    resourceOperations: MoveToRootClientResourceOperationsOperations;
}

export declare interface MoveToRootClientResourceOperationsGetResourceOptionalParams extends OperationOptions {
}

export declare interface MoveToRootClientResourceOperationsOperations {
    getResource: (options?: MoveToRootClientResourceOperationsGetResourceOptionalParams) => Promise<void>;
}

export { }
