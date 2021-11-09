import { readFile as fsReadfile } from "fs";
import { join as joinPath } from "path";
import { assert } from "chai";
import { isNode } from "@azure/core-http";
import BodyFile, { BodyFileRestClient } from "./generated/bodyFileRest/src";

async function readFile(path: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    fsReadfile(path, {}, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}

describe("BodyFile Client", () => {
  let client: BodyFileRestClient;

  beforeEach("create client", () => {
    client = BodyFile({ allowInsecureConnection: true });
  });

  if (isNode) {
    describe("node.js", () => {
      it("should getFile", async () => {
        const result = await client.path("/files/stream/nonempty").get();

        if (result.status !== "200") {
          const error = `Unexpected response: ${result.status}`;
          assert.fail(error);
          throw error;
        }

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

        assert.equal(
          result.body,
          expectedBufferedResult.toString("utf8") as any
        );
      });

      it("getFile supports loading stream in memory", async () => {
        const result = await client.path("/files/stream/nonempty").get();

        if (result.status !== "200") {
          const error = `Unexpected response: ${result.status}`;
          assert.fail(error);
          throw error;
        }

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

        assert.deepInclude(result.body as any, expectedBufferedResult.values());
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
  } else {
    // TODO: Support running browser tests.
    // https://github.com/Azure/autorest.typescript/issues/651
  }
});
