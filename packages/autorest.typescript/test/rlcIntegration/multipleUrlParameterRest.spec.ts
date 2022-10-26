import MultipleUrlParameterClient, {
  EntityDeleteByGuids200Response,
  EntityDeleteByGuidsDefaultResponse,
  isUnexpected,
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

  it("isUnexpected helper should work correctly", () => {
    const response = {
      status: "200",
      request: {
        url: "http://fake.endpoint/catalog/api/atlas/v2/test/entity/bulk",
        method: "DELETE"
      },
      headers: {}
    } as EntityDeleteByGuids200Response;
    if (isUnexpected(response)) {
      assert.fail("Should not match the unecpected response");
    }
    assert.equal(response.status, "200");
  });

  it("isUnexpected helper should not match url", () => {
    const response = {
      status: "404",
      request: {
        url: "http://fake.endpoint/catalog/api/atlas/v2/test/entity/bulk2",
        method: "DELETE"
      },
      headers: {}
    } as EntityDeleteByGuidsDefaultResponse;
    if (isUnexpected(response)) {
      assert.equal(response.status, "404");
      return;
    }
    assert.fail("Should not match the unecpected response");
  });
});
