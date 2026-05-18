import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare class ClientDocClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ClientDocClientOptionalParams);
    readonly documentation: DocumentationOperations;
}

export declare interface ClientDocClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

declare interface DocumentationHarvestOptionalParams extends OperationOptions {
}

export declare interface DocumentationOperations {
    harvest: (body: Plant, options?: DocumentationHarvestOptionalParams) => Promise<Plant>;
}

export { isRestError }

export declare interface Plant {
    name: string;
    species: string;
}

export { RestError }

export { }
