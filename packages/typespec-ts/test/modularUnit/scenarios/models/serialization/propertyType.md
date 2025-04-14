# Should generate serializer for property types
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
  op bar(@body body: SimpleModel): void;
}
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

export function simpleModelSerializer(item: SimpleModel): any {
  return {
    propString: item["propString"],
    propboolean: item["propboolean"],
    propNumber: item["propNumber"],
    propStringOptional: item["propStringOptional"],
    propSimpleUnion: _simpleModelPropSimpleUnionSerializer(
      item["propSimpleUnion"],
    ),
    propSimpleUnionOptional: !item["propSimpleUnionOptional"]
      ? item["propSimpleUnionOptional"]
      : _simpleModelPropSimpleUnionOptionalSerializer(
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
    propMixedTypeLiteral: _simpleModelPropMixedTypeLiteralSerializer(
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
    propSimpleUnionArray: _simpleModelPropSimpleUnionArrayArraySerializer(
      item["propSimpleUnionArray"],
    ),
    propStringArrayOptional: !item["propStringArrayOptional"]
      ? item["propStringArrayOptional"]
      : item["propStringArrayOptional"].map((p: any) => {
          return p;
        }),
    propSimpleUnionArrayOptional: !item["propSimpleUnionArrayOptional"]
      ? item["propSimpleUnionArrayOptional"]
      : _simpleModelPropSimpleUnionArrayOptionalArraySerializer(
          item["propSimpleUnionArrayOptional"],
        ),
    propRecordOfString: item["propRecordOfString"],
    propRecordOfDate: item["propRecordOfDate"],
    propRecordOfBoolean: item["propRecordOfBoolean"],
    propRecordOfNumber: item["propRecordOfNumber"],
    propRecordOfSimpleUnion:
      _simpleModelPropRecordOfSimpleUnionRecordSerializer(
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
      _simpleModelPropRecordOfUnionArrayArrayRecordSerializer(
        item["propRecordOfUnionArray"],
      ),
    propRecordOfUnionArrayOptional: !item["propRecordOfUnionArrayOptional"]
      ? item["propRecordOfUnionArrayOptional"]
      : _simpleModelPropRecordOfUnionArrayOptionalArrayRecordSerializer(
          item["propRecordOfUnionArrayOptional"],
        ),
    propArrayOfRecordOfUnion:
      _simpleModelPropArrayOfRecordOfUnionRecordArraySerializer(
        item["propArrayOfRecordOfUnion"],
      ),
    propArrayOfRecordOfUnionOptional: !item["propArrayOfRecordOfUnionOptional"]
      ? item["propArrayOfRecordOfUnionOptional"]
      : _simpleModelPropArrayOfRecordOfUnionOptionalRecordArraySerializer(
          item["propArrayOfRecordOfUnionOptional"],
        ),
    prop_encoded: item["propEncoded"],
  };
}

/** Alias for _SimpleModelPropSimpleUnion */
export type _SimpleModelPropSimpleUnion = string | boolean | number;

export function _simpleModelPropSimpleUnionSerializer(
  item: _SimpleModelPropSimpleUnion,
): any {
  return item;
}

/** Alias for _SimpleModelPropSimpleUnionOptional */
export type _SimpleModelPropSimpleUnionOptional = string | boolean | number;

export function _simpleModelPropSimpleUnionOptionalSerializer(
  item: _SimpleModelPropSimpleUnionOptional,
): any {
  return item;
}

/** Alias for _SimpleModelPropMixedTypeLiteral */
export type _SimpleModelPropMixedTypeLiteral = "A" | false | 1;

export function _simpleModelPropMixedTypeLiteralSerializer(
  item: _SimpleModelPropMixedTypeLiteral,
): any {
  return item;
}

export function _simpleModelPropSimpleUnionArrayArraySerializer(
  result: Array<_SimpleModelPropSimpleUnionArray>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropSimpleUnionArraySerializer(item);
  });
}

/** Alias for _SimpleModelPropSimpleUnionArray */
export type _SimpleModelPropSimpleUnionArray = string | boolean | number;

export function _simpleModelPropSimpleUnionArraySerializer(
  item: _SimpleModelPropSimpleUnionArray,
): any {
  return item;
}

export function _simpleModelPropSimpleUnionArrayOptionalArraySerializer(
  result: Array<_SimpleModelPropSimpleUnionArrayOptional>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropSimpleUnionArrayOptionalSerializer(item);
  });
}

/** Alias for _SimpleModelPropSimpleUnionArrayOptional */
export type _SimpleModelPropSimpleUnionArrayOptional =
  | string
  | boolean
  | number;

export function _simpleModelPropSimpleUnionArrayOptionalSerializer(
  item: _SimpleModelPropSimpleUnionArrayOptional,
): any {
  return item;
}

export function _simpleModelPropRecordOfSimpleUnionRecordSerializer(
  item: Record<string, _SimpleModelPropRecordOfSimpleUnion>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropRecordOfSimpleUnionSerializer(item[key]);
  });
  return result;
}

/** Alias for _SimpleModelPropRecordOfSimpleUnion */
export type _SimpleModelPropRecordOfSimpleUnion = string | boolean | number;

export function _simpleModelPropRecordOfSimpleUnionSerializer(
  item: _SimpleModelPropRecordOfSimpleUnion,
): any {
  return item;
}

export function _simpleModelPropRecordOfUnionArrayArrayRecordSerializer(
  item: Record<string, Array<_SimpleModelPropRecordOfUnionArray>>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropRecordOfUnionArrayArraySerializer(item[key]);
  });
  return result;
}

export function _simpleModelPropRecordOfUnionArrayArraySerializer(
  result: Array<_SimpleModelPropRecordOfUnionArray>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropRecordOfUnionArraySerializer(item);
  });
}

/** Alias for _SimpleModelPropRecordOfUnionArray */
export type _SimpleModelPropRecordOfUnionArray = string | boolean | number;

export function _simpleModelPropRecordOfUnionArraySerializer(
  item: _SimpleModelPropRecordOfUnionArray,
): any {
  return item;
}

export function _simpleModelPropRecordOfUnionArrayOptionalArrayRecordSerializer(
  item: Record<string, Array<_SimpleModelPropRecordOfUnionArrayOptional>>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropRecordOfUnionArrayOptionalArraySerializer(item[key]);
  });
  return result;
}

export function _simpleModelPropRecordOfUnionArrayOptionalArraySerializer(
  result: Array<_SimpleModelPropRecordOfUnionArrayOptional>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropRecordOfUnionArrayOptionalSerializer(item);
  });
}

/** Alias for _SimpleModelPropRecordOfUnionArrayOptional */
export type _SimpleModelPropRecordOfUnionArrayOptional =
  | string
  | boolean
  | number;

export function _simpleModelPropRecordOfUnionArrayOptionalSerializer(
  item: _SimpleModelPropRecordOfUnionArrayOptional,
): any {
  return item;
}

export function _simpleModelPropArrayOfRecordOfUnionRecordArraySerializer(
  result: Array<Record<string, _SimpleModelPropArrayOfRecordOfUnion>>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropArrayOfRecordOfUnionRecordSerializer(item);
  });
}

export function _simpleModelPropArrayOfRecordOfUnionRecordSerializer(
  item: Record<string, _SimpleModelPropArrayOfRecordOfUnion>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropArrayOfRecordOfUnionSerializer(item[key]);
  });
  return result;
}

/** Alias for _SimpleModelPropArrayOfRecordOfUnion */
export type _SimpleModelPropArrayOfRecordOfUnion = string | boolean | number;

export function _simpleModelPropArrayOfRecordOfUnionSerializer(
  item: _SimpleModelPropArrayOfRecordOfUnion,
): any {
  return item;
}

export function _simpleModelPropArrayOfRecordOfUnionOptionalRecordArraySerializer(
  result: Array<Record<string, _SimpleModelPropArrayOfRecordOfUnionOptional>>,
): any[] {
  return result.map((item) => {
    return _simpleModelPropArrayOfRecordOfUnionOptionalRecordSerializer(item);
  });
}

export function _simpleModelPropArrayOfRecordOfUnionOptionalRecordSerializer(
  item: Record<string, _SimpleModelPropArrayOfRecordOfUnionOptional>,
): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : _simpleModelPropArrayOfRecordOfUnionOptionalSerializer(item[key]);
  });
  return result;
}

/** Alias for _SimpleModelPropArrayOfRecordOfUnionOptional */
export type _SimpleModelPropArrayOfRecordOfUnionOptional =
  | string
  | boolean
  | number;

export function _simpleModelPropArrayOfRecordOfUnionOptionalSerializer(
  item: _SimpleModelPropArrayOfRecordOfUnionOptional,
): any {
  return item;
}
```