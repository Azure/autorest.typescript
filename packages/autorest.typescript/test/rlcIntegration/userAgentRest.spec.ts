import { createHttpHeaders } from "@azure/core-rest-pipeline";
import { assert } from "chai";
import BodyStringRest, {
  BodyStringRestClient
} from "./generated/bodyStringRest/src";

describe("UserAgentRest", () => {
  describe("Acceptance tests", () => {
    it("should send correct user agent prefix string for rlc", async () => {
      const client: BodyStringRestClient = BodyStringRest({
        httpClient: {
          async sendRequest(req) {
            const userAgent =
              req.headers?.get("user-agent") ??
              req.headers?.get("x-ms-useragent");
            assert.include(userAgent, "azsdk-js-body-string-rest");

            return { headers: createHttpHeaders(), request: req, status: 200 };
          }
        }
      });
      await client
        .path("/string/nullBase64UrlEncoding")
        .get({ allowInsecureConnection: true });
    });
  });
});
