import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface Fish {
    kind: string;
    age: number;
}

export declare type FishUnion = SharkUnion | Salmon | Fish;

export declare interface GetMissingDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface GetModelOptionalParams extends OperationOptions {
}

export declare interface GetRecursiveModelOptionalParams extends OperationOptions {
}

export declare interface GetWrongDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface GoblinShark extends Shark {
    sharktype: "goblin";
}

export declare class NestedDiscriminatorClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: NestedDiscriminatorClientOptionalParams);
    getModel(options?: GetModelOptionalParams): Promise<Fish>;
    putModel(input: Fish, options?: PutModelOptionalParams): Promise<void>;
    getRecursiveModel(options?: GetRecursiveModelOptionalParams): Promise<Fish>;
    putRecursiveModel(input: Fish, options?: PutRecursiveModelOptionalParams): Promise<void>;
    getMissingDiscriminator(options?: GetMissingDiscriminatorOptionalParams): Promise<Fish>;
    getWrongDiscriminator(options?: GetWrongDiscriminatorOptionalParams): Promise<Fish>;
}

export declare interface NestedDiscriminatorClientOptionalParams extends ClientOptions {
}

export declare interface NestedDiscriminatorContext extends Client {
}

export declare interface PutModelOptionalParams extends OperationOptions {
}

export declare interface PutRecursiveModelOptionalParams extends OperationOptions {
}

export declare interface Salmon extends Fish {
    kind: "salmon";
    friends?: FishUnion[];
    hate?: Record<string, FishUnion>;
    partner?: FishUnion;
}

export declare interface SawShark extends Shark {
    sharktype: "saw";
}

export declare interface Shark extends Fish {
    kind: "shark";
    sharktype: string;
}

export declare type SharkUnion = SawShark | GoblinShark | Shark;

export { }
