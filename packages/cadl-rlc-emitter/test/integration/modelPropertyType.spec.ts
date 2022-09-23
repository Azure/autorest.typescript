import ModelsPropertyTypesClientFactory, {
  ModelsPropertyTypesClient
} from "./generated/models/propertyTypes/src/index.js";
import { assert } from "chai";
describe("ModelsPropertyTypesClient Rest Client", () => {
  let client: ModelsPropertyTypesClient;

  beforeEach(() => {
    client = ModelsPropertyTypesClientFactory({
      allowInsecureConnection: true
    });
  });

  it.only("should get a boolean value", async () => {
    try {
      const result = await client
        .path("/models/properties/types/boolean")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.property, true);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
