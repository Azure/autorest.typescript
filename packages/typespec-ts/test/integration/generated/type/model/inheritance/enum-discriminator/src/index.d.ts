import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

export declare interface Cobra extends SnakeParent {
    kind: "cobra";
}

export declare interface CobraOutput extends SnakeOutputParent {
    kind: "cobra";
}

declare function createClient(options?: EnumDiscriminatorClientOptions): EnumDiscriminatorClient;
export default createClient;

export declare type Dog = DogParent | Golden;

export declare type DogKind = string;

export declare type DogKindOutput = string;

export declare type DogOutput = DogOutputParent | GoldenOutput;

export declare interface DogOutputParent {
    weight: number;
    kind: DogKindOutput;
}

export declare interface DogParent {
    weight: number;
    kind: DogKind;
}

export declare type EnumDiscriminatorClient = Client & {
    path: Routes;
};

export declare interface EnumDiscriminatorClientOptions extends ClientOptions {
}

export declare interface GetExtensibleModel {
    get(options?: GetExtensibleModelParameters): StreamableMethod<GetExtensibleModel200Response>;
    put(options: PutExtensibleModelParameters): StreamableMethod<PutExtensibleModel204Response>;
}

export declare interface GetExtensibleModel200Response extends HttpResponse {
    status: "200";
    body: DogOutput;
}

export declare interface GetExtensibleModelMissingDiscriminator {
    get(options?: GetExtensibleModelMissingDiscriminatorParameters): StreamableMethod<GetExtensibleModelMissingDiscriminator200Response>;
}

export declare interface GetExtensibleModelMissingDiscriminator200Response extends HttpResponse {
    status: "200";
    body: DogOutput;
}

export declare type GetExtensibleModelMissingDiscriminatorParameters = RequestParameters;

export declare type GetExtensibleModelParameters = RequestParameters;

export declare interface GetExtensibleModelWrongDiscriminator {
    get(options?: GetExtensibleModelWrongDiscriminatorParameters): StreamableMethod<GetExtensibleModelWrongDiscriminator200Response>;
}

export declare interface GetExtensibleModelWrongDiscriminator200Response extends HttpResponse {
    status: "200";
    body: DogOutput;
}

export declare type GetExtensibleModelWrongDiscriminatorParameters = RequestParameters;

export declare interface GetFixedModel {
    get(options?: GetFixedModelParameters): StreamableMethod<GetFixedModel200Response>;
    put(options: PutFixedModelParameters): StreamableMethod<PutFixedModel204Response>;
}

export declare interface GetFixedModel200Response extends HttpResponse {
    status: "200";
    body: SnakeOutput;
}

export declare interface GetFixedModelMissingDiscriminator {
    get(options?: GetFixedModelMissingDiscriminatorParameters): StreamableMethod<GetFixedModelMissingDiscriminator200Response>;
}

export declare interface GetFixedModelMissingDiscriminator200Response extends HttpResponse {
    status: "200";
    body: SnakeOutput;
}

export declare type GetFixedModelMissingDiscriminatorParameters = RequestParameters;

export declare type GetFixedModelParameters = RequestParameters;

export declare interface GetFixedModelWrongDiscriminator {
    get(options?: GetFixedModelWrongDiscriminatorParameters): StreamableMethod<GetFixedModelWrongDiscriminator200Response>;
}

export declare interface GetFixedModelWrongDiscriminator200Response extends HttpResponse {
    status: "200";
    body: SnakeOutput;
}

export declare type GetFixedModelWrongDiscriminatorParameters = RequestParameters;

export declare interface Golden extends DogParent {
    kind: "golden";
}

export declare interface GoldenOutput extends DogOutputParent {
    kind: "golden";
}

export declare interface PutExtensibleModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PutExtensibleModelBodyParam {
    body: Dog;
}

export declare type PutExtensibleModelParameters = PutExtensibleModelBodyParam & RequestParameters;

export declare interface PutFixedModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PutFixedModelBodyParam {
    body: Snake;
}

export declare type PutFixedModelParameters = PutFixedModelBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/model/inheritance/enum-discriminator/extensible-enum"): GetExtensibleModel;
    (path: "/type/model/inheritance/enum-discriminator/extensible-enum/missingdiscriminator"): GetExtensibleModelMissingDiscriminator;
    (path: "/type/model/inheritance/enum-discriminator/extensible-enum/wrongdiscriminator"): GetExtensibleModelWrongDiscriminator;
    (path: "/type/model/inheritance/enum-discriminator/fixed-enum"): GetFixedModel;
    (path: "/type/model/inheritance/enum-discriminator/fixed-enum/missingdiscriminator"): GetFixedModelMissingDiscriminator;
    (path: "/type/model/inheritance/enum-discriminator/fixed-enum/wrongdiscriminator"): GetFixedModelWrongDiscriminator;
}

export declare type Snake = SnakeParent | Cobra;

export declare type SnakeKind = "cobra";

export declare type SnakeKindOutput = "cobra";

export declare type SnakeOutput = SnakeOutputParent | CobraOutput;

export declare interface SnakeOutputParent {
    length: number;
    kind: SnakeKindOutput;
}

export declare interface SnakeParent {
    length: number;
    kind: SnakeKind;
}

export { }
