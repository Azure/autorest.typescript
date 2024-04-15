import "@azure-tools/typespec-client-generator-core";
import "@typespec/versioning";

import "./main.tsp";

using Azure.ClientGenerator.Core;

// Models
@@usage(Microsoft.NetworkAnalytics.Bypass,
  Usage.input 
);
@@access(Microsoft.NetworkAnalytics.Bypass,
  Access.public
);
@@usage(Microsoft.NetworkAnalytics.Versions,
  Usage.input 
);
@@access(Microsoft.NetworkAnalytics.Versions,
  Access.public
);
@@usage(Microsoft.NetworkAnalytics.ResourceAccessRules,
  Usage.input 
);
@@access(Microsoft.NetworkAnalytics.ResourceAccessRules,
  Access.public
);
