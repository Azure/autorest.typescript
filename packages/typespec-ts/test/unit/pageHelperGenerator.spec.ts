import { assert } from "chai";
import { emitPageHelperFromTypeSpec } from "../util/emitUtil.js";

describe("Page helper", () => {
  it.skip("could handle customized nextLinkName and itemName", async () => {
    const pageInfo = await generatePagingHelper(
      `
      #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "for test"
      @list
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
  model CustomPageModel<T> {
    @pageItems
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
    @visibility(Lifecycle.Read)
    name: string;
  }
    ${code}
    `;

  return await emitPageHelperFromTypeSpec(content, {
    needAzureCore: true
  });
}
