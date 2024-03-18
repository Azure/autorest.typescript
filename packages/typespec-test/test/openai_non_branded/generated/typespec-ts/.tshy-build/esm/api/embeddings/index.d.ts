import { CreateEmbeddingRequest, CreateEmbeddingResponse } from "../../models/models.js";
import { EmbeddingsCreate200Response, EmbeddingsCreateDefaultResponse, OpenAIContext as Client } from "../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { EmbeddingsCreateOptions } from "../../models/options.js";
export declare function _createSend(context: Client, embedding: CreateEmbeddingRequest, options?: EmbeddingsCreateOptions): StreamableMethod<EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse>;
export declare function _createDeserialize(result: EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse): Promise<CreateEmbeddingResponse>;
export declare function create(context: Client, embedding: CreateEmbeddingRequest, options?: EmbeddingsCreateOptions): Promise<CreateEmbeddingResponse>;
//# sourceMappingURL=index.d.ts.map