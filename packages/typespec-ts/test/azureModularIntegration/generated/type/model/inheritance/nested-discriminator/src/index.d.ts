import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface Fish {
    kind: string;
    age: number;
}

declare type FishUnion = SharkUnion | Salmon | Fish;

export declare interface GetMissingDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface GetModelOptionalParams extends OperationOptions {
}

export declare interface GetRecursiveModelOptionalParams extends OperationOptions {
}

export declare interface GetWrongDiscriminatorOptionalParams extends OperationOptions {
}

declare interface GoblinShark extends Shark {
    sharktype: "goblin";
}

export declare class NestedDiscriminatorClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: NestedDiscriminatorClientOptionalParams);
    getWrongDiscriminator(options?: GetWrongDiscriminatorOptionalParams): Promise<FishUnion>;
    getMissingDiscriminator(options?: GetMissingDiscriminatorOptionalParams): Promise<FishUnion>;
    putRecursiveModel(input: FishUnion, options?: PutRecursiveModelOptionalParams): Promise<void>;
    getRecursiveModel(options?: GetRecursiveModelOptionalParams): Promise<FishUnion>;
    putModel(input: FishUnion, options?: PutModelOptionalParams): Promise<void>;
    getModel(options?: GetModelOptionalParams): Promise<FishUnion>;
}

export declare interface NestedDiscriminatorClientOptionalParams extends ClientOptions {
}

export declare interface PutModelOptionalParams extends OperationOptions {
}

export declare interface PutRecursiveModelOptionalParams extends OperationOptions {
}

declare interface Salmon extends Fish {
    kind: "salmon";
    friends?: FishUnion[];
    hate?: Record<string, FishUnion>;
    partner?: FishUnion;
}

declare interface SawShark extends Shark {
    sharktype: "saw";
}

declare interface Shark extends Fish {
    kind: "shark";
    sharktype: string;
}

declare type SharkUnion = SawShark | GoblinShark | Shark;

export { }
