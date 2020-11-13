import { expect } from "chai";
import { MediaTypesClient } from "./generated/mediaTypes/src";
import { MediaTypesWithTracingClient } from "./generated/mediaTypesWithTracing/src";

[MediaTypesClient, MediaTypesWithTracingClient].forEach(MediaTypes => {
  describe(`Integration tests for ${MediaTypes.name}`, () => {
    let client: MediaTypesClient | MediaTypesWithTracingClient;

    beforeEach(() => {
      client = new MediaTypes({
        requestPolicyFactories: defaultPolicies => {
          defaultPolicies.push({
            create(nextPolicy) {
              return {
                sendRequest(httpRequest) {
                  const contentType = httpRequest.headers.get("Content-Type");
                  // strip out the charset from the header since the test server does a strict check on the content-types
                  // e.g. server will expect `application/json` but not `application/json; charset=utf-8`
                  if (contentType) {
                    httpRequest.headers.set(
                      "Content-Type",
                      contentType.split(";")[0]
                    );
                  }
                  return nextPolicy.sendRequest(httpRequest);
                }
              };
            }
          });
        }
      });
    });

    describe("#analyzeBody", () => {
      it("works with binary content type", async () => {
        const response = await client.analyzeBody("application/pdf", "PDF");

        expect(response.body).to.equal(
          "Nice job with PDF",
          `Unexpected response body: "${response.body}"`
        );
        expect(response._response.status).to.equal(
          200,
          `Unexpected status code.`
        );
      });

      it("works with json content type", async () => {
        const response = await client.analyzeBody("application/json", {
          input: { source: "foo" }
        });

        expect(response.body).to.equal(
          "Nice job with JSON",
          `Unexpected response body: "${response.body}"`
        );
        expect(response._response.status).to.equal(
          200,
          `Unexpected status code.`
        );
      });
    });

    describe("#contentTypeWithEncoding", () => {
      it("works with text/plain", async () => {
        client = new MediaTypes();
        const response = await client.contentTypeWithEncoding("test", {
          requestOptions: {
            customHeaders: { "content-type": "text/plain; encoding=UTF-8" }
          }
        });

        expect(response._response.status).to.equal(
          200,
          `Unexpected status code.`
        );

        expect(response.body).to.equal(
          "Nice job sending content type with encoding"
        );
      });
    });
  });
});
