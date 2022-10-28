import MultipleUrlParameterClient, {
  EntityDeleteByGuids200Response,
  EntityGetByGuid200Response,
  EntityGetByGuidDefaultResponse,
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

  describe("isUnexpected helper function", () => {
    it("should work when there is no parameter replacement in url", () => {
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

    it("should match when appearing the parameter replacement", () => {
      const response = {
        status: "200",
        request: {
          url:
            "http://fake.endpoint/catalog/api/atlas/v2/test/entity/guid/1234dfgdfh112",
          method: "GET"
        },
        headers: {}
      } as EntityGetByGuid200Response | EntityGetByGuidDefaultResponse;
      if (isUnexpected(response)) {
        assert.fail("Should not match the unecpected response");
      }
      assert.equal(response.status, "200");
    });

    it("should match when having mixed url pattern", () => {
      const response = {
        status: "202",
        request: {
          url:
            "http://fake.endpoint/catalog/api/atlas/v2/test/entity/guid/1234dfgdfh112:export",
          method: "PUT"
        },
        headers: {}
      } as EntityGetByGuid200Response | EntityGetByGuidDefaultResponse;

      // Please note this url would match below two patterns
      // "PUT /entity/guid/{guid}": ["200"],
      // "PUT /entity/guid/{guid}:export": ["202"]
      // But we only return the longer one so we could find the real pair
      if (isUnexpected(response)) {
        assert.fail("Should not match the unecpected response");
      }
      // The matched status should be 202 not 200
      assert.equal(response.status, "202");
    });

    it("should not match when method is different", () => {
      const response = {
        status: "404",
        request: {
          url:
            "http://fake.endpoint/catalog/api/atlas/v2/test/entity/guid/1234dfgdfh112",
          method: "DELETE"
        },
        headers: {}
      } as EntityGetByGuid200Response | EntityGetByGuidDefaultResponse;
      if (isUnexpected(response)) {
        assert.equal(response.status, "404");
        return;
      }
      assert.fail("Should not match the unecpected response");
    });

    it("should not match url when no pattern found", () => {
      const response = {
        status: "404",
        request: {
          url: "http://fake.endpoint/catalog/api/atlas/v2/test/entity/bulk2",
          method: "DELETE"
        },
        headers: {}
      } as EntityGetByGuid200Response | EntityGetByGuidDefaultResponse;
      if (isUnexpected(response)) {
        assert.equal(response.status, "404");
        return;
      }
      assert.fail("Should not match the unecpected response");
    });
  });
});
