import { assert } from "chai";
import BodyStringRest, {
  BodyStringRestClient
} from "./generated/bodyStringRest/src";

describe("UserAgentRest", () => {
  let client: BodyStringRestClient;

  beforeEach(() => {
    client = BodyStringRest();
  });

  describe("Acceptance tests", () => {
    it("should send correct user agent prefix string for rlc", async () => {
      const client: BodyStringRestClient = BodyStringRest();
      const result = await client
        .path("/string/nullBase64UrlEncoding")
        .get({ allowInsecureConnection: true });
      assert.equal(result.status, "200");
      const userAgent = result.request.headers?.get("user-agent");
      assert.isTrue(userAgent !== undefined);
      if (userAgent) {
        assert.isTrue(userAgent.indexOf("azsdk-js-body-string-rest") > -1);
      }
    });
  });
});
