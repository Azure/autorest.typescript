import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare class AlternateTypeClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: AlternateTypeClientOptionalParams);
    readonly externalType: ExternalTypeOperations;
}

export declare interface AlternateTypeClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

declare interface ExternalTypeGetModelOptionalParams extends OperationOptions {
}

declare interface ExternalTypeGetPropertyOptionalParams extends OperationOptions {
}

export declare interface ExternalTypeOperations {
    putProperty: (body: ModelWithFeatureProperty, options?: ExternalTypePutPropertyOptionalParams) => Promise<void>;
    getProperty: (options?: ExternalTypeGetPropertyOptionalParams) => Promise<ModelWithFeatureProperty>;
    putModel: (body: Feature, options?: ExternalTypePutModelOptionalParams) => Promise<void>;
    getModel: (options?: ExternalTypeGetModelOptionalParams) => Promise<Feature>;
}

declare interface ExternalTypePutModelOptionalParams extends OperationOptions {
}

declare interface ExternalTypePutPropertyOptionalParams extends OperationOptions {
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

export { isRestError }

export declare interface ModelWithFeatureProperty {
    feature: Feature;
    additionalProperty: string;
}

export { RestError }

export { }
