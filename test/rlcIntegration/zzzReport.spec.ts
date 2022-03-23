import { ReportClient as AzureReportClient } from "./generated/azureReport/src/reportClient";
import { ReportClient } from "./generated/report/src/reportClient";

describe("Integration tests for Report", () => {
  let reportClient: ReportClient;
  let azureReportClient: AzureReportClient;

  beforeEach(() => {
    reportClient = new ReportClient({ allowInsecureConnection: true });
    azureReportClient = new AzureReportClient({
      allowInsecureConnection: true
    });
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
          if (report[feature] > 0) {
            passedTests++;
          } else {
            failedTests++;
            // console.log(`FAILED to execute ${feature}`);
          }
        }
      }

      const percentage = Math.round(
        (passedTests / (passedTests + failedTests)) * 100
      );
      console.log(
        `The test coverage is ${percentage}% (${passedTests}/${passedTests +
          failedTests}).`
      );
    }

    it("required:", async () => {
      const unsupported: string[] = [];
      const missingFeaturesOrBugs: string[] = [];
      const report: any = await reportClient.getReport();

      printCoverage(report, unsupported, missingFeaturesOrBugs);
    });

    it("optional:", async () => {
      const unsupported: string[] = [];
      const missingFeaturesOrBugs: string[] = [];
      const report: any = await reportClient.getOptionalReport();

      printCoverage(report, unsupported, missingFeaturesOrBugs);
    });

    it("azure:", async () => {
      const unsupported: string[] = [];
      const missingFeaturesOrBugs: string[] = [];
      const report: any = await azureReportClient.getReport();

      printCoverage(report, unsupported, missingFeaturesOrBugs);
    });
  });
});
