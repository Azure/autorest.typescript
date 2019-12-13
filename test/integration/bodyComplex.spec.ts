import { fail, deepEqual } from "assert";
import { BodyComplexClient } from "./generated/bodyCOmplex/src/bodyComplexClient";

describe("Integration tests for BodyComplex", () => {
  let client: BodyComplexClient;

  beforeEach(() => {
    client = new BodyComplexClient();
  });

  describe("Acceptance tests", () => {});

  describe("Valid", () => {
    it("should get a valid complex type", async () => {
      const result = await client.basic.getValid();
      deepEqual(result, { id: 2, name: "abc", color: "YELLOW" });
    });
    it("should put a valid complex type", async () => {
      try {
        await client.basic.putValid({
          id: 2,
          name: "abc",
          color: "Magenta"
        });
      } catch (error) {
        fail(`Unexpected error thrown trying to execute putValid ${error}`);
      }
    }).timeout(50000);
  });
});
