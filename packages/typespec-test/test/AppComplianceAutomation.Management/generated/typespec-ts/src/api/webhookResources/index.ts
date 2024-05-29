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
  WebhookResourcesCreateOrUpdate200Response,
  WebhookResourcesCreateOrUpdate201Response,
  WebhookResourcesCreateOrUpdateDefaultResponse,
  WebhookResourcesDelete200Response,
  WebhookResourcesDelete204Response,
  WebhookResourcesDeleteDefaultResponse,
  WebhookResourcesGet200Response,
  WebhookResourcesGetDefaultResponse,
  WebhookResourcesListByReportResource200Response,
  WebhookResourcesListByReportResourceDefaultResponse,
  WebhookResourcesUpdate200Response,
  WebhookResourcesUpdateDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WebhookResourcesGetOptionalParams,
  WebhookResourcesCreateOrUpdateOptionalParams,
  WebhookResourcesUpdateOptionalParams,
  WebhookResourcesDeleteOptionalParams,
  WebhookResourcesListByReportResourceOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WebhookResourcesGet200Response | WebhookResourcesGetDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: WebhookResourcesGet200Response | WebhookResourcesGetDefaultResponse,
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
export async function get(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookResourcesGetOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _getSend(context, reportName, webhookName, options);
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  parameters: WebhookResource,
  options: WebhookResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WebhookResourcesCreateOrUpdate200Response
  | WebhookResourcesCreateOrUpdate201Response
  | WebhookResourcesCreateOrUpdateDefaultResponse
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

export async function _createOrUpdateDeserialize(
  result:
    | WebhookResourcesCreateOrUpdate200Response
    | WebhookResourcesCreateOrUpdate201Response
    | WebhookResourcesCreateOrUpdateDefaultResponse,
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
export async function createOrUpdate(
  context: Client,
  reportName: string,
  webhookName: string,
  parameters: WebhookResource,
  options: WebhookResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<WebhookResource> {
  const result = await _createOrUpdateSend(
    context,
    reportName,
    webhookName,
    parameters,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _updateSend(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResourcePatch,
  options: WebhookResourcesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  WebhookResourcesUpdate200Response | WebhookResourcesUpdateDefaultResponse
> {
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

export async function _updateDeserialize(
  result:
    | WebhookResourcesUpdate200Response
    | WebhookResourcesUpdateDefaultResponse,
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
export async function update(
  context: Client,
  reportName: string,
  webhookName: string,
  properties: WebhookResourcePatch,
  options: WebhookResourcesUpdateOptionalParams = { requestOptions: {} },
): Promise<WebhookResource> {
  const result = await _updateSend(
    context,
    reportName,
    webhookName,
    properties,
    options,
  );
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookResourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | WebhookResourcesDelete200Response
  | WebhookResourcesDelete204Response
  | WebhookResourcesDeleteDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
      reportName,
      webhookName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | WebhookResourcesDelete200Response
    | WebhookResourcesDelete204Response
    | WebhookResourcesDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an AppComplianceAutomation webhook. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  reportName: string,
  webhookName: string,
  options: WebhookResourcesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, reportName, webhookName, options);
  return _$deleteDeserialize(result);
}

export function _listByReportResourceSend(
  context: Client,
  reportName: string,
  options: WebhookResourcesListByReportResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | WebhookResourcesListByReportResource200Response
  | WebhookResourcesListByReportResourceDefaultResponse
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

export async function _listByReportResourceDeserialize(
  result:
    | WebhookResourcesListByReportResource200Response
    | WebhookResourcesListByReportResourceDefaultResponse,
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
export function listByReportResource(
  context: Client,
  reportName: string,
  options: WebhookResourcesListByReportResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<WebhookResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByReportResourceSend(context, reportName, options),
    _listByReportResourceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
