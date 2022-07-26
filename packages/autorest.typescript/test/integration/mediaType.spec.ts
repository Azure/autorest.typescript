import { expect } from "chai";
import { responseStatusChecker } from "../utils/responseStatusChecker";
import { MediaTypesClient } from "./generated/mediaTypes/src";
import { MediaTypesWithTracingClient } from "./generated/mediaTypesWithTracing/src";

[MediaTypesClient, MediaTypesWithTracingClient].forEach(MediaTypes => {
  describe(`Integration tests for ${MediaTypes.name}`, () => {
    let client: MediaTypesClient | MediaTypesWithTracingClient;

    beforeEach(() => {
      client = new MediaTypes({ allowInsecureConnection: true });
      client.pipeline.addPolicy({
        sendRequest(httpRequest, next) {
          const contentType = httpRequest.headers.get("Content-Type");
          // strip out the charset from the header since the test server does a strict check on the content-types
          // e.g. server will expect `application/json` but not `application/json; charset=utf-8`
          if (contentType) {
            httpRequest.headers.set("Content-Type", contentType.split(";")[0]);
          }
          return next(httpRequest);
        },
        name: "test"
      });
    });

    describe("#analyzeBody", () => {
      it("works with binary content type", async () => {
        const response = await client.analyzeBody("application/pdf", {
          input: "PDF",
          ...responseStatusChecker
        });

        expect(response.body).to.equal(
          "Nice job with PDF",
          `Unexpected response body: "${response.body}"`
        );
      });

      it("works with json content type", async () => {
        const response = await client.analyzeBody("application/json", {
          input: { source: "foo" },
          ...responseStatusChecker
        });

        expect(response.body).to.equal(
          "Nice job with JSON",
          `Unexpected response body: "${response.body}"`
        );
      });
    });

    describe("#contentTypeWithEncoding", () => {
      it("works with text/plain", async () => {
        client = new MediaTypes({ allowInsecureConnection: true });
        const response = await client.contentTypeWithEncoding({
          input: "test",
          requestOptions: {
            customHeaders: { "content-type": "text/plain; charset=UTF-8" }
          },
          ...responseStatusChecker
        });

        expect(response.body).to.equal(
          "Nice job sending content type with encoding"
        );
      });
    });
  });
});
