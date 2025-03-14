using TypeSpec.Http;
using TypeSpec.Rest;
using Azure.Core;
using Azure.Core.Foundations;

namespace Azure.Core.Foundations.Extensions;

/*
 This TypeSpec file was created to customize the existing implementation from the foundations library.
 In this file we have addressed the following issues:
 1. Avoid inlining of the models - required by ADP backend and also by the AutoRest. All models must be references and have schema definitions in the OpenApi spec.
 2. In ADP we are using slightly different model for LRO. It has additional state [Created] and the operation type property.
 3. The `CustomBodyWrapper` just adds the `@doc` to the body element to suppress warnings during the spec validation.
 4. The `CustomResourceOkResponse` wraps the <T> with `@body`.
 5. The `CustomErrorResponse` adds missing header `x-ms-error-code` to the default error response
 6. For all LRO operations - add operation status location header and OK response where necessary to align with AutoRest code generator.
 7. The `CustomSingletonResource` has been introduced to allow operations on singleton child resources that have no identifier.
*/

@doc("for internal use")
enum DefaultLroType {
  Default: "default",
}

@doc("List {name} resources", TResource)
op CustomResourceList<
  TResource extends {},
  TCustom extends Foundations.CustomizationFields = {}
> is Foundations.ResourceList<
  TResource,
  Foundations.CustomParameters<TCustom>,
  Page<TResource>
>;

@doc("Creates or replaces a {name}", TResource)
@createsOrReplacesResource(TResource)
op CustomResourceCreateOrReplace<
  TResource extends {},
  TResourceCreateParams extends {}
> is Foundations.ResourceOperation<
  TResource,
  TResourceCreateParams,
  CustomResourceCreatedOrOkResponse<TResource>
>;

@doc("A wrapper for optional parameter in the body. The intent of model is to add description to 'body'")
model CustomBodyWrapper<T extends {}> {
  @doc("Parameter of type '{name}' in the body.", T)
  @body
  body?: T;
}

@doc("A wrapper for required parameter in the body. The intent of model is to add description to 'body' and make it requred.")
model CustomRequiredBodyWrapper<T extends {}> {
  @doc("Parameter of type '{name}' in the body.", T)
  @body
  body: T;
}

@doc("A {name} resource was successfully created.", T)
model CustomResourceCreatedResponse<T extends {}> {
  ...TypeSpec.Http.Response<201>;
  @body body: T;
}

model CustomResourceOkResponse<T extends {}> {
  ...TypeSpec.Http.Response<200>;
  @body body: T;
}

alias CustomResourceCreatedOrOkResponse<T extends {}> = CustomResourceCreatedResponse<T> | CustomResourceOkResponse<T>;

