import * as assert from "assert";
import { UrlClient, UrlModels } from "./generated/url/src/urlClient";

describe("Integration tests for Url", () => {
  let client: UrlClient;

  beforeEach(() => {
    client = new UrlClient();
  });

  describe("paths", () => {
    it("should throw when passing null", async () => {
      await shouldThrow(() => client.paths.byteNull(null as any));
    });

    it("should work when path has empty value", async () => {
      const result = await client.paths.byteEmpty();
      assert.notEqual(result, undefined);
    });

    it("should work when path has  multi-byte byte values", async () => {
      //TODO: Check browser compatibility
      const byteArray = Buffer.from("啊齄丂狛狜隣郎隣兀﨩", "utf-8");
      const result = await client.paths.byteMultiByte(byteArray);
      assert.notEqual(result, undefined);
    });

    it("should work when path has string", async () => {
      await client.paths.stringEmpty();
      assert.ok("Didn't fail as expected");

      await shouldThrow(() => client.paths.stringNull(null as any));
    });

    it("should work when path has base64url encoded string", async () => {
      //TODO: Check browser compatibility
      const byteArray = Buffer.from("lorem", "utf-8");
      await client.paths.base64Url(byteArray);
    });

    it("should work when path has a paramaeter in UnixTime format", async () => {
      await client.paths.unixTimeUrl(new Date("2016-04-13T00:00:00.000Z"));
      await shouldThrow(() => Promise.reject("ok"));
    });

    it("should work when path has datetime", async () => {
      await client.paths.dateTimeValid();
      assert.ok("called dateTimeValid successfully");

      await shouldThrow(() => client.paths.dateTimeNull(null as any));
    });

    it("should work when path has date", async function() {
      await client.paths.dateValid();
      assert.ok("called dateValid successfully");
    });

    it("should work when path has enum", async function() {
      try {
        await client.paths.enumValid(<UrlModels.UriColor>"");
        assert.fail("Expected to throw");
      } catch (error) {
        assert.equal(
          error.message,
          ` is not a valid value for enumPath. The valid values are: ["red color","green color","blue color"].`
        );
      }

      try {
        await client.paths.enumNull(null as any);
        assert.fail("Expected to throw");
      } catch (error) {
        assert.equal(error.message, `enumPath cannot be null or undefined.`);
      }

      await client.paths.enumValid("green color");
    });

    it("should work when path has bool", async function() {
      await client.paths.getBooleanTrue();
      await client.paths.getBooleanFalse();
      assert.ok("Both calls succeeded");
    });

    it("should work when path has double decimal values", async function() {
      await client.paths.doubleDecimalNegative();
      await client.paths.doubleDecimalPositive();
      assert.ok("Both calls succeeded");
    });

    it("should work when path has float values", async function() {
      await client.paths.floatScientificNegative();
      await client.paths.floatScientificPositive();
      assert.ok("Both calls succeeded");
    });

    it("should work when path has integer values", async function() {
      await client.paths.getIntNegativeOneMillion();
      await client.paths.getIntOneMillion();
      assert.ok("Both calls succeeded");
    });

    it("should work when path has big integer values", async function() {
      await client.paths.getNegativeTenBillion();
      await client.paths.getTenBillion();
      assert.ok("Both calls succeeded");
    });
  });

  describe.skip("pathItems", () => {
    it("should work when use values in different portion of url", async function() {
      var optionalParams = {
        localStringQuery: "localStringQuery",
        pathItemStringQuery: "pathItemStringQuery"
      };

      await client.pathItems.getAllWithValues(
        "localStringPath",
        "pathItemStringPath",
        optionalParams
      );
      assert.ok("Call succeeded");
    });
  });
});

async function shouldThrow(fn: () => Promise<any>) {
  let threw = false;
  try {
    await fn();
  } catch (e) {
    threw = true;
  } finally {
    if (!threw) {
      assert.fail("Expected to throw error");
    }
  }
}
