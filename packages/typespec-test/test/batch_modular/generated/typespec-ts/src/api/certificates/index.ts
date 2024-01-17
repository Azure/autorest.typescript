// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BatchCertificate,
  CertificateListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  BatchContext as Client,
  CancelCertificateDeletion204Response,
  CancelCertificateDeletionDefaultResponse,
  CreateCertificate201Response,
  CreateCertificateDefaultResponse,
  DeleteCertificate202Response,
  DeleteCertificateDefaultResponse,
  GetCertificate200Response,
  GetCertificateDefaultResponse,
  ListCertificates200Response,
  ListCertificatesDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  CertificatesCreateCertificateOptions,
  CertificatesListCertificatesOptions,
  CertificatesCancelCertificateDeletionOptions,
  CertificatesDeleteCertificateOptions,
  CertificatesGetCertificateOptions,
} from "../../models/options.js";

export function _createCertificateSend(
  context: Client,
  body: BatchCertificate,
  options: CertificatesCreateCertificateOptions = { requestOptions: {} },
): StreamableMethod<
  CreateCertificate201Response | CreateCertificateDefaultResponse
> {
  return context
    .path("/certificates")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: {
        thumbprint: body["thumbprint"],
        thumbprintAlgorithm: body["thumbprintAlgorithm"],
        data: uint8ArrayToString(body["data"], "base64"),
        certificateFormat: body["certificateFormat"],
        password: body["password"],
      },
    });
}

export async function _createCertificateDeserialize(
  result: CreateCertificate201Response | CreateCertificateDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Creates a Certificate to the specified Account. */
export async function createCertificate(
  context: Client,
  body: BatchCertificate,
  options: CertificatesCreateCertificateOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _createCertificateSend(context, body, options);
  return _createCertificateDeserialize(result);
}

export function _listCertificatesSend(
  context: Client,
  options: CertificatesListCertificatesOptions = { requestOptions: {} },
): StreamableMethod<
  ListCertificates200Response | ListCertificatesDefaultResponse
> {
  return context
    .path("/certificates")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $filter: options?.$filter,
        $select: options?.$select,
      },
    });
}

export async function _listCertificatesDeserialize(
  result: ListCertificates200Response | ListCertificatesDefaultResponse,
): Promise<CertificateListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          thumbprint: p["thumbprint"],
          thumbprintAlgorithm: p["thumbprintAlgorithm"],
          url: p["url"],
          state: p["state"],
          stateTransitionTime:
            p["stateTransitionTime"] !== undefined
              ? new Date(p["stateTransitionTime"])
              : undefined,
          previousState: p["previousState"],
          previousStateTransitionTime:
            p["previousStateTransitionTime"] !== undefined
              ? new Date(p["previousStateTransitionTime"])
              : undefined,
          publicData:
            typeof p["publicData"] === "string"
              ? stringToUint8Array(p["publicData"], "base64")
              : p["publicData"],
          deleteCertificateError: !p.deleteCertificateError
            ? undefined
            : {
                code: p.deleteCertificateError?.["code"],
                message: p.deleteCertificateError?.["message"],
                values: !p.deleteCertificateError?.["values"]
                  ? p.deleteCertificateError?.["values"]
                  : p.deleteCertificateError?.["values"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
              },
          data:
            typeof p["data"] === "string"
              ? stringToUint8Array(p["data"], "base64")
              : p["data"],
          certificateFormat: p["certificateFormat"],
          password: p["password"],
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the Certificates that have been added to the specified Account. */
export function listCertificates(
  context: Client,
  options: CertificatesListCertificatesOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchCertificate> {
  return buildPagedAsyncIterator(
    context,
    () => _listCertificatesSend(context, options),
    _listCertificatesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _cancelCertificateDeletionSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CertificatesCancelCertificateDeletionOptions = {
    requestOptions: {},
  },
): StreamableMethod<
  | CancelCertificateDeletion204Response
  | CancelCertificateDeletionDefaultResponse
> {
  return context
    .path(
      "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete",
      thumbprintAlgorithm,
      thumbprint,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _cancelCertificateDeletionDeserialize(
  result:
    | CancelCertificateDeletion204Response
    | CancelCertificateDeletionDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * If you try to delete a Certificate that is being used by a Pool or Compute
 * Node, the status of the Certificate changes to deleteFailed. If you decide that
 * you want to continue using the Certificate, you can use this operation to set
 * the status of the Certificate back to active. If you intend to delete the
 * Certificate, you do not need to run this operation after the deletion failed.
 * You must make sure that the Certificate is not being used by any resources, and
 * then you can try again to delete the Certificate.
 */
export async function cancelCertificateDeletion(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CertificatesCancelCertificateDeletionOptions = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _cancelCertificateDeletionSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _cancelCertificateDeletionDeserialize(result);
}

export function _deleteCertificateSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CertificatesDeleteCertificateOptions = { requestOptions: {} },
): StreamableMethod<
  DeleteCertificate202Response | DeleteCertificateDefaultResponse
> {
  return context
    .path(
      "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
      thumbprintAlgorithm,
      thumbprint,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _deleteCertificateDeserialize(
  result: DeleteCertificate202Response | DeleteCertificateDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/**
 * You cannot delete a Certificate if a resource (Pool or Compute Node) is using
 * it. Before you can delete a Certificate, you must therefore make sure that the
 * Certificate is not associated with any existing Pools, the Certificate is not
 * installed on any Nodes (even if you remove a Certificate from a Pool, it is not
 * removed from existing Compute Nodes in that Pool until they restart), and no
 * running Tasks depend on the Certificate. If you try to delete a Certificate
 * that is in use, the deletion fails. The Certificate status changes to
 * deleteFailed. You can use Cancel Delete Certificate to set the status back to
 * active if you decide that you want to continue using the Certificate.
 */
export async function deleteCertificate(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CertificatesDeleteCertificateOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteCertificateSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _deleteCertificateDeserialize(result);
}

export function _getCertificateSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CertificatesGetCertificateOptions = { requestOptions: {} },
): StreamableMethod<GetCertificate200Response | GetCertificateDefaultResponse> {
  return context
    .path(
      "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
      thumbprintAlgorithm,
      thumbprint,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut, $select: options?.$select },
    });
}

export async function _getCertificateDeserialize(
  result: GetCertificate200Response | GetCertificateDefaultResponse,
): Promise<BatchCertificate> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    thumbprint: result.body["thumbprint"],
    thumbprintAlgorithm: result.body["thumbprintAlgorithm"],
    url: result.body["url"],
    state: result.body["state"],
    stateTransitionTime:
      result.body["stateTransitionTime"] !== undefined
        ? new Date(result.body["stateTransitionTime"])
        : undefined,
    previousState: result.body["previousState"],
    previousStateTransitionTime:
      result.body["previousStateTransitionTime"] !== undefined
        ? new Date(result.body["previousStateTransitionTime"])
        : undefined,
    publicData:
      typeof result.body["publicData"] === "string"
        ? stringToUint8Array(result.body["publicData"], "base64")
        : result.body["publicData"],
    deleteCertificateError: !result.body.deleteCertificateError
      ? undefined
      : {
          code: result.body.deleteCertificateError?.["code"],
          message: result.body.deleteCertificateError?.["message"],
          values: !result.body.deleteCertificateError?.["values"]
            ? result.body.deleteCertificateError?.["values"]
            : result.body.deleteCertificateError?.["values"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
        },
    data:
      typeof result.body["data"] === "string"
        ? stringToUint8Array(result.body["data"], "base64")
        : result.body["data"],
    certificateFormat: result.body["certificateFormat"],
    password: result.body["password"],
  };
}

/** Gets information about the specified Certificate. */
export async function getCertificate(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CertificatesGetCertificateOptions = { requestOptions: {} },
): Promise<BatchCertificate> {
  const result = await _getCertificateSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _getCertificateDeserialize(result);
}
