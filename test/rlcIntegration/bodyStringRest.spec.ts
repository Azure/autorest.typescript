import { assert } from "chai";
import BodyStringRest, {
  BodyStringRestClient
} from "./generated/bodyStringRest/src";
import { isUnexpected } from "./generated/bodyStringRest/src";

describe("BodyStringRest", () => {
  let client: BodyStringRestClient;

  beforeEach(() => {
    client = BodyStringRest();
  });

  describe("Acceptance tests", () => {
    it("should support valid null value", async function() {
      const resource = client.path("/string/null");
      const result = await resource.get({ allowInsecureConnection: true });

      assert.equal(result.body, undefined);

      const putResult = await resource.put({ allowInsecureConnection: true });
      assert.equal(putResult.status, "200");
    });

    it("should support valid empty string value", async function() {
      const resource = client.path("/string/empty");

      const putResponse = await resource.put({
        allowInsecureConnection: true,
        body: "",
        contentType: "application/json"
      });
      assert.equal(putResponse.status, "200");

      const result = await resource.get({ allowInsecureConnection: true });
      assert.equal(result.body, "");
    });

    it("should support whitespace string value", async function() {
      const resource = client.path("/string/whitespace");
      const putResult = await resource.put({
        allowInsecureConnection: true,
        body:
          "    Now is the time for all good men to come to the aid of their country    ",
        contentType: "application/json"
      });

      const result = await resource.get({ allowInsecureConnection: true });

      assert.equal(putResult.status, "200");
      assert.equal(
        result.body,
        "    Now is the time for all good men to come to the aid of their country    "
      );
    });

    it("should support not provided value", async function() {
      const result = await client
        .path("/string/notProvided")
        .get({ allowInsecureConnection: true });
      assert.isUndefined(result.body);
    });

    it("should support valid enum valid value", async function() {
      const resource = client.path("/string/enum/Referenced");
      const result = await resource.get({ allowInsecureConnection: true });

      const putResult = await resource.put({
        allowInsecureConnection: true,
        body: "red color",
        contentType: "application/json"
      });

      assert.equal(putResult.status, "200");
      assert.equal(result.body, "red color");
    });

    it("should correctly handle invalid values for enum", async function() {
      try {
        await client
          .path("/string/enum/notExpandable")
          .put({ allowInsecureConnection: true, body: "orange color" } as any);
        assert.fail("should have thrown error 'is not a valid value'");
      } catch (error) {
        assert.ok(error.message.match(/.*is not a valid value.*/gi));
      }
    });

    it("should get a base64 encoded string", async function() {
      const result = await client
        .path("/string/base64Encoding")
        .get({ allowInsecureConnection: true });

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw error;
      }

      // a string that gets encoded with base64
      const expected = "YSBzdHJpbmcgdGhhdCBnZXRzIGVuY29kZWQgd2l0aCBiYXNlNjQ=";

      assert.equal(result.body, expected);
    });

    it("should correctly handle null base64url encoded string", async () => {
      const result = await client
        .path("/string/nullBase64UrlEncoding")
        .get({ allowInsecureConnection: true });
      assert.equal(result.status, "200");
      assert.isUndefined(result.body);
    });

    it("should correctly send and receive a base64Url encoded string", async () => {
      const result = await client.path("/string/base64UrlEncoding").get({
        allowInsecureConnection: true
      });
      assert.equal(result.status, "200");

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw error;
      }

      // a string that gets encoded with base64url
      const expected =
        "YSBzdHJpbmcgdGhhdCBnZXRzIGVuY29kZWQgd2l0aCBiYXNlNjR1cmw";

      assert.equal(result.body, expected);

      const result2 = await client.path("/string/base64UrlEncoding").put({
        allowInsecureConnection: true,
        body: expected,
        contentType: "application/json"
      });

      assert.equal(result2.status, "200");
    });

    it("should getEnumReferenced", async function() {
      const { body } = await client
        .path("/string/enum/Referenced")
        .get({ allowInsecureConnection: true });
      assert.equal(body, "red color");
    });

    it("should putEnumReferenced", async function() {
      const result = await client.path("/string/enum/Referenced").put({
        allowInsecureConnection: true,
        body: "red color",
        contentType: "application/json"
      });

      assert.equal(result.status, "200");
    });

    it("should getEnumReferencedConstant", async function() {
      const result = await client
        .path("/string/enum/ReferencedConstant")
        .get({ allowInsecureConnection: true });

      if (isUnexpected(result)) {
        const error = `Unexpected status code ${result.status}`;
        assert.fail(error);
        throw error;
      }

      assert.equal(result.body.field1, "Sample String");
    });

    it("should putEnumReferencedConstant", async function() {
      const result = await client.path("/string/enum/ReferencedConstant").put({
        allowInsecureConnection: true,
        body: { ColorConstant: "green-color" }
      });

      assert.equal(result.status, "200");
    });
  });

  describe("Mbcs", () => {
    it("should receive an UTF8 string in the response body", async () => {
      const result = await client
        .path("/string/mbcs")
        .get({ allowInsecureConnection: true });
      assert.equal(
        result.body,
        "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€"
      );
    });

    it("should send an UTF8 string in the request body", async () => {
      const result = await client.path("/string/mbcs").put({
        allowInsecureConnection: true,
        body:
          "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€",
        contentType: "application/json"
      });
      assert.equal(result.status, "200");
    });
  });
});
