// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/index.js";
import { cancel, listEvents, retrieve, list, create } from "../../api/fineTunes/operations.js";
import {
  FineTunesCancelOptionalParams,
  FineTunesListEventsOptionalParams,
  FineTunesRetrieveOptionalParams,
  FineTunesListOptionalParams,
  FineTunesCreateOptionalParams,
} from "../../api/fineTunes/options.js";
import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/models.js";

/** Interface representing a FineTunes operations. */
export interface FineTunesOperations {
  /** @deprecated deprecated */
  cancel: (fineTuneId: string, options?: FineTunesCancelOptionalParams) => Promise<FineTune>;
  /** @deprecated deprecated */
  listEvents: (
    fineTuneId: string,
    options?: FineTunesListEventsOptionalParams,
  ) => Promise<ListFineTuneEventsResponse>;
  /** @deprecated deprecated */
  retrieve: (fineTuneId: string, options?: FineTunesRetrieveOptionalParams) => Promise<FineTune>;
  /** @deprecated deprecated */
  list: (options?: FineTunesListOptionalParams) => Promise<ListFineTunesResponse>;
  /** @deprecated deprecated */
  create: (
    fineTune: CreateFineTuneRequest,
    options?: FineTunesCreateOptionalParams,
  ) => Promise<FineTune>;
}

function _getFineTunes(context: OpenAIContext) {
  return {
    cancel: (fineTuneId: string, options?: FineTunesCancelOptionalParams) =>
      cancel(context, fineTuneId, options),
    listEvents: (fineTuneId: string, options?: FineTunesListEventsOptionalParams) =>
      listEvents(context, fineTuneId, options),
    retrieve: (fineTuneId: string, options?: FineTunesRetrieveOptionalParams) =>
      retrieve(context, fineTuneId, options),
    list: (options?: FineTunesListOptionalParams) => list(context, options),
    create: (fineTune: CreateFineTuneRequest, options?: FineTunesCreateOptionalParams) =>
      create(context, fineTune, options),
  };
}

export function _getFineTunesOperations(context: OpenAIContext): FineTunesOperations {
  return {
    ..._getFineTunes(context),
  };
}
