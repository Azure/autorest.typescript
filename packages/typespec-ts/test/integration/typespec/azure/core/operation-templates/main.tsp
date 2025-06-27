import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.Core.Traits;
using Azure.Core.Foundations;

@service(#{
  title: "Operation Templates Test Service",
})
@doc("Test service for Azure Core operation templates.")
@useDependency(Versions.v1_0_Preview_1)
namespace Azure.OperationTemplates.Test;

alias ServiceTraits = NoRepeatableRequests &
  NoConditionalRequests &
  NoClientRequestId;

// Simple test model
#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
model TestResource {
  @key
  @visibility(Lifecycle.Read)
  @segment("testResources")
  name: string;
  
  @doc("Test property")
  value: int32;
  
  @doc("Test status")
  @visibility(Lifecycle.Read)
  status?: string;
}

#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
model TestCreateModel {
  @doc("Test property")
  value: int32;
}

#suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
model TestResponseModel {
  @doc("Test result")
  result: string;
}

// Test operation using ResourceCreateWithServiceProvidedName template
interface TestOperations {
  @doc("Test ResourceCreateWithServiceProvidedName operation template")
  createResource is Azure.Core.StandardResourceOperations.ResourceCreateWithServiceProvidedName<TestResource, TestCreateModel>;
}

// Test operation using ResourceCollectionAction template  
interface TestCollectionOperations {
  @doc("Test ResourceCollectionAction operation template")
  @action("validate")
  validateCollection is Azure.Core.ResourceOperations<ServiceTraits>.ResourceCollectionAction<
    TestResource,
    { @body body: TestCreateModel },
    TestResponseModel
  >;
}

// Test operation using Foundation ResourceOperation template
interface TestFoundationOperations {
  #suppress "@azure-tools/typespec-azure-core/use-standard-operations"
  @doc("Test Foundations ResourceOperation template")
  @createsOrReplacesResource(TestResource)
  @put
  createOrReplace is Foundations.ResourceOperation<
    TestResource,
    { @body body: TestResource },
    TestResource
  >;
}