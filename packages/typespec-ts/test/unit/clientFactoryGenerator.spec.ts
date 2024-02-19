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
      @service( {title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
        import { getClient, ClientOptions } from "@azure-rest/core-client";
        import { logger } from "./logger";
        import { testClient } from "./clientDefinitions";
        
        /**
         * Initialize a new instance of \`testClient\`
         * @param options - the parameter for all optional parameters
         */
        export default function createClient(options: ClientOptions = {}): testClient {
        const baseUrl = options.baseUrl ?? \`localhost\`;
        
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
        
        const client = getClient(baseUrl, options) as testClient;

        client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
        
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
          @service( {title: "PetStoreClient"})
          namespace PetStore;
          @doc("The endpoint to use.")
          scalar Endpoint extends string;
          `);
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
          import { getClient, ClientOptions } from "@azure-rest/core-client";
          import { logger } from "./logger";
          import { testClient } from "./clientDefinitions";

          /**
           * Initialize a new instance of \`testClient\`
           * @param endpoint - The endpoint to use.
           * @param options - the parameter for all optional parameters
           */
          export default function createClient(
            endpoint: string,
            options: ClientOptions = {}
          ): testClient {
            const baseUrl = options.baseUrl ?? \`\${endpoint}/language\`;
          
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
          
            const client = getClient(baseUrl, options) as testClient;

            client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
          
            return client;
        }
        `
      );
    });

    it("should handle two parameters", async () => {
      const models = await emitClientFactoryFromTypeSpec(
        `
            @server(
              "{Endpoint}/language/{Version}",
              "Language Service",
              {
                Endpoint: Endpoint,
                Version: Version
              }
            )
            @service( {title: "PetStoreClient"})
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
            `,
        true
      );
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { logger } from "./logger";
            import { testClient } from "./clientDefinitions";
            
            /**
             * Initialize a new instance of \`testClient\`
             * @param endpoint - The endpoint to use.
             * @param version - The version to use
             * @param options - the parameter for all optional parameters
             */
            export default function createClient(
              endpoint: string,
              version: "V1" | "V2",
              options: ClientOptions = {}
            ): testClient {
              const baseUrl = options.baseUrl ?? \`\${endpoint}/language/\${version}\`;
            
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
            
              const client = getClient(baseUrl, options) as testClient;

              client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
            
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
            @service( {title: "PetStoreClient"})
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;

            @doc("The version to use.")
            enum Versions {
              @doc("v1.1")
              v1_1: "v1.1",
            }
            `,
        true
      );
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { logger } from "./logger";
            import { testClient } from "./clientDefinitions";
            
            /**
             * Initialize a new instance of \`testClient\`
             * @param endpoint - The endpoint to use.
             * @param version - The version to use. Possible values: "v1.1"
             * @param options - the parameter for all optional parameters
             */
            export default function createClient(
              endpoint: string,
              version: string,
              options: ClientOptions = {}
            ): testClient {
              const baseUrl = options.baseUrl ?? \`\${endpoint}/language/\${version}\`;
            
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
            
              const client = getClient(baseUrl, options) as testClient;

              client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
            
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
            @service( {title: "PetStoreClient"})
            namespace PetStore;
            @doc("The endpoint to use.")
            scalar Endpoint extends string;

            @doc("The version to use.")
            enum Versions {
              @doc("v1.1")
              v1_1: "v1.1",
            }
            `,
        true
      );
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
            import { getClient, ClientOptions } from "@azure-rest/core-client";
            import { logger } from "./logger";
            import { testClient } from "./clientDefinitions";

            export interface testClientOptions extends ClientOptions {
              endpoint?: string;
            }

            /**
             * Initialize a new instance of \`testClient\`
             * @param version - The version to use. Possible values: "v1.1"
             * @param options - the parameter for all optional parameters
             */
            export default function createClient(
              version: string,
              options: testClientOptions = {}
            ): testClient {
              const endpoint = options.endpoint ?? "http://localhost:3000";
              const baseUrl = options.baseUrl ?? \`\${endpoint}/language/\${version}\`;
            
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
            
              const client = getClient(baseUrl, options) as testClient;
              
              client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
            
              return client;
          }
          `
      );
    });
  });

  describe("should handle no @server definition", () => {
    it("should set default endpoint parameter when no @server", async () => {
      const models = await emitClientFactoryFromTypeSpec(`
      @service( {title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
        import { getClient, ClientOptions } from "@azure-rest/core-client";
        import { logger } from "./logger";
        import { testClient } from "./clientDefinitions";
        
        /**
         * Initialize a new instance of \`testClient\`
         * @param endpoint - The parameter endpoint
         * @param options - the parameter for all optional parameters
         */
        export default function createClient(endpoint: string, options: ClientOptions = {}): testClient {
        const baseUrl = options.baseUrl ?? \`\${endpoint}\`;
        
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
        
        const client = getClient(baseUrl, options) as testClient;

        client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
        
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
          @service( {title: "PetStoreClient"})
          namespace PetStore;
        `,
          false,
          true
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
        @service( {title: "PetStoreClient"})
        namespace PetStore;
      `,
        false,
        false
      );

      assert.ok(factoryFile);
      // console.log(factoryFile!.content);
      await assertEqualContent(
        factoryFile!.content,
        `
      import { getClient, ClientOptions } from "@azure-rest/core-client";
      import { logger } from "./logger";
      import { TokenCredential } from "@azure/core-auth";
      import { testClient } from "./clientDefinitions";

      /**
       * Initialize a new instance of \`testClient\`
       * @param endpoint - The parameter endpoint
       * @param credentials - uniquely identify client credential
       * @param options - the parameter for all optional parameters
       */
      export default function createClient(endpoint: string, credentials: TokenCredential, options: ClientOptions = {}): testClient {
        const baseUrl = options.baseUrl ?? \`\${endpoint}\`;
        
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
              scopes: options.credentials?.scopes ?? [\`\${baseUrl}/.default\`],
            },
        };

        const client = getClient(baseUrl, credentials, options) as testClient;

        client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

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
      @service( {title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      await assertEqualContent(
        models!.content,
        `
        import { getClient, ClientOptions } from "@azure-rest/core-client";
        import { logger } from "./logger";
        import { TokenCredential, KeyCredential } from "@azure/core-auth";
        import { testClient } from "./clientDefinitions";
        
        /**
         * Initialize a new instance of \`testClient\`
         * @param endpoint - The parameter endpoint
         * @param credentials - uniquely identify client credential
         * @param options - the parameter for all optional parameters
         */
        export default function createClient(endpoint: string, credentials: TokenCredential | KeyCredential, options: ClientOptions = {}): testClient {
        const baseUrl = options.baseUrl ?? \`\${endpoint}\`;
        
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
        
        const client = getClient(baseUrl, credentials, options) as testClient;

        client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
        
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
      @service( {title: "PetStoreClient"})
      namespace PetStore;
      `);
      assert.ok(models);
      assertEqualContent(
        models!.content,
        `
        import { getClient, ClientOptions } from "@azure-rest/core-client";
        import { logger } from "./logger";
        import { TokenCredential, KeyCredential, isKeyCredential } from "@azure/core-auth";
        import { testClient } from "./clientDefinitions";
        
        /**
         * Initialize a new instance of \`testClient\`
         * @param endpoint - The parameter endpoint
         * @param credentials - uniquely identify client credential
         * @param options - the parameter for all optional parameters
         */
        export default function createClient(endpoint: string, credentials: TokenCredential | KeyCredential, options: ClientOptions = {}): testClient {
        const baseUrl = options.baseUrl ?? \`\${endpoint}\`;
        
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
            },
        };
        
        const client = getClient(baseUrl, credentials, options) as testClient;

        if (isKeyCredential(credentials)) {
          client.pipeline.addPolicy({
            name: "customKeyCredentialPolicy",
            async sendRequest(request, next) {
              request.headers.set("Authorization", "bearer " + credentials.key);
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
