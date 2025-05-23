import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: UsageClientOptions): UsageClient;
export default createClient;

export declare interface InputModel {
    name: string;
}

export declare interface InputToInputOutput {
    post(options: InputToInputOutputParameters): StreamableMethod<InputToInputOutput204Response>;
}

export declare interface InputToInputOutput204Response extends HttpResponse {
    status: "204";
}

export declare interface InputToInputOutputBodyParam {
    body: InputModel;
}

export declare type InputToInputOutputParameters = InputToInputOutputBodyParam & RequestParameters;

export declare interface ModelInReadOnlyProperty {
    put(options: ModelInReadOnlyPropertyParameters): StreamableMethod<ModelInReadOnlyProperty200Response>;
}

export declare interface ModelInReadOnlyProperty200Response extends HttpResponse {
    status: "200";
    body: RoundTripModelOutput;
}

export declare interface ModelInReadOnlyPropertyBodyParam {
    body: RoundTripModel;
}

export declare type ModelInReadOnlyPropertyParameters = ModelInReadOnlyPropertyBodyParam & RequestParameters;

export declare interface OrphanModelSerializable {
    put(options: OrphanModelSerializableParameters): StreamableMethod<OrphanModelSerializable204Response>;
}

export declare interface OrphanModelSerializable204Response extends HttpResponse {
    status: "204";
}

export declare interface OrphanModelSerializableBodyParam {
    body: unknown;
}

export declare type OrphanModelSerializableParameters = OrphanModelSerializableBodyParam & RequestParameters;

export declare interface OutputModelOutput {
    name: string;
}

export declare interface OutputToInputOutput {
    get(options?: OutputToInputOutputParameters): StreamableMethod<OutputToInputOutput200Response>;
}

export declare interface OutputToInputOutput200Response extends HttpResponse {
    status: "200";
    body: OutputModelOutput;
}

export declare type OutputToInputOutputParameters = RequestParameters;

export declare interface ResultModel {
    name: string;
}

export declare interface ResultModelOutput {
    name: string;
}

export declare interface RoundTripModel {
}

export declare interface RoundTripModelOutput {
    readonly result: ResultModelOutput;
}

export declare interface Routes {
    (path: "/azure/client-generator-core/usage/inputToInputOutput"): InputToInputOutput;
    (path: "/azure/client-generator-core/usage/outputToInputOutput"): OutputToInputOutput;
    (path: "/azure/client-generator-core/usage/modelInReadOnlyProperty"): ModelInReadOnlyProperty;
    (path: "/azure/client-generator-core/usage/orphanModelSerializable"): OrphanModelSerializable;
}

export declare type UsageClient = Client & {
    path: Routes;
};

export declare interface UsageClientOptions extends ClientOptions {
}

export { }
