// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getTranscriptionsOperations,
  TranscriptionsOperations,
} from "./classic/transcriptions/index.js";
import {
  getTranslationsOperations,
  TranslationsOperations,
} from "./classic/translations/index.js";
import {
  getCompletionsOperations,
  CompletionsOperations,
} from "./classic/completions/index.js";
import { getJobsOperations, JobsOperations } from "./classic/jobs/index.js";
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
    this.transcriptions = getTranscriptionsOperations(this._client);
    this.translations = getTranslationsOperations(this._client);
    this.completions = getCompletionsOperations(this._client);
    this.jobs = getJobsOperations(this._client);
    this.edits = getEditsOperations(this._client);
    this.embeddings = getEmbeddingsOperations(this._client);
    this.files = getFilesOperations(this._client);
    this.fineTunes = getFineTunesOperations(this._client);
    this.models = getModelsOperations(this._client);
    this.images = getImagesOperations(this._client);
    this.moderations = getModerationsOperations(this._client);
  }

  /** The operation groups for Transcriptions */
  public readonly transcriptions: TranscriptionsOperations;
  /** The operation groups for Translations */
  public readonly translations: TranslationsOperations;
  /** The operation groups for Completions */
  public readonly completions: CompletionsOperations;
  /** The operation groups for Jobs */
  public readonly jobs: JobsOperations;
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
