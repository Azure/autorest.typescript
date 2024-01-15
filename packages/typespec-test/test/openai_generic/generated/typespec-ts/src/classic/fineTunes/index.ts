// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/models.js";
import {
  create,
  list,
  retrieve,
  listEvents,
  cancel,
} from "../../api/fineTunes/index.js";
import {
  FineTunesCreateOptions,
  FineTunesListOptions,
  FineTunesRetrieveOptions,
  FineTunesListEventsOptions,
  FineTunesCancelOptions,
} from "../../models/options.js";

export interface FineTunesOperations {
  create: (
    fineTune: CreateFineTuneRequest,
    options?: FineTunesCreateOptions,
  ) => Promise<FineTune>;
  list: (options?: FineTunesListOptions) => Promise<ListFineTunesResponse>;
  retrieve: (
    fineTuneId: string,
    options?: FineTunesRetrieveOptions,
  ) => Promise<FineTune>;
  listEvents: (
    fineTuneId: string,
    options?: FineTunesListEventsOptions,
  ) => Promise<ListFineTuneEventsResponse>;
  cancel: (
    fineTuneId: string,
    options?: FineTunesCancelOptions,
  ) => Promise<FineTune>;
}

export function getFineTunes(context: OpenAIContext) {
  return {
    create: (
      fineTune: CreateFineTuneRequest,
      options?: FineTunesCreateOptions,
    ) => create(context, fineTune, options),
    list: (options?: FineTunesListOptions) => list(context, options),
    retrieve: (fineTuneId: string, options?: FineTunesRetrieveOptions) =>
      retrieve(context, fineTuneId, options),
    listEvents: (fineTuneId: string, options?: FineTunesListEventsOptions) =>
      listEvents(context, fineTuneId, options),
    cancel: (fineTuneId: string, options?: FineTunesCancelOptions) =>
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
