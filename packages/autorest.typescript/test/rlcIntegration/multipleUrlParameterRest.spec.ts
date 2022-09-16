import MultipleUrlParameterClient, {
  MultipleUrlParameterRestClient
} from "./generated/multipleUrlParameters/src";
import { assert } from "chai";

describe("Multiple Url Parameters Rest Client", () => {
  it("should be able to instantiate a new client without Typescript errors", () => {
    const client: MultipleUrlParameterRestClient = MultipleUrlParameterClient(
      "fake.endpoint",
      "v2",
      {} as any
    );
    assert.isDefined(client);
  });
});
