import { assert } from "chai";
import { createBodyPollingStrategy } from "../../../src/lro/bodyPollingStrategy";
import { LROOperationStep, LROResponseInfo } from "../../../src/lro/models";
import { OperationSpec, OperationArguments } from "@azure/core-http";
import { SendOperationFn } from "../../../src/lro/lroPoller";
describe("BodyPollingStrategy", () => {
  const mockSendOperation: any = () => Promise.resolve({});
  let lastOperation: LROOperationStep<any>;
  let lroData: LROResponseInfo;
  beforeEach(() => {
    lroData = {
      initialRequestMethod: "PUT"
    };
    lastOperation = {
      args: {},
      spec: { httpMethod: "PUT", path: "originalPath" } as any,
      result: { _lroData: lroData }
    };
  });

  describe("isTerminal", () => {
    it("should default to Succeeded and be terminal when no provisioning state was returned", () => {
      const pollingStrategy = createBodyPollingStrategy(
        lastOperation,
        mockSendOperation
      );

      assert.isTrue(pollingStrategy.isTerminal());
    });

    it("should be terminal state when provisioningState is succeeded", () => {
      lastOperation.result = {
        _lroData: { ...lroData, provisioningState: "Succeeded" }
      };
      const pollingStrategy = createBodyPollingStrategy(
        lastOperation,
        mockSendOperation
      );

      assert.isTrue(pollingStrategy.isTerminal());
    });

    it("should be terminal state when properties.provisioningState is succeeded", () => {
      lastOperation.result = {
        _lroData: { ...lroData, provisioningState: "Succeeded" }
      };
      const pollingStrategy = createBodyPollingStrategy(
        lastOperation,
        mockSendOperation
      );

      assert.isTrue(pollingStrategy.isTerminal());
    });

    it("should be terminal state when provisioningState is Failed", () => {
      lastOperation.result = {
        _lroData: { ...lroData, provisioningState: "Failed" }
      };
      const pollingStrategy = createBodyPollingStrategy(
        lastOperation,
        mockSendOperation
      );

      assert.isTrue(pollingStrategy.isTerminal());
    });

    it("should be terminal state when provisioningState is Canceled", () => {
      lastOperation.result = {
        _lroData: { ...lroData, provisioningState: "Canceled" }
      };
      const pollingStrategy = createBodyPollingStrategy(
        lastOperation,
        mockSendOperation
      );

      assert.isTrue(pollingStrategy.isTerminal());
    });

    it("should be not terminal state when provisioningState is not a terminal one", () => {
      lastOperation.result = {
        _lroData: { ...lroData, provisioningState: "InProgress" }
      };
      const pollingStrategy = createBodyPollingStrategy(
        lastOperation,
        mockSendOperation
      );

      assert.isFalse(pollingStrategy.isTerminal());
    });
  });

  describe("sendFinalRequest", () => {
    it("should return last operation", async () => {
      const pollingStrategy = createBodyPollingStrategy(
        lastOperation,
        mockSendOperation
      );

      const result = await pollingStrategy.sendFinalRequest();
      assert.deepEqual(result, lastOperation);
    });
  });

  describe("poll", () => {
    it("should return polling operation with GET http method", async () => {
      let pollingMethod = "";
      let pollingUrl = "";

      const sendOperation: SendOperationFn<any> = (
        _args: OperationArguments,
        spec: OperationSpec
      ) => {
        pollingMethod = spec.httpMethod;
        pollingUrl = spec.path || "";
        return "" as any;
      };

      const pollingStrategy = createBodyPollingStrategy(
        lastOperation,
        sendOperation
      );

      await pollingStrategy.poll();
      assert.equal(pollingMethod, "GET");
      assert.equal(pollingUrl, lastOperation.spec.path);
    });
  });
});
