import "@typespec/rest";

using TypeSpec.Http;

namespace TypeScript.Test.SharedRoute;

@doc("Resource to process.")
model Resource {
  id: string;
}

@error
model Error {
  code: int32;
  message: string;
}

model NoContentResponse { 
  @statusCode statusCode: 202; 
  @body body: Resource; 
}

model OkResponse { 
  @statusCode statusCode: 200;
  @body body: Resource[]; 
}


@route("/sharedroute")
interface SharedRouteOperations {

  /**
   * different query & header parameters
   */

  @sharedRoute
  @route("/query")
  listBySubscription(...Resource, @header filter: "subscription"): NoContentResponse | Error;


  @sharedRoute
  @route("/query")
  listByResourceGroup(...Resource, @query filter: "resourceGroup"): OkResponse | Error;

  
  /**
   * different request bodies
   */

  @sharedRoute
  @route("/request-body")
  updateInt(@body a: int32, @query options: string): void;

  @sharedRoute
  @route("/request-body")
  updateString(@body b: string, @query options: string): void;

  /**
   * different responses
   */

  @sharedRoute
  @route("/response-body")
  returnsInt(...Resource, @query options: string): int32;

  @sharedRoute
  @route("/response-body")
  returnsString(...Resource, @query options: string): string;

  /**
   * different request and response bodies
   */
  @sharedRoute
  @route("/request-response")
  processInt(@body body: int32, @query options: string): int32;

  @sharedRoute
  @route("/request-response")
  processString(@body body: string, @query options: string): string;
}
