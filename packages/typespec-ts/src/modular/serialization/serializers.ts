import { ImportType } from "@azure-tools/rlc-common";
import {
  SdkConstantType,
  SdkContext,
  SdkEnumType,
  SdkModelPropertyType,
  SdkModelType,
  SdkType,
  SdkUnionType
} from "@azure-tools/typespec-client-generator-core";
import { isDefined } from "@azure/core-util";
import { getDiscriminator, UsageFlags } from "@typespec/compiler";
import _ from "lodash";
import * as Reify from "../../reify/index.js";
import {
  getEncodingFormat,
  getParameterTypePropertyName,
  getReturnTypePropertyName,
  SerializerMap,
  SerializerOutput
} from "./util.js";
import { serializeHeader } from "./serializeHeaders.js";
import { serializeArray } from "./serializeArray.js";
import { serializeDatetime } from "./serializeDateTime.js";

export interface SerializeTypeOptions<
  TCGCType extends SdkType | SdkModelPropertyType
> {
  dpgContext: SdkContext;
  functionType: UsageFlags;
  serializerMap?: SerializerMap;
  type: TCGCType;
  valueExpr: string;
  importCallback: (importType: ImportType, importedName: string) => void;
}

const placeholder = <T>(_?: T) => {
  return '(()=>{throw Error("Not implemented.")})()';
};

export function serializeType<TCGCType extends SdkType | SdkModelPropertyType>(
  options: SerializeTypeOptions<TCGCType>
): SerializerOutput {
  const { functionType, serializerMap, type, valueExpr } = options;
  const modularTypeName = (type as { name?: string }).name;
  const serializerMetadata =
    isDefined(modularTypeName) && serializerMap?.[modularTypeName];

  if (serializerMetadata) {
    const functionName =
      functionType === UsageFlags.Input
        ? serializerMetadata?.serializerFunctionName
        : serializerMetadata?.deserializerFunctionName;

    return `${
      functionName ??
      (functionType === UsageFlags.Input
        ? "MISSING_SERIALIZER"
        : "MISSING_DESERIALIZER")
    }((${valueExpr}))`;
  }

  return getSerializeHandler(type.kind)?.(options) ?? valueExpr;
}

function getSerializeHandler<TCGCType extends SdkType | SdkModelPropertyType>(
  kind: TCGCType["kind"]
): ((options: SerializeTypeOptions<TCGCType>) => SerializerOutput) | undefined {
  type SimpleType =
    | "any"
    | "armId"
    | "azureLocation"
    | "boolean"
    | "constant"
    | "decimal"
    | "decimal128"
    | "enum"
    | "eTag"
    | "float"
    | "float32"
    | "float64"
    | "guid"
    | "int16"
    | "int32"
    | "int64"
    | "int8"
    | "integer"
    | "ipAddress"
    | "ipV4Address"
    | "ipV6Address"
    | "numeric"
    | "password"
    | "safeint"
    | "string"
    | "uint16"
    | "uint32"
    | "uint64"
    | "uint8"
    | "uri"
    | "url"
    | "uuid"
    | "nullable";

  type SerializeHandler<
    TCGCTypeKind extends (SdkType | SdkModelPropertyType)["kind"]
  > = {
    [K in TCGCTypeKind]: (
      options: SerializeTypeOptions<
        (SdkType | SdkModelPropertyType) & { kind: K }
      >
    ) => SerializerOutput;
  };
  type SerializeHandlerMap = Partial<SerializeHandler<SimpleType>> &
    SerializeHandler<
      Exclude<(SdkType | SdkModelPropertyType)["kind"], SimpleType>
    >;

  const handlers: SerializeHandlerMap = {
    array: serializeArray,
    bytes: serializeByteArray,
    enumvalue: (options) =>
      serializeType({ ...options, type: options.type.valueType }),
    model: serializeModelPropertiesInline,
    offsetDateTime: serializeDatetime,
    plainDate: ({ valueExpr }) => `(${valueExpr}).toDateString()`,
    plainTime: ({ valueExpr }) => `(${valueExpr}).toTimeString()`,
    property: serializeModelProperty,
    // TODO: This is the function that emits the body of a function meant to serialize a type union.
    // It's implemented as a switch statement. This is fine for a function body. However,
    // `getSerializeHandler` is designed to always return something that can go in expression
    // position. We may or may not decide to emit a function to serialize anonymous unions using the
    // TCGC generated name as its identifier. If we don't, a copy of this function will need to be
    // adapted to expression position (e.g. nested ternary statements). As it stands, this function
    // should never actually be dispatched, and should be removed if we find it to be unnecessary.
    union: serializeUnionInline,
    utcDateTime: serializeDatetime,

    duration: placeholder,
    tuple: placeholder,
    dict: placeholder,
    credential: placeholder,

    endpoint: placeholder,
    method: placeholder,
    query: placeholder,
    path: placeholder,
    body: placeholder,
    header: serializeHeader
  };
  const handler = handlers[kind];
  return handler as any;
}

function serializeByteArray(
  options: SerializeTypeOptions<SdkType & { kind: "bytes" }>
): string {
  const { functionType, type, valueExpr, importCallback } = options;

  if (type.encode === "binary") {
    return valueExpr;
  }

  const format = getEncodingFormat(functionType, type);
  const args = [valueExpr, `"${format}"`].join(", ");

  if (functionType === UsageFlags.Input) {
    importCallback("coreUtil", "uint8ArrayToString");
    return `uint8ArrayToString(${args})`;
  }
  importCallback("coreUtil", "stringToUint8Array");
  return `(typeof (${valueExpr}) === 'string')
      ? (stringToUint8Array(${args}))
      : (${valueExpr})`;
}

export function serializeModelPropertiesInline(
  options: SerializeTypeOptions<SdkModelType>
): string {
  const { dpgContext, functionType, type, valueExpr } = options;
  const props = type.properties.filter((p) => p.kind === "property");
  const serializedParents = type.baseModel
    ? `...(${serializeType({ ...options, type: type.baseModel })})`
    : undefined;
  const serializedProps = props.map((prop) => {
    const id = getParameterTypePropertyName(dpgContext, functionType, prop);
    return serializeModelProperty({
      ...options,
      type: prop,
      valueExpr: `${valueExpr}["${id}"]`
    });
  });
  const body = [`...(${valueExpr})`, serializedParents, ...serializedProps]
    .filter(isDefined)
    .join(",\n");
  return `{${body}}`;
}

export function serializeUnionInline(
  options: SerializeTypeOptions<SdkUnionType>
): string {
  const { dpgContext, type, valueExpr } = options;
  const discriminator = getDiscriminator(dpgContext.program, type.__raw!)
    ?.propertyName;
  if (!discriminator) {
    return placeholder();
  }
  const baseType = type.values.find((v) => v.kind !== "constant")!;
  const variants = type.values.filter(
    (v) => v !== baseType
  ) as SdkConstantType[];
  // TODO: Used to catch corner cases during testing. Remove this before shipping.
  variants
    .filter((v) => v.kind !== "constant")
    .forEach((v) => {
      throw Error(
        `TODO: Handle non-constant non-base variant of union ${type.name} ` +
          `with type name ${v.name} and kind ${v.kind}`
      );
    });
  const cases = variants
    .map((variant) => {
      `${variant.value}: ${serializeType({
        ...options,
        type: variant
      })}`;
    })
    .join(",\n");
  // TODO: Non-discriminated unions have UB at the moment, as opposed to having good messaging that
  // they're not supported
  return `({${cases}})[(${valueExpr})["${discriminator}"]] ?? (${serializeType({
    ...options,
    type: baseType
  })})`;
}

export function serializeEnumFunctionBody(
  options: SerializeTypeOptions<SdkEnumType>
): string {
  const { type, valueExpr } = options;
  const defaultBody: Reify.Statement[] = [{ kind: "return", value: valueExpr }];

  const cases = _(type.values)
    .map((value): [string | undefined, Reify.Statement[]] => {
      const variantId = `${type.name}.${value.name}`;
      const variantBody: Reify.ReturnStatement[] = [
        {
          kind: "return",
          value: serializeType({ ...options, type: value.valueType })
        }
      ];
      return [variantId, variantBody];
    })
    .concat([[undefined, defaultBody]])
    .reduce((acc, [id, body]) => {
      const ids = acc.get(body) ?? new Set();
      ids.add(id);
      acc.set(body, ids);
      return acc;
    }, new Map<Reify.Statement[], Set<string | undefined>>());

  const functionBody: Reify.SwitchReturn = {
    kind: "switch return",
    expr: valueExpr,
    cases
  };

  return Reify.reifySwitchReturn(functionBody);
}

function serializeModelProperty(
  options: SerializeTypeOptions<SdkModelPropertyType>
): string {
  const { type, valueExpr } = options;

  const propDecl = getPropertyDeclaration(options);

  return type.optional
    ? `...((${valueExpr}) === undefined ? {} : {${propDecl}})`
    : `${propDecl}`;
}

function getPropertyDeclaration(
  options: SerializeTypeOptions<SdkModelPropertyType>
): string {
  const { dpgContext, functionType, type } = options;

  const id = getReturnTypePropertyName(dpgContext, functionType, type);
  const propInitializer = getPropertyInitializer(options);

  return `"${id}": (${propInitializer})`;
}

function getPropertyInitializer(
  options: SerializeTypeOptions<SdkModelPropertyType>
): string {
  const { type } = options;

  const propSerializer = serializeType({
    ...options,
    type: { ...type.type, nullable: false, optional: false }
  });

  return propSerializer;
}
