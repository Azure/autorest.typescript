import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare interface ChildFlattenModel {
    summary: string;
    properties: ChildModel;
}

export declare interface ChildFlattenModelOutput {
    summary: string;
    properties: ChildModelOutput;
}

export declare interface ChildModel {
    description: string;
    age: number;
}

export declare interface ChildModelOutput {
    description: string;
    age: number;
}

declare function createClient(options?: FlattenPropertyClientOptions): FlattenPropertyClient;
export default createClient;

export declare interface FlattenModel {
    name: string;
    properties: ChildModel;
}

export declare interface FlattenModelOutput {
    name: string;
    properties: ChildModelOutput;
}

export declare type FlattenPropertyClient = Client & {
    path: Routes;
};

export declare interface FlattenPropertyClientOptions extends ClientOptions {
}

export declare interface FlattenUnknownModel {
    name: string;
    properties?: unknown;
}

export declare interface FlattenUnknownModelOutput {
    name: string;
    properties?: any;
}

export declare interface NestedFlattenModel {
    name: string;
    properties: ChildFlattenModel;
}

export declare interface NestedFlattenModelOutput {
    name: string;
    properties: ChildFlattenModelOutput;
}

export declare interface PutFlattenModel {
    put(options: PutFlattenModelParameters): StreamableMethod<PutFlattenModel200Response>;
}

export declare interface PutFlattenModel200Response extends HttpResponse {
    status: "200";
    body: FlattenModelOutput;
}

export declare interface PutFlattenModelBodyParam {
    body: FlattenModel;
}

export declare type PutFlattenModelParameters = PutFlattenModelBodyParam & RequestParameters;

export declare interface PutFlattenReadOnlyModel {
    put(options: PutFlattenReadOnlyModelParameters): StreamableMethod<PutFlattenReadOnlyModel200Response>;
}

export declare interface PutFlattenReadOnlyModel200Response extends HttpResponse {
    status: "200";
    body: SolutionOutput;
}

export declare interface PutFlattenReadOnlyModelBodyParam {
    body: Solution;
}

export declare type PutFlattenReadOnlyModelParameters = PutFlattenReadOnlyModelBodyParam & RequestParameters;

export declare interface PutFlattenUnknownModel {
    put(options: PutFlattenUnknownModelParameters): StreamableMethod<PutFlattenUnknownModel200Response>;
}

export declare interface PutFlattenUnknownModel200Response extends HttpResponse {
    status: "200";
    body: FlattenUnknownModelOutput;
}

export declare interface PutFlattenUnknownModelBodyParam {
    body: FlattenUnknownModel;
}

export declare type PutFlattenUnknownModelParameters = PutFlattenUnknownModelBodyParam & RequestParameters;

export declare interface PutNestedFlattenModel {
    put(options: PutNestedFlattenModelParameters): StreamableMethod<PutNestedFlattenModel200Response>;
}

export declare interface PutNestedFlattenModel200Response extends HttpResponse {
    status: "200";
    body: NestedFlattenModelOutput;
}

export declare interface PutNestedFlattenModelBodyParam {
    body: NestedFlattenModel;
}

export declare type PutNestedFlattenModelParameters = PutNestedFlattenModelBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/azure/client-generator-core/flatten-property/flattenModel"): PutFlattenModel;
    (path: "/azure/client-generator-core/flatten-property/nestedFlattenModel"): PutNestedFlattenModel;
    (path: "/azure/client-generator-core/flatten-property/flattenUnknownModel"): PutFlattenUnknownModel;
    (path: "/azure/client-generator-core/flatten-property/flattenReadOnlyModel"): PutFlattenReadOnlyModel;
}

export declare interface Solution {
    name: string;
    properties: SolutionProperties;
    propertiesOptional?: SolutionProperties;
}

export declare interface SolutionOutput {
    name: string;
    properties: SolutionPropertiesOutput;
    propertiesOptional?: SolutionPropertiesOutput;
}

export declare interface SolutionProperties {
}

export declare interface SolutionPropertiesOutput {
    readonly solutionId?: string;
    readonly title?: string;
    readonly content?: string;
}

export { }
