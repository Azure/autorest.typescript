// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  create,
  list,
  retrieve,
  listEvents,
  cancel,
  CreateOptions,
  ListOptions,
  RetrieveOptions,
  ListEventsOptions,
  CancelOptions,
} from "../../api/fineTunes/index.js";
import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/models.js";

export interface FineTunesOperations {
  fineTunes: {
    create: (
      fineTune: CreateFineTuneRequest,
      options?: CreateOptions
    ) => Promise<FineTune>;
    list: (options?: ListOptions) => Promise<ListFineTunesResponse>;
    retrieve: (
      fineTuneId: string,
      options?: RetrieveOptions
    ) => Promise<FineTune>;
    listEvents: (
      fineTuneId: string,
      options?: ListEventsOptions
    ) => Promise<ListFineTuneEventsResponse>;
    cancel: (fineTuneId: string, options?: CancelOptions) => Promise<FineTune>;
  };
}

export function getFineTunes(context: OpenAIContext) {
  return {
    create: (fineTune: CreateFineTuneRequest, options?: CreateOptions) =>
      create(context, fineTune, options),
    list: (options?: ListOptions) => list(context, options),
    retrieve: (fineTuneId: string, options?: RetrieveOptions) =>
      retrieve(context, fineTuneId, options),
    listEvents: (fineTuneId: string, options?: ListEventsOptions) =>
      listEvents(context, fineTuneId, options),
    cancel: (fineTuneId: string, options?: CancelOptions) =>
      cancel(context, fineTuneId, options),
  };
}

export function getFineTunesOperations(
  context: OpenAIContext
): FineTunesOperations {
  return {
    fineTunes: getFineTunes(context),
  };
}
