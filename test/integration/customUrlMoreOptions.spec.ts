import {
  CustomUrlMoreOptionsClient,
  CustomUrlMoreOptionsClientOptionalParams
} from "./generated/customUrlMoreOptions/src";
import { assert } from "chai";

describe("Custom URL More Options", () => {
  let client: CustomUrlMoreOptionsClient;

  beforeEach(() => {
    const clientOptions: CustomUrlMoreOptionsClientOptionalParams = {
      endpoint: "http://localhost:3000",
      dnsSuffix: ""
    };
    client = new CustomUrlMoreOptionsClient("test12", clientOptions);
  });

  describe("Paths", () => {
    it("getEmpty", async () => {
      let result = await client.paths.getEmpty(
        "testVault",
        "testSecret",
        "key1",
        { keyVersion: "v1" }
      );
      assert.equal(result._response.status, 200);
    });
  });
});
