import { isNode } from "@azure/core-util";
import { assert } from "chai";
import { readFileSync } from "../utils/fileSystem";
import { MapperRequiredClient } from "./generated/mapperrequired/src/mapperRequiredClient";

if (isNode) {
  describe("Mapper Required Value", () => {
    let client: MapperRequiredClient;

    beforeEach(() => {
      const endpoint: string = "sampleEndPoint";
      client = new MapperRequiredClient(endpoint);
      assert.notEqual(client, null);
    });

    it("Spec mapper must have required property", async () => {
      const content: string = readFileSync(
        "./test/integration/generated/mapperrequired/src/mapperRequiredClient.ts",
        "utf-8"
      );

      const containsRequiredMapper = content.includes(
        "mapper: { ...Mappers.CertificateIssuerUpdateParameters, required: true }"
      );

      assert.equal(
        containsRequiredMapper,
        true,
        "Expected Mapper with required property missing"
      );
    });
  });
}
