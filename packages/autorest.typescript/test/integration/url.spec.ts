import { assert } from "chai";
import { UrlClient, UriColor } from "./generated/url/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("Integration tests for Url", () => {
  let client: UrlClient;

  beforeEach(() => {
    const clientOptions = {
      noRetryPolicy: true,
      endpoint: "http://localhost:3000",
      allowInsecureConnection: true
    };
    client = new UrlClient("globalStringPath", clientOptions);
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
      const byteArray = stringToByteArray("啊齄丂狛狜隣郎隣兀﨩");
      const result = await client.paths.byteMultiByte(byteArray);
      assert.notEqual(result, undefined);
    });

    it("should work when path has string", async () => {
      await client.paths.stringEmpty();
      assert.ok("Didn't fail as expected");

      await shouldThrow(() => client.paths.stringNull(null as any));
    });

    it("should work when path has string unicode", async () => {
      await client.paths.stringUnicode(responseStatusChecker);
    });

    it("should work when path has string URL Encoded", async () => {
      await client.paths.stringUrlEncoded(responseStatusChecker);
    });

    it("should work when path has string URL NOT Encoded", async () => {
      await client.paths.stringUrlNonEncoded(responseStatusChecker);
    });

    it("should work when path has base64url encoded string", async () => {
      //TODO: Check browser compatibility
      const byteArray = stringToByteArray("lorem");
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
        await client.paths.enumValid(<UriColor>"");
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

  describe("pathItems", () => {
    it("getAllWithValues should work when use values in different portion of url", async function() {
      client.globalStringQuery = "globalStringQuery";
      const optionalParams = {
        localStringQuery: "localStringQuery",
        pathItemStringQuery: "pathItemStringQuery"
      };

      await client.pathItems.getAllWithValues(
        "pathItemStringPath",
        "localStringPath",
        optionalParams
      );
      assert.ok("Call succeeded");
    });

    it("getGlobalAndLocalQueryNull should work when use null values in different portion of url", async function() {
      client.globalStringQuery = null as any;
      const optionalParams = {
        localStringQuery: null as any,
        pathItemStringQuery: "pathItemStringQuery"
      };

      await client.pathItems.getGlobalAndLocalQueryNull(
        "pathItemStringPath",
        "localStringPath",
        optionalParams
      );
      assert.ok("Call succeeded");
    });

    it("getGlobalQueryNull should work when use null values in different portion of url", async function() {
      client.globalStringQuery = null as any;
      const optionalParams = {
        localStringQuery: "localStringQuery",
        pathItemStringQuery: "pathItemStringQuery"
      };

      await client.pathItems.getGlobalQueryNull(
        "pathItemStringPath",
        "localStringPath",
        optionalParams
      );
      assert.ok("Call succeeded");
    });

    it("getLocalPathItemQueryNull should work when use null values in different portion of url", async function() {
      client.globalStringQuery = "globalStringQuery";
      const optionalParams = {
        localStringQuery: null as any,
        pathItemStringQuery: null as any
      };

      await client.pathItems.getLocalPathItemQueryNull(
        "pathItemStringPath",
        "localStringPath",
        optionalParams
      );
      assert.ok("Call succeeded");
    });
  });
  describe("queries", () => {
    it("should work when query has bool", async function() {
      await client.queries.arrayStringNoCollectionFormatEmpty({
        ...responseStatusChecker,
        arrayQuery: ["hello", "nihao", "bonjour"]
      });
    });

    it("should work when query has double values", async function() {
      const resultNegative = await client.queries.doubleDecimalNegative(
        responseStatusChecker
      );
      const resultPositive = await client.queries.doubleDecimalPositive(
        responseStatusChecker
      );
    });

    it("should work when query has date values", async function() {
      await client.queries.dateValid(responseStatusChecker);
    });

    it("should work when query has bool", async function() {
      await client.queries.getBooleanTrue();
      await client.queries.getBooleanFalse();
      assert.ok("Call succeeded");
    });

    it("should work when query has float values", async function() {
      await client.queries.floatScientificNegative();
      await client.queries.floatScientificPositive();
      assert.ok("Call succeeded");
    });

    it("should work when query has int values", async function() {
      await client.queries.getIntNegativeOneMillion();
      await client.queries.getIntOneMillion();
      assert.ok("Call succeeded");
    });

    it("should work when query has billion values", async () => {
      await client.queries.getNegativeTenBillion();
      await client.queries.getTenBillion();
      assert.ok("Call succeeded");
    });

    it("should work when query has string values", async () => {
      await client.queries.stringEmpty();
      await client.queries.stringUrlEncoded();
      assert.ok("Call succeeded");
    });

    it("should work when query has datetime", async () => {
      await client.queries.dateTimeValid();
      assert.ok("Call succeeded");
    });

    it("should work when query has byte values", async function() {
      await client.queries.byteEmpty();
      await client.queries.byteMultiByte({
        byteQuery: stringToByteArray("啊齄丂狛狜隣郎隣兀﨩")
      });
    });

    it("should work when query has enum values", async function() {
      await shouldThrow(() =>
        client.queries.enumValid({ enumQuery: <UriColor>"" })
      );
      await client.queries.enumNull({ enumQuery: null as any });
      await client.queries.enumValid({ enumQuery: "green color" });
      assert.ok("Call succeeded");
    });

    it("should work when query has stringUnicode", async function() {
      await client.queries.stringUnicode(responseStatusChecker);
    });

    it("should work when query has string array values", async function() {
      const testArray = [
        "ArrayQuery1",
        "begin!*'();:@ &=+$,/?#[]end",
        null as any,
        ""
      ] as string[];
      await client.queries.arrayStringCsvEmpty({ arrayQuery: [] });
      await client.queries.arrayStringCsvValid({ arrayQuery: testArray });
      await client.queries.arrayStringPipesValid({ arrayQuery: testArray });
      await client.queries.arrayStringSsvValid({ arrayQuery: testArray });
      await client.queries.arrayStringTsvValid({ arrayQuery: testArray });
      assert.ok("Calls succeeded");
    });

    it("should work when path has string array values", async function() {
      await client.paths.arrayCsvInPath([
        "ArrayPath1",
        "begin!*'();:@ &=+$,/?#[]end",
        null as any,
        ""
      ] as string[]);
      assert.ok("Call succeeded");
    });

    it("should work when path has valid date", async function() {
      await client.paths.dateValid(responseStatusChecker);
    });

    it("should work when path has doubleDecimalPositive", async function() {
      await client.paths.doubleDecimalPositive(responseStatusChecker);
    });

    it("should work when path has doubleDecimalNegative", async function() {
      await client.paths.doubleDecimalNegative(responseStatusChecker);
    });

    it("should work when use null values in url query", async function() {
      await client.queries.byteNull({ byteQuery: null as any });
      await client.queries.dateNull({ dateQuery: null as any });
      await client.queries.dateTimeNull({ dateTimeQuery: null as any });
      await client.queries.doubleNull({ doubleQuery: null as any });
      await client.queries.floatNull({ floatQuery: null as any });
      await client.queries.getBooleanNull({ boolQuery: null as any });
      await client.queries.getIntNull({ intQuery: null as any });
      await client.queries.getLongNull({ longQuery: null as any });
      await client.queries.stringNull({ stringQuery: null as any });
      await client.queries.arrayStringCsvNull({ arrayQuery: null as any });
      assert.ok("Calls succeeded");
    });
  });
});

function stringToByteArray(str: string) {
  // TODO make this work for browser
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

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
