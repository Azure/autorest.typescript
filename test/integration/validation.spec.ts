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
    client.getWithConstantInPath();
  });

  it("post with constant in path", async () => {
    client.postWithConstantInBody({ body: constantBody });
  });

  it("min length validation", async () => {
    try {
      client.validationOfMethodParameters("1", 100);
    } catch (e) {
      assert.equal(e.rule, "min_length");
      assert.equal(e.target, "resource_group_name");
    }
  });

  it("max length validation", async () => {
    try {
      client.validationOfMethodParameters("11234567890A", 100);
    } catch (e) {
      assert.equal(e.rule, "max_length");
      assert.equal(e.target, "resource_group_name");
    }
  });

  it("pattern validation", async () => {
    try {
      client.validationOfMethodParameters("!@#$", 100);
    } catch (e) {
      assert.equal(e.rule, "pattern");
      assert.equal(e.target, "resource_group_name");
    }
  });

  it("multiple validation", async () => {
    try {
      client.validationOfMethodParameters("123", 105);
    } catch (e) {
      assert.equal(e.rule, "multiple");
      assert.equal(e.target, "id");
    }
  });

  it("minimum validation", async () => {
    try {
      client.validationOfMethodParameters("123", 0);
    } catch (e) {
      assert.equal(e.rule, "minimum");
      assert.equal(e.target, "id");
    }
  });

  it("maximum validation", async () => {
    try {
      client.validationOfMethodParameters("123", 2000);
    } catch (e) {
      assert.equal(e.rule, "maximum");
      assert.equal(e.target, "id");
    }
  });

  it("minimum ex validation", async () => {
    try {
      client.validationOfBody("123", 150, { body: constantBody });
    } catch (e) {
      assert.equal(e.rule, "minimum_ex");
      assert.include(e.target, "capacity");
    }
  });

  it("maximum ex validation", async () => {
    constantBody.capacity = 100;
    try {
      client.validationOfBody("123", 150, { body: constantBody });
    } catch (e) {
      assert.equal(e.rule, "maximum");
      assert.include(e.target, "capacity");
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
      client.validationOfBody("123", 150, { body: constantBody });
    } catch (e) {
      assert.equal(e.rule, "max_items");
      assert.include(e.target, "display_names");
    }
  });
});
