import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

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
        links: {
            next?: string;
            prev?: string;
            first?: string;
            last?: string;
        };
    };
}

export declare type ServerDrivenPaginationLinkParameters = RequestParameters;

export { }
