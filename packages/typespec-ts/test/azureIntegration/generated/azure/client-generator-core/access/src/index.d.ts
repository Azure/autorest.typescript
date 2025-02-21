import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AbstractModelOutput = AbstractModelOutputParent | RealModelOutput;

export declare interface AbstractModelOutputParent {
    name: string;
    kind: string;
}

export declare type AccessClient = Client & {
    path: Routes;
};

export declare interface AccessClientOptions extends ClientOptions {
}

export declare interface BaseModelOutput {
    name: string;
}

declare function createClient(options?: AccessClientOptions): AccessClient;
export default createClient;

export declare interface Discriminator {
    get(options: DiscriminatorParameters): StreamableMethod<Discriminator200Response>;
}

export declare interface Discriminator200Response extends HttpResponse {
    status: "200";
    body: AbstractModelOutput;
}

export declare type DiscriminatorParameters = DiscriminatorQueryParam & RequestParameters;

export declare interface DiscriminatorQueryParam {
    queryParameters: DiscriminatorQueryParamProperties;
}

export declare interface DiscriminatorQueryParamProperties {
    kind: string;
}

export declare interface InnerModelOutput {
    name: string;
}

export declare interface Internal {
    get(options: InternalParameters): StreamableMethod<Internal200Response>;
}

export declare interface Internal200Response extends HttpResponse {
    status: "200";
    body: SharedModelOutput;
}

export declare interface InternalDecoratorInInternal {
    get(options: InternalDecoratorInInternalParameters): StreamableMethod<InternalDecoratorInInternal200Response>;
}

export declare interface InternalDecoratorInInternal200Response extends HttpResponse {
    status: "200";
    body: InternalDecoratorModelInInternalOutput;
}

export declare type InternalDecoratorInInternalParameters = InternalDecoratorInInternalQueryParam & RequestParameters;

export declare interface InternalDecoratorInInternalQueryParam {
    queryParameters: InternalDecoratorInInternalQueryParamProperties;
}

export declare interface InternalDecoratorInInternalQueryParamProperties {
    name: string;
}

export declare interface InternalDecoratorModelInInternalOutput {
    name: string;
}

export declare type InternalParameters = InternalQueryParam & RequestParameters;

export declare interface InternalQueryParam {
    queryParameters: InternalQueryParamProperties;
}

export declare interface InternalQueryParamProperties {
    name: string;
}

export declare interface NoDecoratorInInternal {
    get(options: NoDecoratorInInternalParameters): StreamableMethod<NoDecoratorInInternal200Response>;
}

export declare interface NoDecoratorInInternal200Response extends HttpResponse {
    status: "200";
    body: NoDecoratorModelInInternalOutput;
}

export declare type NoDecoratorInInternalParameters = NoDecoratorInInternalQueryParam & RequestParameters;

export declare interface NoDecoratorInInternalQueryParam {
    queryParameters: NoDecoratorInInternalQueryParamProperties;
}

export declare interface NoDecoratorInInternalQueryParamProperties {
    name: string;
}

export declare interface NoDecoratorInPublic {
    get(options: NoDecoratorInPublicParameters): StreamableMethod<NoDecoratorInPublic200Response>;
}

export declare interface NoDecoratorInPublic200Response extends HttpResponse {
    status: "200";
    body: NoDecoratorModelInPublicOutput;
}

export declare type NoDecoratorInPublicParameters = NoDecoratorInPublicQueryParam & RequestParameters;

export declare interface NoDecoratorInPublicQueryParam {
    queryParameters: NoDecoratorInPublicQueryParamProperties;
}

export declare interface NoDecoratorInPublicQueryParamProperties {
    name: string;
}

export declare interface NoDecoratorModelInInternalOutput {
    name: string;
}

export declare interface NoDecoratorModelInPublicOutput {
    name: string;
}

export declare interface Operation {
    get(options: OperationParameters): StreamableMethod<Operation200Response>;
}

export declare interface Operation200Response extends HttpResponse {
    status: "200";
    body: OuterModelOutput;
}

export declare type OperationParameters = OperationQueryParam & RequestParameters;

export declare interface OperationQueryParam {
    queryParameters: OperationQueryParamProperties;
}

export declare interface OperationQueryParamProperties {
    name: string;
}

export declare interface OuterModelOutput extends BaseModelOutput {
    inner: InnerModelOutput;
}

export declare interface Public {
    get(options: PublicParameters): StreamableMethod<Public200Response>;
}

export declare interface Public200Response extends HttpResponse {
    status: "200";
    body: SharedModelOutput;
}

export declare interface PublicDecoratorInInternal {
    get(options: PublicDecoratorInInternalParameters): StreamableMethod<PublicDecoratorInInternal200Response>;
}

export declare interface PublicDecoratorInInternal200Response extends HttpResponse {
    status: "200";
    body: PublicDecoratorModelInInternalOutput;
}

export declare type PublicDecoratorInInternalParameters = PublicDecoratorInInternalQueryParam & RequestParameters;

export declare interface PublicDecoratorInInternalQueryParam {
    queryParameters: PublicDecoratorInInternalQueryParamProperties;
}

export declare interface PublicDecoratorInInternalQueryParamProperties {
    name: string;
}

export declare interface PublicDecoratorInPublic {
    get(options: PublicDecoratorInPublicParameters): StreamableMethod<PublicDecoratorInPublic200Response>;
}

export declare interface PublicDecoratorInPublic200Response extends HttpResponse {
    status: "200";
    body: PublicDecoratorModelInPublicOutput;
}

export declare type PublicDecoratorInPublicParameters = PublicDecoratorInPublicQueryParam & RequestParameters;

export declare interface PublicDecoratorInPublicQueryParam {
    queryParameters: PublicDecoratorInPublicQueryParamProperties;
}

export declare interface PublicDecoratorInPublicQueryParamProperties {
    name: string;
}

export declare interface PublicDecoratorModelInInternalOutput {
    name: string;
}

export declare interface PublicDecoratorModelInPublicOutput {
    name: string;
}

export declare type PublicParameters = PublicQueryParam & RequestParameters;

export declare interface PublicQueryParam {
    queryParameters: PublicQueryParamProperties;
}

export declare interface PublicQueryParamProperties {
    name: string;
}

export declare interface RealModelOutput extends AbstractModelOutputParent {
    kind: "real";
}

export declare interface Routes {
    (path: "/azure/client-generator-core/access/publicOperation/noDecoratorInPublic"): NoDecoratorInPublic;
    (path: "/azure/client-generator-core/access/publicOperation/publicDecoratorInPublic"): PublicDecoratorInPublic;
    (path: "/azure/client-generator-core/access/internalOperation/noDecoratorInInternal"): NoDecoratorInInternal;
    (path: "/azure/client-generator-core/access/internalOperation/internalDecoratorInInternal"): InternalDecoratorInInternal;
    (path: "/azure/client-generator-core/access/internalOperation/publicDecoratorInInternal"): PublicDecoratorInInternal;
    (path: "/azure/client-generator-core/access/sharedModelInOperation/public"): Public;
    (path: "/azure/client-generator-core/access/sharedModelInOperation/internal"): Internal;
    (path: "/azure/client-generator-core/access/relativeModelInOperation/operation"): Operation;
    (path: "/azure/client-generator-core/access/relativeModelInOperation/discriminator"): Discriminator;
}

export declare interface SharedModelOutput {
    name: string;
}

export { }
