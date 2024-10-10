import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface Bird {
    kind: string;
    wingspan: number;
}

export declare type BirdUnion = SeaGull | Sparrow | Goose | Eagle | Bird;

export declare function createSingleDiscriminator(options?: SingleDiscriminatorClientOptionalParams): SingleDiscriminatorContext;

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

export declare function getLegacyModel(context: SingleDiscriminatorContext, options?: GetLegacyModelOptionalParams): Promise<DinosaurUnion>;

export declare interface GetLegacyModelOptionalParams extends OperationOptions {
}

export declare function getMissingDiscriminator(context: SingleDiscriminatorContext, options?: GetMissingDiscriminatorOptionalParams): Promise<Bird>;

export declare interface GetMissingDiscriminatorOptionalParams extends OperationOptions {
}

export declare function getModel(context: SingleDiscriminatorContext, options?: GetModelOptionalParams): Promise<Bird>;

export declare interface GetModelOptionalParams extends OperationOptions {
}

export declare function getRecursiveModel(context: SingleDiscriminatorContext, options?: GetRecursiveModelOptionalParams): Promise<Bird>;

export declare interface GetRecursiveModelOptionalParams extends OperationOptions {
}

export declare function getWrongDiscriminator(context: SingleDiscriminatorContext, options?: GetWrongDiscriminatorOptionalParams): Promise<Bird>;

export declare interface GetWrongDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface Goose extends Bird {
    kind: "goose";
}

export declare function putModel(context: SingleDiscriminatorContext, input: Bird, options?: PutModelOptionalParams): Promise<void>;

export declare interface PutModelOptionalParams extends OperationOptions {
}

export declare function putRecursiveModel(context: SingleDiscriminatorContext, input: Bird, options?: PutRecursiveModelOptionalParams): Promise<void>;

export declare interface PutRecursiveModelOptionalParams extends OperationOptions {
}

export declare interface SeaGull extends Bird {
    kind: "seagull";
}

export declare class SingleDiscriminatorClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: SingleDiscriminatorClientOptionalParams);
    getModel(options?: GetModelOptionalParams): Promise<Bird>;
    putModel(input: Bird, options?: PutModelOptionalParams): Promise<void>;
    getRecursiveModel(options?: GetRecursiveModelOptionalParams): Promise<Bird>;
    putRecursiveModel(input: Bird, options?: PutRecursiveModelOptionalParams): Promise<void>;
    getMissingDiscriminator(options?: GetMissingDiscriminatorOptionalParams): Promise<Bird>;
    getWrongDiscriminator(options?: GetWrongDiscriminatorOptionalParams): Promise<Bird>;
    getLegacyModel(options?: GetLegacyModelOptionalParams): Promise<DinosaurUnion>;
}

export declare interface SingleDiscriminatorClientOptionalParams extends ClientOptions {
}

export declare interface SingleDiscriminatorContext extends Client {
}

export declare interface Sparrow extends Bird {
    kind: "sparrow";
}

export declare interface TRex extends Dinosaur {
    kind: "t-rex";
}

export { }
