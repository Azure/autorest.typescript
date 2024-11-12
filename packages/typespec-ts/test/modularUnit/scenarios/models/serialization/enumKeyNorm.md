# skip: Should generate enum key normalization cases

## TypeSpec

This is tsp definition.

```tsp
union ExtensibleString {
  pascal: "pascal",
  pascalCase: "pascalCase",
  PascalCase: PascalCase,
  pascalcase: "pascalcase",
  Pascalcase: "Pascalcase",
  pascal_case_: "pascal_case_",
  pascal_case: "pascal_case",
  _pascal_case: "_pascal_case",
  `pascal, case`: "pascal, case",
  MAX_of_MLD: "MAX_of_MLD",
  ___pascal____case6666: "___pascal____case6666",
  _10Pascal: "_10Pascal",
  `090`: "090",
  `10`: "10",
  `1.0`: "1.0",
  `-1.0`: "-1.0",
  string,
}


union ExtensibleNumber {
  "One": 1,
  "2": 2,
  "-2.1": -2.1,
  int8
}
model Foo {
  extensibleString: ExtensibleString;
  extensibleNumber: ExtensibleNumber;
}
op post(@body body: Foo): void;
```

This is the tspconfig.yaml.

```yaml
experimentalExtensibleEnums: true
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface Foo */
export interface Foo {
  extensibleString: ExtensibleString;
  extensibleNumber: ExtensibleNumber;
}

export function fooSerializer(item: Foo): any {
  return {
    extensibleString: item["extensibleString"],
    extensibleNumber: item["extensibleNumber"]
  };
}

/** Known values of {@link ExtensibleString} that the service accepts. */
export enum KnownExtensibleString {
  Pascal = "pascal",
  // Please note duplicated names here and see design doc for more details
  PascalCase = "pascalCase",
  PascalCase = "PascalCase",
  Pascalcase = "pascalcase",
  Pascalcase = "Pascalcase",
  PascalCase = "pascal_case_",
  PascalCase = "pascal_case",
  PascalCase = "_pascal_case",
  PascalCase = "pascal, case",
  MaxOfMld = "MAX_of_MLD",
  PascalCase6666 = "___pascal____case6666",
  "10Pascal" = "_10Pascal",
  "090" = "090",
  Number10 = "10",
  "Number1.0" = "1.0",
  "Number-1.0" = "-1.0"
}

/** Type of ExtensibleString */
export type ExtensibleString = string;

/** Known values of {@link ExtensibleNumber} that the service accepts. */
export enum KnownExtensibleNumber {
  "One" = 1,
  "Number2" = 2,
  "Number-2.1" = -2.1
}

/** Type of ExtensibleNumber */
export type ExtensibleNumber = number;
```
