// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { getAudioOperations, Audio } from "./classic/audio/index.js";
import { getChatOperations, Chat } from "./classic/chat/index.js";
import {
  getFineTuningOperations,
  FineTuning,
} from "./classic/fineTuning/index.js";
import {
  getCompletionsOperations,
  Completions,
} from "./classic/completions/index.js";
import { getEditsOperations, Edits } from "./classic/edits/index.js";
import {
  getEmbeddingsOperations,
  Embeddings,
} from "./classic/embeddings/index.js";
import { getFilesOperations, Files } from "./classic/files/index.js";
import {
  getFineTunesOperations,
  FineTunes,
} from "./classic/fineTunes/index.js";
import { getModelsOperations, Models } from "./classic/models/index.js";
import { getImagesOperations, Images } from "./classic/images/index.js";
import {
  getModerationsOperations,
  Moderations,
} from "./classic/moderations/index.js";
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
  public readonly audio: Audio;
  /** The operation groups for ChatCompletions */
  public readonly chat: Chat;
  /** The operation groups for FineTuningJobs */
  public readonly fineTuning: FineTuning;
  /** The operation groups for Completions */
  public readonly completions: Completions;
  /** The operation groups for Edits */
  public readonly edits: Edits;
  /** The operation groups for Embeddings */
  public readonly embeddings: Embeddings;
  /** The operation groups for Files */
  public readonly files: Files;
  /** The operation groups for FineTunes */
  public readonly fineTunes: FineTunes;
  /** The operation groups for Models */
  public readonly models: Models;
  /** The operation groups for Images */
  public readonly images: Images;
  /** The operation groups for Moderations */
  public readonly moderations: Moderations;
}
