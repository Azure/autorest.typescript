import { Type } from "../modularCodeModel.js";
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
const specialVariantMap = new Map<Type, boolean>();
export function isSpecialUnionVariant(
  t: Type,
  variantStack: Type[] = []
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
    t.type === "datetime" ||
    t.type === "byte-array" ||
    (t.type === "model" &&
      t.properties
        ?.filter((p) => {
          return !(
            variantStack.includes(p.type) ||
            ancestors.includes(p.type) ||
            (p.type.type === "list" &&
              p.type.elementType &&
              (variantStack.includes(p.type.elementType) ||
                ancestors.includes(p.type.elementType)))
          );
        })
        ?.some(
          (p) =>
            p.clientName !== p.restApiName ||
            isSpecialUnionVariant(p.type, [...variantStack, p.type])
        )) ||
    isPolymorphicUnion(t) ||
    (t.type === "list" &&
      t.elementType &&
      !variantStack.includes(t.elementType) &&
      !ancestors.includes(t.elementType) &&
      isSpecialUnionVariant(t.elementType, [...variantStack, t.elementType])) ||
    (t.type === "combined" &&
      t.types
        ?.filter((p) => {
          return !(variantStack.includes(p) || ancestors.includes(p));
        })
        ?.some((p) => {
          return isSpecialUnionVariant(p, [...variantStack, p]);
        })) ||
    (t.type === "enum" && !(t.isFixed || t.isNonExhaustive))
  ) {
    specialVariantMap.set(t, true);
    variantStack.pop();
    return true;
  }
  variantStack.pop();
  specialVariantMap.set(t, false);
  return false;
}

export function isNormalUnion(t: Type): boolean {
  return (
    t.type === "combined" &&
    !(
      t.types?.some((p) => {
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

export function isSpecialHandledUnion(t: Type): boolean {
  return isDiscriminatedUnion(t.tcgcType!) || isPolymorphicUnion(t);
}

const polymorphicUnionMap = new Map<Type, boolean>();
export function isPolymorphicUnion(t: Type): boolean {
  if (polymorphicUnionMap.has(t)) {
    return polymorphicUnionMap.get(t) ?? false;
  }
  const ancestors = getAllAncestors(t);
  if (
    t.type === "model" &&
    t.isPolymorphicBaseModel &&
    t.types
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
