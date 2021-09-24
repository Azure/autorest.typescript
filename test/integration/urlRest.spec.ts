import * as assert from "assert";
import UrlRestClient, { UrlRestClientRestClient } from "./generated/urlRest/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";
import { flatMap } from "lodash";
import { UriColor } from "./generated/url/src";

describe("Integration tests for UrlRest", () => {
  let client: UrlRestClientRestClient;

  beforeEach(() => {
    client = UrlRestClient(
        {
            allowInsecureConnection: true
        }
    );
  });

  describe("paths", () => {
    // it("should work when passing null", async () => {
    //   await client.path("/paths/byte/null/{bytePath}", null as any).get()
    // });

    it("should work when path has empty value", async () => {
      const result = await client.path("/paths/byte/empty/{bytePath}", "").get();
      assert.strictEqual(result.status, "200");
      assert.notStrictEqual(result, undefined);
    });

    it("should work when path has  multi-byte byte values", async () => {
      //TODO: Check browser compatibility
      const byteArrayString = "5ZWK6b2E5LiC54ub54uc76ex76Ss76ex76iM76ip";
      const result = await client.path("/paths/byte/multibyte/{bytePath}", byteArrayString).get();
      assert.strictEqual(result.status, "200");
      assert.notStrictEqual(result, undefined);
    });

    it("should work when path has string", async () => {
      const result = await client.path("/paths/string/empty/{stringPath}", "").get();
      assert.strictEqual(result.status, "200");

      await client.path("/paths/string/null/{stringPath}", null as any).get();
    });

    it("should work when path has string unicode", async () => {
      const result = await client.path("/paths/string/unicode/{stringPath}", "啊齄丂狛狜隣郎隣兀﨩").get();
      assert.strictEqual(result.status, "200");
    });

    // it("should work when path has string URL Encoded", async () => {
    //   const result = await client.path("/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}", "begin!*'();:@ &=+$,/?#[]end").get();
    //   assert.strictEqual(result.status, "200");
    // });

    it("should work when path has string URL NOT Encoded", async () => {
      const result = await client.path("/paths/string/begin!*'();:@&=+$,end/{stringPath}", "begin!*'();:@&=+$,end").get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has base64url encoded string", async () => {
      //TODO: Check browser compatibility
      const result = await client.path("/paths/string/bG9yZW0/{base64UrlPath}", "bG9yZW0").get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has a paramaeter in UnixTime format", async () => {
      const result = await client.path("/paths/int/1460505600/{unixTimeUrlPath}", "1460505600").get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has datetime", async () => {
      const result = await client.path("/paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}", "2012-01-01T01:01:01Z").get();
      assert.strictEqual(result.status, "200");

      await client.path("/paths/datetime/null/{dateTimePath}", null as any).get();
    });

    it("should work when path has date", async function() {
      const result = await client.path("/paths/date/2012-01-01/{datePath}", "2012-01-01").get();
      assert.strictEqual(result.status, "200");
      assert.ok("called dateValid successfully");
    });

    it("should work when path has enum", async function() {
      try {
        await client.path("/paths/enum/green%20color/{enumPath}", <UriColor>"").get();
      } catch (error) {
        assert.equal(
          error.message,
          ` is not a valid value for enumPath. The valid values are: ["red color","green color","blue color"].`
        );
      }

      try {
        await client.path("/paths/string/null/{enumPath}", null as any).get();
      } catch (error) {
        assert.equal(error.message, `enumPath cannot be null or undefined.`);
      }

      const result = await client.path("/paths/enum/green%20color/{enumPath}", "green color").get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has bool", async function() {
      await client.path("/paths/bool/true/{boolPath}", true).get();
      await client.path("/paths/bool/false/{boolPath}", false).get();
      assert.ok("Both calls succeeded");
    });

    it("should work when path has double decimal values", async function() {
      await client.path("/paths/double/-9999999.999/{doublePath}", -9999999.999).get();
      await client.path("/paths/double/9999999.999/{doublePath}", 9999999.999).get();
      assert.ok("Both calls succeeded");
    });

    it("should work when path has float values", async function() {
      await client.path("/paths/float/-1.034E-20/{floatPath}", -1.034e-20).get();
      await client.path("/paths/float/1.034E+20/{floatPath}", 103400000000000000000).get();
      assert.ok("Both calls succeeded");
    });

    it("should work when path has integer values", async function() {
      await client.path("/paths/int/-1000000/{intPath}", -1000000).get();
      await client.path("/paths/int/1000000/{intPath}", 1000000).get();
      assert.ok("Both calls succeeded");
    });

    it("should work when path has big integer values", async function() {
      await client.path("/paths/long/-10000000000/{longPath}", -10000000000).get();
      await client.path("/paths/long/10000000000/{longPath}", 10000000000).get();
      assert.ok("Both calls succeeded");
    });
  });

  // describe("pathItems", () => {
  //   it("getAllWithValues should work when use values in different portion of url", async function() {
  //     client.globalStringQuery = "globalStringQuery";
  //     const optionalParams = {
  //       localStringQuery: "localStringQuery",
  //       pathItemStringQuery: "pathItemStringQuery"
  //     };

  //     await client.pathItems.getAllWithValues(
  //       "pathItemStringPath",
  //       "localStringPath",
  //       optionalParams
  //     );
  //     assert.ok("Call succeeded");
  //   });

  //   it("getGlobalAndLocalQueryNull should work when use null values in different portion of url", async function() {
  //     client.globalStringQuery = null as any;
  //     const optionalParams = {
  //       localStringQuery: null as any,
  //       pathItemStringQuery: "pathItemStringQuery"
  //     };

  //     await client.pathItems.getGlobalAndLocalQueryNull(
  //       "pathItemStringPath",
  //       "localStringPath",
  //       optionalParams
  //     );
  //     assert.ok("Call succeeded");
  //   });

  //   it("getGlobalQueryNull should work when use null values in different portion of url", async function() {
  //     client.globalStringQuery = null as any;
  //     const optionalParams = {
  //       localStringQuery: "localStringQuery",
  //       pathItemStringQuery: "pathItemStringQuery"
  //     };

  //     await client.pathItems.getGlobalQueryNull(
  //       "pathItemStringPath",
  //       "localStringPath",
  //       optionalParams
  //     );
  //     assert.ok("Call succeeded");
  //   });

  //   it("getLocalPathItemQueryNull should work when use null values in different portion of url", async function() {
  //     client.globalStringQuery = "globalStringQuery";
  //     const optionalParams = {
  //       localStringQuery: null as any,
  //       pathItemStringQuery: null as any
  //     };

  //     await client.pathItems.getLocalPathItemQueryNull(
  //       "pathItemStringPath",
  //       "localStringPath",
  //       optionalParams
  //     );
  //     assert.ok("Call succeeded");
  //   });
  // });
  // describe("queries", () => {
  //   it("should work when query has bool", async function() {
  //     await client.queries.arrayStringNoCollectionFormatEmpty({
  //       ...responseStatusChecker,
  //       arrayQuery: ["hello", "nihao", "bonjour"]
  //     });
  //   });

  //   it("should work when query has double values", async function() {
  //     const resultNegative = await client.queries.doubleDecimalNegative(
  //       responseStatusChecker
  //     );
  //     const resultPositive = await client.queries.doubleDecimalPositive(
  //       responseStatusChecker
  //     );
  //   });

  //   it("should work when query has date values", async function() {
  //     await client.queries.dateValid(responseStatusChecker);
  //   });

  //   it("should work when query has bool", async function() {
  //     await client.queries.getBooleanTrue();
  //     await client.queries.getBooleanFalse();
  //     assert.ok("Call succeeded");
  //   });

  //   it("should work when query has float values", async function() {
  //     await client.queries.floatScientificNegative();
  //     await client.queries.floatScientificPositive();
  //     assert.ok("Call succeeded");
  //   });

  //   it("should work when query has int values", async function() {
  //     await client.queries.getIntNegativeOneMillion();
  //     await client.queries.getIntOneMillion();
  //     assert.ok("Call succeeded");
  //   });

  //   it("should work when query has billion values", async () => {
  //     await client.queries.getNegativeTenBillion();
  //     await client.queries.getTenBillion();
  //     assert.ok("Call succeeded");
  //   });

  //   it("should work when query has string values", async () => {
  //     await client.queries.stringEmpty();
  //     await client.queries.stringUrlEncoded();
  //     assert.ok("Call succeeded");
  //   });

  //   it("should work when query has datetime", async () => {
  //     await client.queries.dateTimeValid();
  //     assert.ok("Call succeeded");
  //   });

  //   it("should work when query has byte values", async function() {
  //     await client.queries.byteEmpty();
  //     await client.queries.byteMultiByte({
  //       byteQuery: stringToByteArray("啊齄丂狛狜隣郎隣兀﨩")
  //     });
  //   });

  //   it("should work when query has enum values", async function() {
  //     await shouldThrow(() =>
  //       client.queries.enumValid({ enumQuery: <UriColor>"" })
  //     );
  //     await client.queries.enumNull({ enumQuery: null as any });
  //     await client.queries.enumValid({ enumQuery: "green color" });
  //     assert.ok("Call succeeded");
  //   });

  //   it("should work when query has stringUnicode", async function() {
  //     await client.queries.stringUnicode(responseStatusChecker);
  //   });

  //   it("should work when query has string array values", async function() {
  //     const testArray = [
  //       "ArrayQuery1",
  //       "begin!*'();:@ &=+$,/?#[]end",
  //       null as any,
  //       ""
  //     ] as string[];
  //     await client.queries.arrayStringCsvEmpty({ arrayQuery: [] });
  //     await client.queries.arrayStringCsvValid({ arrayQuery: testArray });
  //     await client.queries.arrayStringPipesValid({ arrayQuery: testArray });
  //     await client.queries.arrayStringSsvValid({ arrayQuery: testArray });
  //     await client.queries.arrayStringTsvValid({ arrayQuery: testArray });
  //     assert.ok("Calls succeeded");
  //   });

  //   it("should work when path has string array values", async function() {
  //     await client.paths.arrayCsvInPath([
  //       "ArrayPath1",
  //       "begin!*'();:@ &=+$,/?#[]end",
  //       null as any,
  //       ""
  //     ] as string[]);
  //     assert.ok("Call succeeded");
  //   });

  //   it("should work when path has valid date", async function() {
  //     await client.paths.dateValid(responseStatusChecker);
  //   });

  //   it("should work when path has doubleDecimalPositive", async function() {
  //     await client.paths.doubleDecimalPositive(responseStatusChecker);
  //   });

  //   it("should work when path has doubleDecimalNegative", async function() {
  //     await client.paths.doubleDecimalNegative(responseStatusChecker);
  //   });

  //   it("should work when use null values in url query", async function() {
  //     await client.queries.byteNull({ byteQuery: null as any });
  //     await client.queries.dateNull({ dateQuery: null as any });
  //     await client.queries.dateTimeNull({ dateTimeQuery: null as any });
  //     await client.queries.doubleNull({ doubleQuery: null as any });
  //     await client.queries.floatNull({ floatQuery: null as any });
  //     await client.queries.getBooleanNull({ boolQuery: null as any });
  //     await client.queries.getIntNull({ intQuery: null as any });
  //     await client.queries.getLongNull({ longQuery: null as any });
  //     await client.queries.stringNull({ stringQuery: null as any });
  //     await client.queries.arrayStringCsvNull({ arrayQuery: null as any });
  //     assert.ok("Calls succeeded");
  //   }).timeout(5000);
  // });
});

function stringToByteArray(str: string) {
  // TODO make this work for browser
  return Buffer.from(str, "utf-8");
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