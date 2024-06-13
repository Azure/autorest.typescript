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
  EvidenceCreateOrUpdate200Response,
  EvidenceCreateOrUpdate201Response,
  EvidenceCreateOrUpdateDefaultResponse,
  EvidenceDelete200Response,
  EvidenceDelete204Response,
  EvidenceDeleteDefaultResponse,
  EvidenceDownload200Response,
  EvidenceDownloadDefaultResponse,
  EvidenceGet200Response,
  EvidenceGetDefaultResponse,
  EvidenceListByReportResource200Response,
  EvidenceListByReportResourceDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  EvidenceGetOptionalParams,
  EvidenceCreateOrUpdateOptionalParams,
  EvidenceDeleteOptionalParams,
  EvidenceListByReportResourceOptionalParams,
  EvidenceDownloadOptionalParams,
} from "../../models/options.js";

export function _evidenceGetSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceGetOptionalParams = { requestOptions: {} },
): StreamableMethod<EvidenceGet200Response | EvidenceGetDefaultResponse> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      reportName,
      evidenceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _evidenceGetDeserialize(
  result: EvidenceGet200Response | EvidenceGetDefaultResponse,
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
export async function evidenceGet(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceGetOptionalParams = { requestOptions: {} },
): Promise<EvidenceResource> {
  const result = await _evidenceGetSend(
    context,
    reportName,
    evidenceName,
    options,
  );
  return _evidenceGetDeserialize(result);
}

export function _evidenceCreateOrUpdateSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  parameters: EvidenceResource,
  options: EvidenceCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EvidenceCreateOrUpdate200Response
  | EvidenceCreateOrUpdate201Response
  | EvidenceCreateOrUpdateDefaultResponse
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

export async function _evidenceCreateOrUpdateDeserialize(
  result:
    | EvidenceCreateOrUpdate200Response
    | EvidenceCreateOrUpdate201Response
    | EvidenceCreateOrUpdateDefaultResponse,
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
export async function evidenceCreateOrUpdate(
  context: Client,
  reportName: string,
  evidenceName: string,
  parameters: EvidenceResource,
  options: EvidenceCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<EvidenceResource> {
  const result = await _evidenceCreateOrUpdateSend(
    context,
    reportName,
    evidenceName,
    parameters,
    options,
  );
  return _evidenceCreateOrUpdateDeserialize(result);
}

export function _evidenceDeleteSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EvidenceDelete200Response
  | EvidenceDelete204Response
  | EvidenceDeleteDefaultResponse
> {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/evidences/{evidenceName}",
      reportName,
      evidenceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _evidenceDeleteDeserialize(
  result:
    | EvidenceDelete200Response
    | EvidenceDelete204Response
    | EvidenceDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete an existent evidence from a specified report */
export async function evidenceDelete(
  context: Client,
  reportName: string,
  evidenceName: string,
  options: EvidenceDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _evidenceDeleteSend(
    context,
    reportName,
    evidenceName,
    options,
  );
  return _evidenceDeleteDeserialize(result);
}

export function _evidenceListByReportResourceSend(
  context: Client,
  reportName: string,
  options: EvidenceListByReportResourceOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | EvidenceListByReportResource200Response
  | EvidenceListByReportResourceDefaultResponse
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

export async function _evidenceListByReportResourceDeserialize(
  result:
    | EvidenceListByReportResource200Response
    | EvidenceListByReportResourceDefaultResponse,
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
export function evidenceListByReportResource(
  context: Client,
  reportName: string,
  options: EvidenceListByReportResourceOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<EvidenceResource> {
  return buildPagedAsyncIterator(
    context,
    () => _evidenceListByReportResourceSend(context, reportName, options),
    _evidenceListByReportResourceDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _evidenceDownloadSend(
  context: Client,
  reportName: string,
  evidenceName: string,
  body: EvidenceFileDownloadRequest,
  options: EvidenceDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod<
  EvidenceDownload200Response | EvidenceDownloadDefaultResponse
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

export async function _evidenceDownloadDeserialize(
  result: EvidenceDownload200Response | EvidenceDownloadDefaultResponse,
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
export async function evidenceDownload(
  context: Client,
  reportName: string,
  evidenceName: string,
  body: EvidenceFileDownloadRequest,
  options: EvidenceDownloadOptionalParams = { requestOptions: {} },
): Promise<EvidenceFileDownloadResponse> {
  const result = await _evidenceDownloadSend(
    context,
    reportName,
    evidenceName,
    body,
    options,
  );
  return _evidenceDownloadDeserialize(result);
}
