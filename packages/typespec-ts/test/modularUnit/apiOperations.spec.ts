import { assert } from "chai";
import {
  emitModularClientContextFromTypeSpec,
  emitModularClientFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("api operations in Modular", () => {
  describe("in parameters", () => {
    it("should handle contentTypes has binary data", async () => {
      const tspContent = `
      @route("/uploadFileViaBody")
      @post op uploadFileViaBody(
        @header contentType: "application/octet-stream",
        @body body: bytes
      ): void;
      `;
      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `import { TestingContext as Client } from "./index.js";
         import {
           StreamableMethod,
           operationOptionsToRequestParameters,
           PathUncheckedResponse,
           createRestError
         } from "@azure-rest/core-client";
         export function _uploadFileViaBodySend(
           context: Client,
           body: Uint8Array,
           options: UploadFileViaBodyOptionalParams = { requestOptions: {} }
         ): StreamableMethod {
           return context
             .path("/uploadFileViaBody")
             .post({
               ...operationOptionsToRequestParameters(options),
               contentType: (options.contentType as any) ?? "application/octet-stream",
               body: body,
             });
         }
         export async function _uploadFileViaBodyDeserialize(
           result: PathUncheckedResponse
         ): Promise<void> {
           const expectedStatuses = ["204"];
           if(!expectedStatuses.includes(result.status)) {
             throw createRestError(result);
           }
           return;
         }
         export async function uploadFileViaBody(
           context: Client,
           body: Uint8Array,
           options: UploadFileViaBodyOptionalParams = { requestOptions: {} }
         ): Promise<void> {
           const result = await _uploadFileViaBodySend(context, body, options);
           return _uploadFileViaBodyDeserialize(result);
         }`,
        true
      );
    });

    it("should handle contentTypes has binary data if self defined scalar for upload", async () => {
      const tspContent = `
      @encode("binary")
      scalar BinaryBytes extends bytes;
  
      @route("/uploadFileViaBody")
      @post op uploadFileViaBody(
        @header contentType: "application/octet-stream",
        @body body: BinaryBytes
      ): void;
      `;
      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `import { TestingContext as Client } from "./index.js";
         import {
           StreamableMethod,
           operationOptionsToRequestParameters,
           PathUncheckedResponse,
           createRestError
         } from "@azure-rest/core-client";
         export function _uploadFileViaBodySend(
           context: Client,
           body: Uint8Array,
           options: UploadFileViaBodyOptionalParams = { requestOptions: {} }
         ): StreamableMethod {
           return context
             .path("/uploadFileViaBody")
             .post({
               ...operationOptionsToRequestParameters(options),
               contentType: (options.contentType as any) ?? "application/octet-stream",
               body: body,
             });
         }
         export async function _uploadFileViaBodyDeserialize(
           result: PathUncheckedResponse
         ): Promise<void> {
           const expectedStatuses = ["204"];
           if(!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
           }
           return;
         }
         export async function uploadFileViaBody(
           context: Client,
           body: Uint8Array,
           options: UploadFileViaBodyOptionalParams = { requestOptions: {} }
         ): Promise<void> {
           const result = await _uploadFileViaBodySend(context, body, options);
           return _uploadFileViaBodyDeserialize(result);
         }`,
        true
      );
    });

    it("should handle contentTypes has multiple form data", async () => {
      const tspContent = `
      @route("/uploadFile")
      @post op uploadFile(
        @header contentType: "multipart/form-data",
        @body body: {
          name: string;
          file: bytes;
        }
      ): void;
      `;
      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `import { TestingContext as Client } from "./index.js";
         import {
           StreamableMethod,
           operationOptionsToRequestParameters,
           PathUncheckedResponse,
           createRestError
         } from "@azure-rest/core-client";
         import { uint8ArrayToString } from "@azure/core-util";
         export function _uploadFileSend(
           context: Client,
           body: { name: string; file: Uint8Array },
           options: UploadFileOptionalParams = { requestOptions: {} }
         ): StreamableMethod {
           return context
             .path("/uploadFile")
             .post({
               ...operationOptionsToRequestParameters(options),
               contentType: (options.contentType as any) ?? "multipart/form-data",
               body: {
                 name: body["name"],
                 file: uint8ArrayToString(body["file"], "base64"),
               },
             });
         }
         export async function _uploadFileDeserialize(
           result: PathUncheckedResponse
         ): Promise<void> {
           const expectedStatuses = ["204"];
           if(!expectedStatuses.includes(result.status)) {
             throw createRestError(result);
           }
           return;
         }
         export async function uploadFile(
           context: Client,
           body: { name: string; file: Uint8Array },
           options: UploadFileOptionalParams = { requestOptions: {} }
         ): Promise<void> {
           const result = await _uploadFileSend(context, body, options);
           return _uploadFileDeserialize(result);
         }`,
        true
      );
    });

    it("should handle contentTypes has multiple form data array", async () => {
      const tspContent = `
      scalar BinaryBytes extends bytes;
  
      @route("/uploadFiles")
      @post op uploadFiles(
        @header contentType: "multipart/form-data",
        @body body: {
          files: BinaryBytes[];
        }
      ): void;
      `;
      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `import { TestingContext as Client } from "./index.js";
         import {
           StreamableMethod,
           operationOptionsToRequestParameters,
           PathUncheckedResponse,
           createRestError
         } from "@azure-rest/core-client";
         import { uint8ArrayToString } from "@azure/core-util";
         export function _uploadFilesSend(
           context: Client,
           body: { files: Uint8Array[] },
           options: UploadFilesOptionalParams = { requestOptions: {} }
         ): StreamableMethod {
           return context
             .path("/uploadFiles")
             .post({
               ...operationOptionsToRequestParameters(options),
               contentType: (options.contentType as any) ?? "multipart/form-data",
               body:  {
                 files: body["files"].map((p) => uint8ArrayToString(p, "base64")),
               },
             });
         }
         export async function _uploadFilesDeserialize(
           result: PathUncheckedResponse
         ): Promise<void> {
           const expectedStatuses = ["204"];
           if(!expectedStatuses.includes(result.status)) {
             throw createRestError(result);
           }
           return;
         }
         export async function uploadFiles(
           context: Client,
           body: { files: Uint8Array[] },
           options: UploadFilesOptionalParams = { requestOptions: {} }
         ): Promise<void> {
           const result = await _uploadFilesSend(context, body, options);
           return _uploadFilesDeserialize(result);
         }`,
        true
      );
    });
  });

  describe("in response", () => {
    it("should handle contentTypes has binary data", async () => {
      const tspContent = `
      @route("/downloadFile")
      @post
      op downloadFile(): {
        @header contentType: "application/octet-stream";
        @body body: bytes;
      };
      `;
      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `import { TestingContext as Client } from "./index.js";
         import {
           StreamableMethod,
           operationOptionsToRequestParameters,
           PathUncheckedResponse,
           createRestError
         } from "@azure-rest/core-client";
         export function _downloadFileSend(
           context: Client,
           options: DownloadFileOptionalParams = { requestOptions: {} }
         ): StreamableMethod {
           return context
             .path("/downloadFile")
             .post({ ...operationOptionsToRequestParameters(options) });
         }
         export async function _downloadFileDeserialize(
           result: PathUncheckedResponse
         ): Promise<Uint8Array> {
           const expectedStatuses = ["200"];
           if (!expectedStatuses.includes(result.status)) {
             throw createRestError(result);
           }
           return result.body as any;
         }
         export async function downloadFile(
           context: Client,
           options: DownloadFileOptionalParams = { requestOptions: {} }
         ): Promise<Uint8Array> {
           const result = await _downloadFileSend(context, options);
           return _downloadFileDeserialize(result);
         }`,
        true
      );
    });

    it("should handle contentTypes has binary data if self defined scalar for download", async () => {
      const tspContent = `
      @encode("binary")
      scalar BinaryBytes extends bytes;

      @route("/downloadFile")
      @post
      op downloadFile(): {
        @header contentType: "application/octet-stream";
        @body body: BinaryBytes;
      };
      `;
      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `import { TestingContext as Client } from "./index.js";
         import {
           StreamableMethod,
           operationOptionsToRequestParameters,
           PathUncheckedResponse,
           createRestError
         } from "@azure-rest/core-client";
         export function _downloadFileSend(
           context: Client,
           options: DownloadFileOptionalParams = { requestOptions: {} }
         ): StreamableMethod {
           return context
             .path("/downloadFile")
             .post({ ...operationOptionsToRequestParameters(options) });
         }
         export async function _downloadFileDeserialize(
           result: PathUncheckedResponse
         ): Promise<Uint8Array> {
           const expectedStatuses = ["200"];
           if (!expectedStatuses.includes(result.status)) {
             throw createRestError(result);
           }
           return result.body as any;
         }
         export async function downloadFile(
           context: Client,
           options: DownloadFileOptionalParams = { requestOptions: {} }
         ): Promise<Uint8Array> {
           const result = await _downloadFileSend(context, options);
           return _downloadFileDeserialize(result);
         }`,
        true
      );
    });

    it("should handle contentTypes has multiple form data", async () => {
      const tspContent = `
      @route("/downloadFile")
      @post
      op downloadFile(): {
        @header contentType: "multipart/form-data";
        @body body: {
          name: string;
          file: bytes;
        };
      };
      `;
      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `import { TestingContext as Client } from "./index.js";
         import {
           StreamableMethod,
           operationOptionsToRequestParameters,
           PathUncheckedResponse,
           createRestError
         } from "@azure-rest/core-client";
         import { stringToUint8Array } from "@azure/core-util";
         export function _downloadFileSend(
           context: Client,
           options: DownloadFileOptionalParams = { requestOptions: {} }
         ): StreamableMethod {
           return context
             .path("/downloadFile")
             .post({ ...operationOptionsToRequestParameters(options) });
         }
         export async function _downloadFileDeserialize(
           result: PathUncheckedResponse
         ): Promise<{ name: string; file: Uint8Array }> {
           const expectedStatuses = ["200"];
           if (!expectedStatuses.includes(result.status)) {
             throw createRestError(result);
           }
            return {
              name: result.body["name"],
              file:
                typeof result.body["file"] === "string"
                  ? stringToUint8Array(result.body["file"], "base64")
                  : result.body["file"],
            };
         }
         export async function downloadFile(
           context: Client,
           options: DownloadFileOptionalParams = { requestOptions: {} }
         ): Promise<{ name: string; file: Uint8Array }> {
           const result = await _downloadFileSend(context, options);
           return _downloadFileDeserialize(result);
         }`,
        true
      );
    });

    it("should handle contentTypes has multiple form data array", async () => {
      const tspContent = `
      scalar BinaryBytes extends bytes;
  
      @route("/downloadFile")
      @post
      op downloadFile(): {
        @header contentType: "multipart/form-data";
        @body body: {
          name: string;
          file: BinaryBytes[];
        };
      };
      `;
      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `import { TestingContext as Client } from "./index.js";
         import {
           StreamableMethod,
           operationOptionsToRequestParameters,
           PathUncheckedResponse,
           createRestError
         } from "@azure-rest/core-client";
         import { stringToUint8Array } from "@azure/core-util";
         export function _downloadFileSend(
           context: Client,
           options: DownloadFileOptionalParams = { requestOptions: {} }
         ): StreamableMethod {
           return context
             .path("/downloadFile")
             .post({ ...operationOptionsToRequestParameters(options) });
         }
         export async function _downloadFileDeserialize(
           result: PathUncheckedResponse
         ): Promise<{ name: string; file: Uint8Array[] }> {
           const expectedStatuses = ["200"];
           if (!expectedStatuses.includes(result.status)) {
              throw createRestError(result);
           }
            return {
              name: result.body["name"],
              file: result.body["file"].map((p: any) =>
                typeof p === "string" ? stringToUint8Array(p, "base64") : p,
              ),
            };
         }
         export async function downloadFile(
           context: Client,
           options: DownloadFileOptionalParams = { requestOptions: {} }
         ): Promise<{ name: string; file: Uint8Array[] }> {
           const result = await _downloadFileSend(context, options);
           return _downloadFileDeserialize(result);
         }`,
        true
      );
    });
  });

  describe("apiVersion in query", () => {
    it("should generate apiVersion if there's a client level apiVersion but without default value", async () => {
      const tspContent = `
      model ApiVersionParameter {
        @query
        "api-version": string;
      }
      op test(...ApiVersionParameter): string;
      `;
      const operationFiles =
        await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
          PathUncheckedResponse,
          createRestError,
        } from "@azure-rest/core-client";
        
        export function _testSend(
          context: Client,
          options: TestOptionalParams = { requestOptions: {} },
        ): StreamableMethod {
          return context
            .path("/")
            .get({ ...operationOptionsToRequestParameters(options) });
        }
        
        export async function _testDeserialize(
          result: PathUncheckedResponse,
        ): Promise<string> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }

          return result.body;
        }
        
        export async function test(
          context: Client,
          options: TestOptionalParams = { requestOptions: {} },
        ): Promise<string> {
          const result = await _testSend(context, options);
          return _testDeserialize(result);
        }
        `
      );
      const clientContext =
        await emitModularClientContextFromTypeSpec(tspContent);
      assert.ok(clientContext);
      await assertEqualContent(
        clientContext?.getFullText()!,
        `
        import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
        import { logger } from "../logger.js";

        export interface TestingContext extends Client {}
        
        /** Optional parameters for the client. */
        export interface TestingClientOptionalParams  extends ClientOptions  {}
        
        export function createTesting(
          endpoint: string,
          apiVersion: string,
          options: TestingClientOptionalParams  = {},
        ): TestingContext {
          const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
          const userAgentPrefix = prefixFromOptions
            ? \`\${prefixFromOptions} azsdk-js-api\`
            : "azsdk-js-api";
          const { apiVersion: _, ...updatedOptions } = {
            ...options,
            userAgentOptions: { userAgentPrefix },
            loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info }
          };
          const clientContext = getClient(
            options.endpoint ?? options.baseUrl ?? endpoint,
            undefined,
            updatedOptions,
          );
          clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
          clientContext.pipeline.addPolicy({
            name: "ClientApiVersionPolicy",
            sendRequest: (req, next) => {
              // Use the apiVersion defined in request url directly
              // Append one if there is no apiVersion and we have one at client options
              const url = new URL(req.url);
              if (!url.searchParams.get("api-version")) {
                req.url = \`\${req.url}\${
                  Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
                }api-version=\$\{apiVersion}\`;
              }
              
              return next(req);
            },
          });
          return clientContext;
        }
        `
      );
      const classicClient = await emitModularClientFromTypeSpec(tspContent);
      assert.ok(classicClient);
      await assertEqualContent(
        classicClient?.getFullText()!,
        `
        import { TokenCredential, KeyCredential } from "@azure/core-auth";
        import { Pipeline } from "@azure/core-rest-pipeline";
        
        export { TestingClientOptionalParams  } from "./api/testingContext.js";
        
        export class TestingClient {
          private _client: TestingContext;
          /** The pipeline used by this client to make requests */
          public readonly pipeline: Pipeline;
        
          constructor(
            endpoint: string,
            apiVersion: string,
            options: TestingClientOptionalParams  = {},
          ) {
            const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
            const userAgentPrefix = prefixFromOptions
              ? \`\${prefixFromOptions} azsdk-js-client\`
              : "azsdk-js-client";
            this._client = createTesting(endpoint, apiVersion, {
              ...options,
              userAgentOptions: { userAgentPrefix },
            });
            this.pipeline = this._client.pipeline;
          }
        
          test(options: TestOptionalParams = { requestOptions: {} }): Promise<string> {
            return test(this._client, options);
          }
        }
        `
      );
    });

    it("shouldn't generate apiVersion if there's a client level apiVersion and with default value", async () => {
      const tspContent = `
      model ApiVersionParameter {
        @query
        "api-version": string;
      }
      op test(...ApiVersionParameter): string;
      `;
      const operationFiles = await emitModularOperationsFromTypeSpec(
        tspContent,
        false,
        true,
        false,
        false,
        true
      );
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
          PathUncheckedResponse,
          createRestError,
        } from "@azure-rest/core-client";
        
        export function _testSend(
          context: Client,
          options: TestOptionalParams = { requestOptions: {} },
        ): StreamableMethod {
          return context
            .path("/")
            .get({ ...operationOptionsToRequestParameters(options) });
        }
        
        export async function _testDeserialize(
          result: PathUncheckedResponse,
        ): Promise<string> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }

          return result.body;
        }
        
        export async function test(
          context: Client,
          options: TestOptionalParams = { requestOptions: {} },
        ): Promise<string> {
          const result = await _testSend(context, options);
          return _testDeserialize(result);
        }
        `
      );
      const clientContext = await emitModularClientContextFromTypeSpec(
        tspContent,
        false,
        true
      );
      assert.ok(clientContext);
      await assertEqualContent(
        clientContext?.getFullText()!,
        `
        import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
        import { logger } from "../logger.js";

        export interface TestingContext extends Client {}
        
        /** Optional parameters for the client. */
        export interface TestingClientOptionalParams extends ClientOptions  {
          apiVersion?: string;
        }
        
        export function createTesting(
          endpoint: string,
          options: TestingClientOptionalParams  = {},
        ): TestingContext {
          const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
          const userAgentPrefix = prefixFromOptions
            ? \`\${prefixFromOptions} azsdk-js-api\`
            : "azsdk-js-api";
          const { apiVersion: _, ...updatedOptions } = {
            ...options,
            userAgentOptions: { userAgentPrefix },
            loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
          };
          const clientContext = getClient(
            options.endpoint ?? options.baseUrl ?? endpoint,
            undefined,
            updatedOptions,
          );
          clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
          const apiVersion = options.apiVersion ?? "2022-05-15-preview";
          clientContext.pipeline.addPolicy({
            name: "ClientApiVersionPolicy",
            sendRequest: (req, next) => {
              // Use the apiVersion defined in request url directly
              // Append one if there is no apiVersion and we have one at client options
              const url = new URL(req.url);
              if (!url.searchParams.get("api-version")) {
                req.url = \`\${req.url}\${
                  Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
                }api-version=\${apiVersion}\`;
              }
        
              return next(req);
            },
          });
          return clientContext;
         }
        `
      );
      const classicClient = await emitModularClientFromTypeSpec(
        tspContent,
        false,
        true
      );
      assert.ok(classicClient);
      await assertEqualContent(
        classicClient?.getFullText()!,
        `
        import { TokenCredential, KeyCredential } from "@azure/core-auth";
        import { Pipeline } from "@azure/core-rest-pipeline";
        
        export { TestingClientOptionalParams  } from "./api/testingContext.js";
        
        export class TestingClient {
          private _client: TestingContext;
          /** The pipeline used by this client to make requests */
          public readonly pipeline: Pipeline;
        
          constructor(
            endpoint: string,
            options: TestingClientOptionalParams  = {},
          ) {
            const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
            const userAgentPrefix = prefixFromOptions
              ? \`\${prefixFromOptions} azsdk-js-client\`
              : "azsdk-js-client";
            this._client = createTesting(endpoint, {
              ...options,
              userAgentOptions: { userAgentPrefix },
            });
            this.pipeline = this._client.pipeline;
          }
        
          test(options: TestOptionalParams = { requestOptions: {} }): Promise<string> {
            return test(this._client, options);
          }
        }
        `
      );
    });

    it("should generate apiVersion if there's no client level apiVersion", async () => {
      const tspContent = `
      model ApiVersionParameter {
        @query
        "api-version": string;
      }
      @route("/test")
      op test(...ApiVersionParameter): string;
      @route("/test1")
      op test1(): string;
      `;
      const operationFiles = await emitModularOperationsFromTypeSpec(
        tspContent,
        false,
        true
      );
      assert.ok(operationFiles);
      assert.equal(operationFiles?.length, 1);
      await assertEqualContent(
        operationFiles?.[0]?.getFullText()!,
        `
        import { TestingContext as Client } from "./index.js";
        import {
          StreamableMethod,
          operationOptionsToRequestParameters,
          PathUncheckedResponse,
          createRestError,
        } from "@azure-rest/core-client";
        
        export function _testSend(
          context: Client,
          apiVersion: string,
          options: TestOptionalParams = { requestOptions: {} },
        ): StreamableMethod {
          return context
            .path("/test")
            .get({
              ...operationOptionsToRequestParameters(options),
              queryParameters: { "api-version": apiVersion },
            });
        }
        
        export async function _testDeserialize(
          result: PathUncheckedResponse,
        ): Promise<string> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
          return result.body;
        }
        
        export async function test(
          context: Client,
          apiVersion: string,
          options: TestOptionalParams = { requestOptions: {} },
        ): Promise<string> {
          const result = await _testSend(context, apiVersion, options);
          return _testDeserialize(result);
        }
        
        export function _test1Send(
          context: Client,
          options: Test1OptionalParams = { requestOptions: {} },
        ): StreamableMethod {
          return context
            .path("/test1")
            .get({ ...operationOptionsToRequestParameters(options) });
        }
        
        export async function _test1Deserialize(
          result: PathUncheckedResponse,
        ): Promise<string> {
          const expectedStatuses = ["200"];
          if (!expectedStatuses.includes(result.status)) {
            throw createRestError(result);
          }
          return result.body;
        }
        
        export async function test1(
          context: Client,
          options: Test1OptionalParams = { requestOptions: {} },
        ): Promise<string> {
          const result = await _test1Send(context, options);
          return _test1Deserialize(result);
        }
        `,
        true
      );
      const clientContext =
        await emitModularClientContextFromTypeSpec(tspContent);
      assert.ok(clientContext);
      await assertEqualContent(
        clientContext?.getFullText()!,
        `
        import { ClientOptions, Client, getClient } from "@azure-rest/core-client";
        import { logger } from "../logger.js";

        export interface TestingContext extends Client {}

        /** Optional parameters for the client. */
        export interface TestingClientOptionalParams extends ClientOptions {}

        export function createTesting(endpoint: string, options: TestingClientOptionalParams = {}): TestingContext {
          const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
          const userAgentPrefix = prefixFromOptions ? \`\${prefixFromOptions} azsdk-js-api\` : "azsdk-js-api";
          const { apiVersion: _, ...updatedOptions } = { ...options,userAgentOptions: { userAgentPrefix },loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },}
          const clientContext = getClient(options.endpoint ?? options.baseUrl ?? endpoint, undefined, updatedOptions);
          clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
          if (options.apiVersion) {
            logger.warning("This client does not support client api-version, please change it at the operation level");
          }
          return clientContext;
        }
        `
      );
      const classicClient = await emitModularClientFromTypeSpec(tspContent);
      assert.ok(classicClient);
      await assertEqualContent(
        classicClient?.getFullText()!,
        `
        import { TokenCredential, KeyCredential } from "@azure/core-auth";
        import { Pipeline } from "@azure/core-rest-pipeline";
        
        export { TestingClientOptionalParams  } from "./api/testingContext.js";
        
        export class TestingClient {
          private _client: TestingContext;
          /** The pipeline used by this client to make requests */
          public readonly pipeline: Pipeline;
        
          constructor(
            endpoint: string,
            options: TestingClientOptionalParams  = {},
          ) {
            const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
            const userAgentPrefix = prefixFromOptions
              ? \`\${prefixFromOptions} azsdk-js-client\`
              : "azsdk-js-client";
            this._client = createTesting(endpoint, {
              ...options,
              userAgentOptions: { userAgentPrefix },
            });
            this.pipeline = this._client.pipeline;
          }
        
          test(
            apiVersion: string,
            options: TestOptionalParams = { requestOptions: {} },
          ): Promise<string> {
            return test(this._client, apiVersion, options);
          }

          test1(options: Test1OptionalParams = { requestOptions: {} }): Promise<string> {
            return test1(this._client, options);
          }
        }
        `
      );
    });
  });
});
