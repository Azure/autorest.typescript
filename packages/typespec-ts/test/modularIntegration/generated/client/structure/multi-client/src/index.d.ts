import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface AClientContext extends Client {
}

export declare interface BClientContext extends Client {
}

export declare class ClientAClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, client: ClientType, options?: ClientAClientOptionalParams);
    renamedOne(options?: RenamedOneOptionalParams): Promise<void>;
    renamedThree(options?: RenamedThreeOptionalParams): Promise<void>;
    renamedFive(options?: RenamedFiveOptionalParams): Promise<void>;
}

export declare interface ClientAClientOptionalParams extends ClientOptions {
}

export declare class ClientBClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, client: ClientType, options?: ClientBClientOptionalParams);
    renamedTwo(options?: RenamedTwoOptionalParams): Promise<void>;
    renamedFour(options?: RenamedFourOptionalParams): Promise<void>;
    renamedSix(options?: RenamedSixOptionalParams): Promise<void>;
}

export declare interface ClientBClientOptionalParams extends ClientOptions {
}

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group";

export declare function createClientA(endpointParam: string, client: ClientType, options?: ClientAClientOptionalParams): AClientContext;

export declare function createClientB(endpointParam: string, client: ClientType, options?: ClientBClientOptionalParams): BClientContext;

export declare function renamedFive(context: AClientContext, options?: RenamedFiveOptionalParams): Promise<void>;

export declare interface RenamedFiveOptionalParams extends OperationOptions {
}

export declare function renamedFour(context: BClientContext, options?: RenamedFourOptionalParams): Promise<void>;

export declare interface RenamedFourOptionalParams extends OperationOptions {
}

export declare function renamedOne(context: AClientContext, options?: RenamedOneOptionalParams): Promise<void>;

export declare interface RenamedOneOptionalParams extends OperationOptions {
}

export declare function renamedSix(context: BClientContext, options?: RenamedSixOptionalParams): Promise<void>;

export declare interface RenamedSixOptionalParams extends OperationOptions {
}

export declare function renamedThree(context: AClientContext, options?: RenamedThreeOptionalParams): Promise<void>;

export declare interface RenamedThreeOptionalParams extends OperationOptions {
}

export declare function renamedTwo(context: BClientContext, options?: RenamedTwoOptionalParams): Promise<void>;

export declare interface RenamedTwoOptionalParams extends OperationOptions {
}

export { }
