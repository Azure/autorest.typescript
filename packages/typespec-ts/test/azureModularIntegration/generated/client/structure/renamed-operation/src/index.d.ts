import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group" | "client-operation-group";

export declare interface GroupOperations {
    renamedSix: (options?: GroupRenamedSixOptionalParams) => Promise<void>;
    renamedFour: (options?: GroupRenamedFourOptionalParams) => Promise<void>;
    renamedTwo: (options?: GroupRenamedTwoOptionalParams) => Promise<void>;
}

export declare interface GroupRenamedFourOptionalParams extends OperationOptions {
}

export declare interface GroupRenamedSixOptionalParams extends OperationOptions {
}

export declare interface GroupRenamedTwoOptionalParams extends OperationOptions {
}

export declare interface RenamedFiveOptionalParams extends OperationOptions {
}

export declare interface RenamedOneOptionalParams extends OperationOptions {
}

export declare class RenamedOperationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: RenamedOperationClientOptionalParams);
    readonly group: GroupOperations;
    renamedFive(options?: RenamedFiveOptionalParams): Promise<void>;
    renamedThree(options?: RenamedThreeOptionalParams): Promise<void>;
    renamedOne(options?: RenamedOneOptionalParams): Promise<void>;
}

export declare interface RenamedOperationClientOptionalParams extends ClientOptions {
}

export declare interface RenamedThreeOptionalParams extends OperationOptions {
}

export { }
