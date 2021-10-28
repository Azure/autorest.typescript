import { readFile as fsReadfile } from "fs";
import { join as joinPath } from "path";
import { assert } from "chai";
import { isNode } from "@azure/core-http";
import BodyFile, { BodyFileRestClient } from "./generated/bodyFileRest/src";
import {
  countBytesFromStream,
  readStreamToBuffer
} from "../utils/stream-helpers";

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
      it("getFile supports readableStream", async () => {
        const result = await client
          .path("/files/stream/nonempty")
          .get()
          .asNodeStream();

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

        if (result.status !== "200") {
          const error = `Unexpected response: ${result.status}`;
          assert.fail(error);
          throw error;
        }

        const resultBuffer = await readStreamToBuffer(result.body);

        assert.deepEqual(
          resultBuffer,
          expectedBufferedResult,
          "File returned by getFile does not match expected file."
        );
      });

      it("getFile supports loading stream in memory", async () => {
        const result = await client.path("/files/stream/nonempty").get();

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

        if (result.status !== "200") {
          const error = `Unexpected response: ${result.status}`;
          assert.fail(error);
          throw error;
        }

        assert.deepEqual(
          result.body,
          expectedBufferedResult.toString() as any,
          "File returned by getFile does not match expected file."
        );
      });

      it("getEmptyFile supports readableStream", async () => {
        const result = await client
          .path("/files/stream/empty")
          .get()
          .asNodeStream();

        if (result.status !== "200") {
          const error = `Unexpected response: ${result.status}`;
          assert.fail(error);
          throw error;
        }

        const bufferedResult = await readStreamToBuffer(result.body);

        assert.equal(bufferedResult.length, 0, "Expected an empty buffer.");
      });

      it("getFileLarge supports readableStream", async function() {
        this.timeout(50000);
        const result = await client
          .path("/files/stream/verylarge")
          .get()
          .asNodeStream();

        if (result.status !== "200") {
          const error = `Unexpected response: ${result.status}`;
          assert.fail(error);
          throw error;
        }

        const byteCount = await countBytesFromStream(result.body);

        assert.equal(
          byteCount,
          3000 * 1024 * 1024,
          "Expected a very large file."
        );
      });
    });
  } else {
    // TODO: Support running browser tests.
    // https://github.com/Azure/autorest.typescript/issues/651
  }
});
