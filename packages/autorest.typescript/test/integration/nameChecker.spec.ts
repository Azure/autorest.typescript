import { SearchClient } from "./generated/nameChecker/src";
import { assert } from "chai";
import { readFileSync } from "../utils/fileSystem";
import { isNode } from "@azure/core-util";

if (isNode) {
  describe("Integration tests for NameChecker", () => {
    let client: SearchClient;

    it("should create a client successfully", async () => {
      client = new SearchClient("sampleEndPoint", "sampleIndexName");
      assert.notEqual(client, null);
    });

    it("should check for naming overrides in models index file", async () => {
      const content: string = readFileSync(
        "./test/integration/generated/nameChecker/src/models/index.ts",
        "utf-8"
      );

      let containsHidden = content.includes("readonly _score: number;");

      assert.equal(
        containsHidden,
        true,
        "Expected _score naming override missing"
      );

      containsHidden = content.includes(
        "readonly _highlights?: { [propertyName: string]: string[] };"
      );

      assert.equal(
        containsHidden,
        true,
        "Expected _highlights naming override missing"
      );

      containsHidden = content.includes("__actionType: IndexActionType;");

      assert.equal(
        containsHidden,
        true,
        "Expected __actionType naming override missing"
      );

      containsHidden = content.includes("readonly _text: string;");

      assert.equal(
        containsHidden,
        true,
        "Expected _text naming override missing"
      );
    });
  });
}
