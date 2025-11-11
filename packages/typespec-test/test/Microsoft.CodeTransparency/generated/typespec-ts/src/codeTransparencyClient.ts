// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createCodeTransparency,
  CodeTransparencyContext,
  CodeTransparencyClientOptionalParams,
} from "./api/index.js";
import {
  getEntryStatement,
  getEntry,
  getOperation,
  createEntry,
  getPublicKeys,
  getTransparencyConfigCbor,
} from "./api/operations.js";
import {
  GetEntryStatementOptionalParams,
  GetEntryOptionalParams,
  GetOperationOptionalParams,
  CreateEntryOptionalParams,
  GetPublicKeysOptionalParams,
  GetTransparencyConfigCborOptionalParams,
} from "./api/options.js";
import { JwksDocument } from "./models/models.js";
import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { CodeTransparencyClientOptionalParams } from "./api/codeTransparencyContext.js";

export class CodeTransparencyClient {
  private _client: CodeTransparencyContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: CodeTransparencyClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createCodeTransparency(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Get the transparent statement consisting of the signed statement and the receipt embedded in the header */
  getEntryStatement(
    entryId: string,
    options: GetEntryStatementOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getEntryStatement(this._client, entryId, options);
  }

  /** Get receipt */
  getEntry(
    entryId: string,
    options: GetEntryOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getEntry(this._client, entryId, options);
  }

  /** Get status of the long running registration operation, mandatory in IETF SCITT draft */
  getOperation(
    operationId: string,
    options: GetOperationOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array | null> {
    return getOperation(this._client, operationId, options);
  }

  /** Post an entry to be registered on the CodeTransparency instance, mandatory in IETF SCITT draft */
  createEntry(
    body: Uint8Array,
    options: CreateEntryOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return createEntry(this._client, body, options);
  }

  /** Get the public keys used by the service to sign receipts, mentioned in IETF SCITT draft as part of jwks_uri implementation */
  getPublicKeys(
    options: GetPublicKeysOptionalParams = { requestOptions: {} },
  ): Promise<JwksDocument | Uint8Array> {
    return getPublicKeys(this._client, options);
  }

  /** Get the transparency service configuration, mandatory in IETF SCITT draft */
  getTransparencyConfigCbor(
    options: GetTransparencyConfigCborOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getTransparencyConfigCbor(this._client, options);
  }
}
