# Should generate deserializer for property types

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
  propRecordOfDate: Record<utcDateTime>;
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
experimental-extensible-enums: true
```

## Provide generated models and its serializer

Generated Models.

```ts models
/** Alias for _SimpleModelPropSimpleUnion */
export type _SimpleModelPropSimpleUnion = string | boolean | number;

export function _simpleModelPropSimpleUnionDeserializer(
  item: any,
): _SimpleModelPropSimpleUnion {
  return item;
}

/** Alias for _SimpleModelPropSimpleUnionOptional */
export type _SimpleModelPropSimpleUnionOptional = string | boolean | number;

export function _simpleModelPropSimpleUnionOptionalDeserializer(
  item: any,
): _SimpleModelPropSimpleUnionOptional {
  return item;
}

/** Alias for _SimpleModelPropMixedTypeLiteral */
export type _SimpleModelPropMixedTypeLiteral = "A" | false | 1;

export function _simpleModelPropMixedTypeLiteralDeserializer(
  item: any,
): _SimpleModelPropMixedTypeLiteral {
  return item;
}

export function _simpleModelPropSimpleUnionArrayArrayDeserializer(
  result: Array<_SimpleModelPropSimpleUnionArray>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropSimpleUnionArrayDeserializer(item);
  });
}

/** Alias for _SimpleModelPropSimpleUnionArray */
export type _SimpleModelPropSimpleUnionArray = string | boolean | number;

export function _simpleModelPropSimpleUnionArrayDeserializer(
  item: any,
): _SimpleModelPropSimpleUnionArray {
  return item;
}

export function _simpleModelPropSimpleUnionArrayOptionalArrayDeserializer(
  result: Array<_SimpleModelPropSimpleUnionArrayOptional>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropSimpleUnionArrayOptionalDeserializer(item);
  });
}

/** Alias for _SimpleModelPropSimpleUnionArrayOptional */
export type _SimpleModelPropSimpleUnionArrayOptional =
  | string
  | boolean
  | number;

export function _simpleModelPropSimpleUnionArrayOptionalDeserializer(
  item: any,
): _SimpleModelPropSimpleUnionArrayOptional {
  return item;
}

export function _simpleModelPropRecordOfSimpleUnionRecordDeserializer(
  item: Record<string, any>,
): Record<string, _SimpleModelPropRecordOfSimpleUnion> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropRecordOfSimpleUnionDeserializer(item[key]);
  });
  return result;
}

/** Alias for _SimpleModelPropRecordOfSimpleUnion */
export type _SimpleModelPropRecordOfSimpleUnion = string | boolean | number;

export function _simpleModelPropRecordOfSimpleUnionDeserializer(
  item: any,
): _SimpleModelPropRecordOfSimpleUnion {
  return item;
}

export function _simpleModelPropRecordOfUnionArrayArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<_SimpleModelPropRecordOfUnionArray>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropRecordOfUnionArrayArrayDeserializer(item[key]);
  });
  return result;
}

export function _simpleModelPropRecordOfUnionArrayArrayDeserializer(
  result: Array<_SimpleModelPropRecordOfUnionArray>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropRecordOfUnionArrayDeserializer(item);
  });
}

/** Alias for _SimpleModelPropRecordOfUnionArray */
export type _SimpleModelPropRecordOfUnionArray = string | boolean | number;

export function _simpleModelPropRecordOfUnionArrayDeserializer(
  item: any,
): _SimpleModelPropRecordOfUnionArray {
  return item;
}

export function _simpleModelPropRecordOfUnionArrayOptionalArrayRecordDeserializer(
  item: Record<string, any>,
): Record<string, Array<_SimpleModelPropRecordOfUnionArrayOptional>> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropRecordOfUnionArrayOptionalArrayDeserializer(item[key]);
  });
  return result;
}

export function _simpleModelPropRecordOfUnionArrayOptionalArrayDeserializer(
  result: Array<_SimpleModelPropRecordOfUnionArrayOptional>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropRecordOfUnionArrayOptionalDeserializer(item);
  });
}

/** Alias for _SimpleModelPropRecordOfUnionArrayOptional */
export type _SimpleModelPropRecordOfUnionArrayOptional =
  | string
  | boolean
  | number;

export function _simpleModelPropRecordOfUnionArrayOptionalDeserializer(
  item: any,
): _SimpleModelPropRecordOfUnionArrayOptional {
  return item;
}

export function _simpleModelPropArrayOfRecordOfUnionRecordArrayDeserializer(
  result: Array<Record<string, _SimpleModelPropArrayOfRecordOfUnion>>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropArrayOfRecordOfUnionRecordDeserializer(item);
  });
}

export function _simpleModelPropArrayOfRecordOfUnionRecordDeserializer(
  item: Record<string, any>,
): Record<string, _SimpleModelPropArrayOfRecordOfUnion> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropArrayOfRecordOfUnionDeserializer(item[key]);
  });
  return result;
}

/** Alias for _SimpleModelPropArrayOfRecordOfUnion */
export type _SimpleModelPropArrayOfRecordOfUnion = string | boolean | number;

export function _simpleModelPropArrayOfRecordOfUnionDeserializer(
  item: any,
): _SimpleModelPropArrayOfRecordOfUnion {
  return item;
}

export function _simpleModelPropArrayOfRecordOfUnionOptionalRecordArrayDeserializer(
  result: Array<Record<string, _SimpleModelPropArrayOfRecordOfUnionOptional>>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropArrayOfRecordOfUnionOptionalRecordDeserializer(item);
  });
}

export function _simpleModelPropArrayOfRecordOfUnionOptionalRecordDeserializer(
  item: Record<string, any>,
): Record<string, _SimpleModelPropArrayOfRecordOfUnionOptional> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropArrayOfRecordOfUnionOptionalDeserializer(item[key]);
  });
  return result;
}

/** Alias for _SimpleModelPropArrayOfRecordOfUnionOptional */
export type _SimpleModelPropArrayOfRecordOfUnionOptional =
  | string
  | boolean
  | number;

export function _simpleModelPropArrayOfRecordOfUnionOptionalDeserializer(
  item: any,
): _SimpleModelPropArrayOfRecordOfUnionOptional {
  return item;
}
```
