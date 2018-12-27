import { AutoRestSwaggerBATService, AutoRestSwaggerBATServiceModels } from "./generated/BodyString/autoRestSwaggerBATService";

describe("model-enum-as-union flag", function () {
  it("should perform basic put requests", async function () {
    const client = new AutoRestSwaggerBATService();
    await client.enumModel.putNotExpandable(AutoRestSwaggerBATServiceModels.Colors.Redcolor);
  });
});