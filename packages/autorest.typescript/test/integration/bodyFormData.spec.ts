import {
  BodyFormDataClient,
  FormdataUploadFileResponse,
  FormdataUploadFileViaBodyResponse
} from "./generated/bodyFormData/src";
import { assert } from "chai";
import { readFileSync } from "../utils/fileSystem";
import { isNode } from "@azure/core-util";

if (isNode) {
  describe("Integration tests for BodyFormData", () => {
    let client: BodyFormDataClient;

    it("should correctly accept file via form", async () => {
      client = new BodyFormDataClient({ allowInsecureConnection: true });
      const fileName: string = `sample.png`;
      const filePath: string = `${__dirname}/../res/${fileName}`;
      const fileContent = readFileSync(filePath);
      const result: FormdataUploadFileResponse = await client.formdata.uploadFile(
        fileContent,
        fileName
      );
      if (result.readableStreamBody) {
        const buff = await readStreamToBuffer(result.readableStreamBody);
        assert.deepEqual(buff, fileContent);
      } else {
        assert.fail("ReadableStreamBody must not be null!!!");
      }
    });

    it("should correctly accept file via body", async function() {
      client = new BodyFormDataClient({ allowInsecureConnection: true });
      const fileName: string = `sample.png`;
      const filePath: string = `${__dirname}/../res/${fileName}`;
      const fileContent = readFileSync(filePath);
      const result: FormdataUploadFileViaBodyResponse = await client.formdata.uploadFileViaBody(
        fileContent
      );
      if (result.readableStreamBody) {
        const buff = await readStreamToBuffer(result.readableStreamBody);
        assert.deepEqual(buff.toString(), fileContent.toString());
      } else {
        assert.fail("ReadableStreamBody must not be null!!!");
      }
    });

    it("should report upload/download progress", async function() {
      client = new BodyFormDataClient({ allowInsecureConnection: true });
      const content = new Uint8Array(1024 * 1024 * 1);
      let uploadNotified = false;
      let downloadNotified = false;
      const response = await client.formdata.uploadFileViaBody(content, {
        requestOptions: {
          onUploadProgress: ev => {
            uploadNotified = true;
            assert.ok(typeof ev.loadedBytes === "number");
          },
          onDownloadProgress: ev => {
            downloadNotified = true;
            assert.ok(typeof ev.loadedBytes === "number");
          }
        }
      });

      if (isNode) {
        const streamBody = response.readableStreamBody;
        if (response.blobBody) {
          await response.blobBody;
        } else if (streamBody) {
          streamBody.on("data", () => {});
          await new Promise((resolve, reject) => {
            streamBody.on("end", resolve);
            streamBody.on("error", reject);
          });
        }
        assert(uploadNotified);
        assert(downloadNotified);
      }
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
}
