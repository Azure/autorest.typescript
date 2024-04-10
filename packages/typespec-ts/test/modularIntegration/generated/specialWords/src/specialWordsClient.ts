// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getModelsOperations,
  ModelsOperations,
} from "./classic/models/index.js";
import {
  getModelPropertiesOperations,
  ModelPropertiesOperations,
} from "./classic/modelProperties/index.js";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getParametersOperations,
  ParametersOperations,
} from "./classic/parameters/index.js";
import {
  createSpecialWords,
  SpecialWordsClientOptions,
  SpecialWordsContext,
} from "./api/index.js";

export { SpecialWordsClientOptions } from "./api/specialWordsContext.js";

export class SpecialWordsClient {
  private _client: SpecialWordsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /**
   * Scenarios to verify that reserved words can be used in service and generators will handle it appropriately.
   *
   * Current list of special words
   * ```txt
   * and
   * as
   * assert
   * async
   * await
   * break
   * class
   * constructor
   * continue
   * def
   * del
   * elif
   * else
   * except
   * exec
   * finally
   * for
   * from
   * global
   * if
   * import
   * in
   * is
   * lambda
   * not
   * or
   * pass
   * raise
   * return
   * try
   * while
   * with
   * yield
   * ```
   */
  constructor(options: SpecialWordsClientOptions = {}) {
    this._client = createSpecialWords(options);
    this.pipeline = this._client.pipeline;
    this.models = getModelsOperations(this._client);
    this.modelProperties = getModelPropertiesOperations(this._client);
    this.operations = getOperationsOperations(this._client);
    this.parameters = getParametersOperations(this._client);
  }

  /** The operation groups for Models */
  public readonly models: ModelsOperations;
  /** The operation groups for ModelProperties */
  public readonly modelProperties: ModelPropertiesOperations;
  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Parameters */
  public readonly parameters: ParametersOperations;
}
