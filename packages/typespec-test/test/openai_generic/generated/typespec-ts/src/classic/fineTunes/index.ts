// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import {
  createFineTune,
  listFineTunes,
  retrieveFineTune,
  listFineTuneEvents,
  cancelFineTune,
} from "../../api/fineTunes";
import {
  CreateFineTuneRequest,
  CreateFineTuneOptions,
  FineTune,
  ListFineTunesOptions,
  ListFineTunesResponse,
  RetrieveFineTuneOptions,
  ListFineTuneEventsOptions,
  ListFineTuneEventsResponse,
  CancelFineTuneOptions,
} from "../../models";

export interface FineTunesOperations {
  fineTunes: {
    createFineTune: (
      fineTune: CreateFineTuneRequest,
      options?: CreateFineTuneOptions
    ) => Promise<FineTune>;
    listFineTunes: (
      options?: ListFineTunesOptions
    ) => Promise<ListFineTunesResponse>;
    retrieveFineTune: (
      fineTuneId: string,
      options?: RetrieveFineTuneOptions
    ) => Promise<FineTune>;
    listFineTuneEvents: (
      fineTuneId: string,
      options?: ListFineTuneEventsOptions
    ) => Promise<ListFineTuneEventsResponse>;
    cancelFineTune: (
      fineTuneId: string,
      options?: CancelFineTuneOptions
    ) => Promise<FineTune>;
  };
}

export function getFineTunes(context: Client) {
  return {
    createFineTune: (
      fineTune: CreateFineTuneRequest,
      options?: CreateFineTuneOptions
    ) => createFineTune(context, fineTune, options),
    listFineTunes: (options?: ListFineTunesOptions) =>
      listFineTunes(context, options),
    retrieveFineTune: (fineTuneId: string, options?: RetrieveFineTuneOptions) =>
      retrieveFineTune(context, fineTuneId, options),
    listFineTuneEvents: (
      fineTuneId: string,
      options?: ListFineTuneEventsOptions
    ) => listFineTuneEvents(context, fineTuneId, options),
    cancelFineTune: (fineTuneId: string, options?: CancelFineTuneOptions) =>
      cancelFineTune(context, fineTuneId, options),
  };
}

export function getFineTunesOperations(): FineTunesOperations {
  return {
    fineTunes: getFineTunes,
  };
}
