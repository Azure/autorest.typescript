import {
  SdkArrayType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { UsageFlags } from "@typespec/compiler";
import { SerializeTypeOptions, serializeType } from "./serializers.js";
import { SerializerOutput, getModularTypeId, getRLCTypeId } from "./util.js";

export function serializeArray(
  options: SerializeTypeOptions<SdkArrayType>
): SerializerOutput {
  const { dpgContext, functionType, serializerMap, type, valueExpr } = options;
  const valueType = type.valueType as SdkType & { name?: string };
  const mapParameterId = "e";

  const elementTypeName =
    functionType === UsageFlags.Input
      ? getModularTypeId(valueType)
      : getRLCTypeId(dpgContext, valueType);

  const serializedChildExpr = serializeType({
    ...options,
    type: valueType,
    valueExpr: mapParameterId
  });

  if (serializedChildExpr === mapParameterId) {
    // mapping over identity function, so map is unnecessary
    // arr.map((e) => e) -> arr
    return valueExpr;
  }

  // arr.map((e) => f(e)) -> arr.map(f)
  const unaryFunctionInvocation =
    /(?<functionName>\w+)\((?<childArgExpr>\w+)\)/;

  const { functionName, childArgExpr } =
    serializedChildExpr.match(unaryFunctionInvocation)?.groups ?? {};

  const mapArg =
    elementTypeName && serializerMap?.[elementTypeName]
      ? mapParameterId
      : `${mapParameterId}: ${elementTypeName}`;

  const mapFunction =
    childArgExpr === mapParameterId
      ? functionName
      : `(${mapArg})=>(${serializedChildExpr})`;

  return `${valueExpr}.map(${mapFunction})`;
}
