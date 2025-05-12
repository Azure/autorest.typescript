// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HelpContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  TroubleshooterResource,
  troubleshooterResourceSerializer,
  troubleshooterResourceDeserializer,
  ContinueRequestBody,
  continueRequestBodySerializer,
  RestartTroubleshooterResponse,
  restartTroubleshooterResponseDeserializer,
} from "../../models/models.js";
import {
  TroubleshooterResourcesRestartOptionalParams,
  TroubleshooterResourcesEndOptionalParams,
  TroubleshooterResourcesTroubleshooterResourcesContinueOptionalParams,
  TroubleshooterResourcesCreateOptionalParams,
  TroubleshooterResourcesGetOptionalParams,
} from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _restartSend(
  context: Client,
  scope: string,
  troubleshooterName: string,
  options: TroubleshooterResourcesRestartOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.Help/troubleshooters/{troubleshooterName}/restart{?api%2Dversion}",
    {
      scope: scope,
      troubleshooterName: troubleshooterName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _restartDeserialize(
  result: PathUncheckedResponse,
): Promise<RestartTroubleshooterResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return restartTroubleshooterResponseDeserializer(result.body);
}

/** Restarts the troubleshooter API using applicable troubleshooter resource name as the input.<br/> It returns new resource name which should be used in subsequent request. The old resource name is obsolete after this API is invoked. */
export async function restart(
  context: Client,
  scope: string,
  troubleshooterName: string,
  options: TroubleshooterResourcesRestartOptionalParams = {
    requestOptions: {},
  },
): Promise<RestartTroubleshooterResponse> {
  const result = await _restartSend(
    context,
    scope,
    troubleshooterName,
    options,
  );
  return _restartDeserialize(result);
}

export function _endSend(
  context: Client,
  scope: string,
  troubleshooterName: string,
  options: TroubleshooterResourcesEndOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.Help/troubleshooters/{troubleshooterName}/end{?api%2Dversion}",
    {
      scope: scope,
      troubleshooterName: troubleshooterName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _endDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Ends the troubleshooter action */
export async function end(
  context: Client,
  scope: string,
  troubleshooterName: string,
  options: TroubleshooterResourcesEndOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _endSend(context, scope, troubleshooterName, options);
  return _endDeserialize(result);
}

export function _troubleshooterResourcesContinueSend(
  context: Client,
  scope: string,
  troubleshooterName: string,
  body: {
    continueRequestBody?: ContinueRequestBody;
  },
  options: TroubleshooterResourcesTroubleshooterResourcesContinueOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.Help/troubleshooters/{troubleshooterName}/continue{?api%2Dversion}",
    {
      scope: scope,
      troubleshooterName: troubleshooterName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: !options["continueRequestBody"]
        ? options["continueRequestBody"]
        : continueRequestBodySerializer(options["continueRequestBody"]),
    });
}

export async function _troubleshooterResourcesContinueDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Uses ‘stepId’ and ‘responses’ as the trigger to continue the troubleshooting steps for the respective troubleshooter resource name. <br/>Continue API is used to provide inputs that are required for the specific troubleshooter to progress into the next step in the process. This API is used after the Troubleshooter has been created using the Create API. */
export async function troubleshooterResourcesContinue(
  context: Client,
  scope: string,
  troubleshooterName: string,
  body: {
    continueRequestBody?: ContinueRequestBody;
  },
  options: TroubleshooterResourcesTroubleshooterResourcesContinueOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _troubleshooterResourcesContinueSend(
    context,
    scope,
    troubleshooterName,
    body,
    options,
  );
  return _troubleshooterResourcesContinueDeserialize(result);
}

export function _createSend(
  context: Client,
  scope: string,
  troubleshooterName: string,
  createTroubleshooterRequestBody: TroubleshooterResource,
  options: TroubleshooterResourcesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.Help/troubleshooters/{troubleshooterName}{?api%2Dversion}",
    {
      scope: scope,
      troubleshooterName: troubleshooterName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: troubleshooterResourceSerializer(createTroubleshooterRequestBody),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<TroubleshooterResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return troubleshooterResourceDeserializer(result.body);
}

/** Creates the specific troubleshooter action under a resource or subscription using the ‘solutionId’ and  ‘properties.parameters’ as the trigger. <br/> Azure Troubleshooters help with hard to classify issues, reducing the gap between customer observed problems and solutions by guiding the user effortlessly through the troubleshooting process. Each Troubleshooter flow represents a problem area within Azure and has a complex tree-like structure that addresses many root causes. These flows are prepared with the help of Subject Matter experts and customer support engineers by carefully considering previous support requests raised by customers. Troubleshooters terminate at a well curated solution based off of resource backend signals and customer manual selections. */
export async function create(
  context: Client,
  scope: string,
  troubleshooterName: string,
  createTroubleshooterRequestBody: TroubleshooterResource,
  options: TroubleshooterResourcesCreateOptionalParams = { requestOptions: {} },
): Promise<TroubleshooterResource> {
  const result = await _createSend(
    context,
    scope,
    troubleshooterName,
    createTroubleshooterRequestBody,
    options,
  );
  return _createDeserialize(result);
}

export function _getSend(
  context: Client,
  scope: string,
  troubleshooterName: string,
  options: TroubleshooterResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+scope}/providers/Microsoft.Help/troubleshooters/{troubleshooterName}{?api%2Dversion}",
    {
      scope: scope,
      troubleshooterName: troubleshooterName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<TroubleshooterResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return troubleshooterResourceDeserializer(result.body);
}

/** Gets troubleshooter instance result which includes the step status/result of the troubleshooter resource name that is being executed.<br/> Get API is used to retrieve the result of a Troubleshooter instance, which includes the status and result of each step in the Troubleshooter workflow. This API requires the Troubleshooter resource name that was created using the Create API. */
export async function get(
  context: Client,
  scope: string,
  troubleshooterName: string,
  options: TroubleshooterResourcesGetOptionalParams = { requestOptions: {} },
): Promise<TroubleshooterResource> {
  const result = await _getSend(context, scope, troubleshooterName, options);
  return _getDeserialize(result);
}
