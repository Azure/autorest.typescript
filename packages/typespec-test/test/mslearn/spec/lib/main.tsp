import "@typespec/http";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

// import "../dist/decorators.js";

import "./decorators.tsp";
import "./operations.tsp";
import "./enums.tsp";
import "./models.tsp";

using TypeSpec.Versioning;

@versioned(Microsoft.Learn.Versions)
namespace Microsoft.Learn;
