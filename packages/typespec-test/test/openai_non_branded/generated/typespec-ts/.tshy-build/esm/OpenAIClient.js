// Licensed under the MIT license.
import { getAudioOperations } from "./classic/audio/index.js";
import { getChatOperations } from "./classic/chat/index.js";
import { getFineTuningOperations, } from "./classic/fineTuning/index.js";
import { getCompletionsOperations, } from "./classic/completions/index.js";
import { getEditsOperations } from "./classic/edits/index.js";
import { getEmbeddingsOperations, } from "./classic/embeddings/index.js";
import { getFilesOperations } from "./classic/files/index.js";
import { getFineTunesOperations, } from "./classic/fineTunes/index.js";
import { getModelsOperations, } from "./classic/models/index.js";
import { getImagesOperations, } from "./classic/images/index.js";
import { getModerationsOperations, } from "./classic/moderations/index.js";
import { createOpenAI, } from "./api/index.js";
export class OpenAIClient {
    _client;
    /** The pipeline used by this client to make requests */
    pipeline;
    /** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
    constructor(credential, options = {}) {
        this._client = createOpenAI(credential, options);
        this.pipeline = this._client.pipeline;
        this.audio = getAudioOperations(this._client);
        this.chat = getChatOperations(this._client);
        this.fineTuning = getFineTuningOperations(this._client);
        this.completions = getCompletionsOperations(this._client);
        this.edits = getEditsOperations(this._client);
        this.embeddings = getEmbeddingsOperations(this._client);
        this.files = getFilesOperations(this._client);
        this.fineTunes = getFineTunesOperations(this._client);
        this.models = getModelsOperations(this._client);
        this.images = getImagesOperations(this._client);
        this.moderations = getModerationsOperations(this._client);
    }
    /** The operation groups for AudioTranscriptions */
    audio;
    /** The operation groups for ChatCompletions */
    chat;
    /** The operation groups for FineTuningJobs */
    fineTuning;
    /** The operation groups for Completions */
    completions;
    /** The operation groups for Edits */
    edits;
    /** The operation groups for Embeddings */
    embeddings;
    /** The operation groups for Files */
    files;
    /** The operation groups for FineTunes */
    fineTunes;
    /** The operation groups for Models */
    models;
    /** The operation groups for Images */
    images;
    /** The operation groups for Moderations */
    moderations;
}
//# sourceMappingURL=OpenAIClient.js.map