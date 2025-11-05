# Should generate enum key normalization cases

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

union ExtensibleString {
  pascal: "pascal",
  pascalCase1: "pascalCase1",
  PascalCase2: "PascalCase2",
  pascalcase3: "pascalcase3",
  Pascalcase4: "Pascalcase4",
  pascal_case_5: "pascal_case_5",
  pascal_case6: "pascal_case6",
  _pascal_case7: "_pascal_case7",
  `pascal, case8`: "pascal, case8",
  MAX_of_MLD: "MAX_of_MLD",
  // we will keep the upper case
  YES_OR_NO1: "YES OR NO",
  YES_OR_NO2: "YES OR NO",
  VALIDATION_SUCCESS: "VALIDATION_SUCCESS",
  ___pascal____case6666: "___pascal____case6666",
  _10Pascal: "_10Pascal",
  `090`: "090",
  `10`: "10",
  `20`: "20",
  `1.0`: "1.0",
  `-2.0`: "-2.0",
  string,
}

union ExtensibleNumber {
  One: 1,
  `2`: 2,
  `-2.1`: -2.1,
  3,
  int8,
}


enum Versions {
  PreviewVersion: "2024-07-01-preview",
  `2024-07-01`,
  `2024-08-01-preview`
}

model Foo {
  extensibleString: ExtensibleString;
  extensibleNumber: ExtensibleNumber;
}
op post(@body body: Foo): void;
@@clientName(ExtensibleString.`-2.0`, "$DO_NOT_NORMALIZE$Item-1.0");
@@clientName(ExtensibleString.`YES_OR_NO2`, "Yes_Or_No2");
@@clientName(Versions.`2024-07-01`, "StableVersion");
```

This is the tspconfig.yaml.

```yaml
withRawContent: true
mustEmptyDiagnostic: false
experimental-extensible-enums: true
```

## Provide generated models and its serializer

Generated Models.

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Foo */
export interface Foo {
  extensibleString: ExtensibleString;
  extensibleNumber: ExtensibleNumber;
}

export function fooSerializer(item: Foo): any {
  return {
    extensibleString: item["extensibleString"],
    extensibleNumber: item["extensibleNumber"],
  };
}

/** Known values of {@link ExtensibleString} that the service accepts. */
export enum KnownExtensibleString {
  /** pascal */
  Pascal = "pascal",
  /** pascalCase1 */
  PascalCase1 = "pascalCase1",
  /** PascalCase2 */
  PascalCase2 = "PascalCase2",
  /** pascalcase3 */
  Pascalcase3 = "pascalcase3",
  /** Pascalcase4 */
  Pascalcase4 = "Pascalcase4",
  /** pascal_case_5 */
  PascalCase5 = "pascal_case_5",
  /** pascal_case6 */
  PascalCase6 = "pascal_case6",
  /** _pascal_case7 */
  PascalCase7 = "_pascal_case7",
  /** pascal, case8 */
  PascalCase8 = "pascal, case8",
  /** MAX_of_MLD */
  MAXOfMLD = "MAX_of_MLD",
  /** YES OR NO */
  YESORNO1 = "YES OR NO",
  /** YES OR NO */
  YesOrNo2 = "YES OR NO",
  /** VALIDATION_SUCCESS */
  ValidationSuccess = "VALIDATION_SUCCESS",
  /** ___pascal____case6666 */
  PascalCase6666 = "___pascal____case6666",
  /** _10Pascal */
  _10Pascal = "_10Pascal",
  /** 090 */
  _090 = "090",
  /** 10 */
  _10 = "10",
  /** 20 */
  _20 = "20",
  /** 1.0 */
  _10 = "1.0",
  /** -2.0 */
  "Item-1.0" = "-2.0",
}

/** Type of ExtensibleString */
export type ExtensibleString = string;

/** Known values of {@link ExtensibleNumber} that the service accepts. */
export enum KnownExtensibleNumber {
  /** 1 */
  One = 1,
  /** 2 */
  _2 = 2,
  /** -2.1 */
  _21 = -2.1,
  /** 3 */
  _3 = 3,
}

/** Type of ExtensibleNumber */
export type ExtensibleNumber = number;

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2024-07-01-preview */
  PreviewVersion = "2024-07-01-preview",
  /** 2024-07-01 */
  StableVersion = "2024-07-01",
  /** 2024-08-01-preview */
  _20240801Preview = "2024-08-01-preview",
}
```
