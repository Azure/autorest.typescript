# Basic JSON part

```tsp
model Person {
  firstName: string;
  lastName: string;
  @encode("unixTimestamp", int32)
  dateOfBirth: utcDateTime;
}

model RequestBody {
  person: HttpPart<Person>;
}

op doThing(@header contentType: "multipart/form-data", @multipartBody bodyParam: RequestBody): void;
```

## Models

The part should get generated correctly. The generated serializer should be used so that the date of birth is encoded correctly.

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface RequestBody */
export interface RequestBody {
  person: Person;
}

export function requestBodySerializer(item: RequestBody): any {
  return [{ name: "person", body: personSerializer(item["person"]) }];
}

/** model interface Person */
export interface Person {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export function personSerializer(item: Person): any {
  return {
    firstName: item["firstName"],
    lastName: item["lastName"],
    dateOfBirth: (item["dateOfBirth"].getTime() / 1000) | 0,
  };
}
```

# JSON array

This TypeSpec represents a multipart request body with one part. That part consists of a JSON array. This contrasts with the one-to-many JSON part case.

```tsp
model Person {
  firstName: string;
  lastName: string;
  @encode("unixTimestamp", int32)
  dateOfBirth: utcDateTime;
}

model RequestBody {
  people: HttpPart<Person[]>;
}

op doThing(@header contentType: "multipart/form-data", @multipartBody bodyParam: RequestBody): void;
```

## Models

In this case one part is constructed from the serialized array.

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface RequestBody */
export interface RequestBody {
  people: Person[];
}

export function requestBodySerializer(item: RequestBody): any {
  return [{ name: "people", body: personArraySerializer(item["people"]) }];
}

export function personArraySerializer(result: Array<Person>): any[] {
  return result.map((item) => {
    return personSerializer(item);
  });
}

/** model interface Person */
export interface Person {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export function personSerializer(item: Person): any {
  return {
    firstName: item["firstName"],
    lastName: item["lastName"],
    dateOfBirth: (item["dateOfBirth"].getTime() / 1000) | 0,
  };
}
```

# Array of parts

This TypeSpec represents a multipart request with multiple JSON parts, each following the spec for `Person`.

```tsp
model Person {
  firstName: string;
  lastName: string;
  @encode("unixTimestamp", int32)
  dateOfBirth: utcDateTime;
}

model RequestBody {
  people: HttpPart<Person>[];
}

op doThing(@header contentType: "multipart/form-data", @multipartBody bodyParam: RequestBody): void;
```

## Models

In this case each element in the serialized array is converted to a part descriptor.

```ts models
/**
 * This file contains only generated model types and (de)serializers.
 * Disable this rule for deserializer functions which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** model interface RequestBody */
export interface RequestBody {
  people: Person[];
}

export function requestBodySerializer(item: RequestBody): any {
  return [
    ...personArraySerializer(item["people"]).map((x: unknown) => ({
      name: "people",
      body: x,
    })),
  ];
}

export function personArraySerializer(result: Array<Person>): any[] {
  return result.map((item) => {
    return personSerializer(item);
  });
}

/** model interface Person */
export interface Person {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export function personSerializer(item: Person): any {
  return {
    firstName: item["firstName"],
    lastName: item["lastName"],
    dateOfBirth: (item["dateOfBirth"].getTime() / 1000) | 0,
  };
}
```