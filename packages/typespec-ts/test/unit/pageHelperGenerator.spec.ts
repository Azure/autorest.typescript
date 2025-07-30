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

  it("should handle @list operation with @pageItems", async () => {
    const content = `
      @list
      op listWidgets() : { @pageItems items: string[]; };
      `;
    const pageInfo = await emitPageHelperFromTypeSpec(content, {
      needAzureCore: true
    });
    assert.ok(pageInfo);
    assert.isTrue((pageInfo?.content as string).includes(`items`));
    assert.isTrue((pageInfo?.content as string).includes(`nextLink`));
  });

  it("should report errors if no @pageItems defined", async () => {
    try {
      const content = `
      @list
      op listWidgets() : { items: string[]; };
      `;
      await emitPageHelperFromTypeSpec(content, {
        needAzureCore: true
      });
    } catch (e) {
      assert.isTrue(
        (e as Error).message.includes(
          "Paged operation 'listWidgets' return type must have a property annotated with @pageItems."
        )
      );
    }
  });

  it("should report warning for nested @pageItems", async () => {
    try {
      const content = `
      @list
      op listWidgets() : { pagination: { @pageItems items: string[]; }; };
      `;
      await emitPageHelperFromTypeSpec(content, {
        needAzureCore: true
      });
    } catch (e) {
      assert.isTrue(
        (e as Error).message.includes(
          "@azure-tools/typespec-ts/un-supported-paging-cases"
        )
      );
    }
  });

  it("should handle @list operation with customized @nextLink and @pageItems", async () => {
    const content = `
      @list
      op listWidgets() : { @pageItems widgets: string[]; @nextLink next: string; };
      `;
    const pageInfo = await emitPageHelperFromTypeSpec(content, {
      needAzureCore: true
    });
    assert.ok(pageInfo);
    assert.isTrue((pageInfo?.content as string).includes(`widgets`));
    assert.isTrue((pageInfo?.content as string).includes(`next`));
  });

  it("should handle @list operation with normal @nextLink and @pageItems", async () => {
    const content = `
      @list
      op listWidgets() : { @pageItems pageItems: string[]; @nextLink nextLink: string; };
      `;
    const pageInfo = await emitPageHelperFromTypeSpec(content, {
      needAzureCore: true
    });
    assert.ok(pageInfo);
    assert.isTrue((pageInfo?.content as string).includes(`pageItems`));
    assert.isTrue((pageInfo?.content as string).includes(`nextLink`));
  });

  // please confirm if the null is valid type for nextLink
  it.skip("should handle @list operation with customized null @pageItems", async () => {
    const content = `
      @list
      op listWidgets() : { @pageItems widgets: string[]; @nextLink next: null; };
      `;
    const pageInfo = await emitPageHelperFromTypeSpec(content, {
      needAzureCore: true
    });
    assert.ok(pageInfo);
    assert.isTrue((pageInfo?.content as string).includes(`widgets`));
    assert.isTrue((pageInfo?.content as string).includes(`next`));
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
