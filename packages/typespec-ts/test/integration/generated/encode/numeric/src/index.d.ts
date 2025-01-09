import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(options?: NumericClientOptions): NumericClient;
export default createClient;

export declare type NumericClient = Client & {
    path: Routes;
};

export declare interface NumericClientOptions extends ClientOptions {
}

export declare interface PropertySafeintAsString200Response extends HttpResponse {
    status: "200";
    body: SafeintAsStringPropertyOutput;
}

export declare interface PropertySafeintAsStringBodyParam {
    body: SafeintAsStringProperty;
}

export declare type PropertySafeintAsStringParameters = PropertySafeintAsStringBodyParam & RequestParameters;

export declare interface PropertyUint32AsStringOptional200Response extends HttpResponse {
    status: "200";
    body: Uint32AsStringPropertyOutput;
}

export declare interface PropertyUint32AsStringOptionalBodyParam {
    body: Uint32AsStringProperty;
}

export declare type PropertyUint32AsStringOptionalParameters = PropertyUint32AsStringOptionalBodyParam & RequestParameters;

export declare interface PropertyUint8AsString200Response extends HttpResponse {
    status: "200";
    body: Uint8AsStringPropertyOutput;
}

export declare interface PropertyUint8AsStringBodyParam {
    body: Uint8AsStringProperty;
}

export declare type PropertyUint8AsStringParameters = PropertyUint8AsStringBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/encode/numeric/property/safeint"): SafeintAsString;
    (path: "/encode/numeric/property/uint32"): Uint32AsStringOptional;
    (path: "/encode/numeric/property/uint8"): Uint8AsString;
}

export declare interface SafeintAsString {
    post(options: PropertySafeintAsStringParameters): StreamableMethod<PropertySafeintAsString200Response>;
}

export declare interface SafeintAsStringProperty {
    value: string;
}

export declare interface SafeintAsStringPropertyOutput {
    value: string;
}

export declare interface Uint32AsStringOptional {
    post(options: PropertyUint32AsStringOptionalParameters): StreamableMethod<PropertyUint32AsStringOptional200Response>;
}

export declare interface Uint32AsStringProperty {
    value?: string;
}

export declare interface Uint32AsStringPropertyOutput {
    value?: string;
}

export declare interface Uint8AsString {
    post(options: PropertyUint8AsStringParameters): StreamableMethod<PropertyUint8AsString200Response>;
}

export declare interface Uint8AsStringProperty {
    value: string;
}

export declare interface Uint8AsStringPropertyOutput {
    value: string;
}

export { }
