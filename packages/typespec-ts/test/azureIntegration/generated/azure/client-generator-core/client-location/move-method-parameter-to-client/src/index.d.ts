import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare interface BlobOutput {
    id: string;
    name: string;
    size: number;
    path: string;
}

declare function createClient(options?: MoveMethodParameterToClientClientOptions): MoveMethodParameterToClientClient;
export default createClient;

export declare interface GetBlob {
    get(options: GetBlobParameters): StreamableMethod<GetBlob200Response>;
}

export declare interface GetBlob200Response extends HttpResponse {
    status: "200";
    body: BlobOutput;
}

export declare type GetBlobParameters = GetBlobQueryParam & RequestParameters;

export declare interface GetBlobQueryParam {
    queryParameters: GetBlobQueryParamProperties;
}

export declare interface GetBlobQueryParamProperties {
    storageAccount: string;
    container: string;
    blob: string;
}

export declare type MoveMethodParameterToClientClient = Client & {
    path: Routes;
};

export declare interface MoveMethodParameterToClientClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/azure/client-generator-core/client-location/move-method-parameter-to-client/blob"): GetBlob;
}

export { }
