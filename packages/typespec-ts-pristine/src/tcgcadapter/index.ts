// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * TCGC Adapter — Phase 1 of the emitter pipeline.
 *
 * This is the ONLY module that imports from @azure-tools/typespec-client-generator-core.
 * Its job is to consume the TCGC SdkContext and produce a TSCodeModel — our
 * language-specific intermediate representation.
 *
 * Downstream modules (codemodel, codegen) MUST NOT import TCGC types.
 * If you need data from TCGC in the renderer, add it to the code model here.
 *
 * Pattern: same as typespec-rust's `tcgcadapter/` and autorest.go's `TypeAdapter`.
 */

import type { EmitContext } from "@typespec/compiler";
import {
  createSdkContext,
  type SdkArrayType,
  type SdkBuiltInType,
  type SdkConstantType,
  type SdkContext,
  type SdkDictionaryType,
  type SdkEnumType,
  type SdkModelPropertyType,
  type SdkModelType,
  type SdkNullableType,
  type SdkTupleType,
  type SdkType,
  type SdkUnionType
} from "@azure-tools/typespec-client-generator-core";
import type {
  TSCodeModel,
  TSEnum,
  TSGenerationSettings,
  TSModel,
  TSProperty,
  TSUnion
} from "../codemodel/index.js";

/**
 * Adapts a TypeSpec emit context into a fully-resolved TSCodeModel.
 *
 * Internally calls createSdkContext() to get TCGC's language-neutral model,
 * then maps every TCGC construct into our TypeScript-specific IR types.
 *
 * @param context - TypeSpec emit context
 * @returns Complete code model ready for rendering
 */
export async function adaptSdkContext(context: EmitContext<Record<string, any>>): Promise<TSCodeModel> {
  const sdkContext = await createPristineSdkContext(context);

  return {
    settings: _resolveSettings(context),
    clients: [],
    models: _adaptModels(sdkContext),
    enums: _adaptEnums(sdkContext),
    unions: [],
    serializers: [],
    helpers: [],
    pagingInfo: { hasPaging: false },
    pollingInfo: { hasLro: false, emitRestorePoller: false }
  };
}

async function createPristineSdkContext(context: EmitContext<Record<string, any>>): Promise<SdkContext> {
  context.options = {
    ...context.options,
    "generate-protocol-methods": true,
    "generate-convenience-methods": true,
    emitters: [
      {
        main: "@azure-tools/typespec-ts-pristine",
        metadata: { name: "@azure-tools/typespec-ts-pristine" }
      }
    ]
  };

  return createSdkContext(context, "@azure-tools/typespec-ts-pristine", {
    flattenUnionAsEnum: false
  });
}

/**
 * Adapts TCGC clients into TSClient IR nodes.
 * Maps client hierarchy, parameters, methods, and operation groups.
 */
export function _adaptClients(): [] {
  return [];
}

/**
 * Adapts TCGC model types into TSModel IR nodes.
 * Maps properties, inheritance, discriminators, and additional properties.
 */
export function _adaptModels(sdkContext: SdkContext): TSModel[] {
  return sdkContext.sdkPackage.models.map(adaptModel);
}

function adaptModel(model: SdkModelType): TSModel {
  return {
    name: model.name,
    docs: getDocs(model),
    properties: model.properties.map(adaptProperty),
    baseModel: model.baseModel?.name,
    additionalPropertiesType: model.additionalProperties
      ? getTypeExpression(model.additionalProperties)
      : undefined,
    discriminator: model.discriminatorProperty
      ? {
          propertyName: model.discriminatorProperty.name,
          value: model.discriminatorValue,
          variants: Object.values(model.discriminatedSubtypes ?? {}).map((subtype) => subtype.name)
        }
      : undefined,
    needsSerializer: false,
    needsDeserializer: false
  };
}

function adaptProperty(property: SdkModelPropertyType): TSProperty {
  const serializedName = getSerializedName(property);
  return {
    name: property.name,
    type: getTypeExpression(property.type),
    optional: property.optional,
    readonly: isReadonly(property),
    serializedName: serializedName === property.name ? undefined : serializedName,
    docs: getDocs(property)
  };
}

/**
 * Adapts TCGC enum types into TSEnum IR nodes.
 * Maps members, fixed/extensible semantics, and value types.
 */
export function _adaptEnums(sdkContext: SdkContext): TSEnum[] {
  return sdkContext.sdkPackage.enums.map(adaptEnum);
}

function adaptEnum(enumType: SdkEnumType): TSEnum {
  return {
    name: enumType.name,
    docs: getDocs(enumType),
    members: enumType.values.map((member) => ({ name: member.name, value: member.value })),
    isExtensible: !enumType.isFixed,
    valueType: enumType.valueType.kind === "numeric" ? "number" : "string"
  };
}

/**
 * Adapts TCGC union types into TSUnion IR nodes.
 * Maps variants and discriminator metadata.
 */
export function _adaptUnions(): TSUnion[] {
  return [];
}

/**
 * Resolves emitter options and program metadata into TSGenerationSettings.
 */
export function _resolveSettings(context: EmitContext<Record<string, any>>): TSGenerationSettings {
  const packageDetails = getRecordOption(context.options, "package-details");
  const packageName = getStringOption(packageDetails, "name") ?? "@azure-tools/typespec-ts-pristine";
  const packageVersion = getStringOption(packageDetails, "version") ?? "1.0.0";

  return {
    packageName,
    packageVersion,
    flavor: packageName.startsWith("@azure/") ? "azure" : "unbranded",
    isArm: packageName.startsWith("@azure/arm-"),
    outputDir: context.emitterOutputDir,
    addCredentials: false,
    credentialScopes: [],
    isMultiClient: false,
    hierarchyClient: false
  };
}

function getTypeExpression(type: SdkType): string {
  switch (type.kind) {
    case "array":
      return `${wrapArrayElementType(getTypeExpression((type as SdkArrayType).valueType))}[]`;
    case "tuple":
      return `[${(type as SdkTupleType).valueTypes.map(getTypeExpression).join(", ")}]`;
    case "dict":
      return `Record<string, ${getTypeExpression((type as SdkDictionaryType).valueType)}>`;
    case "nullable":
      return `${getTypeExpression((type as SdkNullableType).type)} | null`;
    case "enum":
    case "model":
      return type.name;
    case "enumvalue":
      return JSON.stringify(type.value);
    case "constant":
      return JSON.stringify((type as SdkConstantType).value);
    case "union":
      return (type as SdkUnionType).variantTypes.map(getTypeExpression).join(" | ");
    case "utcDateTime":
    case "offsetDateTime":
      return "Date";
    case "duration":
      return "string";
    default:
      return getBuiltInTypeExpression(type as SdkBuiltInType);
  }
}

function getBuiltInTypeExpression(type: SdkBuiltInType): string {
  switch (type.kind) {
    case "boolean":
      return "boolean";
    case "bytes":
      return "Uint8Array";
    case "numeric":
    case "integer":
    case "safeint":
    case "int8":
    case "int16":
    case "int32":
    case "int64":
    case "uint8":
    case "uint16":
    case "uint32":
    case "uint64":
    case "float":
    case "float32":
    case "float64":
      return "number";
    case "plainDate":
    case "plainTime":
    case "url":
    case "string":
      return "string";
    case "unknown":
      return "unknown";
    default:
      return "any";
  }
}

function wrapArrayElementType(type: string): string {
  return type.includes(" | ") ? `(${type})` : type;
}

function getDocs(type: { doc?: string; summary?: string }): string[] {
  const docs = type.doc ?? type.summary;
  return docs ? docs.split(/\r?\n/) : [];
}

function getSerializedName(property: SdkModelPropertyType): string {
  return property.serializationOptions.json?.name ?? property.serializedName ?? property.name;
}

function isReadonly(property: SdkModelPropertyType): boolean {
  return (
    property.visibility?.some((visibility) => getVisibilityName(visibility) === "read") === true &&
    property.visibility.length === 1
  );
}

function getVisibilityName(visibility: unknown): string | undefined {
  return isRecord(visibility) && typeof visibility["name"] === "string" ? visibility["name"] : undefined;
}

function getRecordOption(options: object, key: string): Record<string, unknown> {
  const value = (options as Record<string, unknown>)[key];
  return isRecord(value) ? value : {};
}

function getStringOption(options: Record<string, unknown>, key: string): string | undefined {
  const value = options[key];
  return typeof value === "string" ? value : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
