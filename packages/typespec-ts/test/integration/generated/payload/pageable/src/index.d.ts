import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(options?: PageableClientOptions): PageableClient;
export default createClient;

export declare interface Link {
    get(options?: ServerDrivenPaginationLinkParameters): StreamableMethod<ServerDrivenPaginationLink200Response>;
}

export declare type PageableClient = Client & {
    path: Routes;
};

export declare interface PageableClientOptions extends ClientOptions {
}

export declare interface PetOutput {
    id: string;
    name: string;
}

export declare interface Routes {
    (path: "/payload/pageable/server-driven-pagination/link"): Link;
}

export declare interface ServerDrivenPaginationLink200Response extends HttpResponse {
    status: "200";
    body: {
        pets: Array<PetOutput>;
        next?: string;
    };
}

export declare type ServerDrivenPaginationLinkParameters = RequestParameters;

export { }
