// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext as Client } from "../index.js";
import {
  defaultErrorResponseDeserializer,
  StaticSitesWorkflowPreviewRequest,
  staticSitesWorkflowPreviewRequestSerializer,
  StaticSitesWorkflowPreview,
  staticSitesWorkflowPreviewDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { StaticSitesOperationGroupPreviewWorkflowOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _previewWorkflowSend(
  context: Client,
  location: string,
  body: StaticSitesWorkflowPreviewRequest,
  options: StaticSitesOperationGroupPreviewWorkflowOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/previewStaticSiteWorkflowFile{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: staticSitesWorkflowPreviewRequestSerializer(body),
    });
}

export async function _previewWorkflowDeserialize(
  result: PathUncheckedResponse,
): Promise<StaticSitesWorkflowPreview> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = defaultErrorResponseDeserializer(result.body);
    throw error;
  }

  return staticSitesWorkflowPreviewDeserializer(result.body);
}

/** Description for Generates a preview workflow file for the static site */
export async function previewWorkflow(
  context: Client,
  location: string,
  body: StaticSitesWorkflowPreviewRequest,
  options: StaticSitesOperationGroupPreviewWorkflowOptionalParams = { requestOptions: {} },
): Promise<StaticSitesWorkflowPreview> {
  const result = await _previewWorkflowSend(context, location, body, options);
  return _previewWorkflowDeserialize(result);
}
