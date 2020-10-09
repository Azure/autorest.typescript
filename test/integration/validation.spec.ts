import {
  ValidationDataClient,
  Product,
  ConstantProduct,
  ChildProduct
} from "./generated/validation/src";
import { assert } from "chai";
import * as fs from "fs";

const constantBody: Product = {
  child: { constProperty: "constant" },
  constChild: {
    constProperty: "constant",
    constProperty2: "constant2"
  },
  constInt: "undefined",
  constString: "constant"
};

describe("Integration tests for validation", () => {
  let client = new ValidationDataClient("");

  it("constant in path", async () => {
    await client.getWithConstantInPath();
  });

  it("post with constant in path", async () => {
    await client.postWithConstantInBody({ body: constantBody });
  });

  it("min length validation", async () => {
    try {
      await client.validationOfMethodParameters("1", 100);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "resourceGroupName");
      assert.include(e.message, "MinLength");
    }
  });

  it("max length validation", async () => {
    try {
      await client.validationOfMethodParameters("11234567890A", 100);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "resourceGroupName");
      assert.include(e.message, "MaxLength");
    }
  });

  it("pattern validation", async () => {
    try {
      await client.validationOfMethodParameters("!@#$", 100);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "resourceGroupName");
      assert.include(e.message, "Pattern");
    }
  });

  it("multiple validation", async () => {
    try {
      await client.validationOfMethodParameters("123", 105);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "MultipleOf");
      assert.include(e.message, "id");
    }
  });

  it("minimum validation", async () => {
    try {
      await client.validationOfMethodParameters("123", 0);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "InclusiveMinimum");
      assert.include(e.message, "id");
    }
  });

  it("maximum validation", async () => {
    try {
      await client.validationOfMethodParameters("123", 2000);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "InclusiveMaximum");
      assert.include(e.message, "id");
    }
  });

  it("minimum ex validation", async () => {
    constantBody.capacity = 0;
    try {
      await client.validationOfBody("123", 150, { body: constantBody });
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "ExclusiveMinimum");
      assert.include(e.message, "capacity");
    }
  });

  it("maximum ex validation", async () => {
    constantBody.capacity = 100;
    try {
      await client.validationOfBody("123", 150, { body: constantBody });
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "ExclusiveMaximum");
      assert.include(e.message, "capacity");
    }
  });

  it("max items validation", async () => {
    constantBody.displayNames = [
      "item1",
      "item2",
      "item3",
      "item4",
      "item5",
      "item6",
      "item7"
    ];
    try {
      await client.validationOfBody("123", 150, { body: constantBody });
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "MaxItems");
      assert.include(e.message, "display_names");
    }
  });
});
