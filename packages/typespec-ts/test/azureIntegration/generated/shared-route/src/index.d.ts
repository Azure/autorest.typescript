import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient($host: string, options?: SharedRouteClientOptions): SharedRouteClient;
export default createClient;

export declare interface ErrorModelOutput {
    code: number;
    message: string;
}

export declare function isUnexpected(response: ListBySubscription202Response | ListBySubscriptionDefaultResponse): response is ListBySubscriptionDefaultResponse;

export declare function isUnexpected(response: ListByResourceGroup200Response | ListByResourceGroupDefaultResponse): response is ListByResourceGroupDefaultResponse;

export declare interface ListByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: Array<ResourceOutput>;
}

export declare interface ListByResourceGroupBodyParam {
    body: Resource;
}

export declare interface ListByResourceGroupDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorModelOutput;
}

export declare type ListByResourceGroupParameters = ListByResourceGroupQueryParam & ListByResourceGroupBodyParam & RequestParameters;

export declare interface ListByResourceGroupQueryParam {
    queryParameters: ListByResourceGroupQueryParamProperties;
}

export declare interface ListByResourceGroupQueryParamProperties {
    filter: "resourceGroup";
}

export declare interface ListBySubscription {
    post(options: ListBySubscriptionParameters): StreamableMethod<ListBySubscription202Response | ListBySubscriptionDefaultResponse>;
    post(options: ListByResourceGroupParameters): StreamableMethod<ListByResourceGroup200Response | ListByResourceGroupDefaultResponse>;
}

export declare interface ListBySubscription202Response extends HttpResponse {
    status: "202";
    body: ResourceOutput;
}

export declare interface ListBySubscriptionBodyParam {
    body: Resource;
}

export declare interface ListBySubscriptionDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorModelOutput;
}

export declare interface ListBySubscriptionHeaderParam {
    headers: RawHttpHeadersInput & ListBySubscriptionHeaders;
}

export declare interface ListBySubscriptionHeaders {
    filter: "subscription";
}

export declare type ListBySubscriptionParameters = ListBySubscriptionHeaderParam & ListBySubscriptionBodyParam & RequestParameters;

export declare interface ProcessInt {
    post(options: ProcessIntParameters): StreamableMethod<ProcessInt200Response>;
    post(options: ProcessStringParameters): StreamableMethod<ProcessString200Response>;
}

export declare interface ProcessInt200Response extends HttpResponse {
    status: "200";
    body: number;
}

export declare interface ProcessIntBodyParam {
    body: number;
}

export declare type ProcessIntParameters = ProcessIntQueryParam & ProcessIntBodyParam & RequestParameters;

export declare interface ProcessIntQueryParam {
    queryParameters: ProcessIntQueryParamProperties;
}

export declare interface ProcessIntQueryParamProperties {
    options: string;
}

export declare interface ProcessString200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare interface ProcessStringBodyParam {
    body: string;
}

export declare type ProcessStringParameters = ProcessStringQueryParam & ProcessStringBodyParam & RequestParameters;

export declare interface ProcessStringQueryParam {
    queryParameters: ProcessStringQueryParamProperties;
}

export declare interface ProcessStringQueryParamProperties {
    options: string;
}

export declare interface Resource {
    id: string;
}

export declare interface ResourceOutput {
    id: string;
}

export declare interface ReturnsInt {
    post(options: ReturnsIntParameters): StreamableMethod<ReturnsInt200Response>;
    post(options: ReturnsStringParameters): StreamableMethod<ReturnsString200Response>;
}

export declare interface ReturnsInt200Response extends HttpResponse {
    status: "200";
    body: number;
}

export declare interface ReturnsIntBodyParam {
    body: Resource;
}

export declare type ReturnsIntParameters = ReturnsIntQueryParam & ReturnsIntBodyParam & RequestParameters;

export declare interface ReturnsIntQueryParam {
    queryParameters: ReturnsIntQueryParamProperties;
}

export declare interface ReturnsIntQueryParamProperties {
    options: string;
}

export declare interface ReturnsString200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare interface ReturnsStringBodyParam {
    body: Resource;
}

export declare type ReturnsStringParameters = ReturnsStringQueryParam & ReturnsStringBodyParam & RequestParameters;

export declare interface ReturnsStringQueryParam {
    queryParameters: ReturnsStringQueryParamProperties;
}

export declare interface ReturnsStringQueryParamProperties {
    options: string;
}

export declare interface Routes {
    (path: "/sharedroute/query"): ListBySubscription;
    (path: "/sharedroute/request-body"): UpdateInt;
    (path: "/sharedroute/response-body"): ReturnsInt;
    (path: "/sharedroute/request-response"): ProcessInt;
}

export declare type SharedRouteClient = Client & {
    path: Routes;
};

export declare interface SharedRouteClientOptions extends ClientOptions {
}

export declare interface UpdateInt {
    post(options: UpdateIntParameters): StreamableMethod<UpdateInt204Response>;
    post(options: UpdateStringParameters): StreamableMethod<UpdateString204Response>;
}

export declare interface UpdateInt204Response extends HttpResponse {
    status: "204";
}

export declare interface UpdateIntBodyParam {
    body: number;
}

export declare type UpdateIntParameters = UpdateIntQueryParam & UpdateIntBodyParam & RequestParameters;

export declare interface UpdateIntQueryParam {
    queryParameters: UpdateIntQueryParamProperties;
}

export declare interface UpdateIntQueryParamProperties {
    options: string;
}

export declare interface UpdateString204Response extends HttpResponse {
    status: "204";
}

export declare interface UpdateStringBodyParam {
    body: string;
}

export declare type UpdateStringParameters = UpdateStringQueryParam & UpdateStringBodyParam & RequestParameters;

export declare interface UpdateStringQueryParam {
    queryParameters: UpdateStringQueryParamProperties;
}

export declare interface UpdateStringQueryParamProperties {
    options: string;
}

export { }
