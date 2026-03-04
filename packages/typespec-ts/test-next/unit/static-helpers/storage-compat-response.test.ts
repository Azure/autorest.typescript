import { describe, it, expect } from "vitest";
import {
  addStorageCompatResponse,
  createStorageCompatOnResponse,
  StorageCompatResponseInfo
} from "../../../static/static-helpers/storageCompatResponse.js";

// Minimal mock for FullOperationResponse (extends PipelineResponse)
function createMockFullOperationResponse(
  status: number = 200,
  body: any = {},
  headers: Record<string, string> = {}
) {
  return {
    status,
    headers: {
      get: (name: string) => headers[name],
      toJSON: () => ({ ...headers })
    },
    request: {
      url: "https://example.com/test",
      method: "GET",
      headers: { toJSON: () => ({}) }
    },
    bodyAsText: JSON.stringify(body),
    rawHeaders: headers,
    parsedBody: body
  } as any;
}

describe("addStorageCompatResponse", () => {
  it("should augment a model response with _response metadata", () => {
    const rawResponse = createMockFullOperationResponse(200, { name: "widget-1" });
    const parsedBody = { name: "widget-1" };
    const parsedHeaders = { requestId: "abc-123" };

    const result = addStorageCompatResponse(
      rawResponse,
      parsedBody,
      parsedHeaders
    );

    // The original body properties should be accessible directly
    expect(result.name).toBe("widget-1");

    // The _response metadata should be present
    expect(result._response).toBeDefined();
    expect(result._response.rawResponse).toBe(rawResponse);
    expect(result._response.parsedBody).toBe(parsedBody);
    expect(result._response.parsedHeaders).toBe(parsedHeaders);
  });

  it("should handle void (undefined) body", () => {
    const rawResponse = createMockFullOperationResponse(204);
    const parsedHeaders = {};

    const result = addStorageCompatResponse(
      rawResponse,
      undefined,
      parsedHeaders
    );

    expect(result._response).toBeDefined();
    expect(result._response.rawResponse).toBe(rawResponse);
    expect(result._response.parsedBody).toBeUndefined();
    expect(result._response.parsedHeaders).toEqual({});
  });

  it("should handle null body", () => {
    const rawResponse = createMockFullOperationResponse(200);

    const result = addStorageCompatResponse(rawResponse, null, {});

    expect(result._response).toBeDefined();
    expect(result._response.rawResponse).toBe(rawResponse);
    expect(result._response.parsedBody).toBeNull();
  });

  it("should handle string body", () => {
    const rawResponse = createMockFullOperationResponse(200, "hello");
    const parsedBody = "hello";

    const result = addStorageCompatResponse(rawResponse, parsedBody, {});

    expect(result._response).toBeDefined();
    expect(result._response.parsedBody).toBe("hello");
    expect(result._response.rawResponse).toBe(rawResponse);
  });

  it("should handle complex nested model body", () => {
    const rawResponse = createMockFullOperationResponse(200, {
      id: "1",
      nested: { value: 42 }
    });
    const parsedBody = { id: "1", nested: { value: 42 } };
    const parsedHeaders = { etag: '"abc"', requestId: "req-1" };

    const result = addStorageCompatResponse(
      rawResponse,
      parsedBody,
      parsedHeaders
    );

    expect(result.id).toBe("1");
    expect(result.nested.value).toBe(42);
    expect(result._response.parsedHeaders.etag).toBe('"abc"');
    expect(result._response.parsedHeaders.requestId).toBe("req-1");
  });

  it("should handle empty headers", () => {
    const rawResponse = createMockFullOperationResponse(200, { name: "test" });
    const parsedBody = { name: "test" };
    const parsedHeaders: Record<string, unknown> = {};

    const result = addStorageCompatResponse(
      rawResponse,
      parsedBody,
      parsedHeaders
    );

    expect(result._response.parsedHeaders).toEqual({});
  });

  it("should preserve the raw response object identity", () => {
    const rawResponse = createMockFullOperationResponse(200, {});
    const parsedBody = { value: true };

    const result = addStorageCompatResponse(rawResponse, parsedBody, {});

    // rawResponse should be the exact same object reference
    expect(result._response.rawResponse).toBe(rawResponse);
    expect(result._response.rawResponse.status).toBe(200);
  });

  it("should type-check with StorageCompatResponseInfo", () => {
    const rawResponse = createMockFullOperationResponse(200);
    const parsedBody = { name: "test" };
    const parsedHeaders = { requestId: "abc" };

    const result: { name: string } & StorageCompatResponseInfo<
      { name: string },
      { requestId: string }
    > = addStorageCompatResponse(rawResponse, parsedBody, parsedHeaders);

    // TypeScript type checking validates the shape
    expect(result.name).toBe("test");
    expect(result._response.parsedBody.name).toBe("test");
    expect(result._response.parsedHeaders.requestId).toBe("abc");
  });
});

describe("createStorageCompatOnResponse", () => {
  it("should capture the raw response via onResponse callback", () => {
    const interceptor = createStorageCompatOnResponse();

    expect(interceptor.getRawResponse()).toBeUndefined();

    const mockResponse = createMockFullOperationResponse(200, { id: "1" });
    interceptor.onResponse(mockResponse);

    expect(interceptor.getRawResponse()).toBe(mockResponse);
  });

  it("should chain with original onResponse callback", () => {
    const originalCalls: any[] = [];
    const originalOnResponse = (response: any) => {
      originalCalls.push(response);
    };

    const interceptor = createStorageCompatOnResponse(originalOnResponse);
    const mockResponse = createMockFullOperationResponse(200);
    interceptor.onResponse(mockResponse);

    // Both callbacks should have been called
    expect(interceptor.getRawResponse()).toBe(mockResponse);
    expect(originalCalls).toHaveLength(1);
    expect(originalCalls[0]).toBe(mockResponse);
  });

  it("should work without original onResponse callback", () => {
    const interceptor = createStorageCompatOnResponse(undefined);

    const mockResponse = createMockFullOperationResponse(204);
    interceptor.onResponse(mockResponse);

    expect(interceptor.getRawResponse()).toBe(mockResponse);
  });

  it("should capture the most recent response", () => {
    const interceptor = createStorageCompatOnResponse();

    const response1 = createMockFullOperationResponse(200, { v: 1 });
    const response2 = createMockFullOperationResponse(200, { v: 2 });

    interceptor.onResponse(response1);
    expect(interceptor.getRawResponse()).toBe(response1);

    interceptor.onResponse(response2);
    expect(interceptor.getRawResponse()).toBe(response2);
  });
});
