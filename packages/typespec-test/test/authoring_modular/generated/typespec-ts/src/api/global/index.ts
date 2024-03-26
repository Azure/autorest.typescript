// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PagedSupportedLanguage,
  SupportedLanguage,
  PagedTrainingConfigVersion,
  TrainingConfigVersion,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AuthoringContext as Client,
  GetSupportedLanguages200Response,
  GetSupportedLanguagesDefaultResponse,
  ListTrainingConfigVersions200Response,
  ListTrainingConfigVersionsDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  GlobalGetSupportedLanguagesOptions,
  GlobalListTrainingConfigVersionsOptions,
} from "../../models/options.js";

export function _getSupportedLanguagesSend(
  context: Client,
  options: GlobalGetSupportedLanguagesOptions = { requestOptions: {} },
): StreamableMethod<
  GetSupportedLanguages200Response | GetSupportedLanguagesDefaultResponse
> {
  return context
    .path("/authoring/analyze-text/projects/global/languages")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _getSupportedLanguagesDeserialize(
  result:
    | GetSupportedLanguages200Response
    | GetSupportedLanguagesDefaultResponse,
): Promise<PagedSupportedLanguage> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      languageName: p["languageName"],
      languageCode: p["languageCode"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Gets the supported languages. */
export function getSupportedLanguages(
  context: Client,
  options: GlobalGetSupportedLanguagesOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<SupportedLanguage> {
  return buildPagedAsyncIterator(
    context,
    () => _getSupportedLanguagesSend(context, options),
    _getSupportedLanguagesDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listTrainingConfigVersionsSend(
  context: Client,
  options: GlobalListTrainingConfigVersionsOptions = { requestOptions: {} },
): StreamableMethod<
  | ListTrainingConfigVersions200Response
  | ListTrainingConfigVersionsDefaultResponse
> {
  return context
    .path("/authoring/analyze-text/projects/global/training-config-versions")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        top: options?.top,
        skip: options?.skip,
        maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listTrainingConfigVersionsDeserialize(
  result:
    | ListTrainingConfigVersions200Response
    | ListTrainingConfigVersionsDefaultResponse,
): Promise<PagedTrainingConfigVersion> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      trainingConfigVersion: p["trainingConfigVersion"],
      modelExpirationDate: new Date(p["modelExpirationDate"]),
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists training configuration versions. */
export function listTrainingConfigVersions(
  context: Client,
  options: GlobalListTrainingConfigVersionsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<TrainingConfigVersion> {
  return buildPagedAsyncIterator(
    context,
    () => _listTrainingConfigVersionsSend(context, options),
    _listTrainingConfigVersionsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
