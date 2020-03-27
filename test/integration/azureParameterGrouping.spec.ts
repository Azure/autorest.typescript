import { AzureParameterGroupingClient } from "./generated/azureParameterGrouping/src/azureParameterGroupingClient";
import { assert } from "chai";

describe("AzureParameterGrouping", () => {
  let client: AzureParameterGroupingClient;
  const body = 1234;
  const query = 21;
  const header = "header";
  const path = "path";

  beforeEach(() => {
    client = new AzureParameterGroupingClient();
  });

  it("should post optional", async () => {
    const options = {
      parameterGroupingPostOptionalParameters: {
        query: query,
        customHeader: header
      }
    };
    const result = await client.parameterGrouping.postOptional(options);
    assert.equal(result._response.status, 200);
  });

  it("should accept empty optional parameters", async () => {
    const result = await client.parameterGrouping.postOptional();
    assert.equal(result._response.status, 200);
  });

  it("should post required", async () => {
    const result = await client.parameterGrouping.postRequired({
      body: body,
      customHeader: header,
      query: query,
      path: path
    });
    assert.equal(result._response.status, 200);
  });

  it("should post required with only required parameters", async () => {
    const result = await client.parameterGrouping.postRequired({
      body: body,
      path: path
    });
    assert.equal(result._response.status, 200);
  });

  it("should allow multiple parameter groups", async () => {
    const firstParameterGroup = { headerOne: header, queryOne: query };
    const parameterGroupingPostMultiParamGroupsSecondParamGroup = {
      headerTwo: "header2",
      queryTwo: 42
    };

    const result = await client.parameterGrouping.postMultiParamGroups({
      firstParameterGroup,
      parameterGroupingPostMultiParamGroupsSecondParamGroup
    });

    assert.equal(result._response.status, 200);
  });

  it("should allow multiple parameter groups with some defaults omitted", async () => {
    const firstParameterGroup = { headerOne: header };
    const parameterGroupingPostMultiParamGroupsSecondParamGroup = {
      queryTwo: 42
    };

    const result = await client.parameterGrouping.postMultiParamGroups({
      firstParameterGroup,
      parameterGroupingPostMultiParamGroupsSecondParamGroup
    });

    assert.equal(result._response.status, 200);
  });

  it("should allow parameter group objects to be shared between operations", async function() {
    const result = await client.parameterGrouping.postSharedParameterGroupObject(
      { firstParameterGroup: { headerOne: header, queryOne: 42 } }
    );
    assert.equal(result._response.status, 200);
  });
});
