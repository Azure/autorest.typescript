import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(options?: VisibilityClientOptions): VisibilityClient;
export default createClient;

export declare interface DeleteModel204Response extends HttpResponse {
    status: "204";
}

export declare interface DeleteModelBodyParam {
    body: VisibilityModel;
}

export declare type DeleteModelParameters = DeleteModelBodyParam & RequestParameters;

export declare interface GetModel {
    get(options: GetModelParameters): StreamableMethod<GetModel200Response>;
    head(options: HeadModelParameters): StreamableMethod<HeadModel200Response>;
    put(options: PutModelParameters): StreamableMethod<PutModel204Response>;
    patch(options: PatchModelParameters): StreamableMethod<PatchModel204Response>;
    post(options: PostModelParameters): StreamableMethod<PostModel204Response>;
    delete(options: DeleteModelParameters): StreamableMethod<DeleteModel204Response>;
}

export declare interface GetModel200Response extends HttpResponse {
    status: "200";
    body: VisibilityModelOutput;
}

export declare interface GetModelBodyParam {
    body: VisibilityModel;
}

export declare type GetModelParameters = GetModelBodyParam & RequestParameters;

export declare interface HeadModel200Response extends HttpResponse {
    status: "200";
}

export declare interface HeadModelBodyParam {
    body: VisibilityModel;
}

export declare type HeadModelParameters = HeadModelBodyParam & RequestParameters;

export declare interface PatchModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PatchModelBodyParam {
    body: VisibilityModel;
}

export declare type PatchModelParameters = PatchModelBodyParam & RequestParameters;

export declare interface PostModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PostModelBodyParam {
    body: VisibilityModel;
}

export declare type PostModelParameters = PostModelBodyParam & RequestParameters;

export declare interface PutModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PutModelBodyParam {
    body: VisibilityModel;
}

export declare type PutModelParameters = PutModelBodyParam & RequestParameters;

export declare interface PutReadOnlyModel {
    put(options: PutReadOnlyModelParameters): StreamableMethod<PutReadOnlyModel200Response>;
}

export declare interface PutReadOnlyModel200Response extends HttpResponse {
    status: "200";
    body: ReadOnlyModelOutput;
}

export declare interface PutReadOnlyModelBodyParam {
    body: ReadOnlyModel;
}

export declare type PutReadOnlyModelParameters = PutReadOnlyModelBodyParam & RequestParameters;

export declare interface ReadOnlyModel {
}

export declare interface ReadOnlyModelOutput {
    readonly optionalNullableIntList?: number[] | null;
    readonly optionalStringRecord?: Record<string, string>;
}

export declare interface Routes {
    (path: "/type/model/visibility"): GetModel;
    (path: "/type/model/visibility/readonlyroundtrip"): PutReadOnlyModel;
}

export declare type VisibilityClient = Client & {
    path: Routes;
};

export declare interface VisibilityClientOptions extends ClientOptions {
}

export declare interface VisibilityModel {
    queryProp: number;
    createProp: string[];
    updateProp: number[];
    deleteProp: boolean;
}

export declare interface VisibilityModelOutput {
    readonly readProp: string;
    queryProp: number;
    createProp: string[];
    updateProp: number[];
    deleteProp: boolean;
}

export { }
