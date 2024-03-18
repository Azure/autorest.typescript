import { OpenAIContext } from "../../api/OpenAIContext.js";
import { CreateEmbeddingRequest, CreateEmbeddingResponse } from "../../models/models.js";
import { EmbeddingsCreateOptions } from "../../models/options.js";
export interface EmbeddingsOperations {
    create: (embedding: CreateEmbeddingRequest, options?: EmbeddingsCreateOptions) => Promise<CreateEmbeddingResponse>;
}
export declare function getEmbeddings(context: OpenAIContext): {
    create: (embedding: CreateEmbeddingRequest, options?: EmbeddingsCreateOptions) => Promise<CreateEmbeddingResponse>;
};
export declare function getEmbeddingsOperations(context: OpenAIContext): EmbeddingsOperations;
//# sourceMappingURL=index.d.ts.map