import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

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
