import "@azure-tools/typespec-client-generator-core";
import "./main.tsp";

using Azure.ClientGenerator.Core;
namespace Microsoft.NetworkAnalytics;

// optional properties
#suppress "@azure-tools/typespec-azure-core/no-legacy-usage" "@flattenProperty decorator is not recommended to use."
@@Azure.ClientGenerator.Core.Legacy.flattenProperty(DataProduct.properties);

// required properties
// @@Azure.ClientGenerator.Core.Legacy.flattenProperty(DataProductNetworkAcls.properties
// );
