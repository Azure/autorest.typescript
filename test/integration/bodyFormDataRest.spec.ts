import BodyFormDataClient, {
  BodyFormDataRestClient
} from "./generated/bodyFormDataRest/src";
import { assert } from "chai";
import { file as sampleFile } from "./sampleFile";
import { isNode } from "@azure/core-util";
describe("Integration tests for BodyFormData", () => {
  let client: BodyFormDataRestClient;

  it.skip("should correctly accept file via form", async function() {
    client = BodyFormDataClient({ allowInsecureConnection: true });

    const fileName: string = `sample.png`;
    const file = new Uint8Array(sampleFile);
    const fileContent = new TextDecoder().decode(file);
    try {
      const result = await client
        .pathUnchecked("/formdata/stream/uploadfile")
        .post({
          contentType: "multipart/form-data",
          body: { fileContent: fileContent, fileName }
        })
        .asNodeStream();

      if (result.status !== "200") {
        const error = `Unexpected error ${result.status}`;
        assert.fail(error);
        throw error;
      }

      const buff = await readStreamToBuffer(result.body);
      assert.deepEqual(buff.toString(), fileContent.toString());
    } catch (e) {
      if (!isNode) {
        assert.equal(
          e.message,
          "Node streams are not supported in browser environment."
        );
        return;
      }
      assert.fail(`Unexpected error: ${e}`);
    }
  });

  it.skip("should correctly accept file via body", async () => {
    client = BodyFormDataClient({ allowInsecureConnection: true });
    const fileContent = "Hello World";
    const response = await client
      .pathUnchecked("/formdata/stream/uploadfile")
      .put({
        body: fileContent.toString(),
        contentType: "application/octet-stream"
      });

    if (response.status !== "200") {
      const error = `Unexpected error ${response.status}`;
      assert.fail(error);
      throw error;
    }

    assert.equal(1, 1);
  });
});

const readStreamToBuffer = async function(
  strm: NodeJS.ReadableStream
): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const bufs: Buffer[] = [];
    strm.on("data", function(d: Buffer) {
      bufs.push(d);
    });
    strm.on("close", function() {
      resolve(Buffer.concat(bufs));
    });
    strm.on("end", function() {
      resolve(Buffer.concat(bufs));
    });
    strm.on("error", e => {
      reject(e);
    });
  });
};
