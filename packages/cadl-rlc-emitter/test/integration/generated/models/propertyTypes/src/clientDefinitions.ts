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
  BooleanGetDefaultResponse,
  BooleanPut204Response,
  BooleanPutDefaultResponse,
  StringGet200Response,
  StringGetDefaultResponse,
  StringPut204Response,
  StringPutDefaultResponse,
  BytesGet200Response,
  BytesGetDefaultResponse,
  BytesPut204Response,
  BytesPutDefaultResponse,
  IntGet200Response,
  IntGetDefaultResponse,
  IntPut204Response,
  IntPutDefaultResponse,
  FloatGet200Response,
  FloatGetDefaultResponse,
  FloatPut204Response,
  FloatPutDefaultResponse,
  DatetimeGet200Response,
  DatetimeGetDefaultResponse,
  DatetimePut204Response,
  DatetimePutDefaultResponse,
  DurationGet200Response,
  DurationGetDefaultResponse,
  DurationPut204Response,
  DurationPutDefaultResponse,
  EnumGet200Response,
  EnumGetDefaultResponse,
  EnumPut204Response,
  EnumPutDefaultResponse,
  ExtensibleEnumGet200Response,
  ExtensibleEnumGetDefaultResponse,
  ExtensibleEnumPut204Response,
  ExtensibleEnumPutDefaultResponse,
  ModelGet200Response,
  ModelGetDefaultResponse,
  ModelPut204Response,
  ModelPutDefaultResponse,
  CollectionsStringGet200Response,
  CollectionsStringGetDefaultResponse,
  CollectionsStringPut204Response,
  CollectionsStringPutDefaultResponse,
  CollectionsIntGet200Response,
  CollectionsIntGetDefaultResponse,
  CollectionsIntPut204Response,
  CollectionsIntPutDefaultResponse,
  CollectionsModelGet200Response,
  CollectionsModelGetDefaultResponse,
  CollectionsModelPut204Response,
  CollectionsModelPutDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Boolean operations */
export interface BooleanOperations {
  get(
    options?: BooleanGetParameters
  ): StreamableMethod<BooleanGet200Response | BooleanGetDefaultResponse>;
  put(
    options?: BooleanPutParameters
  ): StreamableMethod<BooleanPut204Response | BooleanPutDefaultResponse>;
}

/** Contains operations for String operations */
export interface StringOperations {
  get(
    options?: StringGetParameters
  ): StreamableMethod<StringGet200Response | StringGetDefaultResponse>;
  put(
    options?: StringPutParameters
  ): StreamableMethod<StringPut204Response | StringPutDefaultResponse>;
}

/** Contains operations for Bytes operations */
export interface BytesOperations {
  get(
    options?: BytesGetParameters
  ): StreamableMethod<BytesGet200Response | BytesGetDefaultResponse>;
  put(
    options?: BytesPutParameters
  ): StreamableMethod<BytesPut204Response | BytesPutDefaultResponse>;
}

/** Contains operations for Int operations */
export interface IntOperations {
  get(
    options?: IntGetParameters
  ): StreamableMethod<IntGet200Response | IntGetDefaultResponse>;
  put(
    options?: IntPutParameters
  ): StreamableMethod<IntPut204Response | IntPutDefaultResponse>;
}

/** Contains operations for Float operations */
export interface FloatOperations {
  get(
    options?: FloatGetParameters
  ): StreamableMethod<FloatGet200Response | FloatGetDefaultResponse>;
  put(
    options?: FloatPutParameters
  ): StreamableMethod<FloatPut204Response | FloatPutDefaultResponse>;
}

/** Contains operations for Datetime operations */
export interface DatetimeOperations {
  get(
    options?: DatetimeGetParameters
  ): StreamableMethod<DatetimeGet200Response | DatetimeGetDefaultResponse>;
  put(
    options?: DatetimePutParameters
  ): StreamableMethod<DatetimePut204Response | DatetimePutDefaultResponse>;
}

/** Contains operations for Duration operations */
export interface DurationOperations {
  get(
    options?: DurationGetParameters
  ): StreamableMethod<DurationGet200Response | DurationGetDefaultResponse>;
  put(
    options?: DurationPutParameters
  ): StreamableMethod<DurationPut204Response | DurationPutDefaultResponse>;
}

/** Contains operations for Enum operations */
export interface EnumOperations {
  get(
    options?: EnumGetParameters
  ): StreamableMethod<EnumGet200Response | EnumGetDefaultResponse>;
  put(
    options?: EnumPutParameters
  ): StreamableMethod<EnumPut204Response | EnumPutDefaultResponse>;
}

/** Contains operations for ExtensibleEnum operations */
export interface ExtensibleEnumOperations {
  get(
    options?: ExtensibleEnumGetParameters
  ): StreamableMethod<
    ExtensibleEnumGet200Response | ExtensibleEnumGetDefaultResponse
  >;
  put(
    options?: ExtensibleEnumPutParameters
  ): StreamableMethod<
    ExtensibleEnumPut204Response | ExtensibleEnumPutDefaultResponse
  >;
}

/** Contains operations for Model operations */
export interface ModelOperations {
  get(
    options?: ModelGetParameters
  ): StreamableMethod<ModelGet200Response | ModelGetDefaultResponse>;
  put(
    options?: ModelPutParameters
  ): StreamableMethod<ModelPut204Response | ModelPutDefaultResponse>;
}

/** Contains operations for CollectionsString operations */
export interface CollectionsStringOperations {
  get(
    options?: CollectionsStringGetParameters
  ): StreamableMethod<
    CollectionsStringGet200Response | CollectionsStringGetDefaultResponse
  >;
  put(
    options?: CollectionsStringPutParameters
  ): StreamableMethod<
    CollectionsStringPut204Response | CollectionsStringPutDefaultResponse
  >;
}

/** Contains operations for CollectionsInt operations */
export interface CollectionsIntOperations {
  get(
    options?: CollectionsIntGetParameters
  ): StreamableMethod<
    CollectionsIntGet200Response | CollectionsIntGetDefaultResponse
  >;
  put(
    options?: CollectionsIntPutParameters
  ): StreamableMethod<
    CollectionsIntPut204Response | CollectionsIntPutDefaultResponse
  >;
}

/** Contains operations for CollectionsModel operations */
export interface CollectionsModelOperations {
  get(
    options?: CollectionsModelGetParameters
  ): StreamableMethod<
    CollectionsModelGet200Response | CollectionsModelGetDefaultResponse
  >;
  put(
    options?: CollectionsModelPutParameters
  ): StreamableMethod<
    CollectionsModelPut204Response | CollectionsModelPutDefaultResponse
  >;
}

export interface BooleanGet {
  get(
    options?: BooleanGetParameters
  ): StreamableMethod<BooleanGet200Response | BooleanGetDefaultResponse>;
  put(
    options?: BooleanPutParameters
  ): StreamableMethod<BooleanPut204Response | BooleanPutDefaultResponse>;
}

export interface StringGet {
  get(
    options?: StringGetParameters
  ): StreamableMethod<StringGet200Response | StringGetDefaultResponse>;
  put(
    options?: StringPutParameters
  ): StreamableMethod<StringPut204Response | StringPutDefaultResponse>;
}

export interface BytesGet {
  get(
    options?: BytesGetParameters
  ): StreamableMethod<BytesGet200Response | BytesGetDefaultResponse>;
  put(
    options?: BytesPutParameters
  ): StreamableMethod<BytesPut204Response | BytesPutDefaultResponse>;
}

export interface IntGet {
  get(
    options?: IntGetParameters
  ): StreamableMethod<IntGet200Response | IntGetDefaultResponse>;
  put(
    options?: IntPutParameters
  ): StreamableMethod<IntPut204Response | IntPutDefaultResponse>;
}

export interface FloatGet {
  get(
    options?: FloatGetParameters
  ): StreamableMethod<FloatGet200Response | FloatGetDefaultResponse>;
  put(
    options?: FloatPutParameters
  ): StreamableMethod<FloatPut204Response | FloatPutDefaultResponse>;
}

export interface DatetimeGet {
  get(
    options?: DatetimeGetParameters
  ): StreamableMethod<DatetimeGet200Response | DatetimeGetDefaultResponse>;
  put(
    options?: DatetimePutParameters
  ): StreamableMethod<DatetimePut204Response | DatetimePutDefaultResponse>;
}

export interface DurationGet {
  get(
    options?: DurationGetParameters
  ): StreamableMethod<DurationGet200Response | DurationGetDefaultResponse>;
  put(
    options?: DurationPutParameters
  ): StreamableMethod<DurationPut204Response | DurationPutDefaultResponse>;
}

export interface EnumGet {
  get(
    options?: EnumGetParameters
  ): StreamableMethod<EnumGet200Response | EnumGetDefaultResponse>;
  put(
    options?: EnumPutParameters
  ): StreamableMethod<EnumPut204Response | EnumPutDefaultResponse>;
}

export interface ExtensibleEnumGet {
  get(
    options?: ExtensibleEnumGetParameters
  ): StreamableMethod<
    ExtensibleEnumGet200Response | ExtensibleEnumGetDefaultResponse
  >;
  put(
    options?: ExtensibleEnumPutParameters
  ): StreamableMethod<
    ExtensibleEnumPut204Response | ExtensibleEnumPutDefaultResponse
  >;
}

export interface ModelGet {
  get(
    options?: ModelGetParameters
  ): StreamableMethod<ModelGet200Response | ModelGetDefaultResponse>;
  put(
    options?: ModelPutParameters
  ): StreamableMethod<ModelPut204Response | ModelPutDefaultResponse>;
}

export interface CollectionsStringGet {
  get(
    options?: CollectionsStringGetParameters
  ): StreamableMethod<
    CollectionsStringGet200Response | CollectionsStringGetDefaultResponse
  >;
  put(
    options?: CollectionsStringPutParameters
  ): StreamableMethod<
    CollectionsStringPut204Response | CollectionsStringPutDefaultResponse
  >;
}

export interface CollectionsIntGet {
  get(
    options?: CollectionsIntGetParameters
  ): StreamableMethod<
    CollectionsIntGet200Response | CollectionsIntGetDefaultResponse
  >;
  put(
    options?: CollectionsIntPutParameters
  ): StreamableMethod<
    CollectionsIntPut204Response | CollectionsIntPutDefaultResponse
  >;
}

export interface CollectionsModelGet {
  get(
    options?: CollectionsModelGetParameters
  ): StreamableMethod<
    CollectionsModelGet200Response | CollectionsModelGetDefaultResponse
  >;
  put(
    options?: CollectionsModelPutParameters
  ): StreamableMethod<
    CollectionsModelPut204Response | CollectionsModelPutDefaultResponse
  >;
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
