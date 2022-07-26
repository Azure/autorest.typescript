import { ValidationClient, Product } from "./generated/validation/src";
import { assert } from "chai";

const constantBody: Product = {
  child: { constProperty: "constant" },
  constChild: {
    constProperty: "constant",
    constProperty2: "constant2"
  },
  constInt: 0,
  constString: "constant"
};

describe("Integration tests for validation", () => {
  let client = new ValidationClient("", { allowInsecureConnection: true });

  it("should succeed with a GET with a constant in path", async () => {
    await client.getWithConstantInPath();
  });

  it("should succeed with a POST with constant in path", async () => {
    await client.postWithConstantInBody({ body: constantBody });
  });

  it("should correctly validate a min length constraint", async () => {
    try {
      await client.validationOfMethodParameters("1", 100);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "resourceGroupName");
      assert.include(e.message, "MinLength");
    }
  });

  it("should correctly validate a max length constraint", async () => {
    try {
      await client.validationOfMethodParameters("11234567890A", 100);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "resourceGroupName");
      assert.include(e.message, "MaxLength");
    }
  });

  it("should correctly validate a pattern constraint", async () => {
    try {
      await client.validationOfMethodParameters("!@#$", 100);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "resourceGroupName");
      assert.include(e.message, "Pattern");
    }
  });

  it("should correctly validate a multiple constraint", async () => {
    try {
      await client.validationOfMethodParameters("123", 105);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "MultipleOf");
      assert.include(e.message, "id");
    }
  });

  it("should correctly validate an inclusive minimum constraint", async () => {
    try {
      await client.validationOfMethodParameters("123", 0);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "InclusiveMinimum");
      assert.include(e.message, "id");
    }
  });

  it("should correctly validate an inclusive maximum constraint", async () => {
    try {
      await client.validationOfMethodParameters("123", 2000);
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "InclusiveMaximum");
      assert.include(e.message, "id");
    }
  });

  it("should correctly validate an exclusive minimum constraint", async () => {
    constantBody.capacity = 0;
    try {
      await client.validationOfBody("123", 150, { body: constantBody });
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "ExclusiveMinimum");
      assert.include(e.message, "capacity");
    }
  });

  it("should correctly validate an exclusive minimum constraint", async () => {
    constantBody.capacity = 100;
    try {
      await client.validationOfBody("123", 150, { body: constantBody });
      assert.fail("Expected error");
    } catch (e) {
      assert.include(e.message, "ExclusiveMaximum");
      assert.include(e.message, "capacity");
    }
  });

  it("should correctly validate a max items constraint", async () => {
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
