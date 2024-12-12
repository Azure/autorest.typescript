import { assert } from "chai";
import { emitPageHelperFromTypeSpec } from "../util/emitUtil.js";

describe("Page helper", () => {
  it("could handle customized nextLinkName and itemName", async () => {
    const pageInfo = await generatePagingHelper(
      `
      #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for test"
      op listWidgets is Azure.Core.Foundations.Operation<{}, CustomPageModel<Widget>>;`
    );
    assert.ok(pageInfo);
    assert.isTrue((pageInfo?.content as string).includes(`customizedItems`));
    assert.isTrue((pageInfo?.content as string).includes(`@odata.nextLink`));
  });
});

async function generatePagingHelper(code: string) {
  const content = `
  @friendlyName("{name}ListResults", T)
  @global.Azure.Core.pagedResult
  model CustomPageModel<T> {
    @global.Azure.Core.items
    @doc("List of items.")
    customizedItems: T[];
  
    @TypeSpec.nextLink
    @doc("Link to fetch more items.")
    #suppress "@azure-tools/typespec-azure-core/casing-style" "for test"
    \`@odata.nextLink\`?: string;
  }
  @doc("A widget.")
  @resource("widgets")
  model Widget {
    @key("widgetName")
    @doc("The widget name.")
    @visibility("read")
    name: string;
  }
    ${code}
    `;

  return await emitPageHelperFromTypeSpec(content, {
    needAzureCore: true
  });
}
