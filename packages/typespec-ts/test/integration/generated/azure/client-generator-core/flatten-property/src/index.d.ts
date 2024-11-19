import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

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
}

export { }
