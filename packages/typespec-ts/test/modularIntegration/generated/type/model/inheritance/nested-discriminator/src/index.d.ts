import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface Fish {
    age: number;
    kind: string;
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
    getModel(options?: GetModelOptionalParams): Promise<FishUnion>;
    putModel(input: FishUnion, options?: PutModelOptionalParams): Promise<void>;
    getRecursiveModel(options?: GetRecursiveModelOptionalParams): Promise<FishUnion>;
    putRecursiveModel(input: FishUnion, options?: PutRecursiveModelOptionalParams): Promise<void>;
    getMissingDiscriminator(options?: GetMissingDiscriminatorOptionalParams): Promise<FishUnion>;
    getWrongDiscriminator(options?: GetWrongDiscriminatorOptionalParams): Promise<FishUnion>;
}

export declare interface NestedDiscriminatorClientOptionalParams extends ClientOptions {
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
