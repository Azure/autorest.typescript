import { assert } from "chai";
import { normalizeName, NameType } from "../../../src/utils/nameUtils";

describe("NameUtils", () => {
  describe("normalizeName", () => {
    describe("to Class", () => {
      it("should generate property name with PascalCase from all lowercase", () => {
        assert.strictEqual(normalizeName("test", NameType.Class), "Test");
      });

      it("should generate property name with PascalCase from underscore separated", () => {
        assert.strictEqual(
          normalizeName("test_code", NameType.Class),
          "TestCode"
        );
      });

      it("should generate property name with PascalCase from dash separated", () => {
        assert.strictEqual(
          normalizeName("test-code", NameType.Class),
          "TestCode"
        );
      });

      it("should generate class name with camelCase from dash separated and has a primitive name", () => {
        assert.strictEqual(
          normalizeName("body-boolean", NameType.Class),
          "BodyBoolean"
        );
      });

      it("should generate property name with PascalCase from space separated", () => {
        assert.strictEqual(
          normalizeName("test code", NameType.Class),
          "TestCode"
        );
      });
    });

    describe("to Property", () => {
      it("should generate property name with camelCase from all lowercase", () => {
        assert.strictEqual(normalizeName("test", NameType.Property), "test");
      });

      it("should generate property name with camelCase from underscore separated", () => {
        assert.strictEqual(
          normalizeName("test_code", NameType.Property),
          "testCode"
        );
      });

      it("should generate property name with camelCase from dash separated", () => {
        assert.strictEqual(
          normalizeName("test-code", NameType.Property),
          "testCode"
        );

        it("should generate property name with camelCase from space separated", () => {
          assert.strictEqual(
            normalizeName("test code", NameType.Property),
            "testCode"
          );
        });
      });
    });
  });
});
