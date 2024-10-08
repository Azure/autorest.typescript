# only: Should generate deserializer for property types
Will prompt all operations into top-level.

## TypeSpec

This is tsp definition.

```tsp
model SimpleModel {
  propString: string;
  propboolean: boolean;
  propNumber: int32;
  propStringOptional?: string;
  propSimpleUnion: string | boolean | int32;
  propSimpleUnionOptional?: string | boolean | int32;
  propStringLiteral: "A";
  propBooleanLiteral: false;
  propNumberLiteral: 1;
  propStringLiteralOptional?: "A";
  propStringUnion: "A" | "B";
  propStringUnionOptioanl: "A" | "B";
  propStringUnionNullable: "A" | "B" | null;
  propStringUnionAsExtensible: "A" | "B" | string;
  propStringUnionAsExtensibleOptional?: "A" | "B" | string;
  propStringUnionAsExtensibleNullable: "A" | "B" | string | null;
  propStringUnionAsExtensibleOptionalAndNullable?: "A" | "B" | string | null;
  propMixedTypeLiteral: "A" | false | 1;
  propStringArray: string[];
  propBooleanArray: boolean[];
  propNumberArray: int32[];
  propSimpleUnionArray: (string | boolean | int32)[];
  propStringArrayOptional?: string[];
  propSimpleUnionArrayOptional?: (string | boolean | int32)[];
  propRecordOfString: Record<string>;
  propRecordOfBoolean: Record<boolean>;
  propRecordOfNumber: Record<int32>;
  propRecordOfSimpleUnion: Record<string | boolean | int32>;
  propRecordOfStringOptional?: Record<string>;
  propRecordOfStringArray: Record<string[]>;
  propArrayOfRecordOfString: Record<string>[];
  propArrayOfRecordOfStringOptional?: Record<string>[];
  propRecordOfUnionArray: Record<(string | boolean | int32)[]>;
  propRecordOfUnionArrayOptional?: Record<(string | boolean | int32)[]>;
  propArrayOfRecordOfUnion: Record<string | boolean | int32>[];
  propArrayOfRecordOfUnionOptional?: Record<string | boolean | int32>[];
  @encodedName("application/json", "prop_encoded")
  propEncoded: string;
}

@route("/serialize")
interface D {
  op bar(): { @body body: SimpleModel };
}
```

This is the tspconfig.yaml.

```yaml
experimentalExtensibleEnums: true
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** model interface SimpleModel */
export interface SimpleModel {
  propString: string;
  propboolean: boolean;
  propNumber: number;
  propStringOptional?: string;
  propSimpleUnion: string | boolean | number;
  propSimpleUnionOptional?: string | boolean | number;
  propStringLiteral: "A";
  propBooleanLiteral: false;
  propNumberLiteral: 1;
  propStringLiteralOptional?: "A";
  propStringUnion: "A" | "B";
  propStringUnionOptioanl: "A" | "B";
  propStringUnionNullable: ("A" | "B") | null;
  propStringUnionAsExtensible: "A" | "B";
  propStringUnionAsExtensibleOptional?: "A" | "B";
  propStringUnionAsExtensibleNullable: ("A" | "B") | null;
  propStringUnionAsExtensibleOptionalAndNullable?: ("A" | "B") | null;
  propMixedTypeLiteral: "A" | false | 1;
  propStringArray: string[];
  propBooleanArray: boolean[];
  propNumberArray: number[];
  propSimpleUnionArray: (string | boolean | number)[];
  propStringArrayOptional?: string[];
  propSimpleUnionArrayOptional?: (string | boolean | number)[];
  propRecordOfString: Record<string, string>;
  propRecordOfBoolean: Record<string, boolean>;
  propRecordOfNumber: Record<string, number>;
  propRecordOfSimpleUnion: Record<string, string | boolean | number>;
  propRecordOfStringOptional?: Record<string, string>;
  propRecordOfStringArray: Record<string, string[]>;
  propArrayOfRecordOfString: Record<string, string>[];
  propArrayOfRecordOfStringOptional?: Record<string, string>[];
  propRecordOfUnionArray: Record<string, (string | boolean | number)[]>;
  propRecordOfUnionArrayOptional?: Record<
    string,
    (string | boolean | number)[]
  >;
  propArrayOfRecordOfUnion: Record<string, string | boolean | number>[];
  propArrayOfRecordOfUnionOptional?: Record<
    string,
    string | boolean | number
  >[];
  propEncoded: string;
}

export function simpleModelDeserializer(item: any): SimpleModel {
  return {
    propString: item["propString"],
    propboolean: item["propboolean"],
    propNumber: item["propNumber"],
    propStringOptional: item["propStringOptional"],
    propSimpleUnion: simpleModelPropSimpleUnionDeserializer(
      item["propSimpleUnion"],
    ),
    propSimpleUnionOptional: !item["propSimpleUnionOptional"]
      ? item["propSimpleUnionOptional"]
      : simpleModelPropSimpleUnionOptionalDeserializer(
          item["propSimpleUnionOptional"],
        ),
    propStringLiteral: item["propStringLiteral"],
    propBooleanLiteral: item["propBooleanLiteral"],
    propNumberLiteral: item["propNumberLiteral"],
    propStringLiteralOptional: item["propStringLiteralOptional"],
    propStringUnion: item["propStringUnion"],
    propStringUnionOptioanl: item["propStringUnionOptioanl"],
    propStringUnionNullable: item["propStringUnionNullable"],
    propStringUnionAsExtensible: item["propStringUnionAsExtensible"],
    propStringUnionAsExtensibleOptional:
      item["propStringUnionAsExtensibleOptional"],
    propStringUnionAsExtensibleNullable:
      item["propStringUnionAsExtensibleNullable"],
    propStringUnionAsExtensibleOptionalAndNullable:
      item["propStringUnionAsExtensibleOptionalAndNullable"],
    propMixedTypeLiteral: simpleModelPropMixedTypeLiteralDeserializer(
      item["propMixedTypeLiteral"],
    ),
    propStringArray: item["propStringArray"].map((p: any) => {
      return p;
    }),
    propBooleanArray: item["propBooleanArray"].map((p: any) => {
      return p;
    }),
    propNumberArray: item["propNumberArray"].map((p: any) => {
      return p;
    }),
    propSimpleUnionArray: simpleModelPropSimpleUnionArrayArrayDeserializer(
      item["propSimpleUnionArray"],
    ),
    propStringArrayOptional: !item["propStringArrayOptional"]
      ? item["propStringArrayOptional"]
      : item["propStringArrayOptional"].map((p: any) => {
          return p;
        }),
    propSimpleUnionArrayOptional: !item["propSimpleUnionArrayOptional"]
      ? item["propSimpleUnionArrayOptional"]
      : simpleModelPropSimpleUnionArrayOptionalArrayDeserializer(
          item["propSimpleUnionArrayOptional"],
        ),
    propRecordOfString: item["propRecordOfString"],
    propRecordOfBoolean: item["propRecordOfBoolean"],
    propRecordOfNumber: item["propRecordOfNumber"],
    propRecordOfSimpleUnion:
      simpleModelPropRecordOfSimpleUnionRecordDeserializer(
        item["propRecordOfSimpleUnion"],
      ),
    propRecordOfStringOptional: item["propRecordOfStringOptional"],
    propRecordOfStringArray: item["propRecordOfStringArray"],
    propArrayOfRecordOfString: item["propArrayOfRecordOfString"].map(
      (p: any) => {
        return p;
      },
    ),
    propArrayOfRecordOfStringOptional: !item[
      "propArrayOfRecordOfStringOptional"
    ]
      ? item["propArrayOfRecordOfStringOptional"]
      : item["propArrayOfRecordOfStringOptional"].map((p: any) => {
          return p;
        }),
    propRecordOfUnionArray:
      simpleModelPropRecordOfUnionArrayArrayRecordDeserializer(
        item["propRecordOfUnionArray"],
      ),
    propRecordOfUnionArrayOptional: !item["propRecordOfUnionArrayOptional"]
      ? item["propRecordOfUnionArrayOptional"]
      : simpleModelPropRecordOfUnionArrayOptionalArrayRecordDeserializer(
          item["propRecordOfUnionArrayOptional"],
        ),
    propArrayOfRecordOfUnion:
      simpleModelPropArrayOfRecordOfUnionRecordArrayDeserializer(
        item["propArrayOfRecordOfUnion"],
      ),
    propArrayOfRecordOfUnionOptional: !item["propArrayOfRecordOfUnionOptional"]
      ? item["propArrayOfRecordOfUnionOptional"]
      : simpleModelPropArrayOfRecordOfUnionOptionalRecordArrayDeserializer(
          item["propArrayOfRecordOfUnionOptional"],
        ),
    propEncoded: item["prop_encoded"],
  };
}

/** Alias for SimpleModelPropSimpleUnion */
export type SimpleModelPropSimpleUnion = string | boolean | number;

export function simpleModelPropSimpleUnionSerializer(
  item: SimpleModelPropSimpleUnion,
): any {
  return item;
}

export function simpleModelPropSimpleUnionDeserializer(
  item: any,
): SimpleModelPropSimpleUnion {
  return item;
}

/** Alias for SimpleModelPropSimpleUnionOptional */
export type SimpleModelPropSimpleUnionOptional = string | boolean | number;

export function simpleModelPropSimpleUnionOptionalSerializer(
  item: SimpleModelPropSimpleUnionOptional,
): any {
  return item;
}

export function simpleModelPropSimpleUnionOptionalDeserializer(
  item: any,
): SimpleModelPropSimpleUnionOptional {
  return item;
}

/** Type of SimpleModelPropStringUnion */
export type SimpleModelPropStringUnion = "A" | "B";
/** Type of SimpleModelPropStringUnionOptioanl */
export type SimpleModelPropStringUnionOptioanl = "A" | "B";
/** Type of SimpleModelPropStringUnionNullable */
export type SimpleModelPropStringUnionNullable = "A" | "B";

/** Known values of {@link SimpleModelPropStringUnionAsExtensible} that the service accepts. */
export enum KnownSimpleModelPropStringUnionAsExtensible {
  A = "A",
  B = "B",
}

/** Type of SimpleModelPropStringUnionAsExtensible */
export type SimpleModelPropStringUnionAsExtensible = string;

/** Known values of {@link SimpleModelPropStringUnionAsExtensibleOptional} that the service accepts. */
export enum KnownSimpleModelPropStringUnionAsExtensibleOptional {
  A = "A",
  B = "B",
}

/** Type of SimpleModelPropStringUnionAsExtensibleOptional */
export type SimpleModelPropStringUnionAsExtensibleOptional = string;

/** Known values of {@link SimpleModelPropStringUnionAsExtensibleNullable} that the service accepts. */
export enum KnownSimpleModelPropStringUnionAsExtensibleNullable {
  A = "A",
  B = "B",
}

/** Type of SimpleModelPropStringUnionAsExtensibleNullable */
export type SimpleModelPropStringUnionAsExtensibleNullable = string;

/** Known values of {@link SimpleModelPropStringUnionAsExtensibleOptionalAndNullable} that the service accepts. */
export enum KnownSimpleModelPropStringUnionAsExtensibleOptionalAndNullable {
  A = "A",
  B = "B",
}

/** Type of SimpleModelPropStringUnionAsExtensibleOptionalAndNullable */
export type SimpleModelPropStringUnionAsExtensibleOptionalAndNullable = string;
/** Alias for SimpleModelPropMixedTypeLiteral */
export type SimpleModelPropMixedTypeLiteral = "A" | false | 1;

export function simpleModelPropMixedTypeLiteralSerializer(
  item: SimpleModelPropMixedTypeLiteral,
): any {
  return item;
}

export function simpleModelPropMixedTypeLiteralDeserializer(
  item: any,
): SimpleModelPropMixedTypeLiteral {
  return item;
}

/** Alias for SimpleModelPropSimpleUnionArray */
export type SimpleModelPropSimpleUnionArray = string | boolean | number;

export function simpleModelPropSimpleUnionArraySerializer(
  item: SimpleModelPropSimpleUnionArray,
): any {
  return item;
}

export function simpleModelPropSimpleUnionArrayDeserializer(
  item: any,
): SimpleModelPropSimpleUnionArray {
  return item;
}

export function simpleModelPropSimpleUnionArrayArraySerializer(
  result: Array<SimpleModelPropSimpleUnionArray>,
): any[] {
  return result.map((item) => {
    return simpleModelPropSimpleUnionArraySerializer(item);
  });
}

export function simpleModelPropSimpleUnionArrayArrayDeserializer(
  result: Array<SimpleModelPropSimpleUnionArray>,
): any[] {
  return result.map((item) => {
    return simpleModelPropSimpleUnionArrayDeserializer(item);
  });
}

/** Alias for SimpleModelPropSimpleUnionArrayOptional */
export type SimpleModelPropSimpleUnionArrayOptional = string | boolean | number;

export function simpleModelPropSimpleUnionArrayOptionalSerializer(
  item: SimpleModelPropSimpleUnionArrayOptional,
): any {
  return item;
}

export function simpleModelPropSimpleUnionArrayOptionalDeserializer(
  item: any,
): SimpleModelPropSimpleUnionArrayOptional {
  return item;
}

export function simpleModelPropSimpleUnionArrayOptionalArraySerializer(
  result: Array<SimpleModelPropSimpleUnionArrayOptional>,
): any[] {
  return result.map((item) => {
    return simpleModelPropSimpleUnionArrayOptionalSerializer(item);
  });
}

export function simpleModelPropSimpleUnionArrayOptionalArrayDeserializer(
  result: Array<SimpleModelPropSimpleUnionArrayOptional>,
): any[] {
  return result.map((item) => {
    return simpleModelPropSimpleUnionArrayOptionalDeserializer(item);
  });
}

/** Alias for SimpleModelPropRecordOfSimpleUnion */
export type SimpleModelPropRecordOfSimpleUnion = string | boolean | number;

export function simpleModelPropRecordOfSimpleUnionSerializer(
  item: SimpleModelPropRecordOfSimpleUnion,
): any {
  return item;
}

export function simpleModelPropRecordOfSimpleUnionDeserializer(
  item: any,
): SimpleModelPropRecordOfSimpleUnion {
  return item;
}

export function simpleModelPropRecordOfSimpleUnionRecordSerializer(
  item: Record<string, SimpleModelPropRecordOfSimpleUnion>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropRecordOfSimpleUnionSerializer(item[key]);
  });
  return result;
}

export function simpleModelPropRecordOfSimpleUnionRecordDeserializer(
  item: Record<string, any>,
): Record<string, SimpleModelPropRecordOfSimpleUnion> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropRecordOfSimpleUnionDeserializer(item[key]);
  });
  return result;
}

/** Alias for SimpleModelPropRecordOfUnionArray */
export type SimpleModelPropRecordOfUnionArray = string | boolean | number;

export function simpleModelPropRecordOfUnionArraySerializer(
  item: SimpleModelPropRecordOfUnionArray,
): any {
  return item;
}

export function simpleModelPropRecordOfUnionArrayDeserializer(
  item: any,
): SimpleModelPropRecordOfUnionArray {
  return item;
}

export function simpleModelPropRecordOfUnionArrayArraySerializer(
  result: Array<SimpleModelPropRecordOfUnionArray>,
): any[] {
  return result.map((item) => {
    return simpleModelPropRecordOfUnionArraySerializer(item);
  });
}

export function simpleModelPropRecordOfUnionArrayArrayDeserializer(
  result: Array<SimpleModelPropRecordOfUnionArray>,
): any[] {
  return result.map((item) => {
    return simpleModelPropRecordOfUnionArrayDeserializer(item);
  });
}

export function simpleModelPropRecordOfUnionArrayArrayRecordSerializer(
  item: Record<string, Array<SimpleModelPropRecordOfUnionArray>>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropRecordOfUnionArrayArraySerializer(item[key]);
  });
  return result;
}

export function simpleModelPropRecordOfUnionArrayArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<SimpleModelPropRecordOfUnionArray>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropRecordOfUnionArrayArrayDeserializer(item[key]);
  });
  return result;
}

/** Alias for SimpleModelPropRecordOfUnionArrayOptional */
export type SimpleModelPropRecordOfUnionArrayOptional =
  | string
  | boolean
  | number;

export function simpleModelPropRecordOfUnionArrayOptionalSerializer(
  item: SimpleModelPropRecordOfUnionArrayOptional,
): any {
  return item;
}

export function simpleModelPropRecordOfUnionArrayOptionalDeserializer(
  item: any,
): SimpleModelPropRecordOfUnionArrayOptional {
  return item;
}

export function simpleModelPropRecordOfUnionArrayOptionalArraySerializer(
  result: Array<SimpleModelPropRecordOfUnionArrayOptional>,
): any[] {
  return result.map((item) => {
    return simpleModelPropRecordOfUnionArrayOptionalSerializer(item);
  });
}

export function simpleModelPropRecordOfUnionArrayOptionalArrayDeserializer(
  result: Array<SimpleModelPropRecordOfUnionArrayOptional>,
): any[] {
  return result.map((item) => {
    return simpleModelPropRecordOfUnionArrayOptionalDeserializer(item);
  });
}

export function simpleModelPropRecordOfUnionArrayOptionalArrayRecordSerializer(
  item: Record<string, Array<SimpleModelPropRecordOfUnionArrayOptional>>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropRecordOfUnionArrayOptionalArraySerializer(item[key]);
  });
  return result;
}

export function simpleModelPropRecordOfUnionArrayOptionalArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<SimpleModelPropRecordOfUnionArrayOptional>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropRecordOfUnionArrayOptionalArrayDeserializer(item[key]);
  });
  return result;
}

/** Alias for SimpleModelPropArrayOfRecordOfUnion */
export type SimpleModelPropArrayOfRecordOfUnion = string | boolean | number;

export function simpleModelPropArrayOfRecordOfUnionSerializer(
  item: SimpleModelPropArrayOfRecordOfUnion,
): any {
  return item;
}

export function simpleModelPropArrayOfRecordOfUnionDeserializer(
  item: any,
): SimpleModelPropArrayOfRecordOfUnion {
  return item;
}

export function simpleModelPropArrayOfRecordOfUnionRecordSerializer(
  item: Record<string, SimpleModelPropArrayOfRecordOfUnion>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropArrayOfRecordOfUnionSerializer(item[key]);
  });
  return result;
}

export function simpleModelPropArrayOfRecordOfUnionRecordDeserializer(
  item: Record<string, any>,
): Record<string, SimpleModelPropArrayOfRecordOfUnion> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropArrayOfRecordOfUnionDeserializer(item[key]);
  });
  return result;
}

export function simpleModelPropArrayOfRecordOfUnionRecordArraySerializer(
  result: Array<Record<string, SimpleModelPropArrayOfRecordOfUnion>>,
): any[] {
  return result.map((item) => {
    return simpleModelPropArrayOfRecordOfUnionRecordSerializer(item);
  });
}

export function simpleModelPropArrayOfRecordOfUnionRecordArrayDeserializer(
  result: Array<Record<string, SimpleModelPropArrayOfRecordOfUnion>>,
): any[] {
  return result.map((item) => {
    return simpleModelPropArrayOfRecordOfUnionRecordDeserializer(item);
  });
}

/** Alias for SimpleModelPropArrayOfRecordOfUnionOptional */
export type SimpleModelPropArrayOfRecordOfUnionOptional =
  | string
  | boolean
  | number;

export function simpleModelPropArrayOfRecordOfUnionOptionalSerializer(
  item: SimpleModelPropArrayOfRecordOfUnionOptional,
): any {
  return item;
}

export function simpleModelPropArrayOfRecordOfUnionOptionalDeserializer(
  item: any,
): SimpleModelPropArrayOfRecordOfUnionOptional {
  return item;
}

export function simpleModelPropArrayOfRecordOfUnionOptionalRecordSerializer(
  item: Record<string, SimpleModelPropArrayOfRecordOfUnionOptional>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropArrayOfRecordOfUnionOptionalSerializer(item[key]);
  });
  return result;
}

export function simpleModelPropArrayOfRecordOfUnionOptionalRecordDeserializer(
  item: Record<string, any>,
): Record<string, SimpleModelPropArrayOfRecordOfUnionOptional> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : simpleModelPropArrayOfRecordOfUnionOptionalDeserializer(item[key]);
  });
  return result;
}

export function simpleModelPropArrayOfRecordOfUnionOptionalRecordArraySerializer(
  result: Array<Record<string, SimpleModelPropArrayOfRecordOfUnionOptional>>,
): any[] {
  return result.map((item) => {
    return simpleModelPropArrayOfRecordOfUnionOptionalRecordSerializer(item);
  });
}

export function simpleModelPropArrayOfRecordOfUnionOptionalRecordArrayDeserializer(
  result: Array<Record<string, SimpleModelPropArrayOfRecordOfUnionOptional>>,
): any[] {
  return result.map((item) => {
    return simpleModelPropArrayOfRecordOfUnionOptionalRecordDeserializer(item);
  });
}
```