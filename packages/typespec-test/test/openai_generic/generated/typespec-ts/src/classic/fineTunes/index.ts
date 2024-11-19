// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  create,
  list,
  retrieve,
  listEvents,
  cancel,
} from "../../api/fineTunes/index.js";
import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/models.js";
import {
  FineTunesCreateOptionalParams,
  FineTunesListOptionalParams,
  FineTunesRetrieveOptionalParams,
  FineTunesListEventsOptionalParams,
  FineTunesCancelOptionalParams,
} from "../../api/options.js";

/** Interface representing a FineTunes operations. */
export interface FineTunesOperations {
  create: (
    fineTune: CreateFineTuneRequest,
    options?: FineTunesCreateOptionalParams,
  ) => Promise<FineTune>;
  list: (
    options?: FineTunesListOptionalParams,
  ) => Promise<ListFineTunesResponse>;
  retrieve: (
    fineTuneId: string,
    options?: FineTunesRetrieveOptionalParams,
  ) => Promise<FineTune>;
  listEvents: (
    fineTuneId: string,
    options?: FineTunesListEventsOptionalParams,
  ) => Promise<ListFineTuneEventsResponse>;
  cancel: (
    fineTuneId: string,
    options?: FineTunesCancelOptionalParams,
  ) => Promise<FineTune>;
}

export function getFineTunes(context: OpenAIContext) {
  return {
    create: (
      fineTune: CreateFineTuneRequest,
      options?: FineTunesCreateOptionalParams,
    ) => create(context, fineTune, options),
    list: (options?: FineTunesListOptionalParams) => list(context, options),
    retrieve: (fineTuneId: string, options?: FineTunesRetrieveOptionalParams) =>
      retrieve(context, fineTuneId, options),
    listEvents: (
      fineTuneId: string,
      options?: FineTunesListEventsOptionalParams,
    ) => listEvents(context, fineTuneId, options),
    cancel: (fineTuneId: string, options?: FineTunesCancelOptionalParams) =>
      cancel(context, fineTuneId, options),
  };
}

export function getFineTunesOperations(
  context: OpenAIContext,
): FineTunesOperations {
  return {
    ...getFineTunes(context),
  };
}
