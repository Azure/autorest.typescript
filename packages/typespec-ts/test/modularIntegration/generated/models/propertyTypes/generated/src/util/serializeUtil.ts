// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  BooleanProperty,
  StringProperty,
  BytesProperty,
  IntProperty,
  FloatProperty,
  DecimalProperty,
  Decimal128Property,
  DatetimeProperty,
  DurationProperty,
  EnumProperty,
  ExtensibleEnumProperty,
  ModelProperty,
  CollectionsStringProperty,
  CollectionsIntProperty,
  InnerModel,
  CollectionsModelProperty,
  DictionaryStringProperty,
  NeverProperty,
  UnknownStringProperty,
  UnknownIntProperty,
  UnknownDictProperty,
  UnknownArrayProperty,
  StringLiteralProperty,
  IntLiteralProperty,
  FloatLiteralProperty,
  BooleanLiteralProperty,
  UnionStringLiteralProperty,
  UnionIntLiteralProperty,
  UnionFloatLiteralProperty,
  UnionEnumValueProperty,
} from "../models/models.js";
import {
  BooleanProperty as RestBooleanProperty,
  StringProperty as RestStringProperty,
  BytesProperty as RestBytesProperty,
  IntProperty as RestIntProperty,
  FloatProperty as RestFloatProperty,
  DecimalProperty as RestDecimalProperty,
  Decimal128Property as RestDecimal128Property,
  DatetimeProperty as RestDatetimeProperty,
  DurationProperty as RestDurationProperty,
  EnumProperty as RestEnumProperty,
  ExtensibleEnumProperty as RestExtensibleEnumProperty,
  ModelProperty as RestModelProperty,
  CollectionsStringProperty as RestCollectionsStringProperty,
  CollectionsIntProperty as RestCollectionsIntProperty,
  InnerModel as RestInnerModel,
  CollectionsModelProperty as RestCollectionsModelProperty,
  DictionaryStringProperty as RestDictionaryStringProperty,
  NeverProperty as RestNeverProperty,
  UnknownStringProperty as RestUnknownStringProperty,
  UnknownIntProperty as RestUnknownIntProperty,
  UnknownDictProperty as RestUnknownDictProperty,
  UnknownArrayProperty as RestUnknownArrayProperty,
  StringLiteralProperty as RestStringLiteralProperty,
  IntLiteralProperty as RestIntLiteralProperty,
  FloatLiteralProperty as RestFloatLiteralProperty,
  BooleanLiteralProperty as RestBooleanLiteralProperty,
  UnionStringLiteralProperty as RestUnionStringLiteralProperty,
  UnionIntLiteralProperty as RestUnionIntLiteralProperty,
  UnionFloatLiteralProperty as RestUnionFloatLiteralProperty,
  UnionEnumValueProperty as RestUnionEnumValueProperty,
} from "../rest/index.js";

export function serializeBooleanProperty(
  o: BooleanProperty,
): RestBooleanProperty {
  return {
    property: o["property"],
  };
}

export function deserializeBooleanProperty(
  o: RestBooleanProperty,
): BooleanProperty {
  return {
    property: o["property"],
  };
}

export function serializeStringProperty(o: StringProperty): RestStringProperty {
  return {
    property: o["property"],
  };
}

export function deserializeStringProperty(
  o: RestStringProperty,
): StringProperty {
  return {
    property: o["property"],
  };
}

export function serializeBytesProperty(o: BytesProperty): RestBytesProperty {
  return {
    property: uint8ArrayToString(o["property"], "base64"),
  };
}

export function deserializeBytesProperty(o: RestBytesProperty): BytesProperty {
  return {
    property:
      typeof o["property"] === "string"
        ? stringToUint8Array(o["property"], "base64")
        : o["property"],
  };
}

export function serializeIntProperty(o: IntProperty): RestIntProperty {
  return {
    property: o["property"],
  };
}

export function deserializeIntProperty(o: RestIntProperty): IntProperty {
  return {
    property: o["property"],
  };
}

export function serializeFloatProperty(o: FloatProperty): RestFloatProperty {
  return {
    property: o["property"],
  };
}

export function deserializeFloatProperty(o: RestFloatProperty): FloatProperty {
  return {
    property: o["property"],
  };
}

export function serializeDecimalProperty(
  o: DecimalProperty,
): RestDecimalProperty {
  return {
    property: o["property"],
  };
}

export function deserializeDecimalProperty(
  o: RestDecimalProperty,
): DecimalProperty {
  return {
    property: o["property"],
  };
}

export function serializeDecimal128Property(
  o: Decimal128Property,
): RestDecimal128Property {
  return {
    property: o["property"],
  };
}

export function deserializeDecimal128Property(
  o: RestDecimal128Property,
): Decimal128Property {
  return {
    property: o["property"],
  };
}

export function serializeDatetimeProperty(
  o: DatetimeProperty,
): RestDatetimeProperty {
  return {
    property: o["property"].toISOString(),
  };
}

export function deserializeDatetimeProperty(
  o: RestDatetimeProperty,
): DatetimeProperty {
  return {
    property: new Date(o["property"]),
  };
}

export function serializeDurationProperty(
  o: DurationProperty,
): RestDurationProperty {
  return {
    property: FIXME,
  };
}

export function deserializeDurationProperty(
  o: RestDurationProperty,
): DurationProperty {
  return {
    property: FIXME,
  };
}

export function serializeEnumProperty(o: EnumProperty): RestEnumProperty {
  return {
    property: o["property"],
  };
}

export function deserializeEnumProperty(o: RestEnumProperty): EnumProperty {
  return {
    property: o["property"],
  };
}

export function serializeExtensibleEnumProperty(
  o: ExtensibleEnumProperty,
): RestExtensibleEnumProperty {
  return {
    property: o["property"],
  };
}

export function deserializeExtensibleEnumProperty(
  o: RestExtensibleEnumProperty,
): ExtensibleEnumProperty {
  return {
    property: o["property"],
  };
}

export function serializeModelProperty(o: ModelProperty): RestModelProperty {
  return {
    property: MISSING_SERIALIZER(o["property"]),
  };
}

export function deserializeModelProperty(o: RestModelProperty): ModelProperty {
  return {
    property: MISSING_SERIALIZER(o["property"]),
  };
}

export function serializeCollectionsStringProperty(
  o: CollectionsStringProperty,
): RestCollectionsStringProperty {
  return {
    property: o["property"],
  };
}

export function deserializeCollectionsStringProperty(
  o: RestCollectionsStringProperty,
): CollectionsStringProperty {
  return {
    property: o["property"],
  };
}

export function serializeCollectionsIntProperty(
  o: CollectionsIntProperty,
): RestCollectionsIntProperty {
  return {
    property: o["property"],
  };
}

export function deserializeCollectionsIntProperty(
  o: RestCollectionsIntProperty,
): CollectionsIntProperty {
  return {
    property: o["property"],
  };
}

export function serializeInnerModel(o: InnerModel): RestInnerModel {
  return {
    property: o["property"],
  };
}

export function deserializeInnerModel(o: RestInnerModel): InnerModel {
  return {
    property: o["property"],
  };
}

export function serializeCollectionsModelProperty(
  o: CollectionsModelProperty,
): RestCollectionsModelProperty {
  return {
    property: o["property"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeCollectionsModelProperty(
  o: RestCollectionsModelProperty,
): CollectionsModelProperty {
  return {
    property: o["property"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function serializeDictionaryStringProperty(
  o: DictionaryStringProperty,
): RestDictionaryStringProperty {
  return {
    property: FIXME,
  };
}

export function deserializeDictionaryStringProperty(
  o: RestDictionaryStringProperty,
): DictionaryStringProperty {
  return {
    property: FIXME,
  };
}

export function serializeNeverProperty(o: NeverProperty): RestNeverProperty {
  return {};
}

export function deserializeNeverProperty(o: RestNeverProperty): NeverProperty {
  return {};
}

export function serializeUnknownStringProperty(
  o: UnknownStringProperty,
): RestUnknownStringProperty {
  return {
    property: FIXME,
  };
}

export function deserializeUnknownStringProperty(
  o: RestUnknownStringProperty,
): UnknownStringProperty {
  return {
    property: FIXME,
  };
}

export function serializeUnknownIntProperty(
  o: UnknownIntProperty,
): RestUnknownIntProperty {
  return {
    property: FIXME,
  };
}

export function deserializeUnknownIntProperty(
  o: RestUnknownIntProperty,
): UnknownIntProperty {
  return {
    property: FIXME,
  };
}

export function serializeUnknownDictProperty(
  o: UnknownDictProperty,
): RestUnknownDictProperty {
  return {
    property: FIXME,
  };
}

export function deserializeUnknownDictProperty(
  o: RestUnknownDictProperty,
): UnknownDictProperty {
  return {
    property: FIXME,
  };
}

export function serializeUnknownArrayProperty(
  o: UnknownArrayProperty,
): RestUnknownArrayProperty {
  return {
    property: FIXME,
  };
}

export function deserializeUnknownArrayProperty(
  o: RestUnknownArrayProperty,
): UnknownArrayProperty {
  return {
    property: FIXME,
  };
}

export function serializeStringLiteralProperty(
  o: StringLiteralProperty,
): RestStringLiteralProperty {
  return {
    property: o["property"],
  };
}

export function deserializeStringLiteralProperty(
  o: RestStringLiteralProperty,
): StringLiteralProperty {
  return {
    property: o["property"],
  };
}

export function serializeIntLiteralProperty(
  o: IntLiteralProperty,
): RestIntLiteralProperty {
  return {
    property: o["property"],
  };
}

export function deserializeIntLiteralProperty(
  o: RestIntLiteralProperty,
): IntLiteralProperty {
  return {
    property: o["property"],
  };
}

export function serializeFloatLiteralProperty(
  o: FloatLiteralProperty,
): RestFloatLiteralProperty {
  return {
    property: o["property"],
  };
}

export function deserializeFloatLiteralProperty(
  o: RestFloatLiteralProperty,
): FloatLiteralProperty {
  return {
    property: o["property"],
  };
}

export function serializeBooleanLiteralProperty(
  o: BooleanLiteralProperty,
): RestBooleanLiteralProperty {
  return {
    property: o["property"],
  };
}

export function deserializeBooleanLiteralProperty(
  o: RestBooleanLiteralProperty,
): BooleanLiteralProperty {
  return {
    property: o["property"],
  };
}

export function serializeUnionStringLiteralProperty(
  o: UnionStringLiteralProperty,
): RestUnionStringLiteralProperty {
  return {
    property: o["property"],
  };
}

export function deserializeUnionStringLiteralProperty(
  o: RestUnionStringLiteralProperty,
): UnionStringLiteralProperty {
  return {
    property: o["property"],
  };
}

export function serializeUnionIntLiteralProperty(
  o: UnionIntLiteralProperty,
): RestUnionIntLiteralProperty {
  return {
    property: o["property"],
  };
}

export function deserializeUnionIntLiteralProperty(
  o: RestUnionIntLiteralProperty,
): UnionIntLiteralProperty {
  return {
    property: o["property"],
  };
}

export function serializeUnionFloatLiteralProperty(
  o: UnionFloatLiteralProperty,
): RestUnionFloatLiteralProperty {
  return {
    property: o["property"],
  };
}

export function deserializeUnionFloatLiteralProperty(
  o: RestUnionFloatLiteralProperty,
): UnionFloatLiteralProperty {
  return {
    property: o["property"],
  };
}

export function serializeUnionEnumValueProperty(
  o: UnionEnumValueProperty,
): RestUnionEnumValueProperty {
  return {
    property: o["property"],
  };
}

export function deserializeUnionEnumValueProperty(
  o: RestUnionEnumValueProperty,
): UnionEnumValueProperty {
  return {
    property: o["property"],
  };
}
