import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface Cobra extends Snake {
    kind: "cobra";
}

export declare function createEnumDiscriminator(options?: EnumDiscriminatorClientOptionalParams): EnumDiscriminatorContext;

export declare interface Dog {
    kind: DogKind;
    weight: number;
}

export declare type DogKind = "golden";

export declare type DogUnion = Golden | Dog;

export declare class EnumDiscriminatorClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: EnumDiscriminatorClientOptionalParams);
    getExtensibleModel(options?: GetExtensibleModelOptionalParams): Promise<Dog>;
    putExtensibleModel(input: Dog, options?: PutExtensibleModelOptionalParams): Promise<void>;
    getExtensibleModelMissingDiscriminator(options?: GetExtensibleModelMissingDiscriminatorOptionalParams): Promise<Dog>;
    getExtensibleModelWrongDiscriminator(options?: GetExtensibleModelWrongDiscriminatorOptionalParams): Promise<Dog>;
    getFixedModel(options?: GetFixedModelOptionalParams): Promise<Snake>;
    putFixedModel(input: Snake, options?: PutFixedModelOptionalParams): Promise<void>;
    getFixedModelMissingDiscriminator(options?: GetFixedModelMissingDiscriminatorOptionalParams): Promise<Snake>;
    getFixedModelWrongDiscriminator(options?: GetFixedModelWrongDiscriminatorOptionalParams): Promise<Snake>;
}

export declare interface EnumDiscriminatorClientOptionalParams extends ClientOptions {
}

export declare interface EnumDiscriminatorContext extends Client {
}

export declare function getExtensibleModel(context: EnumDiscriminatorContext, options?: GetExtensibleModelOptionalParams): Promise<Dog>;

export declare function getExtensibleModelMissingDiscriminator(context: EnumDiscriminatorContext, options?: GetExtensibleModelMissingDiscriminatorOptionalParams): Promise<Dog>;

export declare interface GetExtensibleModelMissingDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface GetExtensibleModelOptionalParams extends OperationOptions {
}

export declare function getExtensibleModelWrongDiscriminator(context: EnumDiscriminatorContext, options?: GetExtensibleModelWrongDiscriminatorOptionalParams): Promise<Dog>;

export declare interface GetExtensibleModelWrongDiscriminatorOptionalParams extends OperationOptions {
}

export declare function getFixedModel(context: EnumDiscriminatorContext, options?: GetFixedModelOptionalParams): Promise<Snake>;

export declare function getFixedModelMissingDiscriminator(context: EnumDiscriminatorContext, options?: GetFixedModelMissingDiscriminatorOptionalParams): Promise<Snake>;

export declare interface GetFixedModelMissingDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface GetFixedModelOptionalParams extends OperationOptions {
}

export declare function getFixedModelWrongDiscriminator(context: EnumDiscriminatorContext, options?: GetFixedModelWrongDiscriminatorOptionalParams): Promise<Snake>;

export declare interface GetFixedModelWrongDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface Golden extends Dog {
    kind: "golden";
}

export declare function putExtensibleModel(context: EnumDiscriminatorContext, input: Dog, options?: PutExtensibleModelOptionalParams): Promise<void>;

export declare interface PutExtensibleModelOptionalParams extends OperationOptions {
}

export declare function putFixedModel(context: EnumDiscriminatorContext, input: Snake, options?: PutFixedModelOptionalParams): Promise<void>;

export declare interface PutFixedModelOptionalParams extends OperationOptions {
}

export declare interface Snake {
    kind: SnakeKind;
    length: number;
}

export declare type SnakeKind = "cobra";

export declare type SnakeUnion = Cobra | Snake;

export { }
