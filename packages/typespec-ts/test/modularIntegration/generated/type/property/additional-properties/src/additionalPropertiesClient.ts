// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getExtendsUnknownOperations,
  ExtendsUnknownOperations,
} from "./classic/extendsUnknown/index.js";
import {
  getExtendsUnknownDerivedOperations,
  ExtendsUnknownDerivedOperations,
} from "./classic/extendsUnknownDerived/index.js";
import {
  getExtendsUnknownDiscriminatedOperations,
  ExtendsUnknownDiscriminatedOperations,
} from "./classic/extendsUnknownDiscriminated/index.js";
import {
  getIsUnknownOperations,
  IsUnknownOperations,
} from "./classic/isUnknown/index.js";
import {
  getIsUnknownDerivedOperations,
  IsUnknownDerivedOperations,
} from "./classic/isUnknownDerived/index.js";
import {
  getIsUnknownDiscriminatedOperations,
  IsUnknownDiscriminatedOperations,
} from "./classic/isUnknownDiscriminated/index.js";
import {
  getExtendsStringOperations,
  ExtendsStringOperations,
} from "./classic/extendsString/index.js";
import {
  getIsStringOperations,
  IsStringOperations,
} from "./classic/isString/index.js";
import {
  getSpreadStringOperations,
  SpreadStringOperations,
} from "./classic/spreadString/index.js";
import {
  getExtendsFloatOperations,
  ExtendsFloatOperations,
} from "./classic/extendsFloat/index.js";
import {
  getIsFloatOperations,
  IsFloatOperations,
} from "./classic/isFloat/index.js";
import {
  getSpreadFloatOperations,
  SpreadFloatOperations,
} from "./classic/spreadFloat/index.js";
import {
  getExtendsModelOperations,
  ExtendsModelOperations,
} from "./classic/extendsModel/index.js";
import {
  getIsModelOperations,
  IsModelOperations,
} from "./classic/isModel/index.js";
import {
  getSpreadModelOperations,
  SpreadModelOperations,
} from "./classic/spreadModel/index.js";
import {
  getExtendsModelArrayOperations,
  ExtendsModelArrayOperations,
} from "./classic/extendsModelArray/index.js";
import {
  getIsModelArrayOperations,
  IsModelArrayOperations,
} from "./classic/isModelArray/index.js";
import {
  getSpreadModelArrayOperations,
  SpreadModelArrayOperations,
} from "./classic/spreadModelArray/index.js";
import {
  getSpreadDifferentStringOperations,
  SpreadDifferentStringOperations,
} from "./classic/spreadDifferentString/index.js";
import {
  getSpreadDifferentFloatOperations,
  SpreadDifferentFloatOperations,
} from "./classic/spreadDifferentFloat/index.js";
import {
  getSpreadDifferentModelOperations,
  SpreadDifferentModelOperations,
} from "./classic/spreadDifferentModel/index.js";
import {
  getSpreadDifferentModelArrayOperations,
  SpreadDifferentModelArrayOperations,
} from "./classic/spreadDifferentModelArray/index.js";
import {
  getExtendsDifferentSpreadStringOperations,
  ExtendsDifferentSpreadStringOperations,
} from "./classic/extendsDifferentSpreadString/index.js";
import {
  getExtendsDifferentSpreadFloatOperations,
  ExtendsDifferentSpreadFloatOperations,
} from "./classic/extendsDifferentSpreadFloat/index.js";
import {
  getExtendsDifferentSpreadModelOperations,
  ExtendsDifferentSpreadModelOperations,
} from "./classic/extendsDifferentSpreadModel/index.js";
import {
  getExtendsDifferentSpreadModelArrayOperations,
  ExtendsDifferentSpreadModelArrayOperations,
} from "./classic/extendsDifferentSpreadModelArray/index.js";
import {
  getMultipleSpreadOperations,
  MultipleSpreadOperations,
} from "./classic/multipleSpread/index.js";
import {
  getSpreadRecordUnionOperations,
  SpreadRecordUnionOperations,
} from "./classic/spreadRecordUnion/index.js";
import {
  getSpreadRecordDiscriminatedUnionOperations,
  SpreadRecordDiscriminatedUnionOperations,
} from "./classic/spreadRecordDiscriminatedUnion/index.js";
import {
  getSpreadRecordNonDiscriminatedUnionOperations,
  SpreadRecordNonDiscriminatedUnionOperations,
} from "./classic/spreadRecordNonDiscriminatedUnion/index.js";
import {
  getSpreadRecordNonDiscriminatedUnion2Operations,
  SpreadRecordNonDiscriminatedUnion2Operations,
} from "./classic/spreadRecordNonDiscriminatedUnion2/index.js";
import {
  getSpreadRecordNonDiscriminatedUnion3Operations,
  SpreadRecordNonDiscriminatedUnion3Operations,
} from "./classic/spreadRecordNonDiscriminatedUnion3/index.js";
import {
  createAdditionalProperties,
  AdditionalPropertiesClientOptions,
  AdditionalPropertiesContext,
} from "./api/index.js";

export { AdditionalPropertiesClientOptions } from "./api/additionalPropertiesContext.js";

export class AdditionalPropertiesClient {
  private _client: AdditionalPropertiesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Tests for additional properties of models */
  constructor(options: AdditionalPropertiesClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createAdditionalProperties({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.extendsUnknown = getExtendsUnknownOperations(this._client);
    this.extendsUnknownDerived = getExtendsUnknownDerivedOperations(
      this._client,
    );
    this.extendsUnknownDiscriminated = getExtendsUnknownDiscriminatedOperations(
      this._client,
    );
    this.isUnknown = getIsUnknownOperations(this._client);
    this.isUnknownDerived = getIsUnknownDerivedOperations(this._client);
    this.isUnknownDiscriminated = getIsUnknownDiscriminatedOperations(
      this._client,
    );
    this.extendsString = getExtendsStringOperations(this._client);
    this.isString = getIsStringOperations(this._client);
    this.spreadString = getSpreadStringOperations(this._client);
    this.extendsFloat = getExtendsFloatOperations(this._client);
    this.isFloat = getIsFloatOperations(this._client);
    this.spreadFloat = getSpreadFloatOperations(this._client);
    this.extendsModel = getExtendsModelOperations(this._client);
    this.isModel = getIsModelOperations(this._client);
    this.spreadModel = getSpreadModelOperations(this._client);
    this.extendsModelArray = getExtendsModelArrayOperations(this._client);
    this.isModelArray = getIsModelArrayOperations(this._client);
    this.spreadModelArray = getSpreadModelArrayOperations(this._client);
    this.spreadDifferentString = getSpreadDifferentStringOperations(
      this._client,
    );
    this.spreadDifferentFloat = getSpreadDifferentFloatOperations(this._client);
    this.spreadDifferentModel = getSpreadDifferentModelOperations(this._client);
    this.spreadDifferentModelArray = getSpreadDifferentModelArrayOperations(
      this._client,
    );
    this.extendsDifferentSpreadString =
      getExtendsDifferentSpreadStringOperations(this._client);
    this.extendsDifferentSpreadFloat = getExtendsDifferentSpreadFloatOperations(
      this._client,
    );
    this.extendsDifferentSpreadModel = getExtendsDifferentSpreadModelOperations(
      this._client,
    );
    this.extendsDifferentSpreadModelArray =
      getExtendsDifferentSpreadModelArrayOperations(this._client);
    this.multipleSpread = getMultipleSpreadOperations(this._client);
    this.spreadRecordUnion = getSpreadRecordUnionOperations(this._client);
    this.spreadRecordDiscriminatedUnion =
      getSpreadRecordDiscriminatedUnionOperations(this._client);
    this.spreadRecordNonDiscriminatedUnion =
      getSpreadRecordNonDiscriminatedUnionOperations(this._client);
    this.spreadRecordNonDiscriminatedUnion2 =
      getSpreadRecordNonDiscriminatedUnion2Operations(this._client);
    this.spreadRecordNonDiscriminatedUnion3 =
      getSpreadRecordNonDiscriminatedUnion3Operations(this._client);
  }

  /** The operation groups for ExtendsUnknown */
  public readonly extendsUnknown: ExtendsUnknownOperations;
  /** The operation groups for ExtendsUnknownDerived */
  public readonly extendsUnknownDerived: ExtendsUnknownDerivedOperations;
  /** The operation groups for ExtendsUnknownDiscriminated */
  public readonly extendsUnknownDiscriminated: ExtendsUnknownDiscriminatedOperations;
  /** The operation groups for IsUnknown */
  public readonly isUnknown: IsUnknownOperations;
  /** The operation groups for IsUnknownDerived */
  public readonly isUnknownDerived: IsUnknownDerivedOperations;
  /** The operation groups for IsUnknownDiscriminated */
  public readonly isUnknownDiscriminated: IsUnknownDiscriminatedOperations;
  /** The operation groups for ExtendsString */
  public readonly extendsString: ExtendsStringOperations;
  /** The operation groups for IsString */
  public readonly isString: IsStringOperations;
  /** The operation groups for SpreadString */
  public readonly spreadString: SpreadStringOperations;
  /** The operation groups for ExtendsFloat */
  public readonly extendsFloat: ExtendsFloatOperations;
  /** The operation groups for IsFloat */
  public readonly isFloat: IsFloatOperations;
  /** The operation groups for SpreadFloat */
  public readonly spreadFloat: SpreadFloatOperations;
  /** The operation groups for ExtendsModel */
  public readonly extendsModel: ExtendsModelOperations;
  /** The operation groups for IsModel */
  public readonly isModel: IsModelOperations;
  /** The operation groups for SpreadModel */
  public readonly spreadModel: SpreadModelOperations;
  /** The operation groups for ExtendsModelArray */
  public readonly extendsModelArray: ExtendsModelArrayOperations;
  /** The operation groups for IsModelArray */
  public readonly isModelArray: IsModelArrayOperations;
  /** The operation groups for SpreadModelArray */
  public readonly spreadModelArray: SpreadModelArrayOperations;
  /** The operation groups for SpreadDifferentString */
  public readonly spreadDifferentString: SpreadDifferentStringOperations;
  /** The operation groups for SpreadDifferentFloat */
  public readonly spreadDifferentFloat: SpreadDifferentFloatOperations;
  /** The operation groups for SpreadDifferentModel */
  public readonly spreadDifferentModel: SpreadDifferentModelOperations;
  /** The operation groups for SpreadDifferentModelArray */
  public readonly spreadDifferentModelArray: SpreadDifferentModelArrayOperations;
  /** The operation groups for ExtendsDifferentSpreadString */
  public readonly extendsDifferentSpreadString: ExtendsDifferentSpreadStringOperations;
  /** The operation groups for ExtendsDifferentSpreadFloat */
  public readonly extendsDifferentSpreadFloat: ExtendsDifferentSpreadFloatOperations;
  /** The operation groups for ExtendsDifferentSpreadModel */
  public readonly extendsDifferentSpreadModel: ExtendsDifferentSpreadModelOperations;
  /** The operation groups for ExtendsDifferentSpreadModelArray */
  public readonly extendsDifferentSpreadModelArray: ExtendsDifferentSpreadModelArrayOperations;
  /** The operation groups for MultipleSpread */
  public readonly multipleSpread: MultipleSpreadOperations;
  /** The operation groups for SpreadRecordUnion */
  public readonly spreadRecordUnion: SpreadRecordUnionOperations;
  /** The operation groups for SpreadRecordDiscriminatedUnion */
  public readonly spreadRecordDiscriminatedUnion: SpreadRecordDiscriminatedUnionOperations;
  /** The operation groups for SpreadRecordNonDiscriminatedUnion */
  public readonly spreadRecordNonDiscriminatedUnion: SpreadRecordNonDiscriminatedUnionOperations;
  /** The operation groups for SpreadRecordNonDiscriminatedUnion2 */
  public readonly spreadRecordNonDiscriminatedUnion2: SpreadRecordNonDiscriminatedUnion2Operations;
  /** The operation groups for SpreadRecordNonDiscriminatedUnion3 */
  public readonly spreadRecordNonDiscriminatedUnion3: SpreadRecordNonDiscriminatedUnion3Operations;
}
