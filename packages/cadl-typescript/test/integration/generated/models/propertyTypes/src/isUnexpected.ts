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

const responseMap: Record<string, string[]> = {
  "GET /models/properties/types/boolean": ["200"],
  "PUT /models/properties/types/boolean": ["204"],
  "GET /models/properties/types/string": ["200"],
  "PUT /models/properties/types/string": ["204"],
  "GET /models/properties/types/bytes": ["200"],
  "PUT /models/properties/types/bytes": ["204"],
  "GET /models/properties/types/int": ["200"],
  "PUT /models/properties/types/int": ["204"],
  "GET /models/properties/types/float": ["200"],
  "PUT /models/properties/types/float": ["204"],
  "GET /models/properties/types/datetime": ["200"],
  "PUT /models/properties/types/datetime": ["204"],
  "GET /models/properties/types/duration": ["200"],
  "PUT /models/properties/types/duration": ["204"],
  "GET /models/properties/types/enum": ["200"],
  "PUT /models/properties/types/enum": ["204"],
  "GET /models/properties/types/extensible-enum": ["200"],
  "PUT /models/properties/types/extensible-enum": ["204"],
  "GET /models/properties/types/model": ["200"],
  "PUT /models/properties/types/model": ["204"],
  "GET /models/properties/types/collections/string": ["200"],
  "PUT /models/properties/types/collections/string": ["204"],
  "GET /models/properties/types/collections/int": ["200"],
  "PUT /models/properties/types/collections/int": ["204"],
  "GET /models/properties/types/collections/model": ["200"],
  "PUT /models/properties/types/collections/model": ["204"],
};

export function isUnexpected(
  response: BooleanGet200Response | BooleanGetDefaultResponse
): response is BooleanGetDefaultResponse;
export function isUnexpected(
  response: BooleanPut204Response | BooleanPutDefaultResponse
): response is BooleanPutDefaultResponse;
export function isUnexpected(
  response: StringGet200Response | StringGetDefaultResponse
): response is StringGetDefaultResponse;
export function isUnexpected(
  response: StringPut204Response | StringPutDefaultResponse
): response is StringPutDefaultResponse;
export function isUnexpected(
  response: BytesGet200Response | BytesGetDefaultResponse
): response is BytesGetDefaultResponse;
export function isUnexpected(
  response: BytesPut204Response | BytesPutDefaultResponse
): response is BytesPutDefaultResponse;
export function isUnexpected(
  response: IntGet200Response | IntGetDefaultResponse
): response is IntGetDefaultResponse;
export function isUnexpected(
  response: IntPut204Response | IntPutDefaultResponse
): response is IntPutDefaultResponse;
export function isUnexpected(
  response: FloatGet200Response | FloatGetDefaultResponse
): response is FloatGetDefaultResponse;
export function isUnexpected(
  response: FloatPut204Response | FloatPutDefaultResponse
): response is FloatPutDefaultResponse;
export function isUnexpected(
  response: DatetimeGet200Response | DatetimeGetDefaultResponse
): response is DatetimeGetDefaultResponse;
export function isUnexpected(
  response: DatetimePut204Response | DatetimePutDefaultResponse
): response is DatetimePutDefaultResponse;
export function isUnexpected(
  response: DurationGet200Response | DurationGetDefaultResponse
): response is DurationGetDefaultResponse;
export function isUnexpected(
  response: DurationPut204Response | DurationPutDefaultResponse
): response is DurationPutDefaultResponse;
export function isUnexpected(
  response: EnumGet200Response | EnumGetDefaultResponse
): response is EnumGetDefaultResponse;
export function isUnexpected(
  response: EnumPut204Response | EnumPutDefaultResponse
): response is EnumPutDefaultResponse;
export function isUnexpected(
  response: ExtensibleEnumGet200Response | ExtensibleEnumGetDefaultResponse
): response is ExtensibleEnumGetDefaultResponse;
export function isUnexpected(
  response: ExtensibleEnumPut204Response | ExtensibleEnumPutDefaultResponse
): response is ExtensibleEnumPutDefaultResponse;
export function isUnexpected(
  response: ModelGet200Response | ModelGetDefaultResponse
): response is ModelGetDefaultResponse;
export function isUnexpected(
  response: ModelPut204Response | ModelPutDefaultResponse
): response is ModelPutDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsStringGet200Response
    | CollectionsStringGetDefaultResponse
): response is CollectionsStringGetDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsStringPut204Response
    | CollectionsStringPutDefaultResponse
): response is CollectionsStringPutDefaultResponse;
export function isUnexpected(
  response: CollectionsIntGet200Response | CollectionsIntGetDefaultResponse
): response is CollectionsIntGetDefaultResponse;
export function isUnexpected(
  response: CollectionsIntPut204Response | CollectionsIntPutDefaultResponse
): response is CollectionsIntPutDefaultResponse;
export function isUnexpected(
  response: CollectionsModelGet200Response | CollectionsModelGetDefaultResponse
): response is CollectionsModelGetDefaultResponse;
export function isUnexpected(
  response: CollectionsModelPut204Response | CollectionsModelPutDefaultResponse
): response is CollectionsModelPutDefaultResponse;
export function isUnexpected(
  response:
    | BooleanGet200Response
    | BooleanGetDefaultResponse
    | BooleanPut204Response
    | BooleanPutDefaultResponse
    | StringGet200Response
    | StringGetDefaultResponse
    | StringPut204Response
    | StringPutDefaultResponse
    | BytesGet200Response
    | BytesGetDefaultResponse
    | BytesPut204Response
    | BytesPutDefaultResponse
    | IntGet200Response
    | IntGetDefaultResponse
    | IntPut204Response
    | IntPutDefaultResponse
    | FloatGet200Response
    | FloatGetDefaultResponse
    | FloatPut204Response
    | FloatPutDefaultResponse
    | DatetimeGet200Response
    | DatetimeGetDefaultResponse
    | DatetimePut204Response
    | DatetimePutDefaultResponse
    | DurationGet200Response
    | DurationGetDefaultResponse
    | DurationPut204Response
    | DurationPutDefaultResponse
    | EnumGet200Response
    | EnumGetDefaultResponse
    | EnumPut204Response
    | EnumPutDefaultResponse
    | ExtensibleEnumGet200Response
    | ExtensibleEnumGetDefaultResponse
    | ExtensibleEnumPut204Response
    | ExtensibleEnumPutDefaultResponse
    | ModelGet200Response
    | ModelGetDefaultResponse
    | ModelPut204Response
    | ModelPutDefaultResponse
    | CollectionsStringGet200Response
    | CollectionsStringGetDefaultResponse
    | CollectionsStringPut204Response
    | CollectionsStringPutDefaultResponse
    | CollectionsIntGet200Response
    | CollectionsIntGetDefaultResponse
    | CollectionsIntPut204Response
    | CollectionsIntPutDefaultResponse
    | CollectionsModelGet200Response
    | CollectionsModelGetDefaultResponse
    | CollectionsModelPut204Response
    | CollectionsModelPutDefaultResponse
): response is
  | BooleanGetDefaultResponse
  | BooleanPutDefaultResponse
  | StringGetDefaultResponse
  | StringPutDefaultResponse
  | BytesGetDefaultResponse
  | BytesPutDefaultResponse
  | IntGetDefaultResponse
  | IntPutDefaultResponse
  | FloatGetDefaultResponse
  | FloatPutDefaultResponse
  | DatetimeGetDefaultResponse
  | DatetimePutDefaultResponse
  | DurationGetDefaultResponse
  | DurationPutDefaultResponse
  | EnumGetDefaultResponse
  | EnumPutDefaultResponse
  | ExtensibleEnumGetDefaultResponse
  | ExtensibleEnumPutDefaultResponse
  | ModelGetDefaultResponse
  | ModelPutDefaultResponse
  | CollectionsStringGetDefaultResponse
  | CollectionsStringPutDefaultResponse
  | CollectionsIntGetDefaultResponse
  | CollectionsIntPutDefaultResponse
  | CollectionsModelGetDefaultResponse
  | CollectionsModelPutDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
