import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class AlternateTypeClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: AlternateTypeClientOptionalParams);
    putProperty(body: ModelWithFeatureProperty, options?: PutPropertyOptionalParams): Promise<void>;
    getProperty(options?: GetPropertyOptionalParams): Promise<ModelWithFeatureProperty>;
    putModel(body: Feature, options?: PutModelOptionalParams): Promise<void>;
    getModel(options?: GetModelOptionalParams): Promise<Feature>;
}

export declare interface AlternateTypeClientOptionalParams extends ClientOptions {
}

export declare interface Feature {
    type: "Feature";
    geometry: Geometry | null;
    properties: Record<string, any>;
    id?: string | number;
}

export declare interface Geometry {
    type: string;
    coordinates: number[];
}

export declare interface GetModelOptionalParams extends OperationOptions {
}

export declare interface GetPropertyOptionalParams extends OperationOptions {
}

export declare interface ModelWithFeatureProperty {
    feature: Feature;
    additionalProperty: string;
}

export declare interface PutModelOptionalParams extends OperationOptions {
}

export declare interface PutPropertyOptionalParams extends OperationOptions {
}

export { }
