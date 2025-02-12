import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AzureCoreModelClient = Client & {
    path: Routes;
};

export declare interface AzureCoreModelClientOptions extends ClientOptions {
}

export declare interface AzureEmbeddingModel {
    embedding: number[];
}

export declare interface AzureEmbeddingModelOutput {
    embedding: number[];
}

declare function createClient(options?: AzureCoreModelClientOptions): AzureCoreModelClient;
export default createClient;

export declare interface Get {
    get(options?: GetParameters): StreamableMethod<Get200Response>;
    put(options: PutParameters): StreamableMethod<Put204Response>;
    post(options: PostParameters): StreamableMethod<Post200Response>;
}

export declare interface Get200Response extends HttpResponse {
    status: "200";
    body: number[];
}

export declare type GetParameters = RequestParameters;

export declare interface Post200Response extends HttpResponse {
    status: "200";
    body: AzureEmbeddingModelOutput;
}

export declare interface PostBodyParam {
    body: AzureEmbeddingModel;
}

export declare type PostParameters = PostBodyParam & RequestParameters;

export declare interface Put204Response extends HttpResponse {
    status: "204";
}

export declare interface PutBodyParam {
    body: number[];
}

export declare type PutParameters = PutBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/azure/core/model/embeddingVector"): Get;
}

export { }
