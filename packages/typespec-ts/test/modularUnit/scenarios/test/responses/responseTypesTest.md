# Should generate tests for response types validation

Test generation should create tests for operations with different parameter types, ensuring proper handling of various data types including unknown, literal types, dates, and complex objects.

## TypeSpec

This is tsp definition.

```tsp
model Foo {
  bar: string;
  barDate?: utcDateTime;
}

model Widget {
  unknownValueWithObject: unknown;
  unknownValueWithArray: unknown;
  unknownValueWithStr: unknown;
  unknownValueWithNum: unknown;
  unknownValueWithNull: unknown;
  unknownValueWithBoolean: unknown;
  unknownValueWithObjectNested: unknown;
  strValue: string;
  numValue: int32;
  enumValue: "red" | "blue";
  modelValue: Foo;
  dateValue: utcDateTime;
  arrValue: string[];
  unionValue: Foo | string;
  nullValue: null;
  @clientName("jsClientName", "javascript")
  renamedProp: string;
  ...Record<string>;
  stringLiteral: "foo";
  booleanLiteral: true;
  numberLiteral: 12;
  plainDateProp: plainDate;
  plainTimeProp: plainTime;
  utcDateTimeProp: utcDateTime;
  offsetDateTimeProp: offsetDateTime;
  durationProp: duration;
  withEscapeChars: string;
  unknownRecord: Record<unknown>;
  certificate?: bytes;
  @encode("base64url")
  profile?: bytes;
}

@doc("show example demo")
op read(): Widget;
```

## Example and generated tests

Raw json files.

```json for read
{
  "title": "read",
  "operationId": "read",
  "parameters": {},
  "responses": {
    "200": {
      "body": {
        "unknownValueWithObject": { "foo": "bar" },
        "unknownValueWithArray": ["x", "y"],
        "unknownValueWithStr": "string",
        "unknownValueWithNum": 7,
        "unknownValueWithNull": null,
        "unknownValueWithBoolean": false,
        "unknownValueWithObjectNested": {
          "foo": "bar",
          "bar": [{ "foo": "fooStr" }, "barStr", 7]
        },
        "strValue": "00000000-0000-0000-0000-00000000000",
        "numValue": 0.12,
        "enumValue": "red",
        "modelValue": {
          "bar": "bar value",
          "barDate": "2022-08-09"
        },
        "dateValue": "2022-08-09",
        "arrValue": ["x", "y"],
        "unionValue": "test",
        "nullValue": null,
        "additionalProp": "additional prop",
        "renamedProp": "prop renamed",
        "stringLiteral": "foo",
        "booleanLiteral": true,
        "numberLiteral": 12,
        "plainDateProp": "2022-12-12",
        "plainTimeProp": "13:06:12",
        "utcDateTimeProp": "2022-08-26T18:38:00Z",
        "offsetDateTimeProp": "2022-08-26T18:38:00Z",
        "durationProp": "P123DT22H14M12.011S",
        "withEscapeChars": "\"Tag 10\".Value",
        "unknownRecord": { "a": "foo" },
        "certificate": "TUlJRE5EQ0NBaHlnQXdJQkFnSVFDYUxFKzVTSlNVeWdncDM0V",
        "profile": "TUlJRE5EQ0NBaHlnQXdJQkFnSVFDYUxFKzVTSlNVeWdncDM0V"
      }
    }
  }
}
```

```ts tests readTest
/** This file path is /test/generated/readTest.spec.ts */

import { Recorder, env } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { TestingClient } from "../../src/index.js";

describe("show example demo", () => {
  let recorder: Recorder;
  let client: TestingClient;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    const clientOptions = recorder.configureClientOptions({});
    client = new TestingClient(clientOptions);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should show example demo for read", async function () {
    const result = await client.read();
    assert.ok(result);
    assert.equal(result.unknownValueWithObject, { foo: "bar" });
    assert.equal(result.unknownValueWithArray, ["x", "y"]);
    assert.equal(result.unknownValueWithStr, "string");
    assert.equal(result.unknownValueWithNum, 7);
    assert.equal(result.unknownValueWithNull, null);
    assert.equal(result.unknownValueWithBoolean, false);
    assert.equal(result.unknownValueWithObjectNested, {
      foo: "bar",
      bar: [{ foo: "fooStr" }, "barStr", 7],
    });
    assert.strictEqual(result.strValue, "00000000-0000-0000-0000-00000000000");
    assert.strictEqual(result.numValue, 0.12);
    assert.strictEqual(result.enumValue, "red");
    assert.strictEqual(result.modelValue.bar, "bar value");
    assert.strictEqual(result.modelValue.barDate, new Date("2022-08-09"));
    assert.strictEqual(result.dateValue, new Date("2022-08-09"));
    assert.ok(Array.isArray(result.arrValue));
    assert.strictEqual(result.arrValue.length, 2);
    assert.strictEqual(result.arrValue[0], "x");
    assert.strictEqual(result.arrValue[1], "y");
    assert.equal(result.nullValue, null);
    assert.strictEqual(result.renamedProp, "prop renamed");
    assert.strictEqual(result.stringLiteral, "foo");
    assert.strictEqual(result.booleanLiteral, true);
    assert.strictEqual(result.numberLiteral, 12);
    assert.strictEqual(result.plainDateProp, "2022-12-12");
    assert.strictEqual(result.plainTimeProp, "13:06:12");
    assert.strictEqual(
      result.utcDateTimeProp,
      new Date("2022-08-26T18:38:00Z"),
    );
    assert.strictEqual(result.offsetDateTimeProp, "2022-08-26T18:38:00Z");
    assert.strictEqual(result.durationProp, "P123DT22H14M12.011S");
    assert.strictEqual(result.withEscapeChars, '"Tag 10".Value');
    assert.equal(result.unknownRecord.a, "foo");
    assert.equal(
      result.certificate,
      Buffer.from(
        "TUlJRE5EQ0NBaHlnQXdJQkFnSVFDYUxFKzVTSlNVeWdncDM0V",
        "base64",
      ),
    );
    assert.equal(
      result.profile,
      Buffer.from(
        "TUlJRE5EQ0NBaHlnQXdJQkFnSVFDYUxFKzVTSlNVeWdncDM0V",
        "base64url",
      ),
    );
  });
});
```
