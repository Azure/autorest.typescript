import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RawHttpHeadersInput } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

export declare interface AliasSpreadAsRequestBody {
    put(options: AliasSpreadAsRequestBodyParameters): StreamableMethod<AliasSpreadAsRequestBody204Response>;
}

export declare interface AliasSpreadAsRequestBody204Response extends HttpResponse {
    status: "204";
}

export declare interface AliasSpreadAsRequestBodyBodyParam {
    body: {
        name: string;
    };
}

export declare type AliasSpreadAsRequestBodyParameters = AliasSpreadAsRequestBodyBodyParam & RequestParameters;

export declare interface AliasSpreadAsRequestParameter {
    put(options: AliasSpreadAsRequestParameterParameters): StreamableMethod<AliasSpreadAsRequestParameter204Response>;
}

export declare interface AliasSpreadAsRequestParameter204Response extends HttpResponse {
    status: "204";
}

export declare interface AliasSpreadAsRequestParameterBodyParam {
    body: {
        name: string;
    };
}

export declare interface AliasSpreadAsRequestParameterHeaderParam {
    headers: RawHttpHeadersInput & AliasSpreadAsRequestParameterHeaders;
}

export declare interface AliasSpreadAsRequestParameterHeaders {
    "x-ms-test-header": string;
}

export declare type AliasSpreadAsRequestParameterParameters = AliasSpreadAsRequestParameterHeaderParam & AliasSpreadAsRequestParameterBodyParam & RequestParameters;

export declare interface AliasSpreadParameterWithInnerAlias {
    post(options: AliasSpreadParameterWithInnerAliasParameters): StreamableMethod<AliasSpreadParameterWithInnerAlias204Response>;
}

export declare interface AliasSpreadParameterWithInnerAlias204Response extends HttpResponse {
    status: "204";
}

export declare interface AliasSpreadParameterWithInnerAliasBodyParam {
    body: {
        name: string;
        age: number;
    };
}

export declare interface AliasSpreadParameterWithInnerAliasHeaderParam {
    headers: RawHttpHeadersInput & AliasSpreadParameterWithInnerAliasHeaders;
}

export declare interface AliasSpreadParameterWithInnerAliasHeaders {
    "x-ms-test-header": string;
}

export declare type AliasSpreadParameterWithInnerAliasParameters = AliasSpreadParameterWithInnerAliasHeaderParam & AliasSpreadParameterWithInnerAliasBodyParam & RequestParameters;

export declare interface AliasSpreadParameterWithInnerModel {
    post(options: AliasSpreadParameterWithInnerModelParameters): StreamableMethod<AliasSpreadParameterWithInnerModel204Response>;
}

export declare interface AliasSpreadParameterWithInnerModel204Response extends HttpResponse {
    status: "204";
}

export declare interface AliasSpreadParameterWithInnerModelBodyParam {
    body: InnerModel;
}

export declare interface AliasSpreadParameterWithInnerModelHeaderParam {
    headers: RawHttpHeadersInput & AliasSpreadParameterWithInnerModelHeaders;
}

export declare interface AliasSpreadParameterWithInnerModelHeaders {
    "x-ms-test-header": string;
}

export declare type AliasSpreadParameterWithInnerModelParameters = AliasSpreadParameterWithInnerModelHeaderParam & AliasSpreadParameterWithInnerModelBodyParam & RequestParameters;

export declare interface AliasSpreadWithMultipleParameters {
    put(options: AliasSpreadWithMultipleParametersParameters): StreamableMethod<AliasSpreadWithMultipleParameters204Response>;
}

export declare interface AliasSpreadWithMultipleParameters204Response extends HttpResponse {
    status: "204";
}

export declare interface AliasSpreadWithMultipleParametersBodyParam {
    body: {
        requiredString: string;
        optionalInt?: number;
        requiredIntList: number[];
        optionalStringList?: string[];
    };
}

export declare interface AliasSpreadWithMultipleParametersHeaderParam {
    headers: RawHttpHeadersInput & AliasSpreadWithMultipleParametersHeaders;
}

export declare interface AliasSpreadWithMultipleParametersHeaders {
    "x-ms-test-header": string;
}

export declare type AliasSpreadWithMultipleParametersParameters = AliasSpreadWithMultipleParametersHeaderParam & AliasSpreadWithMultipleParametersBodyParam & RequestParameters;

export declare interface BodyParameter {
    name: string;
}

export declare interface CompositeRequestMix {
    prop: string;
}

declare function createClient(options?: SpreadClientOptions): SpreadClient;
export default createClient;

export declare interface InnerModel {
    name: string;
}

export declare interface ModelSpreadAsRequestBody {
    put(options: ModelSpreadAsRequestBodyParameters): StreamableMethod<ModelSpreadAsRequestBody204Response>;
}

export declare interface ModelSpreadAsRequestBody204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelSpreadAsRequestBodyBodyParam {
    body: BodyParameter;
}

export declare type ModelSpreadAsRequestBodyParameters = ModelSpreadAsRequestBodyBodyParam & RequestParameters;

export declare interface ModelSpreadCompositeRequest {
    put(options: ModelSpreadCompositeRequestParameters): StreamableMethod<ModelSpreadCompositeRequest204Response>;
}

export declare interface ModelSpreadCompositeRequest204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelSpreadCompositeRequestBodyParam {
    body: BodyParameter;
}

export declare interface ModelSpreadCompositeRequestHeaderParam {
    headers: RawHttpHeadersInput & ModelSpreadCompositeRequestHeaders;
}

export declare interface ModelSpreadCompositeRequestHeaders {
    "test-header": string;
}

export declare interface ModelSpreadCompositeRequestMix {
    put(options: ModelSpreadCompositeRequestMixParameters): StreamableMethod<ModelSpreadCompositeRequestMix204Response>;
}

export declare interface ModelSpreadCompositeRequestMix204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelSpreadCompositeRequestMixBodyParam {
    body: CompositeRequestMix;
}

export declare interface ModelSpreadCompositeRequestMixHeaderParam {
    headers: RawHttpHeadersInput & ModelSpreadCompositeRequestMixHeaders;
}

export declare interface ModelSpreadCompositeRequestMixHeaders {
    "test-header": string;
}

export declare type ModelSpreadCompositeRequestMixParameters = ModelSpreadCompositeRequestMixHeaderParam & ModelSpreadCompositeRequestMixBodyParam & RequestParameters;

export declare interface ModelSpreadCompositeRequestOnlyWithBody {
    put(options: ModelSpreadCompositeRequestOnlyWithBodyParameters): StreamableMethod<ModelSpreadCompositeRequestOnlyWithBody204Response>;
}

export declare interface ModelSpreadCompositeRequestOnlyWithBody204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelSpreadCompositeRequestOnlyWithBodyBodyParam {
    body: BodyParameter;
}

export declare type ModelSpreadCompositeRequestOnlyWithBodyParameters = ModelSpreadCompositeRequestOnlyWithBodyBodyParam & RequestParameters;

export declare type ModelSpreadCompositeRequestParameters = ModelSpreadCompositeRequestHeaderParam & ModelSpreadCompositeRequestBodyParam & RequestParameters;

export declare interface ModelSpreadCompositeRequestWithoutBody {
    put(options: ModelSpreadCompositeRequestWithoutBodyParameters): StreamableMethod<ModelSpreadCompositeRequestWithoutBody204Response>;
}

export declare interface ModelSpreadCompositeRequestWithoutBody204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelSpreadCompositeRequestWithoutBodyHeaderParam {
    headers: RawHttpHeadersInput & ModelSpreadCompositeRequestWithoutBodyHeaders;
}

export declare interface ModelSpreadCompositeRequestWithoutBodyHeaders {
    "test-header": string;
}

export declare type ModelSpreadCompositeRequestWithoutBodyParameters = ModelSpreadCompositeRequestWithoutBodyHeaderParam & RequestParameters;

export declare interface Routes {
    (path: "/parameters/spread/model/request-body"): ModelSpreadAsRequestBody;
    (path: "/parameters/spread/model/composite-request-only-with-body"): ModelSpreadCompositeRequestOnlyWithBody;
    (path: "/parameters/spread/model/composite-request-without-body/{name}", name: string): ModelSpreadCompositeRequestWithoutBody;
    (path: "/parameters/spread/model/composite-request/{name}", name: string): ModelSpreadCompositeRequest;
    (path: "/parameters/spread/model/composite-request-mix/{name}", name: string): ModelSpreadCompositeRequestMix;
    (path: "/parameters/spread/alias/request-body"): AliasSpreadAsRequestBody;
    (path: "/parameters/spread/alias/inner-model-parameter/{id}", id: string): AliasSpreadParameterWithInnerModel;
    (path: "/parameters/spread/alias/request-parameter/{id}", id: string): AliasSpreadAsRequestParameter;
    (path: "/parameters/spread/alias/multiple-parameters/{id}", id: string): AliasSpreadWithMultipleParameters;
    (path: "/parameters/spread/alias/inner-alias-parameter/{id}", id: string): AliasSpreadParameterWithInnerAlias;
}

export declare type SpreadClient = Client & {
    path: Routes;
};

export declare interface SpreadClientOptions extends ClientOptions {
}

export { }
