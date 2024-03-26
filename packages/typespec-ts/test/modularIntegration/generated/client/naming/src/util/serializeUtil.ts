// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TSModel,
  ClientModel,
  ClientNameAndJsonEncodedNameModel,
  LanguageClientNameModel,
  ClientNameModel,
} from "../models/models.js";
import {
  ModelWithLanguageClientName as RestTSModel,
  ModelWithClientClientName as RestClientModel,
  ClientNameAndJsonEncodedNameModel as RestClientNameAndJsonEncodedNameModel,
  LanguageClientNameModel as RestLanguageClientNameModel,
  ClientNameModel as RestClientNameModel,
} from "../rest/index.js";

export function serializeTSModel(o: TSModel): RestTSModel {
  return {
    defaultName: o["defaultName"],
  };
}

export function serializeClientModel(o: ClientModel): RestClientModel {
  return {
    defaultName: o["defaultName"],
  };
}

export function serializeClientNameAndJsonEncodedNameModel(
  o: ClientNameAndJsonEncodedNameModel,
): RestClientNameAndJsonEncodedNameModel {
  return {
    wireName: o["clientName"],
  };
}

export function serializeLanguageClientNameModel(
  o: LanguageClientNameModel,
): RestLanguageClientNameModel {
  return {
    defaultName: o["tSName"],
  };
}

export function serializeClientNameModel(
  o: ClientNameModel,
): RestClientNameModel {
  return {
    defaultName: o["clientName"],
  };
}
