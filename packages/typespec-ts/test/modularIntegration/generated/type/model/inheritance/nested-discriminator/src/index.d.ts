import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

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
