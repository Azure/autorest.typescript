import {
  createLocationStrategy,
  LROStrategy,
  SendOperationFn,
  LROOperationStep
} from "../.././../src/lro";
import { assert } from "chai";
describe("LocationStrategy", () => {
  let locationStrategy: LROStrategy<any>;
  let dummyInitialOperation: LROOperationStep<any>;
  let dummySendOperationFn: SendOperationFn<any>;

  beforeEach(async () => {
    dummyInitialOperation = {
      args: {} as any,
      spec: {} as any,
      result: { _lroData: { location: "dummyUrl" } } as any
    };
    dummySendOperationFn = () => {
      return {} as any;
    };

    locationStrategy = createLocationStrategy(
      dummyInitialOperation,
      dummySendOperationFn
    );
    await locationStrategy.poll();
  });

  describe("isTerminal", () => {
    it("should never be terminal before the first poll", async () => {
      locationStrategy = createLocationStrategy(
        dummyInitialOperation,
        dummySendOperationFn
      );

      const isTerminal = locationStrategy.isTerminal();

      assert.isFalse(isTerminal);
    });
    it("should be terminal when status code is not 202", async () => {
      locationStrategy = createLocationStrategy(
        dummyInitialOperation,
        (_args, _spec) => {
          return Promise.resolve({ _lroData: { statusCode: 200 } });
        }
      );

      await locationStrategy.poll();
      const isTerminal = locationStrategy.isTerminal();

      assert.isTrue(isTerminal);
    });

    it("should not be terminal when status code is 202", async () => {
      locationStrategy = createLocationStrategy(
        dummyInitialOperation,
        (_args, _spec) => {
          return Promise.resolve({ _lroData: { statusCode: 202 } });
        }
      );

      await locationStrategy.poll();
      const isTerminal = locationStrategy.isTerminal();

      assert.isFalse(isTerminal);
    });
  });

  describe("sendFinalResponse", () => {
    it("should always return the last operation", async () => {
      locationStrategy = createLocationStrategy(
        dummyInitialOperation,
        dummySendOperationFn
      );
      const result = await locationStrategy.sendFinalRequest();
      assert.equal(result, dummyInitialOperation);
    });
  });

  describe("Poll", () => {
    it("should do a GET call to the URL in location header from last result", async () => {
      const expectedUrl = "pollingURL";
      dummySendOperationFn = (_args, spec) => {
        return Promise.resolve({ _lroData: { location: expectedUrl } });
      };
      locationStrategy = createLocationStrategy(
        dummyInitialOperation,
        dummySendOperationFn
      );
      await locationStrategy.poll();
      const result = await locationStrategy.poll();

      assert.equal(result.spec.path, expectedUrl);
    });
  });
});
