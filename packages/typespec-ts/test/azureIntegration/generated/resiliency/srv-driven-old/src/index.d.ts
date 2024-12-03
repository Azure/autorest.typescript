import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(endpointParam: string, serviceDeploymentVersion: string, { apiVersion, ...options }?: ServiceDrivenOldClientOptions): ServiceDrivenOldClient;
export default createClient;

export declare interface FromNone {
    head(options?: FromNoneParameters): StreamableMethod<FromNone204Response>;
}

export declare interface FromNone204Response extends HttpResponse {
    status: "204";
}

export declare type FromNoneParameters = RequestParameters;

export declare interface FromOneOptional {
    get(options?: FromOneOptionalParameters): StreamableMethod<FromOneOptional204Response>;
}

export declare interface FromOneOptional204Response extends HttpResponse {
    status: "204";
}

export declare type FromOneOptionalParameters = FromOneOptionalQueryParam & RequestParameters;

export declare interface FromOneOptionalQueryParam {
    queryParameters?: FromOneOptionalQueryParamProperties;
}

export declare interface FromOneOptionalQueryParamProperties {
    parameter?: string;
}

export declare interface FromOneRequired {
    get(options: FromOneRequiredParameters): StreamableMethod<FromOneRequired204Response>;
}

export declare interface FromOneRequired204Response extends HttpResponse {
    status: "204";
}

export declare type FromOneRequiredParameters = FromOneRequiredQueryParam & RequestParameters;

export declare interface FromOneRequiredQueryParam {
    queryParameters: FromOneRequiredQueryParamProperties;
}

export declare interface FromOneRequiredQueryParamProperties {
    parameter: string;
}

export declare interface Routes {
    (path: "/add-optional-param/from-none"): FromNone;
    (path: "/add-optional-param/from-one-required"): FromOneRequired;
    (path: "/add-optional-param/from-one-optional"): FromOneOptional;
}

export declare type ServiceDrivenOldClient = Client & {
    path: Routes;
};

export declare interface ServiceDrivenOldClientOptions extends ClientOptions {
    apiVersion?: string;
}

export { }
