import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class PageableClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PageableClientOptionalParams);
    readonly serverDrivenPagination: ServerDrivenPaginationOperations;
}

export declare interface PageableClientOptionalParams extends ClientOptions {
}

export declare interface Pet {
    id: string;
    name: string;
}

export declare interface ServerDrivenPaginationLinkOptionalParams extends OperationOptions {
}

export declare interface ServerDrivenPaginationOperations {
    link: (options?: ServerDrivenPaginationLinkOptionalParams) => Promise<{
        pets: Pet[];
        links: {
            next?: string;
            prev?: string;
            first?: string;
            last?: string;
        };
    }>;
}

export { }
