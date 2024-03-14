import "@azure-tools/typespec-client-generator-core";
import "./main.tsp";

using Azure.ClientGenerator.Core;

// Some models from routes with suppressed visibility are still desired for custom public surface.
@@access(WidgetService.NonReferencedModel, Access.public);
@@usage(WidgetService.NonReferencedModel, Usage.input | Usage.output);