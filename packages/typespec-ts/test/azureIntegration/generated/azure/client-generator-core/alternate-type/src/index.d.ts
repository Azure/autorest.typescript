import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AlternateTypeClient = Client & {
    path: Routes;
};

export declare interface AlternateTypeClientOptions extends ClientOptions {
}

declare function createClient(options?: AlternateTypeClientOptions): AlternateTypeClient;
export default createClient;

export declare interface Feature {
    type: "Feature";
    geometry: Geometry | null;
    properties: Record<string, unknown>;
    id?: string | number;
}

export declare interface FeatureOutput {
    type: "Feature";
    geometry: GeometryOutput | null;
    properties: Record<string, any>;
    id?: string | number;
}

export declare interface Geometry {
    type: string;
    coordinates: number[];
}

export declare interface GeometryOutput {
    type: string;
    coordinates: number[];
}

export declare interface GetModel {
    get(options?: GetModelParameters): StreamableMethod<GetModel200Response>;
    put(options: PutModelParameters): StreamableMethod<PutModel204Response>;
}

export declare interface GetModel200Response extends HttpResponse {
    status: "200";
    body: FeatureOutput;
}

export declare type GetModelParameters = RequestParameters;

export declare interface GetProperty {
    get(options?: GetPropertyParameters): StreamableMethod<GetProperty200Response>;
    put(options: PutPropertyParameters): StreamableMethod<PutProperty204Response>;
}

export declare interface GetProperty200Response extends HttpResponse {
    status: "200";
    body: ModelWithFeaturePropertyOutput;
}

export declare type GetPropertyParameters = RequestParameters;

export declare interface ModelWithFeatureProperty {
    feature: Feature;
    additionalProperty: string;
}

export declare interface ModelWithFeaturePropertyOutput {
    feature: FeatureOutput;
    additionalProperty: string;
}

export declare interface PutModel204Response extends HttpResponse {
    status: "204";
}

export declare interface PutModelBodyParam {
    body: Feature;
}

export declare type PutModelParameters = PutModelBodyParam & RequestParameters;

export declare interface PutProperty204Response extends HttpResponse {
    status: "204";
}

export declare interface PutPropertyBodyParam {
    body: ModelWithFeatureProperty;
}

export declare type PutPropertyParameters = PutPropertyBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/azure/client-generator-core/alternate-type/external/model"): GetModel;
    (path: "/azure/client-generator-core/alternate-type/external/property"): GetProperty;
}

export { }
