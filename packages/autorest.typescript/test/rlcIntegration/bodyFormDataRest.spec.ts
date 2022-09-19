import BodyFormData, {
  BodyFormDataClient
} from "./generated/bodyFormDataRest/src";
import { assert } from "chai";
import { isNode } from "@azure/core-util";
import { readStreamToBuffer } from "../utils/stream-helpers";
import {
  HttpBrowserStreamResponse,
  HttpNodeStreamResponse
} from "@azure-rest/core-client";

describe("Integration tests for BodyFormData", () => {
  let client: BodyFormDataClient;

  it("should correctly accept file via form", async function() {
    client = BodyFormData({ allowInsecureConnection: true });

    const fileName: string = `sample.png`;
    const content = new Uint8Array([
      72,
      101,
      108,
      108,
      111,
      32,
      87,
      111,
      114,
      108,
      100
    ]);

    let result: HttpNodeStreamResponse | HttpBrowserStreamResponse;
    if (isNode) {
      result = await client
        .path("/formdata/stream/uploadfile")
        .post({
          contentType: "multipart/form-data",
          body: { fileContent: content, fileName }
        })
        .asNodeStream();
    } else {
      result = await client
        .path("/formdata/stream/uploadfile")
        .post({
          contentType: "multipart/form-data",
          body: { fileContent: content, fileName }
        })
        .asBrowserStream();
    }

    assert.equal(result.status, "200");
    const buffer = await readStreamToBuffer(result.body!);
    assert.deepInclude(new Uint8Array(buffer), content);
  });

  it("should correctly accept file via body", async () => {
    client = BodyFormData({ allowInsecureConnection: true });
    const content = new Uint8Array([
      72,
      101,
      108,
      108,
      111,
      32,
      87,
      111,
      114,
      108,
      100
    ]);

    let response: HttpNodeStreamResponse | HttpBrowserStreamResponse;
    if (isNode) {
      response = await client
        .path("/formdata/stream/uploadfile")
        .put({
          body: content,
          contentType: "application/octet-stream"
        })
        .asNodeStream();
    } else {
      response = await client
        .path("/formdata/stream/uploadfile")
        .put({
          body: content,
          contentType: "application/octet-stream"
        })
        .asBrowserStream();
    }
    assert.equal(response.status, "200");
    const buffer = await readStreamToBuffer(response.body!);
    assert.deepInclude(new Uint8Array(buffer), content);
  });
});
