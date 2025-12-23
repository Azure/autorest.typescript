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
      item["optionalSsvColors"] == null
        ? item["optionalSsvColors"]
        : parseSsvCollection(item["optionalSsvColors"]),
    optionalNewlineColors:
      item["optionalNewlineColors"] == null
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
      item["categories"] == null ? item["categories"] : parsePipeCollection(item["categories"]),
  };
}
```
