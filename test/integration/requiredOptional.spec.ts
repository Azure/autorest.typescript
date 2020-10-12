import { RequiredOptionalClient } from "./generated/requiredOptional/src";
import { assert } from "chai";

describe("Swagger that needs no mapper", () => {
  let client: RequiredOptionalClient;
  beforeEach(() => {
    client = new RequiredOptionalClient("one", "two");
  });

  describe("Implicit Optional", () => {
    it("should handle putOptionalQuery", async () => {
      const result = await client.implicit.putOptionalQuery();
      assert.equal(result._response.status, 200);
    });

    it("should handle putOptionalHeader", async () => {
      const result = await client.implicit.putOptionalHeader();
      assert.equal(result._response.status, 200);
    });

    it("should handle putOptionalBody", async () => {
      const result = await client.implicit.putOptionalBody();
      assert.equal(result._response.status, 200);
    });

    it("should handle getOptionalGlobalQuery", async () => {
      const result = await client.implicit.getOptionalGlobalQuery();
      assert.equal(result._response.status, 200);
    });

    it("should handle getRequiredPath", async () => {
      try {
        await client.implicit.getRequiredPath(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    it("should handle getRequiredGlobalPath", async () => {
      try {
        client = new RequiredOptionalClient(null as any, null as any);
        await client.implicit.getRequiredGlobalPath();
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    it("should handle getRequiredGlobalQuery", async () => {
      client = new RequiredOptionalClient(null as any, null as any);
      try {
        await client.implicit.getRequiredGlobalQuery();
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });
  });

  describe("Explicit Optional", () => {
    it("should handle postOptionalArrayHeader", async () => {
      const result = await client.explicit.postOptionalArrayHeader();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalArrayParameter", async () => {
      const result = await client.explicit.postOptionalArrayParameter();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalArrayProperty", async () => {
      const result = await client.explicit.postOptionalArrayProperty();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalClassParameter", async () => {
      const result = await client.explicit.postOptionalClassParameter();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalClassProperty", async () => {
      const result = await client.explicit.postOptionalClassProperty();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalIntegerHeader", async () => {
      const result = await client.explicit.postOptionalIntegerHeader();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalIntegerParameter", async () => {
      const result = await client.explicit.postOptionalIntegerParameter();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalIntegerProperty", async () => {
      const result = await client.explicit.postOptionalIntegerProperty();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalStringHeader", async () => {
      const result = await client.explicit.postOptionalStringHeader();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalStringParameter", async () => {
      const result = await client.explicit.postOptionalStringParameter();
      assert.equal(result._response.status, 200);
    });

    it("should handle postOptionalStringProperty", async () => {
      const result = await client.explicit.postOptionalStringProperty();
      assert.equal(result._response.status, 200);
    });

    it("should handle postRequiredArrayHeader", async () => {
      try {
        await client.explicit.postRequiredArrayHeader(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    it("should handle postRequiredArrayParameter", async () => {
      try {
        await client.explicit.postRequiredArrayParameter(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    it("should handle postRequiredArrayProperty", async () => {
      try {
        await client.explicit.postRequiredArrayProperty({ value: null } as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    // https://github.com/Azure/autorest.typescript/issues/759
    it.skip("should handle postRequiredClassParameter", async () => {
      try {
        await client.explicit.postRequiredClassParameter(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    // https://github.com/Azure/autorest.typescript/issues/759
    it.skip("should handle postRequiredClassProperty", async () => {
      try {
        await client.explicit.postRequiredClassProperty({ value: null } as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    it("should handle postRequiredIntegerHeader", async () => {
      try {
        await client.explicit.postRequiredIntegerHeader(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    it("should handle postRequiredIntegerParameter", async () => {
      try {
        await client.explicit.postRequiredIntegerParameter(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    it("should handle postRequiredStringHeader", async () => {
      try {
        await client.explicit.postRequiredStringHeader(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    it("should handle postRequiredStringParameter", async () => {
      try {
        await client.explicit.postRequiredStringParameter(null as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });

    it("should handle postRequiredStringProperty", async () => {
      try {
        await client.explicit.postRequiredStringProperty({
          value: null
        } as any);
        assert.fail("Expected client to throw");
      } catch (error) {
        assert(
          error.message.indexOf("cannot be null or undefined") !== -1,
          "Expected error to contain 'cannot be null or undefined'"
        );
      }
    });
  });
});
