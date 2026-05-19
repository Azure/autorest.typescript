import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface Bird {
    kind: string;
    wingspan: number;
}

export declare type BirdUnion = SeaGull | Sparrow | Goose | Eagle | Bird;

export declare interface Dinosaur {
    kind: string;
    size: number;
}

export declare type DinosaurUnion = TRex | Dinosaur;

export declare interface Eagle extends Bird {
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

export declare interface Goose extends Bird {
    kind: "goose";
}

export declare interface PutModelOptionalParams extends OperationOptions {
}

export declare interface PutRecursiveModelOptionalParams extends OperationOptions {
}

export declare interface SeaGull extends Bird {
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

export declare interface Sparrow extends Bird {
    kind: "sparrow";
}

export declare interface TRex extends Dinosaur {
    kind: "t-rex";
}

export { }
