# Should generate serializers for discriminator property

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

# Should generate discriminator property with union type

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

# Should generate serializers for TCGC `@hierarchyBuilding` with discriminator property

Verify that the serializers are correctly referenced within the switch statement of the base serializers.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/http";
import "@typespec/versioning";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using TypeSpec.Versioning;
using Azure.ClientGenerator.Core;

@service(#{
  title: "Microsoft.Contoso management service",
})
@versioned(Microsoft.Contoso.Versions)
namespace Microsoft.Contoso;

enum Versions {
  PreviewVersion: "2024-07-01-preview",
  `2024-07-01`,
  `2024-08-01-preview`
}

alias PetContent = {
  @doc("Whether the pet is trained")
  trained: boolean;
};

@discriminator("kind")
model Animal {
  @doc("The kind of animal")
  kind: string;

  @doc("Name of the animal")
  name: string;
}

model Pet extends Animal {
  kind: "pet";
  ...PetContent;
}

alias DogContent = {
  @doc("The breed of the dog")
  breed: string;
};

@global.Azure.ClientGenerator.Core.Legacy.hierarchyBuilding(Pet)
model Dog extends Animal {
  kind: "dog";
  ...PetContent;
  ...DogContent;
}

@route("/serialize")
interface D {
  @put
  updatePetAsAnimal(@body animal: Animal): Animal;
}
```

This is the tspconfig.yaml.

```yaml
withRawContent: true
mustEmptyDiagnostic: false
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface Animal */
export interface Animal {
  /** The kind of animal */
  /** The discriminator possible values: pet, dog */
  kind: string;
  /** Name of the animal */
  name: string;
}

export function animalSerializer(item: Animal): any {
  return { kind: item["kind"], name: item["name"] };
}

export function animalDeserializer(item: any): Animal {
  return {
    kind: item["kind"],
    name: item["name"],
  };
}

/** Alias for AnimalUnion */
export type AnimalUnion = PetUnion | Animal;

export function animalUnionSerializer(item: AnimalUnion): any {
  switch (item.kind) {
    case "pet":
    case "dog":
      return petUnionSerializer(item as PetUnion);

    default:
      return animalSerializer(item);
  }
}

export function animalUnionDeserializer(item: any): AnimalUnion {
  switch (item.kind) {
    case "pet":
    case "dog":
      return petUnionDeserializer(item as PetUnion);

    default:
      return animalDeserializer(item);
  }
}

/** model interface Pet */
export interface Pet extends Animal {
  kind: "pet" | "dog";
  /** Whether the pet is trained */
  trained: boolean;
}

export function petSerializer(item: Pet): any {
  return { kind: item["kind"], name: item["name"], trained: item["trained"] };
}

export function petDeserializer(item: any): Pet {
  return {
    kind: item["kind"],
    name: item["name"],
    trained: item["trained"],
  };
}

/** Alias for PetUnion */
export type PetUnion = Dog | Pet;

export function petUnionSerializer(item: PetUnion): any {
  switch (item.kind) {
    case "dog":
      return dogSerializer(item as Dog);

    default:
      return petSerializer(item);
  }
}

export function petUnionDeserializer(item: any): PetUnion {
  switch (item.kind) {
    case "dog":
      return dogDeserializer(item as Dog);

    default:
      return petDeserializer(item);
  }
}

/** model interface Dog */
export interface Dog extends Pet {
  kind: "dog";
  /** The breed of the dog */
  breed: string;
}

export function dogSerializer(item: Dog): any {
  return {
    kind: item["kind"],
    trained: item["trained"],
    name: item["name"],
    breed: item["breed"],
  };
}

export function dogDeserializer(item: any): Dog {
  return {
    kind: item["kind"],
    trained: item["trained"],
    name: item["name"],
    breed: item["breed"],
  };
}

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2024-07-01-preview */
  PreviewVersion = "2024-07-01-preview",
  /** 2024-07-01 */
  _20240701 = "2024-07-01",
  /** 2024-08-01-preview */
  _20240801Preview = "2024-08-01-preview",
}
```
