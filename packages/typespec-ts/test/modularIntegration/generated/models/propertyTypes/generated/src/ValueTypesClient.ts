// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getBooleanOperations,
  BooleanOperations,
} from "./classic/boolean/index.js";
import {
  getStringOperations,
  StringOperations,
} from "./classic/string/index.js";
import { getBytesOperations, BytesOperations } from "./classic/bytes/index.js";
import { getIntOperations, IntOperations } from "./classic/int/index.js";
import { getFloatOperations, FloatOperations } from "./classic/float/index.js";
import {
  getDecimalOperations,
  DecimalOperations,
} from "./classic/decimal/index.js";
import {
  getDecimal128Operations,
  Decimal128Operations,
} from "./classic/decimal128/index.js";
import {
  getDatetimeOperations,
  DatetimeOperations,
} from "./classic/datetime/index.js";
import {
  getDurationOperations,
  DurationOperations,
} from "./classic/duration/index.js";
import { getEnumOperations, EnumOperations } from "./classic/enum/index.js";
import {
  getExtensibleEnumOperations,
  ExtensibleEnumOperations,
} from "./classic/extensibleEnum/index.js";
import { getModelOperations, ModelOperations } from "./classic/model/index.js";
import {
  getCollectionsStringOperations,
  CollectionsStringOperations,
} from "./classic/collectionsString/index.js";
import {
  getCollectionsIntOperations,
  CollectionsIntOperations,
} from "./classic/collectionsInt/index.js";
import {
  getCollectionsModelOperations,
  CollectionsModelOperations,
} from "./classic/collectionsModel/index.js";
import {
  getDictionaryStringOperations,
  DictionaryStringOperations,
} from "./classic/dictionaryString/index.js";
import { getNeverOperations, NeverOperations } from "./classic/never/index.js";
import {
  getUnknownStringOperations,
  UnknownStringOperations,
} from "./classic/unknownString/index.js";
import {
  getUnknownIntOperations,
  UnknownIntOperations,
} from "./classic/unknownInt/index.js";
import {
  getUnknownDictOperations,
  UnknownDictOperations,
} from "./classic/unknownDict/index.js";
import {
  getUnknownArrayOperations,
  UnknownArrayOperations,
} from "./classic/unknownArray/index.js";
import {
  getStringLiteralOperations,
  StringLiteralOperations,
} from "./classic/stringLiteral/index.js";
import {
  getIntLiteralOperations,
  IntLiteralOperations,
} from "./classic/intLiteral/index.js";
import {
  getFloatLiteralOperations,
  FloatLiteralOperations,
} from "./classic/floatLiteral/index.js";
import {
  getBooleanLiteralOperations,
  BooleanLiteralOperations,
} from "./classic/booleanLiteral/index.js";
import {
  getUnionStringLiteralOperations,
  UnionStringLiteralOperations,
} from "./classic/unionStringLiteral/index.js";
import {
  getUnionIntLiteralOperations,
  UnionIntLiteralOperations,
} from "./classic/unionIntLiteral/index.js";
import {
  getUnionFloatLiteralOperations,
  UnionFloatLiteralOperations,
} from "./classic/unionFloatLiteral/index.js";
import {
  createValueTypes,
  ValueTypesClientOptions,
  ValueTypesContext,
} from "./api/index.js";

export { ValueTypesClientOptions } from "./api/ValueTypesContext.js";

export class ValueTypesClient {
  private _client: ValueTypesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates various property types for models */
  constructor(options: ValueTypesClientOptions = {}) {
    this._client = createValueTypes(options);
    this.pipeline = this._client.pipeline;
    this.boolean = getBooleanOperations(this._client);
    this.string = getStringOperations(this._client);
    this.bytes = getBytesOperations(this._client);
    this.int = getIntOperations(this._client);
    this.float = getFloatOperations(this._client);
    this.decimal = getDecimalOperations(this._client);
    this.decimal128 = getDecimal128Operations(this._client);
    this.datetime = getDatetimeOperations(this._client);
    this.duration = getDurationOperations(this._client);
    this.enum = getEnumOperations(this._client);
    this.extensibleEnum = getExtensibleEnumOperations(this._client);
    this.model = getModelOperations(this._client);
    this.collectionsString = getCollectionsStringOperations(this._client);
    this.collectionsInt = getCollectionsIntOperations(this._client);
    this.collectionsModel = getCollectionsModelOperations(this._client);
    this.dictionaryString = getDictionaryStringOperations(this._client);
    this.never = getNeverOperations(this._client);
    this.unknownString = getUnknownStringOperations(this._client);
    this.unknownInt = getUnknownIntOperations(this._client);
    this.unknownDict = getUnknownDictOperations(this._client);
    this.unknownArray = getUnknownArrayOperations(this._client);
    this.stringLiteral = getStringLiteralOperations(this._client);
    this.intLiteral = getIntLiteralOperations(this._client);
    this.floatLiteral = getFloatLiteralOperations(this._client);
    this.booleanLiteral = getBooleanLiteralOperations(this._client);
    this.unionStringLiteral = getUnionStringLiteralOperations(this._client);
    this.unionIntLiteral = getUnionIntLiteralOperations(this._client);
    this.unionFloatLiteral = getUnionFloatLiteralOperations(this._client);
  }

  /** The operation groups for Boolean */
  public readonly boolean: BooleanOperations;
  /** The operation groups for String */
  public readonly string: StringOperations;
  /** The operation groups for Bytes */
  public readonly bytes: BytesOperations;
  /** The operation groups for Int */
  public readonly int: IntOperations;
  /** The operation groups for Float */
  public readonly float: FloatOperations;
  /** The operation groups for Decimal */
  public readonly decimal: DecimalOperations;
  /** The operation groups for Decimal128 */
  public readonly decimal128: Decimal128Operations;
  /** The operation groups for Datetime */
  public readonly datetime: DatetimeOperations;
  /** The operation groups for Duration */
  public readonly duration: DurationOperations;
  /** The operation groups for Enum */
  public readonly enum: EnumOperations;
  /** The operation groups for ExtensibleEnum */
  public readonly extensibleEnum: ExtensibleEnumOperations;
  /** The operation groups for Model */
  public readonly model: ModelOperations;
  /** The operation groups for CollectionsString */
  public readonly collectionsString: CollectionsStringOperations;
  /** The operation groups for CollectionsInt */
  public readonly collectionsInt: CollectionsIntOperations;
  /** The operation groups for CollectionsModel */
  public readonly collectionsModel: CollectionsModelOperations;
  /** The operation groups for DictionaryString */
  public readonly dictionaryString: DictionaryStringOperations;
  /** The operation groups for Never */
  public readonly never: NeverOperations;
  /** The operation groups for UnknownString */
  public readonly unknownString: UnknownStringOperations;
  /** The operation groups for UnknownInt */
  public readonly unknownInt: UnknownIntOperations;
  /** The operation groups for UnknownDict */
  public readonly unknownDict: UnknownDictOperations;
  /** The operation groups for UnknownArray */
  public readonly unknownArray: UnknownArrayOperations;
  /** The operation groups for StringLiteral */
  public readonly stringLiteral: StringLiteralOperations;
  /** The operation groups for IntLiteral */
  public readonly intLiteral: IntLiteralOperations;
  /** The operation groups for FloatLiteral */
  public readonly floatLiteral: FloatLiteralOperations;
  /** The operation groups for BooleanLiteral */
  public readonly booleanLiteral: BooleanLiteralOperations;
  /** The operation groups for UnionStringLiteral */
  public readonly unionStringLiteral: UnionStringLiteralOperations;
  /** The operation groups for UnionIntLiteral */
  public readonly unionIntLiteral: UnionIntLiteralOperations;
  /** The operation groups for UnionFloatLiteral */
  public readonly unionFloatLiteral: UnionFloatLiteralOperations;
}
