import { HelloWorldParameters } from "./parameters";
import { HelloWorld200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Hello operations */
export interface HelloOperations {
  world(
    options?: HelloWorldParameters
  ): StreamableMethod<HelloWorld200Response>;
}

export interface World {
  get(options?: HelloWorldParameters): StreamableMethod<HelloWorld200Response>;
}

export interface Routes {
  /** Resource for '/hello/world' has methods for the following verbs: get */
  (path: "/hello/world"): World;
}

export type HelloClient = Client & {
  path: Routes;
  hello: HelloOperations;
};
