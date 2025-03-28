import { getAllAncestors } from "../helpers/operationHelpers.js";
import {
  SdkModelType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";

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
            (p.kind === "property" &&
              p.name !== p.serializedName) ||
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
}
