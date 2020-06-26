import { equal, fail, ok, deepStrictEqual, throws, strictEqual } from "assert";
import {
  BodyStringClient,
  BodyStringModels
} from "./generated/bodyString/src/bodyStringClient";

describe("Integration tests for BodyString", () => {
  let client: BodyStringClient;

  beforeEach(() => {
    client = new BodyStringClient();
  });

  describe("Acceptance tests", () => {
    it("should support valid null value", async function() {
      const result = await client.string.getNull();
      deepStrictEqual(result, { body: undefined });

      await client.string.putNull();
    });

    it("should support valid empty string value", async function() {
      await client.string.putEmpty();
      const result = await client.string.getEmpty();
      deepStrictEqual(result, { body: "" });
    });

    it("should support whitespace string value", async function() {
      await client.string.putWhitespace();
      const result = await client.string.getWhitespace();
      deepStrictEqual(result, {
        body:
          "    Now is the time for all good men to come to the aid of their country    "
      });
    });

    it("should support not provided value", async function() {
      const result = await client.string.getNotProvided();
      deepStrictEqual(result, { body: undefined });
    });

    it("should support valid enum valid value", async function() {
      const result = await client.enum.getNotExpandable();
      deepStrictEqual(result, { body: "red color" });
      await client.enum.putNotExpandable("red color");
    });

    it("should correctly handle invalid values for enum", async function() {
      try {
        await client.enum.putNotExpandable(
          "orange color" as BodyStringModels.Colors
        );
        fail("should have thrown error 'is not a valid value'");
      } catch (error) {
        ok(error.message.match(/.*is not a valid value.*/gi));
      }
    });

    it("should correctly deserialize base64 encoded string", async function() {
      const result = await client.string.getBase64Encoded();
      ok(!!result.body);

      const expected = Buffer.from("a string that gets encoded with base64");
      for (let i = 0; i < expected.length; i++) {
        equal(result.body[i], expected[i], "Byte mismatch.");
      }
    });

    it("should correctly handle null base64url encoded string", async () => {
      const result = await client.string.getNullBase64UrlEncoded();
      ok(!result.body, "response should not contain result");
    });

    it("should correctly serialize and deserialize base64url encoded string", async () => {
      const result = await client.string.getBase64UrlEncoded();
      ok(!!result.body, "response should contain a result");

      const expected = Buffer.from("a string that gets encoded with base64url");
      for (let i = 0; i < expected.length; i++) {
        equal(result.body[i], expected[i], "Byte mismatch.");
      }

      const result2 = await client.string.putBase64UrlEncoded(expected);
      ok(!result2.body, "response should not contain result");
    });

    it("should getEnumReferenced", async function() {
      const { body } = await client.enum.getReferenced();
      equal(body, "red color");
    });

    it("should putEnumReferenced", async function() {
      await client.enum.putReferenced("red color");
    });

    it("should getEnumReferencedConstant", async function() {
      const { field1 } = await client.enum.getReferencedConstant();
      equal(field1, "Sample String");
    });

    it("should putEnumReferencedConstant", async function() {
      await client.enum.putReferencedConstant({
        field1: "",
        colorConstant: "green-color"
      });
    });
  });

  describe("Mbcs", () => {
    it("should receive an UTF8 string in the response body", async () => {
      try {
        const result = await client.string.getMbcs();
        equal(
          result.body,
          "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€"
        );
      } catch (error) {
        fail(error);
      }
    });

    it("should send an UTF8 string in the request body", async () => {
      try {
        await client.string.putMbcs();
        ok(true, "Operation executed with no errors");
      } catch (error) {
        fail(error);
      }
    });
  }).timeout(5000);
});
