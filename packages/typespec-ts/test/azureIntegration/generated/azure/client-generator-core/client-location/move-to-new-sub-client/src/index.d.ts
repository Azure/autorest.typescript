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

declare function createClient(options?: MoveToNewSubClientClientOptions): MoveToNewSubClientClient;
export default createClient;

export declare interface ListProducts {
    get(options?: ListProductsParameters): StreamableMethod<ListProducts204Response>;
}

export declare interface ListProducts204Response extends HttpResponse {
    status: "204";
}

export declare type ListProductsParameters = RequestParameters;

export declare type MoveToNewSubClientClient = Client & {
    path: Routes;
};

export declare interface MoveToNewSubClientClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/azure/client-generator-core/client-location/move-to-new-sub-client/products"): ListProducts;
    (path: "/azure/client-generator-core/client-location/move-to-new-sub-client/products/archive"): ArchiveProduct;
}

export { }
