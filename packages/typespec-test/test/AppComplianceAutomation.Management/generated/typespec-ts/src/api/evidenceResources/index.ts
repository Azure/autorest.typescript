// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  EvidenceResource,
  EvidenceResourceListResult,
  EvidenceFileDownloadRequest,
  EvidenceFileDownloadResponse,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AppComplianceAutomationContext as Client,
  EvidenceResourcesCreateOrUpdate200Response,
  EvidenceResourcesCreateOrUpdate201Response,
  EvidenceResourcesCreateOrUpdateDefaultResponse,
  EvidenceResourcesDelete200Response,
  EvidenceResourcesDelete204Response,
  EvidenceResourcesDeleteDefaultResponse,
  EvidenceResourcesDownload200Response,
  EvidenceResourcesDownloadDefaultResponse,
  EvidenceResourcesGet200Response,
  EvidenceResourcesGetDefaultResponse,
  EvidenceResourcesListByReportResource200Response,
  EvidenceResourcesListByReportResourceDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  EvidenceResourcesGetOptionalParams,
  EvidenceResourcesCreateOrUpdateOptionalParams,
  EvidenceResourcesDeleteOptionalParams,
  EvidenceResourcesListByReportResourceOptionalParams,
  EvidenceResourcesDownloadOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceResourcesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  EvidenceResourcesGet200Response | EvidenceResourcesGetDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      reportName,
      evidenceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: EvidenceResourcesGet200Response | EvidenceResourcesGetDefaultResponse,
): Promise<EvidenceResource> {
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
      evidenceType: result.body.properties["evidenceType"],
      filePath: result.body.properties["filePath"],
      extraData: result.body.properties["extraData"],
      controlId: result.body.properties["controlId"],
      responsibilityId: result.body.properties["responsibilityId"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Get the evidence metadata */
export async function get(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceResourcesGetOptionalParams = { requestOptions: {} },
): Promise<EvidenceResource> {
  const result = await _getSend(context, reportName, evidenceName, options);
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  parameters: EvidenceResource,
  options: EvidenceResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | EvidenceResourcesCreateOrUpdate200Response
  | EvidenceResourcesCreateOrUpdate201Response
  | EvidenceResourcesCreateOrUpdateDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      reportName,
      evidenceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        offerGuid: options?.offerGuid,
        reportCreatorTenantId: options?.reportCreatorTenantId,
      },
      body: {
        properties: {
          evidenceType: parameters.properties["evidenceType"],
          filePath: parameters.properties["filePath"],
          extraData: parameters.properties["extraData"],
          controlId: parameters.properties["controlId"],
          responsibilityId: parameters.properties["responsibilityId"],
        },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | EvidenceResourcesCreateOrUpdate200Response
    | EvidenceResourcesCreateOrUpdate201Response
    | EvidenceResourcesCreateOrUpdateDefaultResponse,
): Promise<EvidenceResource> {
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
      evidenceType: result.body.properties["evidenceType"],
      filePath: result.body.properties["filePath"],
      extraData: result.body.properties["extraData"],
      controlId: result.body.properties["controlId"],
      responsibilityId: result.body.properties["responsibilityId"],
      provisioningState: result.body.properties["provisioningState"],
    },
  };
}

/** Create or Update an evidence a specified report */
export async function createOrUpdate(
  context: Client,
  reportName: string,
  evidenceName: string,
  parameters: EvidenceResource,
  options: EvidenceResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<EvidenceResource> {
  const result = await _createOrUpdateSend(
    context,
    reportName,
    evidenceName,
    parameters,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceResourcesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EvidenceResourcesDelete200Response
  | EvidenceResourcesDelete204Response
  | EvidenceResourcesDeleteDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      reportName,
      evidenceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | EvidenceResourcesDelete200Response
    | EvidenceResourcesDelete204Response
    | EvidenceResourcesDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an existent evidence from a specified report */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceResourcesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, reportName, evidenceName, options);
  return _$deleteDeserialize(result);
}

export function _listByReportResourceSend(
  context: Client,
  reportName: string,
  options: EvidenceResourcesListByReportResourceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | EvidenceResourcesListByReportResource200Response
  | EvidenceResourcesListByReportResourceDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences",
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
    | EvidenceResourcesListByReportResource200Response
    | EvidenceResourcesListByReportResourceDefaultResponse,
): Promise<EvidenceResourceListResult> {
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
        evidenceType: p.properties["evidenceType"],
        filePath: p.properties["filePath"],
        extraData: p.properties["extraData"],
        controlId: p.properties["controlId"],
        responsibilityId: p.properties["responsibilityId"],
        provisioningState: p.properties["provisioningState"],
      },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Returns a paginated list of evidences for a specified report. */
export function listByReportResource(
  context: Client,
  reportName: string,
  options: EvidenceResourcesListByReportResourceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<EvidenceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listByReportResourceSend(context, reportName, options),
    _listByReportResourceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _downloadSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  body: EvidenceFileDownloadRequest,
  options: EvidenceResourcesDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EvidenceResourcesDownload200Response
  | EvidenceResourcesDownloadDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}/download",
      reportName,
      evidenceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        reportCreatorTenantId: body["reportCreatorTenantId"],
        offerGuid: body["offerGuid"],
      },
    });
}

export async function _downloadDeserialize(
  result:
    | EvidenceResourcesDownload200Response
    | EvidenceResourcesDownloadDefaultResponse,
): Promise<EvidenceFileDownloadResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    evidenceFile: !result.body.evidenceFile
      ? undefined
      : { url: result.body.evidenceFile?.["url"] },
  };
}

/** Download evidence file. */
export async function download(
  context: Client,
  reportName: string,
  evidenceName: string,
  body: EvidenceFileDownloadRequest,
  options: EvidenceResourcesDownloadOptionalParams = { requestOptions: {} },
): Promise<EvidenceFileDownloadResponse> {
  const result = await _downloadSend(
    context,
    reportName,
    evidenceName,
    body,
    options,
  );
  return _downloadDeserialize(result);
}
