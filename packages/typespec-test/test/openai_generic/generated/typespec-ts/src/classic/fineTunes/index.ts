// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  fineTunesCreate,
  fineTunesList,
  fineTunesRetrieve,
  fineTunesListEvents,
  fineTunesCancel,
} from "../../api/fineTunes/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/models.js";
import {
  FineTunesCreateOptions,
  FineTunesListOptions,
  FineTunesRetrieveOptions,
  FineTunesListEventsOptions,
  FineTunesCancelOptions,
} from "../../models/options.js";

export interface FineTunesOperations {
  fineTunes: {
    create: (
      fineTune: CreateFineTuneRequest,
      options?: FineTunesCreateOptions
    ) => Promise<FineTune>;
    list: (options?: FineTunesListOptions) => Promise<ListFineTunesResponse>;
    retrieve: (
      fineTuneId: string,
      options?: FineTunesRetrieveOptions
    ) => Promise<FineTune>;
    listEvents: (
      fineTuneId: string,
      options?: FineTunesListEventsOptions
    ) => Promise<ListFineTuneEventsResponse>;
    cancel: (
      fineTuneId: string,
      options?: FineTunesCancelOptions
    ) => Promise<FineTune>;
  };
}

export function getFineTunes(context: OpenAIContext) {
  return {
    create: (
      fineTune: CreateFineTuneRequest,
      options?: FineTunesCreateOptions
    ) => fineTunesCreate(context, fineTune, options),
    list: (options?: FineTunesListOptions) => fineTunesList(context, options),
    retrieve: (fineTuneId: string, options?: FineTunesRetrieveOptions) =>
      fineTunesRetrieve(context, fineTuneId, options),
    listEvents: (fineTuneId: string, options?: FineTunesListEventsOptions) =>
      fineTunesListEvents(context, fineTuneId, options),
    cancel: (fineTuneId: string, options?: FineTunesCancelOptions) =>
      fineTunesCancel(context, fineTuneId, options),
  };
}

export function getFineTunesOperations(
  context: OpenAIContext
): FineTunesOperations {
  return {
    fineTunes: getFineTunes(context),
  };
}
