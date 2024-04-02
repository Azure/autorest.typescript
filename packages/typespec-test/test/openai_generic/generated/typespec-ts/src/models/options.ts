// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface AudioTranscriptionsCreateOptionalParams
  extends OperationOptions {
  contentType?: string;
}

export interface AudioTranslationsCreateOptionalParams
  extends OperationOptions {
  contentType?: string;
}

export interface ChatCompletionsCreateOptionalParams extends OperationOptions {}

export interface FineTuningJobsCreateOptionalParams extends OperationOptions {}

export interface FineTuningJobsListOptionalParams extends OperationOptions {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
}

export interface FineTuningJobsRetrieveOptionalParams
  extends OperationOptions {}

export interface FineTuningJobsListEventsOptionalParams
  extends OperationOptions {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
}

export interface FineTuningJobsCancelOptionalParams extends OperationOptions {}

export interface CompletionsCreateOptionalParams extends OperationOptions {}

export interface EditsCreateOptionalParams extends OperationOptions {}

export interface EmbeddingsCreateOptionalParams extends OperationOptions {}

export interface FilesListOptionalParams extends OperationOptions {}

export interface FilesCreateOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface FilesRetrieveOptionalParams extends OperationOptions {}

export interface FilesDeleteOptionalParams extends OperationOptions {}

export interface FilesDownloadOptionalParams extends OperationOptions {}

export interface FineTunesCreateOptionalParams extends OperationOptions {}

export interface FineTunesListOptionalParams extends OperationOptions {}

export interface FineTunesRetrieveOptionalParams extends OperationOptions {}

export interface FineTunesListEventsOptionalParams extends OperationOptions {
  /**
   * Whether to stream events for the fine-tune job. If set to true, events will be sent as
   * data-only
   * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
   * as they become available. The stream will terminate with a `data: [DONE]` message when the
   * job is finished (succeeded, cancelled, or failed).
   *
   * If set to false, only events generated so far will be returned.
   */
  stream?: boolean;
}

export interface FineTunesCancelOptionalParams extends OperationOptions {}

export interface ModelsListOptionalParams extends OperationOptions {}

export interface ModelsRetrieveOptionalParams extends OperationOptions {}

export interface ModelsDeleteOptionalParams extends OperationOptions {}

export interface ImagesCreateOptionalParams extends OperationOptions {}

export interface ImagesCreateEditOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface ImagesCreateVariationOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface ModerationsCreateOptionalParams extends OperationOptions {}
