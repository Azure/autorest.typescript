import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: NestedDiscriminatorClientOptions): NestedDiscriminatorClient;
export default createClient;

export declare type Fish = FishParent | Shark | Salmon;

export declare type FishOutput = FishOutputParent | SharkOutput | SalmonOutput;

export declare interface FishOutputParent {
    age: number;
    kind: string;
}

export declare interface FishParent {
    age: number;
    kind: string;
}

export declare interface GetMissingDiscriminator {
    get(options?: GetMissingDiscriminatorParameters): StreamableMethod<GetMissingDiscriminator200Response>;
}

export declare interface GetMissingDiscriminator200Response extends HttpResponse {
    status: "200";
    body: FishOutput;
}

export declare type GetMissingDiscriminatorParameters = RequestParameters;

export declare interface GetModel {
    get(options?: GetModelParameters): StreamableMethod<GetModel200Response>;
    put(options: PutModelParameters): StreamableMethod<PutModel204Response>;
}

export declare interface GetModel200Response extends HttpResponse {
    status: "200";
    body: FishOutput;
}

export declare type GetModelParameters = RequestParameters;

export declare interface GetRecursiveModel {
    get(options?: GetRecursiveModelParameters): StreamableMethod<GetRecursiveModel200Response>;
    put(options: PutRecursiveModelParameters): StreamableMethod<PutRecursiveModel204Response>;
}

export declare interface GetRecursiveModel200Response extends HttpResponse {
    status: "200";
    body: FishOutput;
}

export declare type GetRecursiveModelParameters = RequestParameters;

export declare interface GetWrongDiscriminator {
    get(options?: GetWrongDiscriminatorParameters): StreamableMethod<GetWrongDiscriminator200Response>;
}

export declare interface GetWrongDiscriminator200Response extends HttpResponse {
    status: "200";
    body: FishOutput;
}

export declare type GetWrongDiscriminatorParameters = RequestParameters;

export declare interface GoblinShark extends SharkParent {
    sharktype: "goblin";
}

export declare interface GoblinSharkOutput extends SharkOutputParent {
    sharktype: "goblin";
}

export declare type NestedDiscriminatorClient = Client & {
    path: Routes;
};

export declare interface NestedDiscriminatorClientOptions extends ClientOptions {
}

export declare interface PutModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PutModelBodyParam {
    body: Fish;
}

export declare type PutModelParameters = PutModelBodyParam & RequestParameters;

export declare interface PutRecursiveModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PutRecursiveModelBodyParam {
    body: Fish;
}

export declare type PutRecursiveModelParameters = PutRecursiveModelBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/model/inheritance/nested-discriminator/model"): GetModel;
    (path: "/type/model/inheritance/nested-discriminator/recursivemodel"): GetRecursiveModel;
    (path: "/type/model/inheritance/nested-discriminator/missingdiscriminator"): GetMissingDiscriminator;
    (path: "/type/model/inheritance/nested-discriminator/wrongdiscriminator"): GetWrongDiscriminator;
}

export declare interface Salmon extends FishParent {
    kind: "salmon";
    friends?: Array<Fish>;
    hate?: Record<string, Fish>;
    partner?: Fish;
}

export declare interface SalmonOutput extends FishOutputParent {
    kind: "salmon";
    friends?: Array<FishOutput>;
    hate?: Record<string, FishOutput>;
    partner?: FishOutput;
}

export declare interface SawShark extends SharkParent {
    sharktype: "saw";
}

export declare interface SawSharkOutput extends SharkOutputParent {
    sharktype: "saw";
}

export declare type Shark = SharkParent | SawShark | GoblinShark;

export declare type SharkOutput = SharkOutputParent | SawSharkOutput | GoblinSharkOutput;

export declare interface SharkOutputParent extends FishOutputParent {
    kind: "shark";
    sharktype: string;
}

export declare interface SharkParent extends FishParent {
    kind: "shark";
    sharktype: string;
}

export { }
