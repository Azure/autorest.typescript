# Should generate serializers for discriminated model

Verify that the serializers are correctly referenced within the switch statement of the base serializers.

## TypeSpec

This is tsp definition.

```tsp
@discriminator("kind")
model AWidgetData {
    kind: string;
}

model AOAIModelConfig extends AWidgetData {
  kind: "kind0";
  fooProp: string;
}

model MAASModelConfig extends AWidgetData {
  kind: "kind1";
  start: utcDateTime;
  end?: utcDateTime;
}

@route("/serialize")
interface D {
  @get op bar(): AWidgetData;
}
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface AWidgetData */
export interface AWidgetData {
  kind: string;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function aWidgetDataDeserializer(item: any): AWidgetData {
  return {
    kind: item["kind"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** Alias for AWidgetDataUnion */
export type AWidgetDataUnion = AoaiModelConfig | MaasModelConfig | AWidgetData;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function aWidgetDataUnionDeserializer(item: any): AWidgetDataUnion {
  switch (item.kind) {
    case "kind0":
      return aoaiModelConfigDeserializer(item as AoaiModelConfig);

    case "kind1":
      return maasModelConfigDeserializer(item as MaasModelConfig);

    default:
      return aWidgetDataDeserializer(item);
  }
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface AoaiModelConfig */
export interface AoaiModelConfig extends AWidgetData {
  kind: "kind0";
  fooProp: string;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function aoaiModelConfigDeserializer(item: any): AoaiModelConfig {
  return {
    kind: item["kind"],
    fooProp: item["fooProp"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface MaasModelConfig */
export interface MaasModelConfig extends AWidgetData {
  kind: "kind1";
  start: Date;
  end?: Date;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function maasModelConfigDeserializer(item: any): MaasModelConfig {
  return {
    kind: item["kind"],
    start: new Date(item["start"]),
    end: !item["end"] ? item["end"] : new Date(item["end"]),
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
```

# Should generate discriminated model

Verify that the serializers are correctly referenced within the switch statement of the base serializers.

## TypeSpec

This is tsp definition.

```tsp
@discriminator("discountType")
model DiscountTypeProperties {
  discountType: DiscountType;

  @maxValue(100)
  discountPercentage?: float64;
}
union DiscountType {
  string,
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "For backward compatibility"
  ProductFamily: "ProductFamily",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "For backward compatibility"
  Product: "Product",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "For backward compatibility"
  Sku: "Sku",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "For backward compatibility"
  CustomPrice: "CustomPrice",
  #suppress "@azure-tools/typespec-azure-core/documentation-required" "For backward compatibility"
  CustomPriceMultiCurrency: "CustomPriceMultiCurrency",
}

model DiscountTypeProductFamily extends DiscountTypeProperties {
  productFamilyName?: string;
  discountType: "ProductFamily";
}

model DiscountTypeProduct extends DiscountTypeProperties {
  productFamilyName?: string;
  productId?: string;
  discountType: "Product";
}

model DiscountTypeProductSku extends DiscountTypeProperties {
  productFamilyName?: string;
  productId?: string;
  skuId?: string;
  discountType: "Sku";
}

#suppress "@azure-tools/typespec-azure-core/no-multiple-discriminator"
#suppress "@azure-tools/typespec-azure-core/no-string-discriminator"
@discriminator("discountType")
model DiscountTypeCustomPrice extends DiscountTypeProperties {
  productFamilyName?: string;
  productId?: string;
  skuId?: string;
}

#suppress "@azure-tools/typespec-azure-core/no-multiple-discriminator"
model DiscountTypeCustomPriceMultiCurrency extends DiscountTypeCustomPrice {
  discountType: "CustomPriceMultiCurrency";
}

@route("/serialize")
interface D {
  @get op bar(): DiscountTypeProperties;
}


```

## Provide generated models and its serializer
Generated Models.

```ts models
/** model interface DiscountTypeProperties */
export interface DiscountTypeProperties {
  discountType: DiscountType;
  discountPercentage?: number;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function discountTypePropertiesDeserializer(
  item: any,
): DiscountTypeProperties {
  return {
    discountType: item["discountType"],
    discountPercentage: item["discountPercentage"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** Alias for DiscountTypePropertiesUnion */
export type DiscountTypePropertiesUnion =
  | DiscountTypeProductFamily
  | DiscountTypeProduct
  | DiscountTypeProductSku
  | DiscountTypeProperties;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function discountTypePropertiesUnionDeserializer(
  item: any,
): DiscountTypePropertiesUnion {
  switch (item.discountType) {
    case "ProductFamily":
      return discountTypeProductFamilyDeserializer(
        item as DiscountTypeProductFamily,
      );

    case "Product":
      return discountTypeProductDeserializer(item as DiscountTypeProduct);

    case "Sku":
      return discountTypeProductSkuDeserializer(item as DiscountTypeProductSku);

    default:
      return discountTypePropertiesDeserializer(item);
  }
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** Type of DiscountType */
export type DiscountType =
  | "ProductFamily"
  | "Product"
  | "Sku"
  | "CustomPrice"
  | "CustomPriceMultiCurrency";

/** model interface DiscountTypeProductFamily */
export interface DiscountTypeProductFamily extends DiscountTypeProperties {
  productFamilyName?: string;
  discountType: "ProductFamily";
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function discountTypeProductFamilyDeserializer(
  item: any,
): DiscountTypeProductFamily {
  return {
    discountType: item["discountType"],
    discountPercentage: item["discountPercentage"],
    productFamilyName: item["productFamilyName"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface DiscountTypeProduct */
export interface DiscountTypeProduct extends DiscountTypeProperties {
  productFamilyName?: string;
  productId?: string;
  discountType: "Product";
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function discountTypeProductDeserializer(
  item: any,
): DiscountTypeProduct {
  return {
    discountType: item["discountType"],
    discountPercentage: item["discountPercentage"],
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
/** model interface DiscountTypeProductSku */
export interface DiscountTypeProductSku extends DiscountTypeProperties {
  productFamilyName?: string;
  productId?: string;
  skuId?: string;
  discountType: "Sku";
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function discountTypeProductSkuDeserializer(
  item: any,
): DiscountTypeProductSku {
  return {
    discountType: item["discountType"],
    discountPercentage: item["discountPercentage"],
    productFamilyName: item["productFamilyName"],
    productId: item["productId"],
    skuId: item["skuId"],
  };
}
/* eslint-enable @typescript-eslint/explicit-module-boundary-types */
```