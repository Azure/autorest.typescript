import { assert } from "chai";
import { emitModularOperationsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe.only("api operations in Modular", () => {
  it("should handle contentTypes has binary data", async () => {
    const tspContent = `
    @route("/uploadFileViaBody")
    @post op uploadFileViaBody(
      @header contentType: "application/octet-stream",
      @body body: bytes
    ): void;
    `;
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `import { TestingContext as Client } from "../rest/index.js";
       import {
         StreamableMethod,
         operationOptionsToRequestParameters,
       } from "@azure-rest/core-client";
       export function _uploadFileViaBodySend(
         context: Client,
         body: Uint8Array,
         options: UploadFileViaBodyOptions = { requestOptions: {} }
       ): StreamableMethod<UploadFileViaBody204Response> {
         return context
           .path("/uploadFileViaBody")
           .post({
             ...operationOptionsToRequestParameters(options),
             contentType: (options.contentType as any) ?? "application/octet-stream",
             body: body,
           });
       }
       export async function _uploadFileViaBodyDeserialize(
         result: UploadFileViaBody204Response
       ): Promise<void> {
         if (result.status !== "204") {
           throw result.body;
         }
         return;
       }
       export async function uploadFileViaBody(
         context: Client,
         body: Uint8Array,
         options: UploadFileViaBodyOptions = { requestOptions: {} }
       ): Promise<void> {
         const result = await _uploadFileViaBodySend(context, body, options);
         return _uploadFileViaBodyDeserialize(result);
       }`,
      true
    );
  });

  it("should handle contentTypes has binary data if self defined scalar", async () => {
    const tspContent = `
    @encode("binary")
    scalar BinaryBytes extends bytes;

    @route("/uploadFileViaBody")
    @post op uploadFileViaBody(
      @header contentType: "application/octet-stream",
      @body body: BinaryBytes
    ): void;
    `;
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `import { TestingContext as Client } from "../rest/index.js";
       import {
         StreamableMethod,
         operationOptionsToRequestParameters,
       } from "@azure-rest/core-client";
       export function _uploadFileViaBodySend(
         context: Client,
         body: Uint8Array,
         options: UploadFileViaBodyOptions = { requestOptions: {} }
       ): StreamableMethod<UploadFileViaBody204Response> {
         return context
           .path("/uploadFileViaBody")
           .post({
             ...operationOptionsToRequestParameters(options),
             contentType: (options.contentType as any) ?? "application/octet-stream",
             body: body,
           });
       }
       export async function _uploadFileViaBodyDeserialize(
         result: UploadFileViaBody204Response
       ): Promise<void> {
         if (result.status !== "204") {
           throw result.body;
         }
         return;
       }
       export async function uploadFileViaBody(
         context: Client,
         body: Uint8Array,
         options: UploadFileViaBodyOptions = { requestOptions: {} }
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
        @encode("binary")
        file: bytes;
      }
    ): void;
    `;
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `import { TestingContext as Client } from "../rest/index.js";
       import {
         StreamableMethod,
         operationOptionsToRequestParameters,
       } from "@azure-rest/core-client";
       export function _uploadFileSend(
         context: Client,
         name: string,
         file: Uint8Array,
         options: UploadFileOptions = { requestOptions: {} }
       ): StreamableMethod<UploadFile204Response> {
         return context
           .path("/uploadFile")
           .post({
             ...operationOptionsToRequestParameters(options),
             contentType: (options.contentType as any) ?? "multipart/form-data",
             body: { name: name, file: file },
           });
       }
       export async function _uploadFileDeserialize(
         result: UploadFile204Response
       ): Promise<void> {
         if (result.status !== "204") {
           throw result.body;
         }
         return;
       }
       export async function uploadFile(
         context: Client,
         name: string,
         file: Uint8Array,
         options: UploadFileOptions = { requestOptions: {} }
       ): Promise<void> {
         const result = await _uploadFileSend(context, name, file, options);
         return _uploadFileDeserialize(result);
       }`,
      true
    );
  });

  
  it("should handle contentTypes has multiple form data array", async () => {
    const tspContent = `
    @encode("binary")
    scalar BinaryBytes extends bytes;

    @route("/uploadFiles")
    @post op uploadFiles(
      @header contentType: "multipart/form-data",
      @body body: {
        files: BinaryBytes[];
      }
    ): void;
    `;
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `import { TestingContext as Client } from "../rest/index.js";
       import {
         StreamableMethod,
         operationOptionsToRequestParameters,
       } from "@azure-rest/core-client";
       export function _uploadFilesSend(
         context: Client,
         files: Uint8Array[],
         options: UploadFilesOptions = { requestOptions: {} }
       ): StreamableMethod<UploadFiles204Response> {
         return context
           .path("/uploadFiles")
           .post({
             ...operationOptionsToRequestParameters(options),
             contentType: (options.contentType as any) ?? "multipart/form-data",
             body: { files: (files ?? []).map((p) => p) },
           });
       }
       export async function _uploadFilesDeserialize(
         result: UploadFiles204Response
       ): Promise<void> {
         if (result.status !== "204") {
           throw result.body;
         }
         return;
       }
       export async function uploadFiles(
         context: Client,
         files: Uint8Array[],
         options: UploadFilesOptions = { requestOptions: {} }
       ): Promise<void> {
         const result = await _uploadFilesSend(context, files, options);
         return _uploadFilesDeserialize(result);
       }`,
      true
    );
  });
});