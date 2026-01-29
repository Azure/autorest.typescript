import "./main.tsp";
import "@azure-tools/typespec-azure-resource-manager";
import "@azure-tools/typespec-client-generator-core";

using Http;
using Azure.ClientGenerator.Core;
using Microsoft.Web;
using Azure.ResourceManager;

// python
@@clientName(Microsoft.Web, "WebSiteManagementClient", "python, javascript");

@@clientName(SupportedTlsVersions.`1.0`, "ONE0", "python");
@@clientName(SupportedTlsVersions.`1.1`, "ONE1", "python");
@@clientName(SupportedTlsVersions.`1.2`, "ONE2", "python");
@@clientName(SupportedTlsVersions.`1.3`, "ONE3", "python");

@@clientName(SupportedTlsVersions.`1.0`, "One0", "go, javascript");
@@clientName(SupportedTlsVersions.`1.1`, "One1", "go, javascript");
@@clientName(SupportedTlsVersions.`1.2`, "One2", "go, javascript");
@@clientName(SupportedTlsVersions.`1.3`, "One3", "go, javascript");

@@clientName(TlsCipherSuites.TLS_AES_256_GCM_SHA384,
  "TLS_AES256_GCM_SHA384",
  "python"
);
@@clientName(TlsCipherSuites.TLS_AES_128_GCM_SHA256,
  "TLS_AES128_GCM_SHA256",
  "python"
);
@@clientName(TlsCipherSuites.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
  "TLS_ECDHE_ECDSA_WITH_AES256_GCM_SHA384",
  "python"
);
@@clientName(TlsCipherSuites.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,
  "TLS_ECDHE_ECDSA_WITH_AES128_CBC_SHA256",
  "python"
);
@@clientName(TlsCipherSuites.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
  "TLS_ECDHE_ECDSA_WITH_AES128_GCM_SHA256",
  "python"
);
@@clientName(TlsCipherSuites.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
  "TLS_ECDHE_RSA_WITH_AES256_GCM_SHA384",
  "python"
);
@@clientName(TlsCipherSuites.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,
  "TLS_ECDHE_RSA_WITH_AES128_GCM_SHA256",
  "python"
);
@@clientName(TlsCipherSuites.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,
  "TLS_ECDHE_RSA_WITH_AES256_CBC_SHA384",
  "python"
);
@@clientName(TlsCipherSuites.TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,
  "TLS_ECDHE_RSA_WITH_AES128_CBC_SHA256",
  "python"
);
@@clientName(TlsCipherSuites.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,
  "TLS_ECDHE_RSA_WITH_AES256_CBC_SHA",
  "python"
);
@@clientName(TlsCipherSuites.TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,
  "TLS_ECDHE_RSA_WITH_AES128_CBC_SHA",
  "python"
);
@@clientName(TlsCipherSuites.TLS_RSA_WITH_AES_256_GCM_SHA384,
  "TLS_RSA_WITH_AES256_GCM_SHA384",
  "python"
);
@@clientName(TlsCipherSuites.TLS_RSA_WITH_AES_128_GCM_SHA256,
  "TLS_RSA_WITH_AES128_GCM_SHA256",
  "python"
);
@@clientName(TlsCipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA256,
  "TLS_RSA_WITH_AES256_CBC_SHA256",
  "python"
);
@@clientName(TlsCipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA256,
  "TLS_RSA_WITH_AES128_CBC_SHA256",
  "python"
);
@@clientName(TlsCipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA,
  "TLS_RSA_WITH_AES256_CBC_SHA",
  "python"
);
@@clientName(TlsCipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA,
  "TLS_RSA_WITH_AES128_CBC_SHA",
  "python"
);

#suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-operation" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
op diagnosticsExecuteSiteAnalysisSlotCustomized(
  ...ApiVersionParameter,
  ...SubscriptionIdParameter,
  ...ResourceGroupParameter,
  ...Azure.ResourceManager.Legacy.Provider,

  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @path
  siteName: string,

  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @path
  diagnosticCategory: string,

  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @path
  analysisName: string,

  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @path
  slot: string,

  /**
   * Start Time
   */
  @query("startTime")
  startTime?: utcDateTime,

  /**
   * End Time
   */
  @query("endTime")
  endTime?: utcDateTime,

  /**
   * Time Grain
   */
  @pattern("PT[1-9][0-9]+[SMH]")
  @query("timeGrain")
  timeGrain?: string,

  @body
  body: void,
): ArmResponse<DiagnosticAnalysis>;

#suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-operation" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
op diagnosticsExecuteSiteDetectorCustomized(
  ...ApiVersionParameter,
  ...SubscriptionIdParameter,
  ...ResourceGroupParameter,
  ...Azure.ResourceManager.Legacy.Provider,

  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @path
  siteName: string,

  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @path
  detectorName: string,

  #suppress "@azure-tools/typespec-azure-core/documentation-required" "FIXME: Update justification, follow aka.ms/tsp/conversion-fix for details"
  @path
  diagnosticCategory: string,

  /**
   * Start Time
   */
  @query("startTime")
  startTime?: utcDateTime,

  /**
   * End Time
   */
  @query("endTime")
  endTime?: utcDateTime,

  /**
   * Time Grain
   */
  @pattern("PT[1-9][0-9]+[SMH]")
  @query("timeGrain")
  timeGrain?: string,

  @body
  body: void,
): ArmResponse<DiagnosticDetectorResponse>;
