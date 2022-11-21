# <img align="center" src="../images/logo.png">  Tracing

Our generated code natively [`OpenCensus`][open_census] and [`OpenTelemetry`][open_telemetry]. To do so, generate with flag `--trace` (see our [flag index][flag_index] for more information).
By default, all libraries log with a NoOpTracer that takes no action. To change this, you have to use setTracer to set a new default Tracer.

To trace, make sure you install [our tracing library][tracing_library]:

```
npm install @azure/core-tracing
```

## OpenCensus

Our generated SDKs handle retrieving context for you, so there's no need to pass in any context. Additionally, the
OpenCensus threading plugin is included when installing this package.

Since there is no explicit context you need to pass, you can create your usual OpenCensus tracer and call the generated SDKs.
The following example uses the [Zipkin][zipkin] exporter.

```js
import tracing from "@opencensus/nodejs");
import { ZipkinTraceExporter } from "@opencensus/exporter-zipkin";
import {
  setTracer,
  OpenCensusTracerWrapper,
  OpenCensusSpanWrapper
} from "@azure/core-tracing";

const tracer = tracing.start({ samplingRate: 1 }).tracer;

tracer.registerSpanEventListener(
  new ZipkinTraceExporter({
    serviceName: "azure-tracing-sample",
    bufferTimeout: 2
  })
);
setTracer(new OpenCensusTracerWrapper(tracer));
tracer.startRootSpan({ name: "root" }, async (rootSpanEx) => {
  const rootSpan = new OpenCensusSpanWrapper(rootSpanEx);
  // Call some client library methods and pass rootSpan via tracingOptions.
  rootSpanEx.end(); // rootSpan.end() should work as well
});
```

## OpenTelemetry

First step is to install our [`OpenTelemetry` library][our_open_telemetry_library]:

```bash
npm install --save @azure/core-tracing
```

Since there is no explicit context you need to pass, you can create your usual OpenTelemetry tracer and call the generated SDKs.
The following example uses the [Zipkin][zipkin] exporter.
```js
import opentelemetry from "@opentelemetry/core";
import { BasicTracer, SimpleSpanProcessor } from "@opentelemetry/tracing";
import { ZipkinExporter } = from "@opentelemetry/exporter-zipkin";
import { setTracer } from "@azure/core-tracing";

const exporter = new ZipkinExporter({
  serviceName: "azure-tracing-sample"
});
const tracer = new BasicTracer();
tracer.addSpanProcessor(new SimpleSpanProcessor(exporter));

opentelemetry.initGlobalTracer(tracer);

const rootSpan = opentelemetry.getTracer().startSpan("root");

// Call some client library methods and pass rootSpan via tracingOptions.

rootSpan.end();
exporter.shutdown();
```

<!-- LINKS -->
[open_census]: https://opencensus.io/
[open_telemetry]: https://opentelemetry.io/
[flag_index]: https://github.com/Azure/autorest/tree/main/docs/generate/flags.md
[tracing_library]: https://www.npmjs.com/package/@azure/core-tracing
[azure_monitor]: https://pypi.org/project/opentelemetry-azure-monitor/
[zipkin]: https://zipkin.io/
[our_open_telemetry_library]: https://pypi.org/project/azure-core-tracing-opentelemetry/
