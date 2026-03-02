// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext, OpenAIClientOptionalParams, createOpenAI } from "./api/index.js";
import { AudioOperations, _getAudioOperations } from "./classic/audio/index.js";
import { ChatOperations, _getChatOperations } from "./classic/chat/index.js";
import { CompletionsOperations, _getCompletionsOperations } from "./classic/completions/index.js";
import { EditsOperations, _getEditsOperations } from "./classic/edits/index.js";
import { EmbeddingsOperations, _getEmbeddingsOperations } from "./classic/embeddings/index.js";
import { FilesOperations, _getFilesOperations } from "./classic/files/index.js";
import { FineTunesOperations, _getFineTunesOperations } from "./classic/fineTunes/index.js";
import { FineTuningOperations, _getFineTuningOperations } from "./classic/fineTuning/index.js";
import { ImagesOperations, _getImagesOperations } from "./classic/images/index.js";
import { ModelsOperations, _getModelsOperations } from "./classic/models/index.js";
import { ModerationsOperations, _getModerationsOperations } from "./classic/moderations/index.js";
import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { OpenAIClientOptionalParams } from "./api/openAIContext.js";

export class OpenAIClient {
  private _client: OpenAIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
  constructor(credential: KeyCredential, options: OpenAIClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createOpenAI(credential, { ...options, userAgentOptions: { userAgentPrefix } });
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
