# Should generate collection format serializers for basic model properties

## TypeSpec

```tsp
model Widget {
  colors: string[];

  optionalColors?: string[];

  @encode(ArrayEncoding.commaDelimited)
  requiredCsvColors: string[];

  @encode(ArrayEncoding.pipeDelimited)
  requiredPipeColors: string[];

  @encode(ArrayEncoding.spaceDelimited)
  optionalSsvColors?: string[];

  @encode(ArrayEncoding.newlineDelimited)
  optionalNewlineColors?: string[];
}

@route("/widgets")
interface WidgetOperations {
  @post
  createWidget(@body widget: Widget): Widget;
}
```

## Models

```ts models
import { buildCsvCollection } from "../static-helpers/serialization/build-csv-collection.js";
import { buildNewlineCollection } from "../static-helpers/serialization/build-newline-collection.js";
import { buildPipeCollection } from "../static-helpers/serialization/build-pipe-collection.js";
import { buildSsvCollection } from "../static-helpers/serialization/build-ssv-collection.js";
import { parseCsvCollection } from "../static-helpers/serialization/parse-csv-collection.js";
import { parseNewlineCollection } from "../static-helpers/serialization/parse-newline-collection.js";
import { parsePipeCollection } from "../static-helpers/serialization/parse-pipe-collection.js";
import { parseSsvCollection } from "../static-helpers/serialization/parse-ssv-collection.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Widget */
export interface Widget {
  colors: string[];
  optionalColors?: string[];
  requiredCsvColors: string[];
  requiredPipeColors: string[];
  optionalSsvColors?: string[];
  optionalNewlineColors?: string[];
}

export function widgetSerializer(item: Widget): any {
  return {
    colors: item["colors"].map((p: any) => {
      return p;
    }),
    optionalColors: !item["optionalColors"]
      ? item["optionalColors"]
      : item["optionalColors"].map((p: any) => {
          return p;
        }),
    requiredCsvColors: buildCsvCollection(
      item["requiredCsvColors"].map((p: any) => {
        return p;
      }),
    ),
    requiredPipeColors: buildPipeCollection(
      item["requiredPipeColors"].map((p: any) => {
        return p;
      }),
    ),
    optionalSsvColors: !item["optionalSsvColors"]
      ? item["optionalSsvColors"]
      : buildSsvCollection(
          item["optionalSsvColors"].map((p: any) => {
            return p;
          }),
        ),
    optionalNewlineColors: !item["optionalNewlineColors"]
      ? item["optionalNewlineColors"]
      : buildNewlineCollection(
          item["optionalNewlineColors"].map((p: any) => {
            return p;
          }),
        ),
  };
}

export function widgetDeserializer(item: any): Widget {
  return {
    colors: item["colors"].map((p: any) => {
      return p;
    }),
    optionalColors: !item["optionalColors"]
      ? item["optionalColors"]
      : item["optionalColors"].map((p: any) => {
          return p;
        }),
    requiredCsvColors: parseCsvCollection(item["requiredCsvColors"]),
    requiredPipeColors: parsePipeCollection(item["requiredPipeColors"]),
    optionalSsvColors:
      item["optionalSsvColors"] === null || item["optionalSsvColors"] === undefined
        ? item["optionalSsvColors"]
        : parseSsvCollection(item["optionalSsvColors"]),
    optionalNewlineColors:
      item["optionalNewlineColors"] === null || item["optionalNewlineColors"] === undefined
        ? item["optionalNewlineColors"]
        : parseNewlineCollection(item["optionalNewlineColors"]),
  };
}
```

# Should generate collection format serializers for nested model properties

## TypeSpec

```tsp
model NestedWidget {
  @encode(ArrayEncoding.commaDelimited)
  tags: string[];

  @encode(ArrayEncoding.pipeDelimited)
  categories?: string[];
}

model ContainerWidget {
  name: string;
  nested: NestedWidget;
  optionalNested?: NestedWidget;
}

@route("/container")
interface ContainerOperations {
  @post
  createContainer(@body container: ContainerWidget): ContainerWidget;
}
```

## Models

```ts models
import { buildCsvCollection } from "../static-helpers/serialization/build-csv-collection.js";
import { buildPipeCollection } from "../static-helpers/serialization/build-pipe-collection.js";
import { parseCsvCollection } from "../static-helpers/serialization/parse-csv-collection.js";
import { parsePipeCollection } from "../static-helpers/serialization/parse-pipe-collection.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface ContainerWidget */
export interface ContainerWidget {
  name: string;
  nested: NestedWidget;
  optionalNested?: NestedWidget;
}

export function containerWidgetSerializer(item: ContainerWidget): any {
  return {
    name: item["name"],
    nested: nestedWidgetSerializer(item["nested"]),
    optionalNested: !item["optionalNested"]
      ? item["optionalNested"]
      : nestedWidgetSerializer(item["optionalNested"]),
  };
}

export function containerWidgetDeserializer(item: any): ContainerWidget {
  return {
    name: item["name"],
    nested: nestedWidgetDeserializer(item["nested"]),
    optionalNested: !item["optionalNested"]
      ? item["optionalNested"]
      : nestedWidgetDeserializer(item["optionalNested"]),
  };
}

/** model interface NestedWidget */
export interface NestedWidget {
  tags: string[];
  categories?: string[];
}

export function nestedWidgetSerializer(item: NestedWidget): any {
  return {
    tags: buildCsvCollection(
      item["tags"].map((p: any) => {
        return p;
      }),
    ),
    categories: !item["categories"]
      ? item["categories"]
      : buildPipeCollection(
          item["categories"].map((p: any) => {
            return p;
          }),
        ),
  };
}

export function nestedWidgetDeserializer(item: any): NestedWidget {
  return {
    tags: parseCsvCollection(item["tags"]),
    categories:
      item["categories"] === null || item["categories"] === undefined
        ? item["categories"]
        : parsePipeCollection(item["categories"]),
  };
}
```

# Should generate collection format serializers for string-based enum array properties

## TypeSpec

```tsp
enum Color {
  Red: "red",
  Blue: "blue",
  Green: "green"
}

union ColorsUnion {
  string,
  red: "red";
  blue: "blue";
  green: "green";
}

alias Type = "x" | "y" | "z";

model Widget {
  @encode(ArrayEncoding.commaDelimited)
  requiredCsvColors: Color[];

  @encode(ArrayEncoding.pipeDelimited)
  optionalPipeColors?: ColorsUnion[];

  @encode(ArrayEncoding.spaceDelimited)
  requiredSpaceTypes: ("a" | "b")[];

  @encode(ArrayEncoding.newlineDelimited)
  optionalSpaceTypes?: Type[];
}

@route("/widgets")
interface WidgetOperations {
  @post
  createWidget(@body widget: Widget): Widget;
}
```

This is the tspconfig.yaml.

```yaml
experimental-extensible-enums: true
```

## Models

```ts models
import { buildCsvCollection } from "../static-helpers/serialization/build-csv-collection.js";
import { buildNewlineCollection } from "../static-helpers/serialization/build-newline-collection.js";
import { buildPipeCollection } from "../static-helpers/serialization/build-pipe-collection.js";
import { buildSsvCollection } from "../static-helpers/serialization/build-ssv-collection.js";
import { parseCsvCollection } from "../static-helpers/serialization/parse-csv-collection.js";
import { parseNewlineCollection } from "../static-helpers/serialization/parse-newline-collection.js";
import { parsePipeCollection } from "../static-helpers/serialization/parse-pipe-collection.js";
import { parseSsvCollection } from "../static-helpers/serialization/parse-ssv-collection.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface Widget */
export interface Widget {
  requiredCsvColors: Color[];
  optionalPipeColors?: ColorsUnion[];
  requiredSpaceTypes: ("a" | "b")[];
  optionalSpaceTypes?: ("x" | "y" | "z")[];
}

export function widgetSerializer(item: Widget): any {
  return {
    requiredCsvColors: buildCsvCollection(
      item["requiredCsvColors"].map((p: any) => {
        return p;
      }),
    ),
    optionalPipeColors: !item["optionalPipeColors"]
      ? item["optionalPipeColors"]
      : buildPipeCollection(
          item["optionalPipeColors"].map((p: any) => {
            return p;
          }),
        ),
    requiredSpaceTypes: buildSsvCollection(
      item["requiredSpaceTypes"].map((p: any) => {
        return p;
      }),
    ),
    optionalSpaceTypes: !item["optionalSpaceTypes"]
      ? item["optionalSpaceTypes"]
      : buildNewlineCollection(
          item["optionalSpaceTypes"].map((p: any) => {
            return p;
          }),
        ),
  };
}

export function widgetDeserializer(item: any): Widget {
  return {
    requiredCsvColors: parseCsvCollection(item["requiredCsvColors"]) as Color[],
    optionalPipeColors:
      item["optionalPipeColors"] === null || item["optionalPipeColors"] === undefined
        ? item["optionalPipeColors"]
        : parsePipeCollection(item["optionalPipeColors"]),
    requiredSpaceTypes: parseSsvCollection(item["requiredSpaceTypes"]) as ("a" | "b")[],
    optionalSpaceTypes:
      item["optionalSpaceTypes"] === null || item["optionalSpaceTypes"] === undefined
        ? item["optionalSpaceTypes"]
        : (parseNewlineCollection(item["optionalSpaceTypes"]) as ("x" | "y" | "z")[]),
  };
}

/** Type of Color */
export type Color = "red" | "blue" | "green";

/** Known values of {@link ColorsUnion} that the service accepts. */
export enum KnownColorsUnion {
  /** red */
  Red = "red",
  /** blue */
  Blue = "blue",
  /** green */
  Green = "green",
}

/** Type of ColorsUnion */
export type ColorsUnion = string;
```
