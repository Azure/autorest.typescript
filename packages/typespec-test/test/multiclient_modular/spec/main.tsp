import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-client-generator-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;
using Azure.ClientGenerator;
using TypeSpec.Versioning;

@service({
  title: "MultiClient",
  version: "1.0.0",
})
@useDependency(Azure.Core.Versions.v1_0_Preview_1)
namespace Cadl.MultiClient;

model Resource {
  @visibility("read")
  id: string;

  @key
  @segment("resources")
  @visibility("read")
  name: string;
  description?: string;
  type: string;
}

model ResourceArray is Resource[];

// operation using Azure.Core
@Azure.ClientGenerator.Core.client({
  name: "FooClient",
  service: Cadl.MultiClient,
})
@route("/cadl-foo")
@doc("Cadl Foo")
interface FooOp {
  @doc("Creates a new resource or updates an existing one.")
  createOrUpdate is ResourceCreateOrReplace<Resource>;

  @doc("Gets the details of a resource.")
  get is ResourceRead<Resource>;

  @doc("Deletes a resource.")
  delete is ResourceDelete<Resource>;

  @doc("Lists the existing resources.")
  list is ResourceList<Resource>;
}

@Azure.ClientGenerator.Core.client({
  name: "BarClient",
  service: Cadl.MultiClient,
})
@doc("Bar")
@route("/cadl-bar")
interface BarOp {
  // binary
  @route("/get-binary")
  @get
  getBinary(): OkResponse & {
    @header("content-type") contentType: "image/png";
    @body body: bytes;
  };

  getArray(): ResourceArray;

  // response with headers
  @route("/create-with-headers")
  @put
  createWithHeaders(): CreatedResponse & {
    @header("operation-location")
    operationLocation: ResourceLocation<Resource>;

    @body
    body: Resource;
  };

  @route("/delete-with-headers")
  @delete
  deleteWithHeaders(): NoContentResponse & {
    @header("operation-location")
    operationLocation: ResourceLocation<Resource>;
  };
}