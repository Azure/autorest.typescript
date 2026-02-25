// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  TagsObject,
  tagsObjectSerializer,
  ArtifactManifest,
  artifactManifestSerializer,
  artifactManifestDeserializer,
  _ArtifactManifestListResult,
  _artifactManifestListResultDeserializer,
  artifactAccessCredentialUnionDeserializer,
  ArtifactAccessCredentialUnion,
  ArtifactManifestUpdateState,
  artifactManifestUpdateStateSerializer,
  artifactManifestUpdateStateDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ArtifactManifestsUpdateStateOptionalParams,
  ArtifactManifestsListCredentialOptionalParams,
  ArtifactManifestsListByArtifactStoreOptionalParams,
  ArtifactManifestsDeleteOptionalParams,
  ArtifactManifestsUpdateOptionalParams,
  ArtifactManifestsCreateOrUpdateOptionalParams,
  ArtifactManifestsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _updateStateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  parameters: ArtifactManifestUpdateState,
  options: ArtifactManifestsUpdateStateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}/updateState{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      artifactManifestName: artifactManifestName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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
      body: artifactManifestUpdateStateSerializer(parameters),
    });
}

export async function _updateStateDeserialize(
  result: PathUncheckedResponse,
): Promise<ArtifactManifestUpdateState> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return artifactManifestUpdateStateDeserializer(result.body);
}

/** Update state for artifact manifest. */
export function updateState(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  parameters: ArtifactManifestUpdateState,
  options: ArtifactManifestsUpdateStateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ArtifactManifestUpdateState>, ArtifactManifestUpdateState> {
  return getLongRunningPoller(context, _updateStateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateStateSend(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<ArtifactManifestUpdateState>, ArtifactManifestUpdateState>;
}

export function _listCredentialSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  options: ArtifactManifestsListCredentialOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}/listCredential{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      artifactManifestName: artifactManifestName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listCredentialDeserialize(
  result: PathUncheckedResponse,
): Promise<ArtifactAccessCredentialUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return artifactAccessCredentialUnionDeserializer(result.body);
}

/** List credential for publishing artifacts defined in artifact manifest. */
export async function listCredential(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  options: ArtifactManifestsListCredentialOptionalParams = { requestOptions: {} },
): Promise<ArtifactAccessCredentialUnion> {
  const result = await _listCredentialSend(
    context,
    resourceGroupName,
    publisherName,
    artifactStoreName,
    artifactManifestName,
    options,
  );
  return _listCredentialDeserialize(result);
}

export function _listByArtifactStoreSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactManifestsListByArtifactStoreOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listByArtifactStoreDeserialize(
  result: PathUncheckedResponse,
): Promise<_ArtifactManifestListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return _artifactManifestListResultDeserializer(result.body);
}

/** Gets information about the artifact manifest. */
export function listByArtifactStore(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  options: ArtifactManifestsListByArtifactStoreOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ArtifactManifest> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByArtifactStoreSend(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        options,
      ),
    _listByArtifactStoreDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2025-03-30" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  options: ArtifactManifestsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      artifactManifestName: artifactManifestName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return;
}

/** Deletes the specified artifact manifest. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  options: ArtifactManifestsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  parameters: TagsObject,
  options: ArtifactManifestsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      artifactManifestName: artifactManifestName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: tagsObjectSerializer(parameters),
    });
}

export async function _updateDeserialize(result: PathUncheckedResponse): Promise<ArtifactManifest> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return artifactManifestDeserializer(result.body);
}

/** Updates a artifact manifest resource. */
export async function update(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  parameters: TagsObject,
  options: ArtifactManifestsUpdateOptionalParams = { requestOptions: {} },
): Promise<ArtifactManifest> {
  const result = await _updateSend(
    context,
    resourceGroupName,
    publisherName,
    artifactStoreName,
    artifactManifestName,
    parameters,
    options,
  );
  return _updateDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  parameters: ArtifactManifest,
  options: ArtifactManifestsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      artifactManifestName: artifactManifestName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
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
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: artifactManifestSerializer(parameters),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ArtifactManifest> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return artifactManifestDeserializer(result.body);
}

/** Creates or updates a artifact manifest. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  parameters: ArtifactManifest,
  options: ArtifactManifestsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ArtifactManifest>, ArtifactManifest> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        publisherName,
        artifactStoreName,
        artifactManifestName,
        parameters,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
    apiVersion: context.apiVersion ?? "2025-03-30",
  }) as PollerLike<OperationState<ArtifactManifest>, ArtifactManifest>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  options: ArtifactManifestsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      publisherName: publisherName,
      artifactStoreName: artifactStoreName,
      artifactManifestName: artifactManifestName,
      "api%2Dversion": context.apiVersion ?? "2025-03-30",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<ArtifactManifest> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);

    throw error;
  }

  return artifactManifestDeserializer(result.body);
}

/** Gets information about a artifact manifest resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  publisherName: string,
  artifactStoreName: string,
  artifactManifestName: string,
  options: ArtifactManifestsGetOptionalParams = { requestOptions: {} },
): Promise<ArtifactManifest> {
  const result = await _getSend(
    context,
    resourceGroupName,
    publisherName,
    artifactStoreName,
    artifactManifestName,
    options,
  );
  return _getDeserialize(result);
}
