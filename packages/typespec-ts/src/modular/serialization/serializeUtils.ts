import { getAllAncestors } from "../helpers/operationHelpers.js";
import {
  SdkModelPropertyType,
  SdkModelType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { getDirectSubtypes } from "../helpers/typeHelpers.js";

/**
 * Get all discriminated values for a given model type and given discriminator property.
 * @param type The model type to get discriminated values from.
 * @param discriminatorProperty The discriminator property to use for filtering.
 * @returns An array of all discriminated values.
 */
export function getAllDiscriminatedValues(
  type: SdkModelType,
  discriminatorProperty?: SdkModelPropertyType
) {
  if (!type.discriminatorValue) {
    return [];
  }
  const values: string[] = [];
  const children = [type];
  while (children.length > 0) {
    const model = children.shift()!;
    // skip if no discriminator value
    if (!model.discriminatorValue) {
      continue;
    }
    // Check if this model is a subtype of the given discriminator property
    if (
      !!discriminatorProperty &&
      model.baseModel?.discriminatorProperty?.name ===
        discriminatorProperty?.name
    ) {
      values.push(model.discriminatorValue);
      if (model.discriminatorProperty?.name === discriminatorProperty.name) {
        // Traverse subtypes also if they have the same discriminator property
        children.push(...getDirectSubtypes(model));
      }
    }
  }

  return values;
}

export function isSupportedSerializeType(type: SdkType): boolean {
  return (
    type.kind === "model" ||
    type.kind === "dict" ||
    type.kind === "array" ||
    type.kind === "union"
  );
}

/**
 *
 * In general, we have two kinds of basic special union variants.
 * 1. datetime type
 * 2. bytes type
 * If we consider model type, we have the following three type.
 * 3. model with property of datetime type.
 * 4. model with property of binary array type.
 * 5. model that has different property name between rest layer and modular layer.
 * 6. nested model i.e. model with property that is a model with one of the above three conditions.
 * If we consider array type, with all the above 6 types as the element types.
 */
const specialVariantMap = new Map<SdkType, boolean>();
export function isSpecialUnionVariant(
  t: SdkType & { isNonExhaustive?: boolean },
  variantStack: SdkType[] = []
): boolean {
  if (variantStack.length <= 0) {
    variantStack.push(t);
  }
  const ancestors = getAllAncestors(t);
  if (specialVariantMap.has(t)) {
    variantStack.pop();
    return specialVariantMap.get(t) ?? false;
  }

  if (
    t.kind === "utcDateTime" ||
    t.kind === "bytes" ||
    (t.kind === "model" &&
      t.properties
        ?.filter((p) => {
          return !(
            variantStack.includes(p.type) ||
            ancestors.includes(p.type) ||
            (p.type.kind === "array" &&
              p.type.valueType &&
              (variantStack.includes(p.type.valueType) ||
                ancestors.includes(p.type.valueType)))
          );
        })
        ?.some(
          (p) =>
            // eslint-disable-next-line
            (p.kind === "property" && p.name !== p.serializedName) ||
            isSpecialUnionVariant(p.type, [...variantStack, p.type])
        )) ||
    isPolymorphicUnion(t) ||
    (t.kind === "array" &&
      t.valueType &&
      !variantStack.includes(t.valueType) &&
      !ancestors.includes(t.valueType) &&
      isSpecialUnionVariant(t.valueType, [...variantStack, t.valueType])) ||
    (t.kind === "union" &&
      t.variantTypes
        ?.filter((p) => {
          return !(variantStack.includes(p) || ancestors.includes(p));
        })
        ?.some((p) => {
          return isSpecialUnionVariant(p, [...variantStack, p]);
        })) ||
    (t.kind === "enum" && !(t.isFixed || t.isNonExhaustive))
  ) {
    specialVariantMap.set(t, true);
    variantStack.pop();
    return true;
  }
  variantStack.pop();
  specialVariantMap.set(t, false);
  return false;
}

export function isNormalUnion(t: SdkType): boolean {
  return (
    t.kind === "union" &&
    !(
      t.variantTypes?.some((p) => {
        return isSpecialUnionVariant(p);
      }) ?? false
    )
  );
}

export function isDiscriminatedUnion(
  type: SdkType
): type is SdkModelType & { discriminatorProperty: SdkType } {
  if (!type) {
    return false;
  }
  return Boolean(
    type?.kind === "model" &&
    type.discriminatorProperty &&
    type.discriminatedSubtypes
  );
}

export function isSpecialHandledUnion(
  t: SdkType & { isNonExhaustive?: boolean }
): boolean {
  return isDiscriminatedUnion(t!) || isPolymorphicUnion(t);
}

const polymorphicUnionMap = new Map<SdkType, boolean>();
export function isPolymorphicUnion(t: SdkType): boolean {
  if (polymorphicUnionMap.has(t)) {
    return polymorphicUnionMap.get(t) ?? false;
  }
  const ancestors = getAllAncestors(t);
  if (
    t.kind === "model" &&
    t.discriminatedSubtypes &&
    Object.values(t.discriminatedSubtypes)
      ?.filter((p) => {
        return !ancestors.includes(p);
      })
      ?.some((p) => {
        return isSpecialUnionVariant(p);
      })
  ) {
    polymorphicUnionMap.set(t, true);
    return true;
  }
  polymorphicUnionMap.set(t, false);
  return false;
}

export interface ModelSerializeOptions {
  nameOnly: boolean;
  skipDiscriminatedUnionSuffix: boolean;
  // Indicates if the serializer is being built for a property that is flattened.
  flatten?: {
    baseModel: SdkModelType;
    property: SdkModelPropertyType;
  };
  // Indicates if any overrides should be applied when building the serializer/deserializer.
  overrides?: ModelOverrideOptions;
  // Predefined name to use for the serializer/deserializer instead of generating one.
  predefinedName?: string;
}

// Options for overriding model information during serialization/deserialization.
export interface ModelOverrideOptions {
  // If true, all properties will be treated as optional during serialization/deserialization.
  allOptional?: boolean;

  // The <Property, Client_Name> map for any renamed properties.
  // Mainly because the original client name has collision with other property names during flattening.
  propertyRenames?: Map<SdkModelPropertyType, string>;

  // If true (default), enable flattening for nested flatten properties when generating samples.
  // When false, nested flatten properties are not further flattened to match the TypeScript interface structure.
  enableFlatten?: boolean;
}

export function getPropertyWithOverrides(
  property: SdkModelPropertyType,
  overrides?: ModelOverrideOptions
): SdkModelPropertyType {
  if (!overrides) {
    return property;
  }
  let updatedProperty = property;
  if (overrides.allOptional) {
    updatedProperty = { ...updatedProperty, optional: true };
  }
  const renamedClientName = overrides.propertyRenames?.get(property);
  if (renamedClientName) {
    updatedProperty = { ...updatedProperty, name: renamedClientName };
  }
  return updatedProperty;
}
