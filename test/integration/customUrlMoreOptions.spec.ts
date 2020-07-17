import { CustomUrlMoreOptionsClient } from "./generated/customUrlMoreOptions/src/customUrlMoreOptionsClient";
import { assert } from "chai";
import { CustomUrlMoreOptionsClientOptionalParams } from "./generated/customUrlMoreOptions/src/models";

describe("Custom URL + Paging", () => {
  let client: CustomUrlMoreOptionsClient;

  beforeEach(() => {
    const clientOptions: CustomUrlMoreOptionsClientOptionalParams = {
      endpoint: "localhost:3000",
      dnsSuffix: ""
    };
    client = new CustomUrlMoreOptionsClient("test12", clientOptions);
  });

  describe("Paging", () => {
    it("getPagesPartialUrl", async () => {
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
