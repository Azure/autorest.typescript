import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

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

export declare interface User {
    name: string;
}

export { }
