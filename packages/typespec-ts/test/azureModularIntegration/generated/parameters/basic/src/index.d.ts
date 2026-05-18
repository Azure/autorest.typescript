import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare class BasicClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: BasicClientOptionalParams);
    readonly implicitBody: ImplicitBodyOperations;
    readonly explicitBody: ExplicitBodyOperations;
}

export declare interface BasicClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export declare interface ExplicitBodyOperations {
    simple: (body: User, options?: ExplicitBodySimpleOptionalParams) => Promise<void>;
}

declare interface ExplicitBodySimpleOptionalParams extends OperationOptions {
}

export declare interface ImplicitBodyOperations {
    simple: (name: string, options?: ImplicitBodySimpleOptionalParams) => Promise<void>;
}

declare interface ImplicitBodySimpleOptionalParams extends OperationOptions {
}

export { isRestError }

export { RestError }

export declare interface User {
    name: string;
}

export { }
