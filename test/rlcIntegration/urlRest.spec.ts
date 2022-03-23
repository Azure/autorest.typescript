import { assert } from "chai";
import UrlRest, {
  UrlRestClient
} from "./generated/urlRest/src";
export type UriColor = "red color" | "green color" | "blue color";

describe("Integration tests for UrlRest", () => {
  let client: UrlRestClient;

  beforeEach(() => {
    client = UrlRest({
      allowInsecureConnection: true
    });
  });

  describe("paths", () => {
    // it("should work when passing null", async () => {
    //   await client.path("/paths/byte/null/{bytePath}", null as any).get()
    // });

    it("should work when path has empty value", async () => {
      const result = await client
        .path("/paths/byte/empty/{bytePath}", "")
        .get();
      assert.strictEqual(result.status, "200");
      assert.notStrictEqual(result, undefined);
    });

    it("should work when path has  multi-byte byte values", async () => {
      //TODO: Check browser compatibility
      const byteArrayString = "5ZWK6b2E5LiC54ub54uc76ex76Ss76ex76iM76ip";
      const result = await client
        .path("/paths/byte/multibyte/{bytePath}", byteArrayString)
        .get();
      assert.strictEqual(result.status, "200");
      assert.notStrictEqual(result, undefined);
    });

    it("should work when path has string", async () => {
      const result = await client
        .path("/paths/string/empty/{stringPath}", "")
        .get();
      assert.strictEqual(result.status, "200");

      // await client.path("/paths/string/null/{stringPath}", null as any).get();
    });

    it("should work when path has string unicode", async () => {
      const result = await client
        .path("/paths/string/unicode/{stringPath}", "啊齄丂狛狜隣郎隣兀﨩")
        .get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has string URL Encoded", async () => {
      const result = await client
        .path(
          "/paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
          "begin!*'();:@ &=+$,/?#[]end"
        )
        .get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has string URL NOT Encoded", async () => {
      const result = await client
        .path(
          "/paths/string/begin!*'();:@&=+$,end/{stringPath}",
          "begin!*'();:@&=+$,end"
        )
        .get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has base64url encoded string", async () => {
      //TODO: Check browser compatibility
      const result = await client
        .path("/paths/string/bG9yZW0/{base64UrlPath}", "bG9yZW0")
        .get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has a paramaeter in UnixTime format", async () => {
      const result = await client
        .path("/paths/int/1460505600/{unixTimeUrlPath}", "1460505600")
        .get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has datetime", async () => {
      const result = await client
        .path(
          "/paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
          "2012-01-01T01:01:01.000Z"
        )
        .get();
      assert.strictEqual(result.status, "200");

      // await client
      //   .path("/paths/datetime/null/{dateTimePath}", null as any)
      //   .get();
    });

    it("should work when path has date", async function() {
      const result = await client
        .path("/paths/date/2012-01-01/{datePath}", "2012-01-01")
        .get();
      assert.strictEqual(result.status, "200");
      assert.ok("called dateValid successfully");
    });

    it("should work when path has enum", async function() {
      try {
        await client
          .path("/paths/enum/green%20color/{enumPath}", <UriColor>"")
          .get();
      } catch (error) {
        assert.equal(
          error.message,
          ` is not a valid value for enumPath. The valid values are: ["red color","green color","blue color"].`
        );
      }

      // try {
      //   await client.path("/paths/string/null/{enumPath}", null as any).get();
      // } catch (error) {
      //   assert.equal(error.message, `enumPath cannot be null or undefined.`);
      // }

      const result = await client
        .path("/paths/enum/green%20color/{enumPath}", "green color")
        .get();
      assert.strictEqual(result.status, "200");
    });

    it("should work when path has bool", async function() {
      const result = await client
        .path("/paths/bool/true/{boolPath}", true)
        .get();
      const result1 = await client
        .path("/paths/bool/false/{boolPath}", false)
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result1.status, "200");
      assert.ok("Both calls succeeded");
    });

    it("should work when path has double decimal values", async function() {
      const result = await client
        .path("/paths/double/-9999999.999/{doublePath}", -9999999.999)
        .get();
      const result1 = await client
        .path("/paths/double/9999999.999/{doublePath}", 9999999.999)
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result1.status, "200");
      assert.ok("Both calls succeeded");
    });

    it("should work when path has float values", async function() {
      const result = await client
        .path("/paths/float/-1.034E-20/{floatPath}", -1.034e-20)
        .get();
      const result1 = await client
        .path("/paths/float/1.034E+20/{floatPath}", 103400000000000000000)
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result1.status, "200");
      assert.ok("Both calls succeeded");
    });

    it("should work when path has integer values", async function() {
      const result = await client
        .path("/paths/int/-1000000/{intPath}", -1000000)
        .get();
      const result1 = await client
        .path("/paths/int/1000000/{intPath}", 1000000)
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result1.status, "200");
      assert.ok("Both calls succeeded");
    });

    it("should work when path has big integer values", async function() {
      const result = await client
        .path("/paths/long/-10000000000/{longPath}", -10000000000)
        .get();
      const result1 = await client
        .path("/paths/long/10000000000/{longPath}", 10000000000)
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result1.status, "200");
      assert.ok("Both calls succeeded");
    });
  });

  describe("pathItems", () => {
    it("getAllWithValues should work when use values in different portion of url", async function() {
      const optionalParams = {
        localStringQuery: "localStringQuery",
        pathItemStringQuery: "pathItemStringQuery",
        globalStringQuery: "globalStringQuery"
      };

      const result = await client
        .path(
          "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery",
          "globalStringPath",
          "pathItemStringPath",
          "localStringPath"
        )
        .get({ queryParameters: optionalParams });
      assert.strictEqual(result.status, "200");
      assert.ok("Call succeeded");
    });

    it("getGlobalAndLocalQueryNull should work when use null values in different portion of url", async function() {
      const optionalParams = {
        localStringQuery: null as any,
        pathItemStringQuery: "pathItemStringQuery",
        globalStringQuery: null as any
      };

      const result = await client
        .path(
          "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null",
          "globalStringPath",
          "pathItemStringPath",
          "localStringPath"
        )
        .get({ queryParameters: optionalParams });
      assert.strictEqual(result.status, "200");
      assert.ok("Call succeeded");
    });

    it("getGlobalQueryNull should work when use null values in different portion of url", async function() {
      const optionalParams = {
        globalStringQuery: null as any,
        localStringQuery: "localStringQuery",
        pathItemStringQuery: "pathItemStringQuery"
      };

      const result = await client
        .path(
          "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery",
          "globalStringPath",
          "pathItemStringPath",
          "localStringPath"
        )
        .get({ queryParameters: optionalParams });
      assert.strictEqual(result.status, "200");
      assert.ok("Call succeeded");
    });

    it("getLocalPathItemQueryNull should work when use null values in different portion of url", async function() {
      const optionalParams = {
        localStringQuery: null as any,
        pathItemStringQuery: null as any,
        globalStringQuery: "globalStringQuery"
      };

      const result = await client
        .path(
          "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null",
          "globalStringPath",
          "pathItemStringPath",
          "localStringPath"
        )
        .get({
          queryParameters: optionalParams
        });
      assert.strictEqual(result.status, "200");
      assert.ok("Call succeeded");
    });
  });
  describe("queries", () => {
    it("should work when query has bool", async function() {
      const result = await client.path("/queries/array/none/string/empty").get({
        queryParameters: {
          arrayQuery: ["hello", "nihao", "bonjour"]
        }
      });
      assert.strictEqual(result.status, "200");
    });

    it("should work when query has double values", async function() {
      const result = await client.path("/queries/double/9999999.999").get({
        queryParameters: {
          doubleQuery: 9999999.999
        }
      });
      assert.strictEqual(result.status, "200");

      const result1 = await client.path("/queries/double/-9999999.999").get({
        queryParameters: {
          doubleQuery: -9999999.999
        }
      });
      assert.strictEqual(result1.status, "200");
    });

    it("should work when query has date values", async function() {
      const result = await client.path("/queries/date/2012-01-01").get({
        queryParameters: {
          dateQuery: "2012-01-01"
        }
      });
      assert.strictEqual(result.status, "200");
    });

    it("should work when query has bool", async function() {
      const result = await client.path("/queries/bool/true").get({
        queryParameters: {
          boolQuery: true
        }
      });
      assert.strictEqual(result.status, "200");
      const result1 = await client.path("/queries/bool/false").get({
        queryParameters: {
          boolQuery: false
        }
      });
      assert.strictEqual(result1.status, "200");
      assert.ok("Call succeeded");
    });

    it("should work when query has float values", async function() {
      const result = await client.path("/queries/float/1.034E+20").get({
        queryParameters: {
          floatQuery: 103400000000000000000
        }
      });
      assert.strictEqual(result.status, "200");
      const result1 = await client.path("/queries/float/-1.034E-20").get({
        queryParameters: {
          floatQuery: -1.034e-20
        }
      });
      assert.strictEqual(result1.status, "200");
      assert.ok("Call succeeded");
    });

    it("should work when query has int values", async function() {
      const result = await client.path("/queries/int/1000000").get({
        queryParameters: {
          intQuery: 1000000
        }
      });
      assert.strictEqual(result.status, "200");
      const result1 = await client.path("/queries/int/-1000000").get({
        queryParameters: {
          intQuery: -1000000
        }
      });
      assert.strictEqual(result1.status, "200");
      assert.ok("Call succeeded");
    });

    it("should work when query has billion values", async () => {
      const result = await client.path("/queries/long/10000000000").get({
        queryParameters: {
          longQuery: 10000000000
        }
      });
      assert.strictEqual(result.status, "200");
      const result1 = await client.path("/queries/long/-10000000000").get({
        queryParameters: {
          longQuery: -10000000000
        }
      });
      assert.strictEqual(result1.status, "200");
      assert.ok("Call succeeded");
    });

    it("should work when query has string values", async () => {
      const result = await client.path("/queries/string/empty").get({
        queryParameters: {
          stringQuery: ""
        }
      });
      assert.strictEqual(result.status, "200");
      const result1 = await client
        .path(
          "/queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend"
        )
        .get({
          queryParameters: {
            stringQuery: "begin!*'();:@ &=+$,/?#[]end"
          }
        });
      assert.strictEqual(result1.status, "200");
      assert.ok("Call succeeded");
    });

    it("should work when query has datetime", async () => {
      const result = await client
        .path("/queries/datetime/2012-01-01T01%3A01%3A01Z")
        .get({
          queryParameters: {
            dateTimeQuery: "2012-01-01T01:01:01.000Z"
          }
        });
      assert.strictEqual(result.status, "200");
      assert.ok("Call succeeded");
    });

    it("should work when query has byte values", async function() {
      const result = await client.path("/queries/byte/empty").get({
        queryParameters: {
          byteQuery: ""
        }
      });
      assert.strictEqual(result.status, "200");
      const result1 = await client.path("/queries/byte/multibyte").get({
        queryParameters: {
          byteQuery: "5ZWK6b2E5LiC54ub54uc76ex76Ss76ex76iM76ip"
        }
      });
      assert.strictEqual(result1.status, "200");
    });

    it("should work when query has enum values", async function() {
      try {
        await client.path("/queries/enum/green%20color").get({
          queryParameters: {
            enumQuery: <UriColor>""
          }
        });
      } catch (error) {
        assert.equal(
          error.message,
          ` is not a valid value for enumPath. The valid values are: ["red color","green color","blue color"].`
        );
      }

      const result = await client.path("/queries/enum/null").get({
        queryParameters: {
          enumQuery: null as any
        }
      });
      assert.strictEqual(result.status, "200");
      const result1 = await client.path("/queries/enum/green%20color").get({
        queryParameters: {
          enumQuery: "green color"
        }
      });
      assert.strictEqual(result1.status, "200");
      assert.ok("Call succeeded");
    });

    it("should work when query has stringUnicode", async function() {
      const result = await client.path("/queries/string/unicode/").get({
        queryParameters: {
          stringQuery: "啊齄丂狛狜隣郎隣兀﨩"
        }
      });
      assert.strictEqual(result.status, "200");
    });

    it("should work when query has string array values", async function() {
      const testArray = [
        "ArrayQuery1",
        "begin!*'();:@ &=+$,/?#[]end",
        null as any,
        ""
      ] as string[];
      const result = await client.path("/queries/array/csv/string/empty").get({
        queryParameters: {
          arrayQuery: []
        }
      });
      const result1 = await client.path("/queries/array/csv/string/valid").get({
        queryParameters: {
          arrayQuery: testArray
        }
      });
      const result2 = await client
        .path("/queries/array/pipes/string/valid")
        .get({
          queryParameters: {
            arrayQuery: testArray.join("|") as any
          }
        });
      const result3 = await client.path("/queries/array/ssv/string/valid").get({
        queryParameters: {
          arrayQuery: testArray.join(" ") as any
        }
      });
      const result4 = await client.path("/queries/array/tsv/string/valid").get({
        queryParameters: {
          arrayQuery: testArray.join("\t") as any
        }
      });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result1.status, "200");
      assert.strictEqual(result2.status, "200");
      assert.strictEqual(result3.status, "200");
      assert.strictEqual(result4.status, "200");
      assert.ok("Calls succeeded");
    });

    it("should work when path has string array values", async function() {
      const result = await client
        .path(
          "/paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
          ["ArrayPath1", "begin!*'();:@ &=+$,/?#[]end", null as any, ""]
        )
        .get();
      assert.strictEqual(result.status, "200");
      assert.ok("Call succeeded");
    });

    it("should work when use null values in url query", async function() {
      await client.path("/queries/byte/null").get({
        queryParameters: {
          byteQuery: null as any
        }
      });
      await client.path("/queries/date/null").get({
        queryParameters: {
          dateQuery: null as any
        }
      });
      await client.path("/queries/double/null").get({
        queryParameters: {
          doubleQuery: null as any
        }
      });
      await client.path("/queries/float/null").get({
        queryParameters: {
          floatQuery: null as any
        }
      });
      await client.path("/queries/bool/null").get({
        queryParameters: {
          boolQuery: null as any
        }
      });
      await client.path("/queries/int/null").get({
        queryParameters: {
          intQuery: null as any
        }
      });
      await client.path("/queries/long/null").get({
        queryParameters: {
          longQuery: null as any
        }
      });
      await client.path("/queries/string/null").get({
        queryParameters: {
          stringQuery: null as any
        }
      });
      await client.path("/queries/array/csv/string/null").get({
        queryParameters: {
          arrayQuery: null as any
        }
      });
      assert.ok("Calls succeeded");
    }).timeout(5000);
  });
});
