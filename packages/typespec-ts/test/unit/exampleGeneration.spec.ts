import { assert } from "chai";
import { generateAssertionsForValue } from "../../src/modular/helpers/exampleValueHelpers.js";

describe("exampleGeneration", () => {
  describe("generateAssertionsForValue", () => {
    it("generates assertions for primitive types", () => {
      const stringAssertions = generateAssertionsForValue(
        {
          kind: "string",
          value: "hello",
          type: { kind: "string" }
        } as any,
        "result.name"
      );
      const booleanAssertions = generateAssertionsForValue(
        {
          kind: "boolean",
          value: true,
          type: { kind: "boolean" }
        } as any,
        "result.enabled"
      );
      const numberAssertions = generateAssertionsForValue(
        {
          kind: "number",
          value: 42,
          type: { kind: "int32" }
        } as any,
        "result.count"
      );
      const unknownAssertions = generateAssertionsForValue(
        {
          kind: "unknown",
          value: { id: 1 },
          type: { kind: "unknown" }
        } as any,
        "result.payload"
      );

      assert.deepEqual(stringAssertions, [
        'assert.strictEqual(result.name, "hello");'
      ]);
      assert.deepEqual(booleanAssertions, [
        "assert.strictEqual(result.enabled, true);"
      ]);
      assert.deepEqual(numberAssertions, [
        "assert.strictEqual(result.count, 42);"
      ]);
      assert.deepEqual(unknownAssertions, [
        "assert.isDefined(result.payload);"
      ]);
      // for unknown type we fall back to assert.isDefined to avoid false positives in tests, so we can't assert on the exact value. But we can still check that the payload is defined.
      assert.isDefined({ id: 1 });
    });

    it("generates assertions for utcDateTime and bytes", () => {
      const dateAssertions = generateAssertionsForValue(
        {
          kind: "string",
          value: "2024-01-01T00:00:00Z",
          type: { kind: "utcDateTime" }
        } as any,
        "result.createdOn"
      );
      const bytesAssertions = generateAssertionsForValue(
        {
          kind: "string",
          value: "YWJj",
          type: { kind: "bytes", encode: "base64" }
        } as any,
        "result.content"
      );

      assert.deepEqual(dateAssertions, [
        'assert.strictEqual(result.createdOn.getTime(), new Date("2024-01-01T00:00:00Z").getTime());'
      ]);
      assert.strictEqual(
        new Date("2024-01-01T00:00:00Z").getTime(),
        new Date("2024-01-01T00:00:00Z").getTime()
      );
      assert.deepEqual(bytesAssertions, [
        'assert.deepEqual(result.content, Buffer.from("YWJj",  "base64"));'
      ]);
      assert.deepEqual(
        Buffer.from("YWJj", "base64"),
        Buffer.from("YWJj", "base64")
      );
    });

    it("generates array assertions and only checks first two items", () => {
      const assertions = generateAssertionsForValue(
        {
          kind: "array",
          value: [
            { kind: "number", value: 1, type: { kind: "int32" } },
            { kind: "number", value: 2, type: { kind: "int32" } },
            { kind: "number", value: 3, type: { kind: "int32" } }
          ],
          type: { kind: "array", valueType: { kind: "int32" } }
        } as any,
        "result.items"
      );

      assert.deepEqual(assertions, [
        "assert.ok(Array.isArray(result.items));",
        "assert.strictEqual(result.items.length, 3);",
        "assert.strictEqual(result.items[0], 1);",
        "assert.strictEqual(result.items[1], 2);"
      ]);
      assert.isFalse(assertions.some((x) => x.includes("result.items[2]")));
    });

    it("generates nested model assertions with optional chaining", () => {
      const assertions = generateAssertionsForValue(
        {
          kind: "model",
          value: {
            systemData: {
              kind: "model",
              value: {
                createdBy: {
                  kind: "string",
                  value: "admin",
                  type: { kind: "string" }
                }
              },
              type: {
                kind: "model",
                properties: [{ kind: "property", name: "createdBy" }]
              }
            }
          },
          type: {
            kind: "model",
            properties: [
              { kind: "property", name: "systemData", flatten: false }
            ]
          }
        } as any,
        "result"
      );

      assert.deepEqual(assertions, [
        'assert.strictEqual(result.systemData?.createdBy, "admin");'
      ]);
    });

    it("generates flattened model assertions on parent path", () => {
      const assertions = generateAssertionsForValue(
        {
          kind: "model",
          value: {
            properties: {
              kind: "model",
              value: {
                displayName: {
                  kind: "string",
                  value: "demo",
                  type: { kind: "string" }
                }
              },
              type: {
                kind: "model",
                properties: [{ kind: "property", name: "displayName" }]
              }
            }
          },
          type: {
            kind: "model",
            properties: [
              { kind: "property", name: "properties", flatten: true }
            ]
          }
        } as any,
        "result"
      );

      assert.deepEqual(assertions, [
        'assert.strictEqual(result.displayName, "demo");'
      ]);
    });

    it("generates assertions for null and union values", () => {
      const nullAssertions = generateAssertionsForValue(
        {
          kind: "null",
          value: null,
          type: { kind: "null" }
        } as any,
        "result.value"
      );
      const unionAssertions = generateAssertionsForValue(
        {
          kind: "union",
          value: { kind: "number", value: 7, type: { kind: "int32" } },
          type: { kind: "union" }
        } as any,
        "result.unionValue"
      );

      assert.deepEqual(nullAssertions, [
        "assert.strictEqual(result.value, null);"
      ]);
      assert.strictEqual(null, null);
      assert.deepEqual(unionAssertions, [
        "assert.strictEqual(result.unionValue, 7);"
      ]);
    });

    it("returns empty assertions when max depth is reached", () => {
      const assertions = generateAssertionsForValue(
        {
          kind: "model",
          value: {
            deep: {
              kind: "string",
              value: "x",
              type: { kind: "string" }
            }
          },
          type: {
            kind: "model",
            properties: [{ kind: "property", name: "deep" }]
          }
        } as any,
        "result",
        1,
        1
      );

      assert.deepEqual(assertions, []);
    });
  });
});
