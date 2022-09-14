import {
  BooleanGetParameters,
  BooleanPutParameters,
  StringGetParameters,
  StringPutParameters,
  BytesGetParameters,
  BytesPutParameters,
  IntGetParameters,
  IntPutParameters,
  FloatGetParameters,
  FloatPutParameters,
  DatetimeGetParameters,
  DatetimePutParameters,
  DurationGetParameters,
  DurationPutParameters,
  EnumGetParameters,
  EnumPutParameters,
  ExtensibleEnumGetParameters,
  ExtensibleEnumPutParameters,
  ModelGetParameters,
  ModelPutParameters,
  CollectionsStringGetParameters,
  CollectionsStringPutParameters,
  CollectionsIntGetParameters,
  CollectionsIntPutParameters,
  CollectionsModelGetParameters,
  CollectionsModelPutParameters,
} from "./parameters";
import {
  BooleanGet200Response,
  BooleanPut204Response,
  StringGet200Response,
  StringPut204Response,
  BytesGet200Response,
  BytesPut204Response,
  IntGet200Response,
  IntPut204Response,
  FloatGet200Response,
  FloatPut204Response,
  DatetimeGet200Response,
  DatetimePut204Response,
  DurationGet200Response,
  DurationPut204Response,
  EnumGet200Response,
  EnumPut204Response,
  ExtensibleEnumGet200Response,
  ExtensibleEnumPut204Response,
  ModelGet200Response,
  ModelPut204Response,
  CollectionsStringGet200Response,
  CollectionsStringPut204Response,
  CollectionsIntGet200Response,
  CollectionsIntPut204Response,
  CollectionsModelGet200Response,
  CollectionsModelPut204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Boolean operations */
export interface BooleanOperations {
  get(options?: BooleanGetParameters): StreamableMethod<BooleanGet200Response>;
  put(options: BooleanPutParameters): StreamableMethod<BooleanPut204Response>;
}

/** Contains operations for String operations */
export interface StringOperations {
  get(options?: StringGetParameters): StreamableMethod<StringGet200Response>;
  put(options: StringPutParameters): StreamableMethod<StringPut204Response>;
}

/** Contains operations for Bytes operations */
export interface BytesOperations {
  get(options?: BytesGetParameters): StreamableMethod<BytesGet200Response>;
  put(options: BytesPutParameters): StreamableMethod<BytesPut204Response>;
}

/** Contains operations for Int operations */
export interface IntOperations {
  get(options?: IntGetParameters): StreamableMethod<IntGet200Response>;
  put(options: IntPutParameters): StreamableMethod<IntPut204Response>;
}

/** Contains operations for Float operations */
export interface FloatOperations {
  get(options?: FloatGetParameters): StreamableMethod<FloatGet200Response>;
  put(options: FloatPutParameters): StreamableMethod<FloatPut204Response>;
}

/** Contains operations for Datetime operations */
export interface DatetimeOperations {
  get(
    options?: DatetimeGetParameters
  ): StreamableMethod<DatetimeGet200Response>;
  put(options: DatetimePutParameters): StreamableMethod<DatetimePut204Response>;
}

/** Contains operations for Duration operations */
export interface DurationOperations {
  get(
    options?: DurationGetParameters
  ): StreamableMethod<DurationGet200Response>;
  put(options: DurationPutParameters): StreamableMethod<DurationPut204Response>;
}

/** Contains operations for Enum operations */
export interface EnumOperations {
  get(options?: EnumGetParameters): StreamableMethod<EnumGet200Response>;
  put(options: EnumPutParameters): StreamableMethod<EnumPut204Response>;
}

/** Contains operations for ExtensibleEnum operations */
export interface ExtensibleEnumOperations {
  get(
    options?: ExtensibleEnumGetParameters
  ): StreamableMethod<ExtensibleEnumGet200Response>;
  put(
    options: ExtensibleEnumPutParameters
  ): StreamableMethod<ExtensibleEnumPut204Response>;
}

/** Contains operations for Model operations */
export interface ModelOperations {
  get(options?: ModelGetParameters): StreamableMethod<ModelGet200Response>;
  put(options: ModelPutParameters): StreamableMethod<ModelPut204Response>;
}

/** Contains operations for CollectionsString operations */
export interface CollectionsStringOperations {
  get(
    options?: CollectionsStringGetParameters
  ): StreamableMethod<CollectionsStringGet200Response>;
  put(
    options: CollectionsStringPutParameters
  ): StreamableMethod<CollectionsStringPut204Response>;
}

/** Contains operations for CollectionsInt operations */
export interface CollectionsIntOperations {
  get(
    options?: CollectionsIntGetParameters
  ): StreamableMethod<CollectionsIntGet200Response>;
  put(
    options: CollectionsIntPutParameters
  ): StreamableMethod<CollectionsIntPut204Response>;
}

/** Contains operations for CollectionsModel operations */
export interface CollectionsModelOperations {
  get(
    options?: CollectionsModelGetParameters
  ): StreamableMethod<CollectionsModelGet200Response>;
  put(
    options: CollectionsModelPutParameters
  ): StreamableMethod<CollectionsModelPut204Response>;
}

export interface BooleanGet {
  get(options?: BooleanGetParameters): StreamableMethod<BooleanGet200Response>;
  put(options: BooleanPutParameters): StreamableMethod<BooleanPut204Response>;
}

export interface StringGet {
  get(options?: StringGetParameters): StreamableMethod<StringGet200Response>;
  put(options: StringPutParameters): StreamableMethod<StringPut204Response>;
}

export interface BytesGet {
  get(options?: BytesGetParameters): StreamableMethod<BytesGet200Response>;
  put(options: BytesPutParameters): StreamableMethod<BytesPut204Response>;
}

export interface IntGet {
  get(options?: IntGetParameters): StreamableMethod<IntGet200Response>;
  put(options: IntPutParameters): StreamableMethod<IntPut204Response>;
}

export interface FloatGet {
  get(options?: FloatGetParameters): StreamableMethod<FloatGet200Response>;
  put(options: FloatPutParameters): StreamableMethod<FloatPut204Response>;
}

export interface DatetimeGet {
  get(
    options?: DatetimeGetParameters
  ): StreamableMethod<DatetimeGet200Response>;
  put(options: DatetimePutParameters): StreamableMethod<DatetimePut204Response>;
}

export interface DurationGet {
  get(
    options?: DurationGetParameters
  ): StreamableMethod<DurationGet200Response>;
  put(options: DurationPutParameters): StreamableMethod<DurationPut204Response>;
}

export interface EnumGet {
  get(options?: EnumGetParameters): StreamableMethod<EnumGet200Response>;
  put(options: EnumPutParameters): StreamableMethod<EnumPut204Response>;
}

export interface ExtensibleEnumGet {
  get(
    options?: ExtensibleEnumGetParameters
  ): StreamableMethod<ExtensibleEnumGet200Response>;
  put(
    options: ExtensibleEnumPutParameters
  ): StreamableMethod<ExtensibleEnumPut204Response>;
}

export interface ModelGet {
  get(options?: ModelGetParameters): StreamableMethod<ModelGet200Response>;
  put(options: ModelPutParameters): StreamableMethod<ModelPut204Response>;
}

export interface CollectionsStringGet {
  get(
    options?: CollectionsStringGetParameters
  ): StreamableMethod<CollectionsStringGet200Response>;
  put(
    options: CollectionsStringPutParameters
  ): StreamableMethod<CollectionsStringPut204Response>;
}

export interface CollectionsIntGet {
  get(
    options?: CollectionsIntGetParameters
  ): StreamableMethod<CollectionsIntGet200Response>;
  put(
    options: CollectionsIntPutParameters
  ): StreamableMethod<CollectionsIntPut204Response>;
}

export interface CollectionsModelGet {
  get(
    options?: CollectionsModelGetParameters
  ): StreamableMethod<CollectionsModelGet200Response>;
  put(
    options: CollectionsModelPutParameters
  ): StreamableMethod<CollectionsModelPut204Response>;
}

export interface Routes {
  /** Resource for '/models/properties/types/boolean' has methods for the following verbs: get, put */
  (path: "/models/properties/types/boolean"): BooleanGet;
  /** Resource for '/models/properties/types/string' has methods for the following verbs: get, put */
  (path: "/models/properties/types/string"): StringGet;
  /** Resource for '/models/properties/types/bytes' has methods for the following verbs: get, put */
  (path: "/models/properties/types/bytes"): BytesGet;
  /** Resource for '/models/properties/types/int' has methods for the following verbs: get, put */
  (path: "/models/properties/types/int"): IntGet;
  /** Resource for '/models/properties/types/float' has methods for the following verbs: get, put */
  (path: "/models/properties/types/float"): FloatGet;
  /** Resource for '/models/properties/types/datetime' has methods for the following verbs: get, put */
  (path: "/models/properties/types/datetime"): DatetimeGet;
  /** Resource for '/models/properties/types/duration' has methods for the following verbs: get, put */
  (path: "/models/properties/types/duration"): DurationGet;
  /** Resource for '/models/properties/types/enum' has methods for the following verbs: get, put */
  (path: "/models/properties/types/enum"): EnumGet;
  /** Resource for '/models/properties/types/extensible-enum' has methods for the following verbs: get, put */
  (path: "/models/properties/types/extensible-enum"): ExtensibleEnumGet;
  /** Resource for '/models/properties/types/model' has methods for the following verbs: get, put */
  (path: "/models/properties/types/model"): ModelGet;
  /** Resource for '/models/properties/types/collections/string' has methods for the following verbs: get, put */
  (path: "/models/properties/types/collections/string"): CollectionsStringGet;
  /** Resource for '/models/properties/types/collections/int' has methods for the following verbs: get, put */
  (path: "/models/properties/types/collections/int"): CollectionsIntGet;
  /** Resource for '/models/properties/types/collections/model' has methods for the following verbs: get, put */
  (path: "/models/properties/types/collections/model"): CollectionsModelGet;
}

export type ModelsPropertyTypesClient = Client & {
  path: Routes;
  booleanOperations: BooleanOperations;
  stringOperations: StringOperations;
  bytes: BytesOperations;
  int: IntOperations;
  float: FloatOperations;
  datetime: DatetimeOperations;
  duration: DurationOperations;
  enum: EnumOperations;
  extensibleEnum: ExtensibleEnumOperations;
  model: ModelOperations;
  collectionsString: CollectionsStringOperations;
  collectionsInt: CollectionsIntOperations;
  collectionsModel: CollectionsModelOperations;
};
