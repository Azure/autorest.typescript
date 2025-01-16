import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface Bird {
    kind: string;
    wingspan: number;
}

declare type BirdUnion = SeaGull | Sparrow | Goose | Eagle | Bird;

declare interface Dinosaur {
    kind: string;
    size: number;
}

declare type DinosaurUnion = TRex | Dinosaur;

declare interface Eagle extends Bird {
    kind: "eagle";
    friends?: BirdUnion[];
    hate?: Record<string, BirdUnion>;
    partner?: BirdUnion;
}

export declare interface GetLegacyModelOptionalParams extends OperationOptions {
}

export declare interface GetMissingDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface GetModelOptionalParams extends OperationOptions {
}

export declare interface GetRecursiveModelOptionalParams extends OperationOptions {
}

export declare interface GetWrongDiscriminatorOptionalParams extends OperationOptions {
}

declare interface Goose extends Bird {
    kind: "goose";
}

export declare interface PutModelOptionalParams extends OperationOptions {
}

export declare interface PutRecursiveModelOptionalParams extends OperationOptions {
}

declare interface SeaGull extends Bird {
    kind: "seagull";
}

export declare class SingleDiscriminatorClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: SingleDiscriminatorClientOptionalParams);
    getLegacyModel(options?: GetLegacyModelOptionalParams): Promise<DinosaurUnion>;
    getWrongDiscriminator(options?: GetWrongDiscriminatorOptionalParams): Promise<BirdUnion>;
    getMissingDiscriminator(options?: GetMissingDiscriminatorOptionalParams): Promise<BirdUnion>;
    putRecursiveModel(input: BirdUnion, options?: PutRecursiveModelOptionalParams): Promise<void>;
    getRecursiveModel(options?: GetRecursiveModelOptionalParams): Promise<BirdUnion>;
    putModel(input: BirdUnion, options?: PutModelOptionalParams): Promise<void>;
    getModel(options?: GetModelOptionalParams): Promise<BirdUnion>;
}

export declare interface SingleDiscriminatorClientOptionalParams extends ClientOptions {
}

declare interface Sparrow extends Bird {
    kind: "sparrow";
}

declare interface TRex extends Dinosaur {
    kind: "t-rex";
}

export { }
