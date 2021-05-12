import {
  BodyFormDataClient,
  FormdataUploadFileResponse,
  FormdataUploadFileViaBodyResponse
} from "./generated/bodyFormData/src";
import { assert } from "chai";
import * as fs from "fs";

describe("Integration tests for BodyFormData", () => {
  let client: BodyFormDataClient;

  it("should correctly accept file via form", async () => {
    client = new BodyFormDataClient({ allowInsecureConnection: true });

    const fileName: string = `sample.png`;
    const filePath: string = `${__dirname}/../res/${fileName}`;
    const fileContent = fs.readFileSync(filePath);
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

  it.skip("should correctly accept file via body", async function() {
    client = new BodyFormDataClient({ allowInsecureConnection: true });
    const fileName: string = `sample.png`;
    const filePath: string = `${__dirname}/../res/${fileName}`;
    const fileContent = fs.readFileSync(filePath);
    const result: FormdataUploadFileViaBodyResponse = await client.formdata.uploadFileViaBody(
      fileContent
    );
    if (result.readableStreamBody) {
      const buff = await readStreamToBuffer(result.readableStreamBody);
      assert.deepEqual(buff, fileContent);
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
          console.log(ev);
          assert.ok(typeof ev.loadedBytes === "number");
          //ev.loadedBytes.should.be.a("Number");
        },
        onDownloadProgress: ev => {
          downloadNotified = true;
          console.log(ev);
          assert.ok(typeof ev.loadedBytes === "number");
          // ev.loadedBytes.should.be.a("Number");
        }
      }
    });

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
  });
});

const readStreamToBuffer = async function(
  strm: NodeJS.ReadableStream
): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const bufs: Buffer[] = [];
    strm.on("data", function(d: Buffer) {
      console.log(`on data ${d.length}`);
      bufs.push(d);
    });
    strm.on("close", function() {
      console.log(`on close`);
      resolve(Buffer.concat(bufs));
    });
    strm.on("end", function() {
      resolve(Buffer.concat(bufs));
    });
    strm.on("error", e => {
      console.log(`on error`);
      console.log(e);
      reject(e);
    });
  });
};
