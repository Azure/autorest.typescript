// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/openAI/models.js";
import {
  FineTunesCancelOptionalParams,
  FineTunesListEventsOptionalParams,
  FineTunesRetrieveOptionalParams,
  FineTunesListOptionalParams,
  FineTunesCreateOptionalParams,
} from "../../api/fineTunes/options.js";
import {
  cancel,
  listEvents,
  retrieve,
  list,
  create,
} from "../../api/fineTunes/operations.js";

/** Interface representing a FineTunes operations. */
export interface FineTunesOperations {
  cancel: (
    fineTuneId: string,
    options?: FineTunesCancelOptionalParams,
  ) => Promise<FineTune>;
  listEvents: (
    fineTuneId: string,
    options?: FineTunesListEventsOptionalParams,
  ) => Promise<ListFineTuneEventsResponse>;
  retrieve: (
    fineTuneId: string,
    options?: FineTunesRetrieveOptionalParams,
  ) => Promise<FineTune>;
  list: (
    options?: FineTunesListOptionalParams,
  ) => Promise<ListFineTunesResponse>;
  create: (
    fineTune: CreateFineTuneRequest,
    options?: FineTunesCreateOptionalParams,
  ) => Promise<FineTune>;
}

function _getFineTunes(context: OpenAIContext) {
  return {
    cancel: (fineTuneId: string, options?: FineTunesCancelOptionalParams) =>
      cancel(context, fineTuneId, options),
    listEvents: (
      fineTuneId: string,
      options?: FineTunesListEventsOptionalParams,
    ) => listEvents(context, fineTuneId, options),
    retrieve: (fineTuneId: string, options?: FineTunesRetrieveOptionalParams) =>
      retrieve(context, fineTuneId, options),
    list: (options?: FineTunesListOptionalParams) => list(context, options),
    create: (
      fineTune: CreateFineTuneRequest,
      options?: FineTunesCreateOptionalParams,
    ) => create(context, fineTune, options),
  };
}

export function _getFineTunesOperations(
  context: OpenAIContext,
): FineTunesOperations {
  return {
    ..._getFineTunes(context),
  };
}
