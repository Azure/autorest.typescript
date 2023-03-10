import { assert } from "chai";
import {
  emitClientFactoryFromCadl,
  emitParameterFromCadl
} from "./util/emitUtil.js";
import { assertEqualContent } from "./util/testUtil.js";

describe("api-version", () => {
  describe("as query parameter", () => {
    it("should set the default value in options @serivce", async () => {
      const models = await emitClientFactoryFromCadl(`
            @server(
              "{Endpoint}/language",
              "Language Service",
              {
                Endpoint: Endpoint
              }
            )
            @service({
              title: "PetStoreClient",
              version: "2022-05-15-preview",
            })
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;
            `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { testClient } from "./clientDefinitions";
            
            /**
             * Initialize a new instance of \`testClient\`
             * @param endpoint type: string, The endpoint to use.
             * @param options type: ClientOptions, the parameter for all optional parameters
             */
            export default function createClient(
              endpoint: string,
              options: ClientOptions = {}
            ): testClient {
              const baseUrl = options.baseUrl ?? \`\${endpoint}/language\`;
              options.apiVersion = options.apiVersion ?? "2022-05-15-preview";
            
              const userAgentInfo = \`azsdk-js--rest/1.0.0-beta.1\`;
              const userAgentPrefix =
                options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                  ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                  : \`\${userAgentInfo}\`;
              options = {
                ...options,
                userAgentOptions: {
                  userAgentPrefix,
                },
              };
            
              const client = getClient(baseUrl, options) as testClient;
            
              return client;
          }
          `
      );
    });

    it("should set the default value in options @versioned", async () => {
      const models = await emitClientFactoryFromCadl(`
              @server(
                "{Endpoint}/language",
                "Language Service",
                {
                  Endpoint: Endpoint
                }
              )
              @service({
                title: "PetStoreClient",
                version: "2022-05-15-preview",
              })
              namespace PetStore;
              @doc("The endpoint to use.")
              scalar Endpoint extends string;
              `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
              import { getClient, ClientOptions } from "@azure-rest/core-client";
              import { testClient } from "./clientDefinitions";
              
              /**
               * Initialize a new instance of \`testClient\`
               * @param endpoint type: string, The endpoint to use.
               * @param options type: ClientOptions, the parameter for all optional parameters
               */
              export default function createClient(
                endpoint: string,
                options: ClientOptions = {}
              ): testClient {
                const baseUrl = options.baseUrl ?? \`\${endpoint}/language\`;
                options.apiVersion = options.apiVersion ?? "2022-05-15-preview";
              
                const userAgentInfo = \`azsdk-js--rest/1.0.0-beta.1\`;
                const userAgentPrefix =
                  options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                    ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                    : \`\${userAgentInfo}\`;
                options = {
                  ...options,
                  userAgentOptions: {
                    userAgentPrefix,
                  },
                };
              
                const client = getClient(baseUrl, options) as testClient;
              
                return client;
            }
            `
      );
    });

    it("should't generate apiVersion if there's a client level apiVersion", async () => {
      const parameters = await emitParameterFromCadl(
        `
          model ApiVersionParameter {
            @query
            "api-version": string;
          }
          op test(...ApiVersionParameter): string;
          `
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
            import { RequestParameters } from "@azure-rest/core-client";
            
            export type TestParameters =  RequestParameters;
            `
      );
    });

    it("should generate apiVersion if there's no client level apiVersion", async () => {
      const parameters = await emitParameterFromCadl(
        `
          model ApiVersionParameter {
            @query
            "api-version": string;
          }
          op test(...ApiVersionParameter): string;
          `,
        false,
        true
      );
      assert.ok(parameters);
      assertEqualContent(
        parameters?.content!,
        `
            import { RequestParameters } from "@azure-rest/core-client";
            
            export interface TestQueryParamProperties {
              "api-version": string;
            }
            
            export interface TestQueryParam {
              queryParameters: TestQueryParamProperties;
            }
            
            export type TestParameters = TestQueryParam & RequestParameters;
            `
      );
    });
  });
  describe("as path parameter", () => {
    it("should set the default value in customized options @versioned", async () => {
      const models = await emitClientFactoryFromCadl(`
            @versioned(Versions)
            @server(
              "{Endpoint}/anomalydetector/{ApiVersion}",
              "Language Service",
              {
                Endpoint: Endpoint,
                @doc("Api Version")
                @path
                ApiVersion: APIVersion,
              }
            )
            @service({
              title: "PetStoreClient"
            })
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;

            enum Versions {
              v1_1: "v1.1",
            }
            @knownValues(Versions)
            scalar APIVersion extends string;
            `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { testClient } from "./clientDefinitions";
            
            export interface testClientOptions extends ClientOptions {
              apiVersion?: string;
            }

            /**
             * Initialize a new instance of \`testClient\`
             * @param endpoint type: string, The endpoint to use.
             * @param options type: testClientOptions, the parameter for all optional parameters
             */
            export default function createClient(
              endpoint: string,
              options: testClientOptions = {}
            ): testClient {
              const apiVersion = options.apiVersion ?? "v1.1";
              const baseUrl = options.baseUrl ?? \`\${endpoint}/anomalydetector/\${apiVersion}\`;
            
              const userAgentInfo = \`azsdk-js--rest/1.0.0-beta.1\`;
              const userAgentPrefix =
                options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                  ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                  : \`\${userAgentInfo}\`;
              options = {
                ...options,
                userAgentOptions: {
                  userAgentPrefix,
                },
              };
            
              const client = getClient(baseUrl, options) as testClient;
            
              return client;
          }
          `
      );
    });

    it("should set the default value in customized options @service", async () => {
      const models = await emitClientFactoryFromCadl(`
              @versioned(Versions)
              @server(
                "{Endpoint}/anomalydetector/{ApiVersion}",
                "Language Service",
                {
                  Endpoint: Endpoint,
                  @doc("Api Version")
                  @path
                  ApiVersion: APIVersion,
                }
              )
              @service({
                title: "PetStoreClient"
              })
              namespace PetStore;
              @doc("The endpoint to use.")
              scalar Endpoint extends string;
  
              enum Versions {
                v1_1: "v1.1",
              }
              @knownValues(Versions)
              scalar APIVersion extends string;
              `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
              import { getClient, ClientOptions } from "@azure-rest/core-client";
              import { testClient } from "./clientDefinitions";
              
              export interface testClientOptions extends ClientOptions {
                apiVersion?: string;
              }
  
              /**
               * Initialize a new instance of \`testClient\`
               * @param endpoint type: string, The endpoint to use.
               * @param options type: testClientOptions, the parameter for all optional parameters
               */
              export default function createClient(
                endpoint: string,
                options: testClientOptions = {}
              ): testClient {
                const apiVersion = options.apiVersion ?? "v1.1";
                const baseUrl = options.baseUrl ?? \`\${endpoint}/anomalydetector/\${apiVersion}\`;
              
                const userAgentInfo = \`azsdk-js--rest/1.0.0-beta.1\`;
                const userAgentPrefix =
                  options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                    ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                    : \`\${userAgentInfo}\`;
                options = {
                  ...options,
                  userAgentOptions: {
                    userAgentPrefix,
                  },
                };
              
                const client = getClient(baseUrl, options) as testClient;
              
                return client;
            }
            `
      );
    });
  });
  describe("mixed apiVersion in path & query parameter", () => {});
});
