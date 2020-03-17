import { expect } from "chai";
import { MediaTypesClient } from "./generated/mediaTypes/src/mediaTypesClient";

describe("Integration tests for MediaTypes", () => {
  let client: MediaTypesClient;

  beforeEach(() => {
    client = new MediaTypesClient();
  });

  describe("#analyzeBody", () => {
    it("works with binary content type", async () => {
      const response = await client.analyzeBody({
        contentType: "application/pdf",
        input: "PDF"
      });

      expect(response.body).to.equal(
        "Nice job with PDF",
        `Unexpected response body: "${response.body}"`
      );
      expect(response._response.status).to.equal(
        200,
        `Unexpected status code.`
      );
    });
  });
});
