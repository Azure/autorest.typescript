import { DataFactoryClient } from "./generated/datafactory/src";
import { assert } from "chai";

describe("Data Factory Client", () => {
  it("should be able to instantiate a new client without Typescript errors", () => {
    const client = new DataFactoryClient("subscriptionId");
    assert.isDefined(client);
  });
});
