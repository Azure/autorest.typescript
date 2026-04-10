import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group" | "client-operation-group";

export declare interface RenamedFiveOptionalParams extends OperationOptions {
}

export declare interface RenamedFourOptionalParams extends OperationOptions {
}

export declare interface RenamedOneOptionalParams extends OperationOptions {
}

export declare class RenamedOperationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: RenamedOperationClientOptionalParams);
    renamedSix(options?: RenamedSixOptionalParams): Promise<void>;
    renamedFour(options?: RenamedFourOptionalParams): Promise<void>;
    renamedTwo(options?: RenamedTwoOptionalParams): Promise<void>;
    renamedFive(options?: RenamedFiveOptionalParams): Promise<void>;
    renamedThree(options?: RenamedThreeOptionalParams): Promise<void>;
    renamedOne(options?: RenamedOneOptionalParams): Promise<void>;
}

export declare interface RenamedOperationClientOptionalParams extends ClientOptions {
}

export declare interface RenamedSixOptionalParams extends OperationOptions {
}

export declare interface RenamedThreeOptionalParams extends OperationOptions {
}

export declare interface RenamedTwoOptionalParams extends OperationOptions {
}

export { }
