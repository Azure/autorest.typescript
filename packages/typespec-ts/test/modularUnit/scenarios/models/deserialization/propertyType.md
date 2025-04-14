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
  propStringUnionAsExtensible: string;
  propStringUnionAsExtensibleOptional?: string;
  propStringUnionAsExtensibleNullable: string | null;
  propStringUnionAsExtensibleOptionalAndNullable?: string | null;
  propMixedTypeLiteral: "A" | false | 1;
  propStringArray: string[];
  propBooleanArray: boolean[];
  propNumberArray: number[];
  propSimpleUnionArray: (string | boolean | number)[];
  propStringArrayOptional?: string[];
  propSimpleUnionArrayOptional?: (string | boolean | number)[];
  propRecordOfString: Record<string, string>;
  propRecordOfDate: Record<string, Date>;
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
    propSimpleUnion: _simpleModelPropSimpleUnionDeserializer(
      item["propSimpleUnion"],
    ),
    propSimpleUnionOptional: !item["propSimpleUnionOptional"]
      ? item["propSimpleUnionOptional"]
      : _simpleModelPropSimpleUnionOptionalDeserializer(
          item["propSimpleUnionOptional"],
        ),
    propStringLiteral: "A",
    propBooleanLiteral: false,
    propNumberLiteral: 1,
    propStringLiteralOptional: !item["propStringLiteralOptional"]
      ? item["propStringLiteralOptional"]
      : "A",
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
    propMixedTypeLiteral: _simpleModelPropMixedTypeLiteralDeserializer(
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
    propSimpleUnionArray: _simpleModelPropSimpleUnionArrayArrayDeserializer(
      item["propSimpleUnionArray"],
    ),
    propStringArrayOptional: !item["propStringArrayOptional"]
      ? item["propStringArrayOptional"]
      : item["propStringArrayOptional"].map((p: any) => {
          return p;
        }),
    propSimpleUnionArrayOptional: !item["propSimpleUnionArrayOptional"]
      ? item["propSimpleUnionArrayOptional"]
      : _simpleModelPropSimpleUnionArrayOptionalArrayDeserializer(
          item["propSimpleUnionArrayOptional"],
        ),
    propRecordOfString: item["propRecordOfString"],
    propRecordOfDate: item["propRecordOfDate"],
    propRecordOfBoolean: item["propRecordOfBoolean"],
    propRecordOfNumber: item["propRecordOfNumber"],
    propRecordOfSimpleUnion:
      _simpleModelPropRecordOfSimpleUnionRecordDeserializer(
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
      _simpleModelPropRecordOfUnionArrayArrayRecordDeserializer(
        item["propRecordOfUnionArray"],
      ),
    propRecordOfUnionArrayOptional: !item["propRecordOfUnionArrayOptional"]
      ? item["propRecordOfUnionArrayOptional"]
      : _simpleModelPropRecordOfUnionArrayOptionalArrayRecordDeserializer(
          item["propRecordOfUnionArrayOptional"],
        ),
    propArrayOfRecordOfUnion:
      _simpleModelPropArrayOfRecordOfUnionRecordArrayDeserializer(
        item["propArrayOfRecordOfUnion"],
      ),
    propArrayOfRecordOfUnionOptional: !item["propArrayOfRecordOfUnionOptional"]
      ? item["propArrayOfRecordOfUnionOptional"]
      : _simpleModelPropArrayOfRecordOfUnionOptionalRecordArrayDeserializer(
          item["propArrayOfRecordOfUnionOptional"],
        ),
    propEncoded: item["prop_encoded"],
  };
}

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
