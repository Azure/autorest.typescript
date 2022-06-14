// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  MetadataRolesList200Response,
  MetadataRolesListdefaultResponse,
  MetadataPolicyListAll200Response,
  MetadataPolicyListAlldefaultResponse,
  MetadataPolicyUpdate200Response,
  MetadataPolicyUpdatedefaultResponse,
  MetadataPolicyGet200Response,
  MetadataPolicyGetdefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /metadataRoles": ["200"],
  "GET /metadataPolicies": ["200"],
  "PUT /metadataPolicies/{policyId}": ["200"],
  "GET /metadataPolicies/{policyId}": ["200"]
};

export function isUnexpected(
  response: MetadataRolesList200Response | MetadataRolesListdefaultResponse
): response is MetadataRolesListdefaultResponse;
export function isUnexpected(
  response:
    | MetadataPolicyListAll200Response
    | MetadataPolicyListAlldefaultResponse
): response is MetadataPolicyListAlldefaultResponse;
export function isUnexpected(
  response:
    | MetadataPolicyUpdate200Response
    | MetadataPolicyUpdatedefaultResponse
): response is MetadataPolicyUpdatedefaultResponse;
export function isUnexpected(
  response: MetadataPolicyGet200Response | MetadataPolicyGetdefaultResponse
): response is MetadataPolicyGetdefaultResponse;
export function isUnexpected(
  response:
    | MetadataRolesList200Response
    | MetadataRolesListdefaultResponse
    | MetadataPolicyListAll200Response
    | MetadataPolicyListAlldefaultResponse
    | MetadataPolicyUpdate200Response
    | MetadataPolicyUpdatedefaultResponse
    | MetadataPolicyGet200Response
    | MetadataPolicyGetdefaultResponse
): response is
  | MetadataRolesListdefaultResponse
  | MetadataPolicyListAlldefaultResponse
  | MetadataPolicyUpdatedefaultResponse
  | MetadataPolicyGetdefaultResponse {
  const url = new URL(response.request.url);
  const method = response.request.method;
  return responseMap[`${method} ${url.pathname}`].includes(response.status);
}
