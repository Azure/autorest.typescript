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
    client = new BodyFormDataClient();
    const fileName: string = `sample.png`;
    const filePath: string = `${__dirname}/../res/${fileName}`;
    const fileContent = fs.readFileSync(filePath);
    const result: FormdataUploadFileResponse = await client.formdata.uploadFile(
      fileContent,
      fileName
    );
    if (result.readableStreamBody) {
      const buff: Buffer[] = [];
      for await (let chunk of result.readableStreamBody) {
        buff.push(chunk as Buffer);
      }
      assert.deepEqual(Buffer.concat(buff), fileContent);
    } else {
      assert.fail("ReadableStreamBody must not be null!!!");
    }
  });

  it("should correctly accept file via body", async function() {
    client = new BodyFormDataClient();
    const fileName: string = `sample.png`;
    const filePath: string = `${__dirname}/../res/${fileName}`;
    const fileContent = fs.readFileSync(filePath);
    const result: FormdataUploadFileViaBodyResponse = await client.formdata.uploadFileViaBody(
      fileContent
    );
    if (result.readableStreamBody) {
      let str: string = "";
      for await (let chunk of result.readableStreamBody) {
        str += chunk as string;
      }
      assert.deepEqual(str, fileContent.toString());
    } else {
      assert.fail("ReadableStreamBody must not be null!!!");
    }
  });

  it("should report upload/download progress", async function() {
    const content = new Uint8Array(1024 * 1024 * 1);
    let uploadNotified = false;
    let downloadNotified = false;
    const response = await client.formdata.uploadFileViaBody(content, {
      requestOptions: {
        onUploadProgress: ev => {
          uploadNotified = true;
          ev.loadedBytes.should.be.a("Number");
        },
        onDownloadProgress: ev => {
          downloadNotified = true;
          ev.loadedBytes.should.be.a("Number");
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
