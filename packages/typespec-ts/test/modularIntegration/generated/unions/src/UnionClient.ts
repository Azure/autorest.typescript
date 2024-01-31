// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getStringsOnlyOperations,
  StringsOnlyOperations,
} from "./classic/stringsOnly/index.js";
import {
  getStringExtensibleOperations,
  StringExtensibleOperations,
} from "./classic/stringExtensible/index.js";
import {
  getStringExtensibleNamedOperations,
  StringExtensibleNamedOperations,
} from "./classic/stringExtensibleNamed/index.js";
import {
  getIntsOnlyOperations,
  IntsOnlyOperations,
} from "./classic/intsOnly/index.js";
import {
  getFloatsOnlyOperations,
  FloatsOnlyOperations,
} from "./classic/floatsOnly/index.js";
import {
  getModelsOnlyOperations,
  ModelsOnlyOperations,
} from "./classic/modelsOnly/index.js";
import {
  getEnumsOnlyOperations,
  EnumsOnlyOperations,
} from "./classic/enumsOnly/index.js";
import {
  getStringAndArrayOperations,
  StringAndArrayOperations,
} from "./classic/stringAndArray/index.js";
import {
  getMixedLiteralsOperations,
  MixedLiteralsOperations,
} from "./classic/mixedLiterals/index.js";
import {
  getMixedTypesOperations,
  MixedTypesOperations,
} from "./classic/mixedTypes/index.js";
import { createUnion, UnionClientOptions, UnionContext } from "./api/index.js";

export { UnionClientOptions } from "./api/UnionContext.js";

export class UnionClient {
  private _client: UnionContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Describe scenarios for various combinations of unions. */
  constructor(options: UnionClientOptions = {}) {
    this._client = createUnion(options);
    this.pipeline = this._client.pipeline;
    this.stringsOnly = getStringsOnlyOperations(this._client);
    this.stringExtensible = getStringExtensibleOperations(this._client);
    this.stringExtensibleNamed = getStringExtensibleNamedOperations(
      this._client,
    );
    this.intsOnly = getIntsOnlyOperations(this._client);
    this.floatsOnly = getFloatsOnlyOperations(this._client);
    this.modelsOnly = getModelsOnlyOperations(this._client);
    this.enumsOnly = getEnumsOnlyOperations(this._client);
    this.stringAndArray = getStringAndArrayOperations(this._client);
    this.mixedLiterals = getMixedLiteralsOperations(this._client);
    this.mixedTypes = getMixedTypesOperations(this._client);
  }

  /** The operation groups for StringsOnly */
  public readonly stringsOnly: StringsOnlyOperations;
  /** The operation groups for StringExtensible */
  public readonly stringExtensible: StringExtensibleOperations;
  /** The operation groups for StringExtensibleNamed */
  public readonly stringExtensibleNamed: StringExtensibleNamedOperations;
  /** The operation groups for IntsOnly */
  public readonly intsOnly: IntsOnlyOperations;
  /** The operation groups for FloatsOnly */
  public readonly floatsOnly: FloatsOnlyOperations;
  /** The operation groups for ModelsOnly */
  public readonly modelsOnly: ModelsOnlyOperations;
  /** The operation groups for EnumsOnly */
  public readonly enumsOnly: EnumsOnlyOperations;
  /** The operation groups for StringAndArray */
  public readonly stringAndArray: StringAndArrayOperations;
  /** The operation groups for MixedLiterals */
  public readonly mixedLiterals: MixedLiteralsOperations;
  /** The operation groups for MixedTypes */
  public readonly mixedTypes: MixedTypesOperations;
}
