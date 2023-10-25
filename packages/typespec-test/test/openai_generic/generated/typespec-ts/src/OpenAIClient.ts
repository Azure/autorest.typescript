// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createOpenAI,
  OpenAIClientOptions,
  OpenAIContext,
} from "./api/index.js";

export { OpenAIClientOptions } from "./api/OpenAIContext.js";

export class OpenAIClient {
  private _client: OpenAIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
  constructor(credential: KeyCredential, options: OpenAIClientOptions = {}) {
    this._client = createOpenAI(credential, options);
    this.pipeline = this._client.pipeline;
    this.audio = getAudioOperations(this._client);
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
  /** The operation groups for AudioTranslations */
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
