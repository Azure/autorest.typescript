import { joinPath } from "../utils/path";
import { assert } from "chai";
import { isNode } from "@azure/core-util";
import {
  readStreamToBuffer,
  countBytesFromStream
} from "../utils/stream-helpers";
import { BodyFileClient } from "./generated/bodyFile/src";
import { readFile } from "../utils/fileSystem";

describe("BodyFile Client", () => {
  let client: BodyFileClient;

  beforeEach("create client", () => {
    client = new BodyFileClient({ allowInsecureConnection: true });
  });

  if (isNode) {
    describe("node.js", () => {
      it("getFile supports readableStream", async () => {
        const result = await client.files.getFile();
        assert.exists(result.readableStreamBody);
        const bufferedResult = await readStreamToBuffer(
          result.readableStreamBody!
        );

        const expectedBufferedResult = await readFile(
          joinPath(
            __dirname,
            "..",
            "..",
            "node_modules",
            "@microsoft.azure",
            "autorest.testserver",
            "routes",
            "sample.png"
          )
        );

        assert.deepEqual(
          bufferedResult,
          expectedBufferedResult,
          "File returned by getFile does not match expected file."
        );
      });

      it("getEmptyFile supports readableStream", async () => {
        const result = await client.files.getEmptyFile();
        assert.exists(result.readableStreamBody);
        const bufferedResult = await readStreamToBuffer(
          result.readableStreamBody!
        );
        assert.equal(bufferedResult.length, 0, "Expected an empty buffer.");
      });

      it("getFileLarge supports readableStream", async () => {
        const result = await client.files.getFileLarge();
        assert.exists(result.readableStreamBody);
        const byteCount = await countBytesFromStream(
          result.readableStreamBody!
        );
        assert.equal(
          byteCount,
          3000 * 1024 * 1024,
          "Expected a very large file."
        );
      }).timeout(50000);
    });
  } else {
    // TODO: Support running browser tests.
    // https://github.com/Azure/autorest.typescript/issues/651
  }
});
