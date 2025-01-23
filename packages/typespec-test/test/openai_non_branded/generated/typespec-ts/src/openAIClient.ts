// Licensed under the MIT License.

import {
  _getModerationsOperations,
  ModerationsOperations,
} from "./classic/moderations/index.js";
import {
  _getImagesOperations,
  ImagesOperations,
} from "./classic/images/index.js";
import {
  _getModelsOperations,
  ModelsOperations,
} from "./classic/models/index.js";
import {
  _getFineTunesOperations,
  FineTunesOperations,
} from "./classic/fineTunes/index.js";
import { _getFilesOperations, FilesOperations } from "./classic/files/index.js";
import {
  _getEmbeddingsOperations,
  EmbeddingsOperations,
} from "./classic/embeddings/index.js";
import { _getEditsOperations, EditsOperations } from "./classic/edits/index.js";
import {
  _getCompletionsOperations,
  CompletionsOperations,
} from "./classic/completions/index.js";
import {
  _getFineTuningOperations,
  FineTuningOperations,
} from "./classic/fineTuning/index.js";
import { _getChatOperations, ChatOperations } from "./classic/chat/index.js";
import { _getAudioOperations, AudioOperations } from "./classic/audio/index.js";
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
      : `azsdk-js-client`;
    this._client = createOpenAI(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.moderations = _getModerationsOperations(this._client);
    this.images = _getImagesOperations(this._client);
    this.models = _getModelsOperations(this._client);
    this.fineTunes = _getFineTunesOperations(this._client);
    this.files = _getFilesOperations(this._client);
    this.embeddings = _getEmbeddingsOperations(this._client);
    this.edits = _getEditsOperations(this._client);
    this.completions = _getCompletionsOperations(this._client);
    this.fineTuning = _getFineTuningOperations(this._client);
    this.chat = _getChatOperations(this._client);
    this.audio = _getAudioOperations(this._client);
  }

  /** The operation groups for moderations */
  public readonly moderations: ModerationsOperations;
  /** The operation groups for images */
  public readonly images: ImagesOperations;
  /** The operation groups for models */
  public readonly models: ModelsOperations;
  /** The operation groups for fineTunes */
  public readonly fineTunes: FineTunesOperations;
  /** The operation groups for files */
  public readonly files: FilesOperations;
  /** The operation groups for embeddings */
  public readonly embeddings: EmbeddingsOperations;
  /** The operation groups for edits */
  public readonly edits: EditsOperations;
  /** The operation groups for completions */
  public readonly completions: CompletionsOperations;
  /** The operation groups for fineTuning */
  public readonly fineTuning: FineTuningOperations;
  /** The operation groups for chat */
  public readonly chat: ChatOperations;
  /** The operation groups for audio */
  public readonly audio: AudioOperations;
}
