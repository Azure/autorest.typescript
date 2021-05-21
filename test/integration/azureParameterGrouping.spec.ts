import { AzureParameterGroupingClient } from "./generated/azureParameterGrouping/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("AzureParameterGrouping", () => {
  let client: AzureParameterGroupingClient;
  const body = 1234;
  const query = 21;
  const header = "header";
  const path = "path";

  beforeEach(() => {
    client = new AzureParameterGroupingClient({
      allowInsecureConnection: true
    });
  });

  it("should post optional", async () => {
    const options = {
      ...responseStatusChecker,
      parameterGroupingPostOptionalParameters: {
        query: query,
        customHeader: header
      }
    };
    await client.parameterGrouping.postOptional(options);
  });

  it("should accept empty optional parameters", async () => {
    await client.parameterGrouping.postOptional(responseStatusChecker);
  });

  it("should post required", async () => {
    await client.parameterGrouping.postRequired(
      {
        body: body,
        customHeader: header,
        query: query,
        path: path
      },
      responseStatusChecker
    );
  });

  it("should post required with only required parameters", async () => {
    await client.parameterGrouping.postRequired(
      {
        body: body,
        path: path
      },
      responseStatusChecker
    );
  });

  it("should allow multiple parameter groups", async () => {
    const firstParameterGroup = { headerOne: header, queryOne: query };
    const parameterGroupingPostMultiParamGroupsSecondParamGroup = {
      headerTwo: "header2",
      queryTwo: 42
    };

    await client.parameterGrouping.postMultiParamGroups({
      ...responseStatusChecker,
      firstParameterGroup,
      parameterGroupingPostMultiParamGroupsSecondParamGroup
    });
  });

  it("should allow multiple parameter groups with some defaults omitted", async () => {
    const firstParameterGroup = { headerOne: header };
    const parameterGroupingPostMultiParamGroupsSecondParamGroup = {
      queryTwo: 42
    };

    await client.parameterGrouping.postMultiParamGroups({
      ...responseStatusChecker,
      firstParameterGroup,
      parameterGroupingPostMultiParamGroupsSecondParamGroup
    });
  });

  it("should allow parameter group objects to be shared between operations", async function() {
    await client.parameterGrouping.postSharedParameterGroupObject({
      ...responseStatusChecker,
      firstParameterGroup: { headerOne: header, queryOne: 42 }
    });
  });
});
