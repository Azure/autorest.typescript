import "./main.tsp";
import "@azure-tools/typespec-client-generator-core";

using Azure.ClientGenerator.Core;

@@access( Azure.Contoso.WidgetManager.MyModel, Access.public);
@@usage( Azure.Contoso.WidgetManager.MyModel, Usage.input);