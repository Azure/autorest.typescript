// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CertificatesContext as Client } from "./index.js";
import {
  batchErrorDeserializer,
  BatchCertificate,
  batchCertificateSerializer,
  batchCertificateDeserializer,
  _CertificateListResult,
  _certificateListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  GetCertificateOptionalParams,
  DeleteCertificateOptionalParams,
  CancelCertificateDeletionOptionalParams,
  ListCertificatesOptionalParams,
  CreateCertificateOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getCertificateSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: GetCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint}){?api%2Dversion,timeOut,%24select}",
    {
      thumbprintAlgorithm: thumbprintAlgorithm,
      thumbprint: thumbprint,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
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
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getCertificateDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchCertificate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return batchCertificateDeserializer(result.body);
}

/** Gets information about the specified Certificate. */
export async function getCertificate(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: GetCertificateOptionalParams = { requestOptions: {} },
): Promise<BatchCertificate> {
  const result = await _getCertificateSend(context, thumbprintAlgorithm, thumbprint, options);
  return _getCertificateDeserialize(result);
}

export function _deleteCertificateSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: DeleteCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint}){?api%2Dversion,timeOut}",
    {
      thumbprintAlgorithm: thumbprintAlgorithm,
      thumbprint: thumbprint,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteCertificateDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  options: DeleteCertificateOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteCertificateSend(context, thumbprintAlgorithm, thumbprint, options);
  return _deleteCertificateDeserialize(result);
}

export function _cancelCertificateDeletionSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CancelCertificateDeletionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete{?api%2Dversion,timeOut}",
    {
      thumbprintAlgorithm: thumbprintAlgorithm,
      thumbprint: thumbprint,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
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
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _cancelCertificateDeletionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  options: CancelCertificateDeletionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _cancelCertificateDeletionSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _cancelCertificateDeletionDeserialize(result);
}

export function _listCertificatesSend(
  context: Client,
  options: ListCertificatesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/certificates{?api%2Dversion,maxresults,timeOut,%24filter,%24select}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24filter": options?.filter,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
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
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listCertificatesDeserialize(
  result: PathUncheckedResponse,
): Promise<_CertificateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _certificateListResultDeserializer(result.body);
}

/** Lists all of the Certificates that have been added to the specified Account. */
export function listCertificates(
  context: Client,
  options: ListCertificatesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchCertificate> {
  return buildPagedAsyncIterator(
    context,
    () => _listCertificatesSend(context, options),
    _listCertificatesDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}

export function _createCertificateSend(
  context: Client,
  body: BatchCertificate,
  options: CreateCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/certificates{?api%2Dversion,timeOut}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchCertificateSerializer(body),
    });
}

export async function _createCertificateDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Creates a Certificate to the specified Account. */
export async function createCertificate(
  context: Client,
  body: BatchCertificate,
  options: CreateCertificateOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createCertificateSend(context, body, options);
  return _createCertificateDeserialize(result);
}
