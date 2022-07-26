import { NoMappersClient } from "./generated/noMappers/src";
import { assert } from "chai";
describe("Swagger that needs no mapper", () => {
  it("should be able to instantiate a new client without Typescript errors", () => {
    const client = new NoMappersClient("http://localhost:3000", "one");
    assert.isDefined(client);
  });
});
