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

export function aWidgetDataDeserializer(item: any): AWidgetData {
  return {
    kind: item["kind"],
  };
}

/** Alias for AWidgetDataUnion */
export type AWidgetDataUnion = AoaiModelConfig | MaasModelConfig | AWidgetData;

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

/** model interface AoaiModelConfig */
export interface AoaiModelConfig extends AWidgetData {
  kind: "kind0";
  fooProp: string;
}

export function aoaiModelConfigDeserializer(item: any): AoaiModelConfig {
  return {
    kind: item["kind"],
    fooProp: item["fooProp"],
  };
}

/** model interface MaasModelConfig */
export interface MaasModelConfig extends AWidgetData {
  kind: "kind1";
  start: Date;
  end?: Date;
}

export function maasModelConfigDeserializer(item: any): MaasModelConfig {
  return {
    kind: item["kind"],
    start: new Date(item["start"]),
    end: !item["end"] ? item["end"] : new Date(item["end"]),
  };
}
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

export function discountTypePropertiesDeserializer(
  item: any,
): DiscountTypeProperties {
  return {
    discountType: item["discountType"],
    discountPercentage: item["discountPercentage"],
  };
}

/** Alias for DiscountTypePropertiesUnion */
export type DiscountTypePropertiesUnion =
  | DiscountTypeProductFamily
  | DiscountTypeProduct
  | DiscountTypeProductSku
  | DiscountTypeProperties;

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

export function discountTypeProductFamilyDeserializer(
  item: any,
): DiscountTypeProductFamily {
  return {
    discountType: item["discountType"],
    discountPercentage: item["discountPercentage"],
    productFamilyName: item["productFamilyName"],
  };
}

/** model interface DiscountTypeProduct */
export interface DiscountTypeProduct extends DiscountTypeProperties {
  productFamilyName?: string;
  productId?: string;
  discountType: "Product";
}

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

/** model interface DiscountTypeProductSku */
export interface DiscountTypeProductSku extends DiscountTypeProperties {
  productFamilyName?: string;
  productId?: string;
  skuId?: string;
  discountType: "Sku";
}

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
```

# Should correctly handle PascalCase discriminator property names

Verify that discriminated union serializers correctly use camelCase property names when accessing discriminator properties in TypeScript interfaces, even when the TypeSpec property name is PascalCase.

## TypeSpec

This is tsp definition.

```tsp
@doc("Document type")
union DocumentType {
  string,
  Request: "Request",
  RemoteDependency: "RemoteDependency",
  Exception: "Exception",
  Event: "Event",
  Trace: "Trace",
  Unknown: "Unknown",
}

@discriminator("DocumentType")
model DocumentIngress {
  DocumentType: DocumentType;
  DocumentStreamIds?: string[];
  Properties?: string[];
}

model Request extends DocumentIngress {
  DocumentType: DocumentType.Request;
  Name?: string;
  Url?: string;
}

model Exception extends DocumentIngress {
  DocumentType: DocumentType.Exception;
  ExceptionType?: string;
  ExceptionMessage?: string;
}

@route("/documents")
interface DocumentService {
  op processDocument(@body body: DocumentIngress): DocumentIngress;
}
```

Should ignore the warning `@azure-tools/typespec-ts/property-name-normalized`:

```yaml
mustEmptyDiagnostic: false
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface DocumentIngress */
export interface DocumentIngress {
  documentType: DocumentType;
  documentStreamIds?: string[];
  properties?: string[];
}

export function documentIngressSerializer(item: DocumentIngress): any {
  return {
    DocumentType: item["documentType"],
    DocumentStreamIds: !item["documentStreamIds"]
      ? item["documentStreamIds"]
      : item["documentStreamIds"].map((p: any) => {
          return p;
        }),
    Properties: !item["properties"]
      ? item["properties"]
      : item["properties"].map((p: any) => {
          return p;
        }),
  };
}

export function documentIngressDeserializer(item: any): DocumentIngress {
  return {
    documentType: item["DocumentType"],
    documentStreamIds: !item["DocumentStreamIds"]
      ? item["DocumentStreamIds"]
      : item["DocumentStreamIds"].map((p: any) => {
          return p;
        }),
    properties: !item["Properties"]
      ? item["Properties"]
      : item["Properties"].map((p: any) => {
          return p;
        }),
  };
}

/** Alias for DocumentIngressUnion */
export type DocumentIngressUnion = Request | Exception | DocumentIngress;

export function documentIngressUnionSerializer(
  item: DocumentIngressUnion,
): any {
  switch (item.documentType) {
    case "Request":
      return requestSerializer(item as Request);

    case "Exception":
      return exceptionSerializer(item as Exception);

    default:
      return documentIngressSerializer(item);
  }
}

export function documentIngressUnionDeserializer(
  item: any,
): DocumentIngressUnion {
  switch (item.documentType) {
    case "Request":
      return requestDeserializer(item as Request);

    case "Exception":
      return exceptionDeserializer(item as Exception);

    default:
      return documentIngressDeserializer(item);
  }
}

/** Document type */
export type DocumentType =
  | "Request"
  | "RemoteDependency"
  | "Exception"
  | "Event"
  | "Trace"
  | "Unknown";

/** model interface Request */
export interface Request extends DocumentIngress {
  documentType: "Request";
  name?: string;
  url?: string;
}

export function requestSerializer(item: Request): any {
  return {
    DocumentType: item["documentType"],
    DocumentStreamIds: !item["documentStreamIds"]
      ? item["documentStreamIds"]
      : item["documentStreamIds"].map((p: any) => {
          return p;
        }),
    Properties: !item["properties"]
      ? item["properties"]
      : item["properties"].map((p: any) => {
          return p;
        }),
    Name: item["name"],
    Url: item["url"],
  };
}

export function requestDeserializer(item: any): Request {
  return {
    documentType: item["DocumentType"],
    documentStreamIds: !item["DocumentStreamIds"]
      ? item["DocumentStreamIds"]
      : item["DocumentStreamIds"].map((p: any) => {
          return p;
        }),
    properties: !item["Properties"]
      ? item["Properties"]
      : item["Properties"].map((p: any) => {
          return p;
        }),
    name: item["Name"],
    url: item["Url"],
  };
}

/** model interface Exception */
export interface Exception extends DocumentIngress {
  documentType: "Exception";
  exceptionType?: string;
  exceptionMessage?: string;
}

export function exceptionSerializer(item: Exception): any {
  return {
    DocumentType: item["documentType"],
    DocumentStreamIds: !item["documentStreamIds"]
      ? item["documentStreamIds"]
      : item["documentStreamIds"].map((p: any) => {
          return p;
        }),
    Properties: !item["properties"]
      ? item["properties"]
      : item["properties"].map((p: any) => {
          return p;
        }),
    ExceptionType: item["exceptionType"],
    ExceptionMessage: item["exceptionMessage"],
  };
}

export function exceptionDeserializer(item: any): Exception {
  return {
    documentType: item["DocumentType"],
    documentStreamIds: !item["DocumentStreamIds"]
      ? item["DocumentStreamIds"]
      : item["DocumentStreamIds"].map((p: any) => {
          return p;
        }),
    properties: !item["Properties"]
      ? item["Properties"]
      : item["Properties"].map((p: any) => {
          return p;
        }),
    exceptionType: item["ExceptionType"],
    exceptionMessage: item["ExceptionMessage"],
  };
}
```