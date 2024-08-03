import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class AClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: ClientType, options?: AClientOptionalParams);
    renamedOne(options?: RenamedOneOptionalParams): Promise<void>;
    renamedThree(options?: RenamedThreeOptionalParams): Promise<void>;
    renamedFive(options?: RenamedFiveOptionalParams): Promise<void>;
}

export declare interface AClientOptionalParams extends ClientOptions {
}

export declare class BClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, clientParam: BClientClientType, options?: BClientOptionalParams);
    renamedTwo(options?: RenamedTwoOptionalParams): Promise<void>;
    renamedFour(options?: RenamedFourOptionalParams): Promise<void>;
    renamedSix(options?: RenamedSixOptionalParams): Promise<void>;
}

export declare type BClientClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group";

export declare interface BClientOptionalParams extends ClientOptions {
}

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group";

export declare interface RenamedFiveOptionalParams extends OperationOptions {
}

export declare interface RenamedFourOptionalParams extends OperationOptions {
}

export declare interface RenamedOneOptionalParams extends OperationOptions {
}

export declare interface RenamedSixOptionalParams extends OperationOptions {
}

export declare interface RenamedThreeOptionalParams extends OperationOptions {
}

export declare interface RenamedTwoOptionalParams extends OperationOptions {
}

export { }
