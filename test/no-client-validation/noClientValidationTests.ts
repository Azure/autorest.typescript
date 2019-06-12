import * as assert from "assert";

import { RestError } from "@azure/core-http";
import { AutoRestValidationTest } from './generated/Validation/autoRestValidationTest';

describe("--client-side-validation=false", function () {
  it("should not validate constraints", async function () {
    try {
      const client = new AutoRestValidationTest("abc123", "12-34-5678");
      await client.validationOfMethodParameters("a", 3);
      throw new Error("operation did not throw an exception");
    } catch (err) {
      assert((err as RestError).response);
    }
  });
});
