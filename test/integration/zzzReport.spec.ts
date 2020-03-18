import { expect } from "chai";
import { ReportClient } from "./generated/report/src/reportClient";

describe("Integration tests for Report", () => {
  let client: ReportClient;

  beforeEach(() => {
    client = new ReportClient();
  });

  describe("#Test Coverage", () => {
    function printCoverage(
      report: any,
      unsupported: string[],
      missingFeatures: string[]
    ) {
      const features = Object.keys(report);
      let failedTests = 0;
      let passedTests = 0;
      for (const feature of features) {
        if (unsupported.indexOf(feature) >= 0) {
          console.log(`IGNORING ${feature}`);
        } else if (missingFeatures.indexOf(feature) >= 0) {
          console.log(`PENDING ${feature}`);
        } else {
          if (report[feature] === 1) {
            passedTests++;
            //console.log(`PASSED ${feature}`);
          } else {
            failedTests++;
            console.log(`FAILED to execute ${feature}`);
          }
        }
      }

      console.log(
        `The test coverage is ${passedTests}/${passedTests + failedTests}.`
      );
    }

    it("required:", async () => {
      const unsupported: string[] = [];
      const missingFeaturesOrBugs: string[] = [];
      const report: any = await client.getReport();

      printCoverage(report, unsupported, missingFeaturesOrBugs);
    });

    it("optional:", async () => {
      const unsupported: string[] = [];
      const missingFeaturesOrBugs: string[] = [];
      const report: any = await client.getOptionalReport();

      printCoverage(report, unsupported, missingFeaturesOrBugs);
    });
  });
});
