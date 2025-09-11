import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare interface ArchiveProduct {
    post(options?: ArchiveProductParameters): StreamableMethod<ArchiveProduct204Response>;
}

export declare interface ArchiveProduct204Response extends HttpResponse {
    status: "204";
}

export declare type ArchiveProductParameters = RequestParameters;

export declare interface BlobOutput {
    id: string;
    name: string;
    size: number;
    path: string;
}

export declare type ClientLocationClient = Client & {
    path: Routes;
};

export declare interface ClientLocationClientOptions extends ClientOptions {
}

declare function createClient(options?: ClientLocationClientOptions): ClientLocationClient;
export default createClient;

export declare interface DeleteUser204Response extends HttpResponse {
    status: "204";
}

export declare type DeleteUserParameters = RequestParameters;

export declare interface GetAdminInfo {
    get(options?: GetAdminInfoParameters): StreamableMethod<GetAdminInfo204Response>;
}

export declare interface GetAdminInfo204Response extends HttpResponse {
    status: "204";
}

export declare type GetAdminInfoParameters = RequestParameters;

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

export declare interface GetHealthStatus {
    get(options?: GetHealthStatusParameters): StreamableMethod<GetHealthStatus204Response>;
}

export declare interface GetHealthStatus204Response extends HttpResponse {
    status: "204";
}

export declare type GetHealthStatusParameters = RequestParameters;

export declare interface GetResource {
    get(options?: GetResourceParameters): StreamableMethod<GetResource204Response>;
}

export declare interface GetResource204Response extends HttpResponse {
    status: "204";
}

export declare type GetResourceParameters = RequestParameters;

export declare interface GetUser {
    get(options?: GetUserParameters): StreamableMethod<GetUser204Response>;
    delete(options?: DeleteUserParameters): StreamableMethod<DeleteUser204Response>;
}

export declare interface GetUser204Response extends HttpResponse {
    status: "204";
}

export declare type GetUserParameters = RequestParameters;

export declare interface ListProducts {
    get(options?: ListProductsParameters): StreamableMethod<ListProducts204Response>;
}

export declare interface ListProducts204Response extends HttpResponse {
    status: "204";
}

export declare type ListProductsParameters = RequestParameters;

export declare interface Routes {
    (path: "/azure/client-generator-core/client-location/admin"): GetAdminInfo;
    (path: "/azure/client-generator-core/client-location/user"): GetUser;
    (path: "/azure/client-generator-core/client-location/products"): ListProducts;
    (path: "/azure/client-generator-core/client-location/products/archive"): ArchiveProduct;
    (path: "/azure/client-generator-core/client-location/resource"): GetResource;
    (path: "/azure/client-generator-core/client-location/health"): GetHealthStatus;
    (path: "/azure/client-generator-core/client-location/blob"): GetBlob;
}

export { }
