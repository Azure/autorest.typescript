import { assert } from "chai";
import { ProjectedNameClient } from "./generated/projection/src/index.js";
describe("ProjectedNameClient Rest Client", () => {
  let client: ProjectedNameClient;

  beforeEach(() => {
    client = new ProjectedNameClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it(`should json property projection`, async () => {
    try {
      const result = await client.property.json({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should client property projection`, async () => {
    try {
      const result = await client.property.client({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should language property projection`, async () => {
    try {
      const result = await client.property.language({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should json and client property projection`, async () => {
    try {
      const result = await client.property.jsonAndClient({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should projection operation`, async () => {
    try {
      const result = await client.operation();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it(`should parameter projection`, async () => {
    try {
      const result = await client.parameter("true");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
