import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ClientDocClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientDocClientOptionalParams);
    readonly documentation: DocumentationOperations;
}

export declare interface ClientDocClientOptionalParams extends ClientOptions {
}

export declare interface DocumentationHarvestOptionalParams extends OperationOptions {
}

export declare interface DocumentationOperations {
    harvest: (body: Plant, options?: DocumentationHarvestOptionalParams) => Promise<Plant>;
}

export declare interface Plant {
    name: string;
    species: string;
}

export { }
