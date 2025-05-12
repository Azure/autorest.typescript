import "@azure-tools/typespec-client-generator-core";
import "@typespec/rest";
import "@typespec/http";
import "@typespec/versioning";
import "./main.tsp";

using Azure.ClientGenerator.Core;
using Microsoft.Help;

@@clientName(TroubleshooterResources.continue,
  "TroubleshooterResourcesContinue",
  "javascript"
);
