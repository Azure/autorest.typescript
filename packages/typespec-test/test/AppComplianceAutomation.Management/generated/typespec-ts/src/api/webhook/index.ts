// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WebhookResource,
  WebhookResourcePatch,
  WebhookResourceListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AppComplianceAutomationContext as Client,
  WebhookCreateOrUpdate200Response,
  WebhookCreateOrUpdate201Response,
  WebhookCreateOrUpdateDefaultResponse,
  WebhookDelete200Response,
  WebhookDelete204Response,
  WebhookDeleteDefaultResponse,
  WebhookGet200Response,
  WebhookGetDefaultResponse,
  WebhookListByReportResource200Response,
  WebhookListByReportResourceDefaultResponse,
  WebhookUpdate200Response,
  WebhookUpdateDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WebhookGetOptionalParams,
  WebhookCreateOrUpdateOptionalParams,
  WebhookUpdateOptionalParams,
  WebhookDeleteOptionalParams,
  WebhookListByReportResourceOptionalParams,
} from "../../models/options.js";

export function _webhookGetSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookGetOptionalParams = { requestOptions: {} },
): StreamableMethod<WebhookGet200Response | WebhookGetDefaultResponse> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _webhookGetDeserialize(
  result: WebhookGet200Response | WebhookGetDefaultResponse,
): Promise<WebhookResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      webhookId: result.body.properties["webhookId"],
      status: result.body.properties["status"],
      tenantId: result.body.properties["tenantId"],
      sendAllEvents: result.body.properties["sendAllEvents"],
      events: result.body.properties["events"],
      payloadUrl: result.body.properties["payloadUrl"],
      contentType: result.body.properties["contentType"],
      webhookKey: result.body.properties["webhookKey"],
      updateWebhookKey: result.body.properties["updateWebhookKey"],
      webhookKeyEnabled: result.body.properties["webhookKeyEnabled"],
      enableSslVerification: result.body.properties["enableSslVerification"],
      deliveryStatus: result.body.properties["deliveryStatus"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Get the AppComplianceAutomation webhook and its properties. */
export async function webhookGet(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookGetOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _webhookGetSend(
    context,
    reportName,
    webhookName,
    options,
  );
  return _webhookGetDeserialize(result);
}

export function _webhookCreateOrUpdateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  parameters: WebhookResource,
  options: WebhookCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WebhookCreateOrUpdate200Response
  | WebhookCreateOrUpdate201Response
  | WebhookCreateOrUpdateDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: {
          status: parameters.properties["status"],
          sendAllEvents: parameters.properties["sendAllEvents"],
          events: parameters.properties["events"],
          payloadUrl: parameters.properties["payloadUrl"],
          contentType: parameters.properties["contentType"],
          webhookKey: parameters.properties["webhookKey"],
          updateWebhookKey: parameters.properties["updateWebhookKey"],
          enableSslVerification: parameters.properties["enableSslVerification"],
        },
      },
    });
}

export async function _webhookCreateOrUpdateDeserialize(
  result:
    | WebhookCreateOrUpdate200Response
    | WebhookCreateOrUpdate201Response
    | WebhookCreateOrUpdateDefaultResponse,
): Promise<WebhookResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      webhookId: result.body.properties["webhookId"],
      status: result.body.properties["status"],
      tenantId: result.body.properties["tenantId"],
      sendAllEvents: result.body.properties["sendAllEvents"],
      events: result.body.properties["events"],
      payloadUrl: result.body.properties["payloadUrl"],
      contentType: result.body.properties["contentType"],
      webhookKey: result.body.properties["webhookKey"],
      updateWebhookKey: result.body.properties["updateWebhookKey"],
      webhookKeyEnabled: result.body.properties["webhookKeyEnabled"],
      enableSslVerification: result.body.properties["enableSslVerification"],
      deliveryStatus: result.body.properties["deliveryStatus"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook. */
export async function webhookCreateOrUpdate(
  context: Client,
  reportName: string,
  webhookName: string,
  parameters: WebhookResource,
  options: WebhookCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _webhookCreateOrUpdateSend(
    context,
    reportName,
    webhookName,
    parameters,
    options,
  );
  return _webhookCreateOrUpdateDeserialize(result);
}

export function _webhookUpdateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResourcePatch,
  options: WebhookUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<WebhookUpdate200Response | WebhookUpdateDefaultResponse> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? undefined
          : {
              status: properties.properties?.["status"],
              sendAllEvents: properties.properties?.["sendAllEvents"],
              events: properties.properties?.["events"],
              payloadUrl: properties.properties?.["payloadUrl"],
              contentType: properties.properties?.["contentType"],
              webhookKey: properties.properties?.["webhookKey"],
              updateWebhookKey: properties.properties?.["updateWebhookKey"],
              enableSslVerification:
                properties.properties?.["enableSslVerification"],
            },
      },
    });
}

export async function _webhookUpdateDeserialize(
  result: WebhookUpdate200Response | WebhookUpdateDefaultResponse,
): Promise<WebhookResource> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: {
      webhookId: result.body.properties["webhookId"],
      status: result.body.properties["status"],
      tenantId: result.body.properties["tenantId"],
      sendAllEvents: result.body.properties["sendAllEvents"],
      events: result.body.properties["events"],
      payloadUrl: result.body.properties["payloadUrl"],
      contentType: result.body.properties["contentType"],
      webhookKey: result.body.properties["webhookKey"],
      updateWebhookKey: result.body.properties["updateWebhookKey"],
      webhookKeyEnabled: result.body.properties["webhookKeyEnabled"],
      enableSslVerification: result.body.properties["enableSslVerification"],
      deliveryStatus: result.body.properties["deliveryStatus"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Update an exiting AppComplianceAutomation webhook. */
export async function webhookUpdate(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResourcePatch,
  options: WebhookUpdateOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _webhookUpdateSend(
    context,
    reportName,
    webhookName,
    properties,
    options,
  );
  return _webhookUpdateDeserialize(result);
}

export function _webhookDeleteSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WebhookDelete200Response
  | WebhookDelete204Response
  | WebhookDeleteDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _webhookDeleteDeserialize(
  result:
    | WebhookDelete200Response
    | WebhookDelete204Response
    | WebhookDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an AppComplianceAutomation webhook. */
export async function webhookDelete(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _webhookDeleteSend(
    context,
    reportName,
    webhookName,
    options,
  );
  return _webhookDeleteDeserialize(result);
}

export function _webhookListByReportResourceSend(
  context: Client,
  reportName: string,
  options: WebhookListByReportResourceOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WebhookListByReportResource200Response
  | WebhookListByReportResourceDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks",
      reportName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $skipToken: options?.skipToken,
        $top: options?.top,
        $select: options?.select,
        $filter: options?.filter,
        $orderby: options?.orderby,
        offerGuid: options?.offerGuid,
        reportCreatorTenantId: options?.reportCreatorTenantId,
      },
    });
}

export async function _webhookListByReportResourceDeserialize(
  result:
    | WebhookListByReportResource200Response
    | WebhookListByReportResourceDefaultResponse,
): Promise<WebhookResourceListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      name: p["name"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: {
        webhookId: p.properties["webhookId"],
        status: p.properties["status"],
        tenantId: p.properties["tenantId"],
        sendAllEvents: p.properties["sendAllEvents"],
        events: p.properties["events"],
        payloadUrl: p.properties["payloadUrl"],
        contentType: p.properties["contentType"],
        webhookKey: p.properties["webhookKey"],
        updateWebhookKey: p.properties["updateWebhookKey"],
        webhookKeyEnabled: p.properties["webhookKeyEnabled"],
        enableSslVerification: p.properties["enableSslVerification"],
        deliveryStatus: p.properties["deliveryStatus"],
        provisioningState: p.properties["provisioningState"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Get the AppComplianceAutomation webhook list. */
export function webhookListByReportResource(
  context: Client,
  reportName: string,
  options: WebhookListByReportResourceOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<WebhookResource> {
  return buildPagedAsyncIterator(
    context,
    () => _webhookListByReportResourceSend(context, reportName, options),
    _webhookListByReportResourceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
