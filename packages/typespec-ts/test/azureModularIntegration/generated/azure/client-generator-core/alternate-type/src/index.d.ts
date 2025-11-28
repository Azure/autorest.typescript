import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class AlternateTypeClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: AlternateTypeClientOptionalParams);
    readonly externalType: ExternalTypeOperations;
}

export declare interface AlternateTypeClientOptionalParams extends ClientOptions {
}

export declare interface ExternalTypeGetModelOptionalParams extends OperationOptions {
}

export declare interface ExternalTypeGetPropertyOptionalParams extends OperationOptions {
}

export declare interface ExternalTypeOperations {
    putProperty: (body: ModelWithFeatureProperty, options?: ExternalTypePutPropertyOptionalParams) => Promise<void>;
    getProperty: (options?: ExternalTypeGetPropertyOptionalParams) => Promise<ModelWithFeatureProperty>;
    putModel: (body: Feature, options?: ExternalTypePutModelOptionalParams) => Promise<void>;
    getModel: (options?: ExternalTypeGetModelOptionalParams) => Promise<Feature>;
}

export declare interface ExternalTypePutModelOptionalParams extends OperationOptions {
}

export declare interface ExternalTypePutPropertyOptionalParams extends OperationOptions {
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

export declare interface ModelWithFeatureProperty {
    feature: Feature;
    additionalProperty: string;
}

export { }
