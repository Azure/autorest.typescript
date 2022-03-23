import { assert } from "chai";
import BodyFile, { BodyFileClient } from "./generated/bodyFileRest/src";

describe("BodyFile Client", () => {
  let client: BodyFileClient;

  beforeEach("create client", () => {
    client = BodyFile({ allowInsecureConnection: true });
  });

  describe("node.js", () => {
    it("should getFile", async () => {
      const result = await client.path("/files/stream/nonempty").get();

      if (result.status !== "200") {
        const error = `Unexpected response: ${result.status}`;
        assert.fail(error);
        throw error;
      }

      assert.lengthOf(result.body, 8281);
    });
    it("should getFile", async () => {
      const result = await client.path("/files/stream/empty").get();

      if (result.status !== "200") {
        const error = `Unexpected response: ${result.status}`;
        assert.fail(error);
        throw error;
      }

      assert.isUndefined(result.body);
    });
  });
});
