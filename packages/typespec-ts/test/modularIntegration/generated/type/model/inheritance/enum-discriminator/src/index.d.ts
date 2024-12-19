import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface Cobra extends Snake {
    kind: "cobra";
}

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
    getFixedModelWrongDiscriminator(options?: GetFixedModelWrongDiscriminatorOptionalParams): Promise<SnakeUnion>;
    getFixedModelMissingDiscriminator(options?: GetFixedModelMissingDiscriminatorOptionalParams): Promise<SnakeUnion>;
    putFixedModel(input: SnakeUnion, options?: PutFixedModelOptionalParams): Promise<void>;
    getFixedModel(options?: GetFixedModelOptionalParams): Promise<SnakeUnion>;
    getExtensibleModelWrongDiscriminator(options?: GetExtensibleModelWrongDiscriminatorOptionalParams): Promise<DogUnion>;
    getExtensibleModelMissingDiscriminator(options?: GetExtensibleModelMissingDiscriminatorOptionalParams): Promise<DogUnion>;
    putExtensibleModel(input: DogUnion, options?: PutExtensibleModelOptionalParams): Promise<void>;
    getExtensibleModel(options?: GetExtensibleModelOptionalParams): Promise<DogUnion>;
}

export declare interface EnumDiscriminatorClientOptionalParams extends ClientOptions {
}

export declare interface GetExtensibleModelMissingDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface GetExtensibleModelOptionalParams extends OperationOptions {
}

export declare interface GetExtensibleModelWrongDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface GetFixedModelMissingDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface GetFixedModelOptionalParams extends OperationOptions {
}

export declare interface GetFixedModelWrongDiscriminatorOptionalParams extends OperationOptions {
}

export declare interface Golden extends Dog {
    kind: "golden";
}

export declare interface PutExtensibleModelOptionalParams extends OperationOptions {
    contentType?: "application/json";
}

export declare interface PutFixedModelOptionalParams extends OperationOptions {
    contentType?: "application/json";
}

export declare interface Snake {
    kind: SnakeKind;
    length: number;
}

export declare type SnakeKind = "cobra";

export declare type SnakeUnion = Cobra | Snake;

export { }
