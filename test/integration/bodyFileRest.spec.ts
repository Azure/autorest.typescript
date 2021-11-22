import { assert } from "chai";
import BodyFile, { BodyFileRestClient } from "./generated/bodyFileRest/src";

describe("BodyFile Client", () => {
  let client: BodyFileRestClient;

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

    it.skip("getFileLarge supports readableStream", async function() {
      this.timeout(50000);
      const result = await client.path("/files/stream/verylarge").get();

      if (result.status !== "200") {
        const error = `Unexpected response: ${result.status}`;
        assert.fail(error);
        throw error;
      }

      // const byteCount = await countBytesFromStream(result.body);

      // assert.equal(
      //   byteCount,
      //   3000 * 1024 * 1024,
      //   "Expected a very large file."
      // );
    });
  });
});
