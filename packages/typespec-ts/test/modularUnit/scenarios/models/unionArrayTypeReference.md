# Discriminated Union should be not normalized

## TypeSpec

```tsp
@discriminator("nfviType")
model NFVIs {
  name?: string;
  nfviType: string;
}

model AzureCoreNFVIDetails extends NFVIs {
  location?: string;
  nfviType: "AzureCore";
}

model AzureArcK8sClusterNFVIDetails extends NFVIs {
  customLocationId?: string;
  nfviType: "AzureArcKubernetes";
}

model SiteProperties {
  nfvis?: NFVIs[];
}

@route("/sites")
interface SiteOperations {
  @post
  createSite(@body body: SiteProperties): SiteProperties;
}
```

## Output

```ts models
/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface SiteProperties */
export interface SiteProperties {
  nfvis?: NFVIsUnion[];
}

export function sitePropertiesSerializer(item: SiteProperties): any {
  return { nfvis: !item["nfvis"] ? item["nfvis"] : nfvisUnionArraySerializer(item["nfvis"]) };
}

export function sitePropertiesDeserializer(item: any): SiteProperties {
  return {
    nfvis: !item["nfvis"] ? item["nfvis"] : nfvisUnionArrayDeserializer(item["nfvis"]),
  };
}

export function nfvisUnionArraySerializer(result: Array<NFVIsUnion>): any[] {
  return result.map((item) => {
    return nfvisUnionSerializer(item);
  });
}

export function nfvisUnionArrayDeserializer(result: Array<NFVIsUnion>): any[] {
  return result.map((item) => {
    return nfvisUnionDeserializer(item);
  });
}

/** model interface NFVIs */
export interface NFVIs {
  name?: string;
  nfviType: string;
}

export function nfvIsSerializer(item: NFVIs): any {
  return { name: item["name"], nfviType: item["nfviType"] };
}

export function nfvIsDeserializer(item: any): NFVIs {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
  };
}

/** Alias for NFVIsUnion */
export type NFVIsUnion = AzureCoreNfviDetails | AzureArcK8SClusterNfviDetails | NFVIs;

export function nfvisUnionSerializer(item: NFVIsUnion): any {
  switch (item.nfviType) {
    case "AzureCore":
      return azureCoreNfviDetailsSerializer(item as AzureCoreNfviDetails);

    case "AzureArcKubernetes":
      return azureArcK8SClusterNfviDetailsSerializer(item as AzureArcK8SClusterNfviDetails);

    default:
      return nfvIsSerializer(item);
  }
}

export function nfvisUnionDeserializer(item: any): NFVIsUnion {
  switch (item.nfviType) {
    case "AzureCore":
      return azureCoreNfviDetailsDeserializer(item as AzureCoreNfviDetails);

    case "AzureArcKubernetes":
      return azureArcK8SClusterNfviDetailsDeserializer(item as AzureArcK8SClusterNfviDetails);

    default:
      return nfvIsDeserializer(item);
  }
}

/** model interface AzureCoreNfviDetails */
export interface AzureCoreNfviDetails extends NFVIs {
  location?: string;
  nfviType: "AzureCore";
}

export function azureCoreNfviDetailsSerializer(item: AzureCoreNfviDetails): any {
  return { name: item["name"], nfviType: item["nfviType"], location: item["location"] };
}

export function azureCoreNfviDetailsDeserializer(item: any): AzureCoreNfviDetails {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
    location: item["location"],
  };
}

/** model interface AzureArcK8SClusterNfviDetails */
export interface AzureArcK8SClusterNfviDetails extends NFVIs {
  customLocationId?: string;
  nfviType: "AzureArcKubernetes";
}

export function azureArcK8SClusterNfviDetailsSerializer(item: AzureArcK8SClusterNfviDetails): any {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
    customLocationId: item["customLocationId"],
  };
}

export function azureArcK8SClusterNfviDetailsDeserializer(
  item: any,
): AzureArcK8SClusterNfviDetails {
  return {
    name: item["name"],
    nfviType: item["nfviType"],
    customLocationId: item["customLocationId"],
  };
}
```
