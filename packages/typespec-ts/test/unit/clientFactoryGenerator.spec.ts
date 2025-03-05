import { assert } from "chai";
import { emitClientFactoryFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
import { Diagnostic } from "@typespec/compiler";

describe("Client Factory generation", () => {
  describe("should handle url parameters", () => {
    it("should handle zero parameter", async () => {
      const models = await emitClientFactoryFromTypeSpec(`
      @server(
        "localhost",
        "Language Service"
      )
      @service(#{title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
        import type { ClientOptions } from "@azure-rest/core-client";
        import { getClient } from "@azure-rest/core-client";
        import { logger } from "./logger.js";
        import type { testClient } from "./clientDefinitions.js";

        /** The optional parameters for the client */
        export interface testClientOptions extends ClientOptions {}

        /**
         * Initialize a new instance of \`testClient\`
         * @param options - the parameter for all optional parameters
         */
        export default function createClient(options: testClientOptions = {}): testClient {
        const endpointUrl = options.endpoint ?? options.baseUrl ?? \`localhost\`;
        const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
        const userAgentPrefix =
            options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
            : \`\${userAgentInfo}\`;
        options = {
            ...options,
            userAgentOptions: {
            userAgentPrefix,
            },
            loggingOptions: {
              logger: options.loggingOptions?.logger ?? logger.info
            },
        };
        const client = getClient(endpointUrl, options) as testClient;

        client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
        if (options.apiVersion) {
          logger.warning("This client does not support client api-version, please change it at the operation level");
        }

        return client;
    }
    `
      );
    });
    it("should handle one parameter", async () => {
      const models = await emitClientFactoryFromTypeSpec(`
          @server(
            "{Endpoint}/language",
            "Language Service",
            {
              Endpoint: Endpoint,
            }
          )
          @service(#{title: "PetStoreClient"})
          namespace PetStore;
          @doc("The endpoint to use.")
          scalar Endpoint extends string;
          `);
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
          import type { ClientOptions } from "@azure-rest/core-client";
          import { getClient } from "@azure-rest/core-client";
          import { logger } from "./logger.js";
          import type { testClient } from "./clientDefinitions.js";
          
          /** The optional parameters for the client */
          export interface testClientOptions extends ClientOptions {}

          /**
           * Initialize a new instance of \`testClient\`
           * @param endpointParam - The endpoint to use.
           * @param options - the parameter for all optional parameters
           */
          export default function createClient(
            endpointParam: string,
            options: testClientOptions = {}
          ): testClient {
            const endpointUrl = options.endpoint ?? options.baseUrl ?? \`\${endpointParam}/language\`;
            const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
            const userAgentPrefix =
              options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                : \`\${userAgentInfo}\`;
            options = {
              ...options,
              userAgentOptions: {
                userAgentPrefix,
              },
              loggingOptions: {
                logger: options.loggingOptions?.logger ?? logger.info
              },
            };
            const client = getClient(endpointUrl, options) as testClient;

            client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
            if (options.apiVersion) {
              logger.warning("This client does not support client api-version, please change it at the operation level");
            }
    
            return client;
        }
        `
      );
    });

    it("should handle two parameters", async () => {
      const tsp = `
      @server(
        "{Endpoint}/language/{Version}",
        "Language Service",
        {
          Endpoint: Endpoint,
          Version: Version
        }
      )
      @service(#{title: "PetStoreClient"})
      namespace PetStore;
      @doc("The endpoint to use.")
      scalar Endpoint extends string;

      #suppress "@azure-tools/typespec-azure-core/use-extensible-enum" "for test"
      #suppress "@azure-tools/typespec-azure-core/documentation-required" "for test"
      @doc("The version to use")
      @fixed
      enum Version {
        V1,
        V2
      }
      `;
      const clientFactory = await emitClientFactoryFromTypeSpec(tsp, {
        needAzureCore: true,
      });
      assert.ok(clientFactory);
      await assertEqualContent(
        clientFactory!.content,
        `
            import type { ClientOptions } from "@azure-rest/core-client";
            import { getClient } from "@azure-rest/core-client";
            import { logger } from "./logger.js";
            import type { testClient } from "./clientDefinitions.js";
            import type { Version } from "./models.js";
            
            /** The optional parameters for the client */
            export interface testClientOptions extends ClientOptions {}
            
            /**
             * Initialize a new instance of \`testClient\`
             * @param endpointParam - The endpoint to use.
             * @param version - The version to use
             * @param options - the parameter for all optional parameters
             */
            export default function createClient(
              endpointParam: string,
              version: Version,
              options: testClientOptions = {}
            ): testClient {
              const endpointUrl = options.endpoint ?? options.baseUrl ?? \`\${endpointParam}/language/\${version}\`;
              const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
              const userAgentPrefix =
                options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                  ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                  : \`\${userAgentInfo}\`;
              options = {
                ...options,
                userAgentOptions: {
                  userAgentPrefix,
                },
                loggingOptions: {
                  logger: options.loggingOptions?.logger ?? logger.info
                },
              };
              const client = getClient(endpointUrl, options) as testClient;

              client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
              if (options.apiVersion) {
                logger.warning("This client does not support client api-version, please change it at the operation level");
              }
      
              return client;
          }
          `
      );
    });
    it("should handle extensible enums in host parameters", async () => {
      const models = await emitClientFactoryFromTypeSpec(
        `
            @server(
              "{Endpoint}/language/{Version}",
              "Language Service",
              {
                Endpoint: Endpoint,
                Version: Versions
              }
            )
            @service(#{title: "PetStoreClient"})
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;

            @doc("The version to use.")
            enum Versions {
              @doc("v1.1")
              v1_1: "v1.1",
            }
            `,
        {
          needAzureCore: true
        }
      );
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
            import type { ClientOptions } from "@azure-rest/core-client";
            import { getClient } from "@azure-rest/core-client";
            import { logger } from "./logger.js";
            import type { testClient } from "./clientDefinitions.js";
            import type { Versions } from "./models.js";
            
            /** The optional parameters for the client */
            export interface testClientOptions extends ClientOptions {}

            /**
             * Initialize a new instance of \`testClient\`
             * @param endpointParam - The endpoint to use.
             * @param version - The version to use.
             * @param options - the parameter for all optional parameters
             */
            export default function createClient(
              endpointParam: string,
              version: Versions,
              options: testClientOptions = {}
            ): testClient {
              const endpointUrl = options.endpoint ?? options.baseUrl ?? \`\${endpointParam}/language/\${version}\`;
              const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
              const userAgentPrefix =
                options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                  ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                  : \`\${userAgentInfo}\`;
              options = {
                ...options,
                userAgentOptions: {
                  userAgentPrefix,
                },
                loggingOptions: {
                  logger: options.loggingOptions?.logger ?? logger.info
                },
              };
              const client = getClient(endpointUrl, options) as testClient;

              client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
              if (options.apiVersion) {
                logger.warning("This client does not support client api-version, please change it at the operation level");
              }
      
              return client;
          }
          `
      );
    });

    it("should handle with default value in host parameters", async () => {
      const models = await emitClientFactoryFromTypeSpec(
        `
            @server(
              "{Endpoint}/language/{Version}",
              "Language Service",
              {
                Endpoint: Endpoint = "http://localhost:3000",
                Version: Versions
              }
            )
            @service(#{title: "PetStoreClient"})
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;

            @doc("The version to use.")
            enum Versions {
              @doc("v1.1")
              v1_1: "v1.1",
            }
            `,
        {
          needAzureCore: true
        }
      );
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
            import type { ClientOptions } from "@azure-rest/core-client";
            import { getClient } from "@azure-rest/core-client";
            import { logger } from "./logger.js";
            import type { testClient } from "./clientDefinitions.js";
            import type { Versions } from "./models.js";
            
            /** The optional parameters for the client */
            export interface testClientOptions extends ClientOptions {
              /** The endpoint to use. */
              endpointParam?: string;
            }

            /**
             * Initialize a new instance of \`testClient\`
             * @param version - The version to use.
             * @param options - the parameter for all optional parameters
             */
            export default function createClient(
              version: Versions,
              options: testClientOptions = {}
            ): testClient {
              const endpointParam = options.endpointParam ?? "http://localhost:3000";
              const endpointUrl = options.endpoint ?? options.baseUrl ?? \`\${endpointParam}/language/\${version}\`;
              const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
              const userAgentPrefix =
                options.userAgentOptions && options.userAgentOptions.userAgentPrefix
                  ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
                  : \`\${userAgentInfo}\`;
              options = {
                ...options,
                userAgentOptions: {
                  userAgentPrefix,
                },
                loggingOptions: {
                  logger: options.loggingOptions?.logger ?? logger.info
                },
              };
              const client = getClient(endpointUrl, options) as testClient;
              
              client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
              if (options.apiVersion) {
                logger.warning("This client does not support client api-version, please change it at the operation level");
              }
      
              return client;
          }
          `
      );
    });
  });

  describe("should handle no @server definition", () => {
    it("should set default endpoint parameter when no @server", async () => {
      const models = await emitClientFactoryFromTypeSpec(`
      @service(#{title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
        import type { ClientOptions } from "@azure-rest/core-client";
        import { getClient } from "@azure-rest/core-client";
        import { logger } from "./logger.js";
        import type { testClient } from "./clientDefinitions.js";
        
        /** The optional parameters for the client */
        export interface testClientOptions extends ClientOptions {}

        /**
         * Initialize a new instance of \`testClient\`
         * @param endpointParam - The parameter endpointParam
         * @param options - the parameter for all optional parameters
         */
        export default function createClient(endpointParam: string, options: testClientOptions = {}): testClient {
        const endpointUrl = options.endpoint ?? options.baseUrl ?? \`\${endpointParam}\`;
        const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
        const userAgentPrefix =
            options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
            : \`\${userAgentInfo}\`;
        options = {
            ...options,
            userAgentOptions: {
            userAgentPrefix,
            },
            loggingOptions: {
              logger: options.loggingOptions?.logger ?? logger.info
            },
        };
        const client = getClient(endpointUrl, options) as testClient;

        client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
        if (options.apiVersion) {
          logger.warning("This client does not support client api-version, please change it at the operation level");
        }

        return client;
    }
    `
      );
    });
  });

  describe("should handle different auth options", () => {
    it("should diagnost warning if scope is empty", async () => {
      try {
        await emitClientFactoryFromTypeSpec(
          `
          @useAuth(
            OAuth2Auth<[{
              type: OAuth2FlowType.implicit,
              authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
              scopes: []
            }]>)
          @service(#{title: "PetStoreClient"})
          namespace PetStore;
        `,
        );
        assert.fail("Should throw diagnostic errors");
      } catch (e) {
        const diagnostics = e as Diagnostic[];
        assert.equal(diagnostics.length, 1);
        assert.equal(
          diagnostics[0]?.code,
          "@azure-tools/typespec-ts/no-credential-scopes"
        );
      }
    });

    it("should generate TokenCredential if scope is empty", async () => {
      const factoryFile = await emitClientFactoryFromTypeSpec(
        `
        @useAuth(
          OAuth2Auth<[{
            type: OAuth2FlowType.implicit,
            authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
            scopes: []
          }]>)
        @service(#{title: "PetStoreClient"})
        namespace PetStore;
      `,
        {
          mustEmptyDiagnostic: false
        }
      );

      assert.ok(factoryFile);
      // console.log(factoryFile!.content);
      await assertEqualContent(
        factoryFile!.content,
        `
      import type { ClientOptions } from "@azure-rest/core-client";
      import { getClient } from "@azure-rest/core-client";
      import { logger } from "./logger.js";
      import type { TokenCredential } from "@azure/core-auth";
      import type { testClient } from "./clientDefinitions.js";
      
      /** The optional parameters for the client */
      export interface testClientOptions extends ClientOptions {}

      /**
       * Initialize a new instance of \`testClient\`
       * @param endpointParam - The parameter endpointParam
       * @param credentials - uniquely identify client credential
       * @param options - the parameter for all optional parameters
       */
      export default function createClient(endpointParam: string, credentials: TokenCredential, options: testClientOptions = {}): testClient {
        const endpointUrl = options.endpoint ?? options.baseUrl ?? \`\${endpointParam}\`;
        const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`: \`\${userAgentInfo}\`;;
        options = {
            ...options,
            userAgentOptions: {
              userAgentPrefix
            },
            loggingOptions: {
              logger: options.loggingOptions?.logger ?? logger.info
            },
            credentials: {
              scopes: options.credentials?.scopes ?? [\`\${endpointUrl}/.default\`],
            },
        };
        const client = getClient(endpointUrl, credentials, options) as testClient;

        client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
        if (options.apiVersion) {
          logger.warning("This client does not support client api-version, please change it at the operation level");
        }

        return client;
      }
      `
      );
    });

    it("should generate both credentials if both defined", async () => {
      const models = await emitClientFactoryFromTypeSpec(`
      @useAuth(
        ApiKeyAuth<ApiKeyLocation.header, "apiKey"> |
          OAuth2Auth<[{
            type: OAuth2FlowType.implicit,
            authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
            scopes: ["https://petstor.com/default"]
          }]>)
      @service(#{title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
        import type { ClientOptions } from "@azure-rest/core-client";
        import { getClient } from "@azure-rest/core-client";
        import { logger } from "./logger.js";
        import type { TokenCredential, KeyCredential } from "@azure/core-auth";
        import type { testClient } from "./clientDefinitions.js";
        
        /** The optional parameters for the client */
        export interface testClientOptions extends ClientOptions {}

        /**
         * Initialize a new instance of \`testClient\`
         * @param endpointParam - The parameter endpointParam
         * @param credentials - uniquely identify client credential
         * @param options - the parameter for all optional parameters
         */
        export default function createClient(endpointParam: string, credentials: TokenCredential | KeyCredential, options: testClientOptions = {}): testClient {
        const endpointUrl = options.endpoint ?? options.baseUrl ?? \`\${endpointParam}\`;
        const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
        const userAgentPrefix =
            options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
            : \`\${userAgentInfo}\`;
        options = {
            ...options,
            userAgentOptions: {
            userAgentPrefix,
            },
            loggingOptions: {
              logger: options.loggingOptions?.logger ?? logger.info
            },
            credentials: {
              scopes: options.credentials?.scopes ?? ["https://petstor.com/default"],
              apiKeyHeaderName: options.credentials?.apiKeyHeaderName ?? "apiKey",
            },
        };
        const client = getClient(endpointUrl, credentials, options) as testClient;

        client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
        if (options.apiVersion) {
          logger.warning("This client does not support client api-version, please change it at the operation level");
        }

        return client;
    }
    `
      );
    });

    it("should generate both credentials if include BearerAuth and OAuth2Auth", async () => {
      const models = await emitClientFactoryFromTypeSpec(`
      @useAuth(
        BearerAuth |
          OAuth2Auth<[{
            type: OAuth2FlowType.implicit,
            authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
            scopes: ["https://petstor.com/default"]
          }]>)
      @service(#{title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
        import type { ClientOptions } from "@azure-rest/core-client";
        import { getClient } from "@azure-rest/core-client";
        import { logger } from "./logger.js";
        import type {
          TokenCredential,
          KeyCredential,
          isKeyCredential,
        } from "@azure/core-auth";
        import type { testClient } from "./clientDefinitions.js";
        
        /** The optional parameters for the client */
        export interface testClientOptions extends ClientOptions {}
        
        /**
         * Initialize a new instance of \`testClient\`
         * @param endpointParam - The parameter endpointParam
         * @param credentials - uniquely identify client credential
         * @param options - the parameter for all optional parameters
         */
        export default function createClient(
          endpointParam: string,
          credentials: TokenCredential | KeyCredential,
          options: testClientOptions = {},
        ): testClient {
          const endpointUrl = options.endpoint ?? options.baseUrl ?? \`\${endpointParam}\`;
          const userAgentInfo = \`azsdk-js-test-rest/1.0.0-beta.1\`;
          const userAgentPrefix =
            options.userAgentOptions && options.userAgentOptions.userAgentPrefix
              ? \`\${options.userAgentOptions.userAgentPrefix} \${userAgentInfo}\`
              : \`\${userAgentInfo}\`;
          options = {
            ...options,
            userAgentOptions: {
              userAgentPrefix,
            },
            loggingOptions: {
              logger: options.loggingOptions?.logger ?? logger.info,
            },
            credentials: {
              scopes: options.credentials?.scopes ?? ["https://petstor.com/default"],
            },
          };
          const client = getClient(endpointUrl, credentials, options) as testClient;
        
          client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
          if (options.apiVersion) {
            logger.warning(
              "This client does not support client api-version, please change it at the operation level",
            );
          }
        
          if (isKeyCredential(credentials)) {
            client.pipeline.addPolicy({
              name: "customKeyCredentialPolicy",
              async sendRequest(request, next) {
                request.headers.set("Authorization", "Bearer " + credentials.key);
                return next(request);
              },
            });
          }
        
          return client;
        }
    `
      );
    });
  });
});
