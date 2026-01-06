import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface Blob_2 {
    id: string;
    name: string;
    size: number;
    path: string;
}
export { Blob_2 as Blob }

export declare interface BlobOperationsGetBlobOptionalParams extends OperationOptions {
}

export declare interface BlobOperationsOperations {
    getBlob: (container: string, blob: string, options?: BlobOperationsGetBlobOptionalParams) => Promise<Blob_2>;
}

export declare class MoveMethodParameterToClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(storageAccount: string, options?: MoveMethodParameterToClientOptionalParams);
    readonly blobOperations: BlobOperationsOperations;
}

export declare interface MoveMethodParameterToClientOptionalParams extends ClientOptions {
}

export { }
