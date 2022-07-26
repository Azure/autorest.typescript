import { assert } from "chai";
import { BodyStringClient, Colors } from "./generated/bodyString/src";

describe("Integration tests for BodyString", () => {
  let client: BodyStringClient;

  beforeEach(() => {
    client = new BodyStringClient({ allowInsecureConnection: true });
  });

  describe("Acceptance tests", () => {
    it("should support valid null value", async function() {
      const result = await client.string.getNull();
      assert.deepStrictEqual(result, { body: undefined as any });

      await client.string.putNull();
    });

    it("should support valid empty string value", async function() {
      await client.string.putEmpty();
      const result = await client.string.getEmpty();
      assert.deepStrictEqual(result, { body: "" });
    });

    it("should support whitespace string value", async function() {
      await client.string.putWhitespace();
      const result = await client.string.getWhitespace();
      assert.deepStrictEqual(result, {
        body:
          "    Now is the time for all good men to come to the aid of their country    "
      });
    });

    it("should support not provided value", async function() {
      const result = await client.string.getNotProvided();
      assert.deepStrictEqual(result, { body: undefined as any });
    });

    it("should support valid enum valid value", async function() {
      const result = await client.enum.getNotExpandable();
      assert.deepStrictEqual(result, { body: "red color" });
      await client.enum.putNotExpandable("red color");
    });

    it("should correctly handle invalid values for enum", async function() {
      try {
        await client.enum.putNotExpandable("orange color" as Colors);
        assert.fail("should have thrown error 'is not a valid value'");
      } catch (error) {
        assert.ok(error.message.match(/.*is not a valid value.*/gi));
      }
    });

    it("should correctly deserialize base64 encoded string", async function() {
      const result = await client.string.getBase64Encoded();
      assert.ok(!!result.body);

      // "a string that gets encoded with base64"
      const expected: Uint8Array = new Uint8Array([
        97,
        32,
        115,
        116,
        114,
        105,
        110,
        103,
        32,
        116,
        104,
        97,
        116,
        32,
        103,
        101,
        116,
        115,
        32,
        101,
        110,
        99,
        111,
        100,
        101,
        100,
        32,
        119,
        105,
        116,
        104,
        32,
        98,
        97,
        115,
        101,
        54,
        52
      ]);
      for (let i = 0; i < expected.length; i++) {
        assert.equal(result.body[i], expected[i], "Byte mismatch.");
      }
    });

    it("should correctly handle null base64url encoded string", async () => {
      const result = await client.string.getNullBase64UrlEncoded();
      assert.ok(!result.body, "response should not contain result");
    });

    it("should correctly serialize and deserialize base64url encoded string", async () => {
      const result = await client.string.getBase64UrlEncoded();
      assert.ok(!!result.body, "response should contain a result");

      // "a string that gets encoded with base64url"
      const expected = new Uint8Array([
        97,
        32,
        115,
        116,
        114,
        105,
        110,
        103,
        32,
        116,
        104,
        97,
        116,
        32,
        103,
        101,
        116,
        115,
        32,
        101,
        110,
        99,
        111,
        100,
        101,
        100,
        32,
        119,
        105,
        116,
        104,
        32,
        98,
        97,
        115,
        101,
        54,
        52,
        117,
        114,
        108
      ]);
      for (let i = 0; i < expected.length; i++) {
        assert.equal(result.body[i], expected[i], "Byte mismatch.");
      }

      const result2 = await client.string.putBase64UrlEncoded(expected);
      //ok(!result2.body, "response should not contain result");
    });

    it("should getEnumReferenced", async function() {
      const { body } = await client.enum.getReferenced();
      assert.equal(body, "red color");
    });

    it("should putEnumReferenced", async function() {
      await client.enum.putReferenced("red color");
    });

    it("should getEnumReferencedConstant", async function() {
      const { field1 } = await client.enum.getReferencedConstant();
      assert.equal(field1, "Sample String");
    });

    it("should putEnumReferencedConstant", async function() {
      await client.enum.putReferencedConstant({
        colorConstant: "green-color"
      });
    });
  });

  describe("Mbcs", () => {
    it("should receive an UTF8 string in the response body", async () => {
      try {
        const result = await client.string.getMbcs();
        assert.equal(
          result.body,
          "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€"
        );
      } catch (error) {
        assert.fail(error);
      }
    });

    it("should send an UTF8 string in the request body", async () => {
      try {
        await client.string.putMbcs();
        assert.ok(true, "Operation executed with no errors");
      } catch (error) {
        assert.fail(error);
      }
    });
  }).timeout(5000);
});
