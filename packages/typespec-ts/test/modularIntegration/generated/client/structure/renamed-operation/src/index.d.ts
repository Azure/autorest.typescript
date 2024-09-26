import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group";

export declare function createRenamedOperation(endpointParam: string, client: ClientType, options?: RenamedOperationClientOptionalParams): RenamedOperationContext;

export declare interface GroupOperations {
    renamedTwo: (options?: GroupRenamedTwoOptionalParams) => Promise<void>;
    renamedFour: (options?: GroupRenamedFourOptionalParams) => Promise<void>;
    renamedSix: (options?: GroupRenamedSixOptionalParams) => Promise<void>;
}

export declare interface GroupRenamedFourOptionalParams extends OperationOptions {
}

export declare interface GroupRenamedSixOptionalParams extends OperationOptions {
}

export declare interface GroupRenamedTwoOptionalParams extends OperationOptions {
}

export declare function renamedFive(context: RenamedOperationContext, options?: RenamedFiveOptionalParams): Promise<void>;

export declare interface RenamedFiveOptionalParams extends OperationOptions {
}

export declare function renamedOne(context: RenamedOperationContext, options?: RenamedOneOptionalParams): Promise<void>;

export declare interface RenamedOneOptionalParams extends OperationOptions {
}

export declare class RenamedOperationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, client: ClientType, options?: RenamedOperationClientOptionalParams);
    renamedOne(options?: RenamedOneOptionalParams): Promise<void>;
    renamedThree(options?: RenamedThreeOptionalParams): Promise<void>;
    renamedFive(options?: RenamedFiveOptionalParams): Promise<void>;
    readonly group: GroupOperations;
}

export declare interface RenamedOperationClientOptionalParams extends ClientOptions {
}

export declare interface RenamedOperationContext extends Client {
}

export declare function renamedThree(context: RenamedOperationContext, options?: RenamedThreeOptionalParams): Promise<void>;

export declare interface RenamedThreeOptionalParams extends OperationOptions {
}

export { }
