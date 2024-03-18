import { KeyCredential } from "@typespec/ts-http-runtime";
import { Pipeline } from "@typespec/ts-http-runtime";
import { AudioOperations } from "./classic/audio/index.js";
import { ChatOperations } from "./classic/chat/index.js";
import { FineTuningOperations } from "./classic/fineTuning/index.js";
import { CompletionsOperations } from "./classic/completions/index.js";
import { EditsOperations } from "./classic/edits/index.js";
import { EmbeddingsOperations } from "./classic/embeddings/index.js";
import { FilesOperations } from "./classic/files/index.js";
import { FineTunesOperations } from "./classic/fineTunes/index.js";
import { ModelsOperations } from "./classic/models/index.js";
import { ImagesOperations } from "./classic/images/index.js";
import { ModerationsOperations } from "./classic/moderations/index.js";
import { OpenAIClientOptions } from "./api/index.js";
export { OpenAIClientOptions } from "./api/OpenAIContext.js";
export declare class OpenAIClient {
    private _client;
    /** The pipeline used by this client to make requests */
    readonly pipeline: Pipeline;
    /** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
    constructor(credential: KeyCredential, options?: OpenAIClientOptions);
    /** The operation groups for AudioTranscriptions */
    readonly audio: AudioOperations;
    /** The operation groups for ChatCompletions */
    readonly chat: ChatOperations;
    /** The operation groups for FineTuningJobs */
    readonly fineTuning: FineTuningOperations;
    /** The operation groups for Completions */
    readonly completions: CompletionsOperations;
    /** The operation groups for Edits */
    readonly edits: EditsOperations;
    /** The operation groups for Embeddings */
    readonly embeddings: EmbeddingsOperations;
    /** The operation groups for Files */
    readonly files: FilesOperations;
    /** The operation groups for FineTunes */
    readonly fineTunes: FineTunesOperations;
    /** The operation groups for Models */
    readonly models: ModelsOperations;
    /** The operation groups for Images */
    readonly images: ImagesOperations;
    /** The operation groups for Moderations */
    readonly moderations: ModerationsOperations;
}
//# sourceMappingURL=OpenAIClient.d.ts.map