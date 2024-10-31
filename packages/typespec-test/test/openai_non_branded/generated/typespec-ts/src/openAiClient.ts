// Licensed under the MIT License.

import { getAudioOperations, AudioOperations } from "./classic/audio/index.js";
import { getChatOperations, ChatOperations } from "./classic/chat/index.js";
import {
  getFineTuningOperations,
  FineTuningOperations,
} from "./classic/fineTuning/index.js";
import {
  getCompletionsOperations,
  CompletionsOperations,
} from "./classic/completions/index.js";
import { getEditsOperations, EditsOperations } from "./classic/edits/index.js";
import {
  getEmbeddingsOperations,
  EmbeddingsOperations,
} from "./classic/embeddings/index.js";
import { getFilesOperations, FilesOperations } from "./classic/files/index.js";
import {
  getFineTunesOperations,
  FineTunesOperations,
} from "./classic/fineTunes/index.js";
import {
  getModelsOperations,
  ModelsOperations,
} from "./classic/models/index.js";
import {
  getImagesOperations,
  ImagesOperations,
} from "./classic/images/index.js";
import {
  getModerationsOperations,
  ModerationsOperations,
} from "./classic/moderations/index.js";
import {
  createOpenAI,
  OpenAIContext,
  OpenAIClientOptionalParams,
} from "./api/index.js";
import { Pipeline, KeyCredential } from "@typespec/ts-http-runtime";

export { OpenAIClientOptionalParams } from "./api/openAIContext.js";

export class OpenAIClient {
  private _client: OpenAIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
  constructor(
    credential: KeyCredential,
    options: OpenAIClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createOpenAI(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
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
  public readonly audio: AudioOperations;
  /** The operation groups for ChatCompletions */
  public readonly chat: ChatOperations;
  /** The operation groups for FineTuningJobs */
  public readonly fineTuning: FineTuningOperations;
  /** The operation groups for Completions */
  public readonly completions: CompletionsOperations;
  /** The operation groups for Edits */
  public readonly edits: EditsOperations;
  /** The operation groups for Embeddings */
  public readonly embeddings: EmbeddingsOperations;
  /** The operation groups for Files */
  public readonly files: FilesOperations;
  /** The operation groups for FineTunes */
  public readonly fineTunes: FineTunesOperations;
  /** The operation groups for Models */
  public readonly models: ModelsOperations;
  /** The operation groups for Images */
  public readonly images: ImagesOperations;
  /** The operation groups for Moderations */
  public readonly moderations: ModerationsOperations;
}
