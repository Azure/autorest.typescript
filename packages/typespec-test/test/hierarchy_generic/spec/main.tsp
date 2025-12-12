import "@typespec/rest";
import "@typespec/http";

using TypeSpec.Rest;
using TypeSpec.Http;

@service(#{})
namespace Foo;

model A {
  prop1: string;
}

@route("b")
namespace B {
  model A {
    prop2: string;
  }
  @route("c")
  interface C {
    op1(@body body: A): void;
  }
  @route("e")
  namespace E {
    model A {
      prop3: string;
    }
    interface C {
      op1(@body body: A): void;
    }
  }
  op op1(@body body: A): void;
}

@route("/d")
interface D {
  op1(@body body: A): void;
}
op op1(@body body: A): void;

namespace Y {
  union ConnectorType {
    EventHubSource: "EventHubSource",
    IoTHubSource: "IoTHubSource",
    string,
  }
  @discriminator("connectorType")
  model DataSourceProperties {
    connectorType: ConnectorType;
  }
  namespace Dataverse {
    union DataverseEventPosition {
      Earliest: "Earliest",
      Latest: "Latest",
      string,
    }

    model DataverseSourceConnectorProperties extends DataSourceProperties {
      connectorType: ConnectorType.EventHubSource;
      startEventPosition: DataverseEventPosition;
    }
  }
  namespace DataverseV2 {
    union DataverseEventPosition {
      Earliest: "Earliest",
      Latest: "Latest",
      string,
    }

    model DataverseSourceConnectorV2Properties extends DataSourceProperties {
      connectorType: ConnectorType.IoTHubSource;
      startEventPosition: DataverseEventPosition;
    }
  }
  @route("/test")
  interface TestOperations {
    @get
    testDataverse(): {
      @body
      v1: Dataverse.DataverseSourceConnectorProperties;
    };

    @post
    testDataverseV2(): {
      @body
      v2: DataverseV2.DataverseSourceConnectorV2Properties;
    };
  }
}
