import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare type Bird = BirdParent | SeaGull | Sparrow | Goose | Eagle;

export declare type BirdOutput = BirdOutputParent | SeaGullOutput | SparrowOutput | GooseOutput | EagleOutput;

export declare interface BirdOutputParent {
    wingspan: number;
    kind: string;
}

export declare interface BirdParent {
    wingspan: number;
    kind: string;
}

declare function createClient(options?: SingleDiscriminatorClientOptions): SingleDiscriminatorClient;
export default createClient;

export declare type DinosaurOutput = DinosaurOutputParent | TRexOutput;

export declare interface DinosaurOutputParent {
    size: number;
    kind: string;
}

export declare interface Eagle extends BirdParent {
    kind: "eagle";
    friends?: Array<Bird>;
    hate?: Record<string, Bird>;
    partner?: Bird;
}

export declare interface EagleOutput extends BirdOutputParent {
    kind: "eagle";
    friends?: Array<BirdOutput>;
    hate?: Record<string, BirdOutput>;
    partner?: BirdOutput;
}

export declare interface GetLegacyModel {
    get(options?: GetLegacyModelParameters): StreamableMethod<GetLegacyModel200Response>;
}

export declare interface GetLegacyModel200Response extends HttpResponse {
    status: "200";
    body: DinosaurOutput;
}

export declare type GetLegacyModelParameters = RequestParameters;

export declare interface GetMissingDiscriminator {
    get(options?: GetMissingDiscriminatorParameters): StreamableMethod<GetMissingDiscriminator200Response>;
}

export declare interface GetMissingDiscriminator200Response extends HttpResponse {
    status: "200";
    body: BirdOutput;
}

export declare type GetMissingDiscriminatorParameters = RequestParameters;

export declare interface GetModel {
    get(options?: GetModelParameters): StreamableMethod<GetModel200Response>;
    put(options: PutModelParameters): StreamableMethod<PutModel204Response>;
}

export declare interface GetModel200Response extends HttpResponse {
    status: "200";
    body: BirdOutput;
}

export declare type GetModelParameters = RequestParameters;

export declare interface GetRecursiveModel {
    get(options?: GetRecursiveModelParameters): StreamableMethod<GetRecursiveModel200Response>;
    put(options: PutRecursiveModelParameters): StreamableMethod<PutRecursiveModel204Response>;
}

export declare interface GetRecursiveModel200Response extends HttpResponse {
    status: "200";
    body: BirdOutput;
}

export declare type GetRecursiveModelParameters = RequestParameters;

export declare interface GetWrongDiscriminator {
    get(options?: GetWrongDiscriminatorParameters): StreamableMethod<GetWrongDiscriminator200Response>;
}

export declare interface GetWrongDiscriminator200Response extends HttpResponse {
    status: "200";
    body: BirdOutput;
}

export declare type GetWrongDiscriminatorParameters = RequestParameters;

export declare interface Goose extends BirdParent {
    kind: "goose";
}

export declare interface GooseOutput extends BirdOutputParent {
    kind: "goose";
}

export declare interface PutModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PutModelBodyParam {
    body: Bird;
}

export declare type PutModelParameters = PutModelBodyParam & RequestParameters;

export declare interface PutRecursiveModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PutRecursiveModelBodyParam {
    body: Bird;
}

export declare type PutRecursiveModelParameters = PutRecursiveModelBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/model/inheritance/single-discriminator/model"): GetModel;
    (path: "/type/model/inheritance/single-discriminator/recursivemodel"): GetRecursiveModel;
    (path: "/type/model/inheritance/single-discriminator/missingdiscriminator"): GetMissingDiscriminator;
    (path: "/type/model/inheritance/single-discriminator/wrongdiscriminator"): GetWrongDiscriminator;
    (path: "/type/model/inheritance/single-discriminator/legacy-model"): GetLegacyModel;
}

export declare interface SeaGull extends BirdParent {
    kind: "seagull";
}

export declare interface SeaGullOutput extends BirdOutputParent {
    kind: "seagull";
}

export declare type SingleDiscriminatorClient = Client & {
    path: Routes;
};

export declare interface SingleDiscriminatorClientOptions extends ClientOptions {
}

export declare interface Sparrow extends BirdParent {
    kind: "sparrow";
}

export declare interface SparrowOutput extends BirdOutputParent {
    kind: "sparrow";
}

export declare interface TRexOutput extends DinosaurOutputParent {
    kind: "t-rex";
}

export { }
