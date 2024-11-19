import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare interface ClientNameAndJsonEncodedNameModel {
    wireName: boolean;
}

export declare interface ClientNameModel {
    defaultName: boolean;
}

declare function createClient(options?: NamingClientOptions): NamingClient;
export default createClient;

export declare type ExtensibleEnum = string;

export declare interface HeaderRequest {
    post(options: HeaderRequestParameters): StreamableMethod<HeaderRequest204Response>;
    get(options?: HeaderResponseParameters): StreamableMethod<HeaderResponse204Response>;
}

export declare interface HeaderRequest204Response extends HttpResponse {
    status: "204";
}

export declare interface HeaderRequestHeaderParam {
    headers: RawHttpHeadersInput & HeaderRequestHeaders;
}

export declare interface HeaderRequestHeaders {
    "default-name": string;
}

export declare type HeaderRequestParameters = HeaderRequestHeaderParam & RequestParameters;

export declare interface HeaderResponse204Headers {
    "default-name": string;
}

export declare interface HeaderResponse204Response extends HttpResponse {
    status: "204";
    headers: RawHttpHeaders & HeaderResponse204Headers;
}

export declare type HeaderResponseParameters = RequestParameters;

export declare interface LanguageClientNameModel {
    defaultName: boolean;
}

export declare interface ModelClient {
    post(options: ModelClientParameters): StreamableMethod<ModelClient204Response>;
}

export declare interface ModelClient204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelClientBodyParam {
    body: ModelWithClientClientName;
}

export declare type ModelClientParameters = ModelClientBodyParam & RequestParameters;

export declare interface ModelLanguage {
    post(options: ModelLanguageParameters): StreamableMethod<ModelLanguage204Response>;
}

export declare interface ModelLanguage204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelLanguageBodyParam {
    body: ModelWithLanguageClientName;
}

export declare type ModelLanguageParameters = ModelLanguageBodyParam & RequestParameters;

export declare interface ModelWithClientClientName {
    defaultName: boolean;
}

export declare interface ModelWithLanguageClientName {
    defaultName: boolean;
}

export declare type NamingClient = Client & {
    path: Routes;
};

export declare interface NamingClientOptions extends ClientOptions {
}

export declare interface Operation {
    post(options?: OperationParameters): StreamableMethod<Operation204Response>;
}

export declare interface Operation204Response extends HttpResponse {
    status: "204";
}

export declare type OperationParameters = RequestParameters;

export declare interface Parameter {
    post(options: ParameterParameters): StreamableMethod<Parameter204Response>;
}

export declare interface Parameter204Response extends HttpResponse {
    status: "204";
}

export declare type ParameterParameters = ParameterQueryParam & RequestParameters;

export declare interface ParameterQueryParam {
    queryParameters: ParameterQueryParamProperties;
}

export declare interface ParameterQueryParamProperties {
    defaultName: string;
}

export declare interface PropertyClient {
    post(options: PropertyClientParameters): StreamableMethod<PropertyClient204Response>;
}

export declare interface PropertyClient204Response extends HttpResponse {
    status: "204";
}

export declare interface PropertyClientBodyParam {
    body: ClientNameModel;
}

export declare type PropertyClientParameters = PropertyClientBodyParam & RequestParameters;

export declare interface PropertyCompatibleWithEncodedName {
    post(options: PropertyCompatibleWithEncodedNameParameters): StreamableMethod<PropertyCompatibleWithEncodedName204Response>;
}

export declare interface PropertyCompatibleWithEncodedName204Response extends HttpResponse {
    status: "204";
}

export declare interface PropertyCompatibleWithEncodedNameBodyParam {
    body: ClientNameAndJsonEncodedNameModel;
}

export declare type PropertyCompatibleWithEncodedNameParameters = PropertyCompatibleWithEncodedNameBodyParam & RequestParameters;

export declare interface PropertyLanguage {
    post(options: PropertyLanguageParameters): StreamableMethod<PropertyLanguage204Response>;
}

export declare interface PropertyLanguage204Response extends HttpResponse {
    status: "204";
}

export declare interface PropertyLanguageBodyParam {
    body: LanguageClientNameModel;
}

export declare type PropertyLanguageParameters = PropertyLanguageBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/client/naming/operation"): Operation;
    (path: "/client/naming/parameter"): Parameter;
    (path: "/client/naming/property/client"): PropertyClient;
    (path: "/client/naming/property/language"): PropertyLanguage;
    (path: "/client/naming/property/compatible-with-encoded-name"): PropertyCompatibleWithEncodedName;
    (path: "/client/naming/header"): HeaderRequest;
    (path: "/client/naming/model/client"): ModelClient;
    (path: "/client/naming/model/language"): ModelLanguage;
    (path: "/client/naming/union-enum/union-enum-name"): UnionEnumUnionEnumName;
    (path: "/client/naming/union-enum/union-enum-member-name"): UnionEnumUnionEnumMemberName;
}

export declare type ServerExtensibleEnum = string;

export declare interface UnionEnumUnionEnumMemberName {
    post(options: UnionEnumUnionEnumMemberNameParameters): StreamableMethod<UnionEnumUnionEnumMemberName204Response>;
}

export declare interface UnionEnumUnionEnumMemberName204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionEnumUnionEnumMemberNameBodyParam {
    body: ExtensibleEnum;
}

export declare type UnionEnumUnionEnumMemberNameParameters = UnionEnumUnionEnumMemberNameBodyParam & RequestParameters;

export declare interface UnionEnumUnionEnumName {
    post(options: UnionEnumUnionEnumNameParameters): StreamableMethod<UnionEnumUnionEnumName204Response>;
}

export declare interface UnionEnumUnionEnumName204Response extends HttpResponse {
    status: "204";
}

export declare interface UnionEnumUnionEnumNameBodyParam {
    body: ServerExtensibleEnum;
}

export declare type UnionEnumUnionEnumNameParameters = UnionEnumUnionEnumNameBodyParam & RequestParameters;

export { }
