import * as coreClient from "@azure/core-client";

export const MethodRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MethodRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: {
      serializedName: "methodName",
      clientName: "methodName"
    },
    modelProperties: {
      methodName: {
        serializedName: "methodName",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      apiVersion: {
        defaultValue: "2.0",
        isConstant: true,
        serializedName: "@apiVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphTopology: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphTopology",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "MediaGraphSystemData"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MediaGraphTopologyProperties"
        }
      }
    }
  }
};

export const MediaGraphSystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphSystemData",
    modelProperties: {
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const MediaGraphTopologyProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphTopologyProperties",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MediaGraphParameterDeclaration"
            }
          }
        }
      },
      sources: {
        serializedName: "sources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MediaGraphSource"
            }
          }
        }
      },
      processors: {
        serializedName: "processors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MediaGraphProcessor"
            }
          }
        }
      },
      sinks: {
        serializedName: "sinks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MediaGraphSink"
            }
          }
        }
      }
    }
  }
};

export const MediaGraphParameterDeclaration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphParameterDeclaration",
    modelProperties: {
      name: {
        constraints: {
          MaxLength: 64
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      default: {
        serializedName: "default",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphSource",
    uberParent: "MediaGraphSource",
    polymorphicDiscriminator: {
      serializedName: "@type",
      clientName: "@type"
    },
    modelProperties: {
      "@type": {
        serializedName: "@type",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphProcessor: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphProcessor",
    uberParent: "MediaGraphProcessor",
    polymorphicDiscriminator: {
      serializedName: "@type",
      clientName: "@type"
    },
    modelProperties: {
      "@type": {
        serializedName: "@type",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      inputs: {
        serializedName: "inputs",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MediaGraphNodeInput"
            }
          }
        }
      }
    }
  }
};

export const MediaGraphNodeInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphNodeInput",
    modelProperties: {
      nodeName: {
        serializedName: "nodeName",
        required: true,
        type: {
          name: "String"
        }
      },
      outputSelectors: {
        serializedName: "outputSelectors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MediaGraphOutputSelector"
            }
          }
        }
      }
    }
  }
};

export const MediaGraphOutputSelector: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphOutputSelector",
    modelProperties: {
      property: {
        serializedName: "property",
        type: {
          name: "String"
        }
      },
      operator: {
        serializedName: "operator",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphSink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphSink",
    uberParent: "MediaGraphSink",
    polymorphicDiscriminator: {
      serializedName: "@type",
      clientName: "@type"
    },
    modelProperties: {
      "@type": {
        serializedName: "@type",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      inputs: {
        serializedName: "inputs",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MediaGraphNodeInput"
            }
          }
        }
      }
    }
  }
};

export const MediaGraphInstance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphInstance",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "MediaGraphSystemData"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MediaGraphInstanceProperties"
        }
      }
    }
  }
};

export const MediaGraphInstanceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphInstanceProperties",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      topologyName: {
        serializedName: "topologyName",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MediaGraphParameterDefinition"
            }
          }
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphParameterDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphParameterDefinition",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphEndpoint",
    uberParent: "MediaGraphEndpoint",
    polymorphicDiscriminator: {
      serializedName: "@type",
      clientName: "@type"
    },
    modelProperties: {
      "@type": {
        serializedName: "@type",
        required: true,
        type: {
          name: "String"
        }
      },
      credentials: {
        serializedName: "credentials",
        type: {
          name: "Composite",
          className: "MediaGraphCredentials"
        }
      },
      url: {
        serializedName: "url",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphCredentials: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphCredentials",
    uberParent: "MediaGraphCredentials",
    polymorphicDiscriminator: {
      serializedName: "@type",
      clientName: "@type"
    },
    modelProperties: {
      "@type": {
        serializedName: "@type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphCertificateSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphCertificateSource",
    uberParent: "MediaGraphCertificateSource",
    polymorphicDiscriminator: {
      serializedName: "@type",
      clientName: "@type"
    },
    modelProperties: {
      "@type": {
        serializedName: "@type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphTlsValidationOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphTlsValidationOptions",
    modelProperties: {
      ignoreHostname: {
        serializedName: "ignoreHostname",
        type: {
          name: "String"
        }
      },
      ignoreSignature: {
        serializedName: "ignoreSignature",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphImage",
    modelProperties: {
      scale: {
        serializedName: "scale",
        type: {
          name: "Composite",
          className: "MediaGraphImageScale"
        }
      },
      format: {
        serializedName: "format",
        type: {
          name: "Composite",
          className: "MediaGraphImageFormat"
        }
      }
    }
  }
};

export const MediaGraphImageScale: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphImageScale",
    modelProperties: {
      mode: {
        serializedName: "mode",
        type: {
          name: "String"
        }
      },
      width: {
        serializedName: "width",
        type: {
          name: "String"
        }
      },
      height: {
        serializedName: "height",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphImageFormat: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphImageFormat",
  type: {
    name: "Composite",
    className: "MediaGraphImageFormat",
    uberParent: "MediaGraphImageFormat",
    polymorphicDiscriminator: {
      serializedName: "@type",
      clientName: "@type"
    },
    modelProperties: {
      "@type": {
        serializedName: "@type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphSamplingOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MediaGraphSamplingOptions",
    modelProperties: {
      skipSamplesWithoutAnnotation: {
        serializedName: "skipSamplesWithoutAnnotation",
        type: {
          name: "String"
        }
      },
      maximumSamplesPerSecond: {
        serializedName: "maximumSamplesPerSecond",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphGrpcExtensionDataTransfer: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphGrpcExtensionDataTransfer",
  type: {
    name: "Composite",
    className: "MediaGraphGrpcExtensionDataTransfer",
    modelProperties: {
      sharedMemorySizeMiB: {
        serializedName: "sharedMemorySizeMiB",
        type: {
          name: "String"
        }
      },
      mode: {
        serializedName: "mode",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphTopologySetRequest: coreClient.CompositeMapper = {
  serializedName: "GraphTopologySet",
  type: {
    name: "Composite",
    className: "MediaGraphTopologySetRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...MethodRequest.type.modelProperties,
      graph: {
        serializedName: "graph",
        type: {
          name: "Composite",
          className: "MediaGraphTopology"
        }
      }
    }
  }
};

export const MediaGraphTopologySetRequestBody: coreClient.CompositeMapper = {
  serializedName: "MediaGraphTopologySetRequestBody",
  type: {
    name: "Composite",
    className: "MediaGraphTopologySetRequestBody",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...MethodRequest.type.modelProperties,
      ...MediaGraphTopology.type.modelProperties
    }
  }
};

export const MediaGraphInstanceSetRequest: coreClient.CompositeMapper = {
  serializedName: "GraphInstanceSet",
  type: {
    name: "Composite",
    className: "MediaGraphInstanceSetRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...MethodRequest.type.modelProperties,
      instance: {
        serializedName: "instance",
        type: {
          name: "Composite",
          className: "MediaGraphInstance"
        }
      }
    }
  }
};

export const MediaGraphInstanceSetRequestBody: coreClient.CompositeMapper = {
  serializedName: "MediaGraphInstanceSetRequestBody",
  type: {
    name: "Composite",
    className: "MediaGraphInstanceSetRequestBody",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...MethodRequest.type.modelProperties,
      ...MediaGraphInstance.type.modelProperties
    }
  }
};

export const ItemNonSetRequestBase: coreClient.CompositeMapper = {
  serializedName: "ItemNonSetRequestBase",
  type: {
    name: "Composite",
    className: "ItemNonSetRequestBase",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: {
      serializedName: "methodName",
      clientName: "methodName"
    },
    modelProperties: {
      ...MethodRequest.type.modelProperties,
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphTopologyListRequest: coreClient.CompositeMapper = {
  serializedName: "GraphTopologyList",
  type: {
    name: "Composite",
    className: "MediaGraphTopologyListRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...MethodRequest.type.modelProperties
    }
  }
};

export const MediaGraphInstanceListRequest: coreClient.CompositeMapper = {
  serializedName: "GraphInstanceList",
  type: {
    name: "Composite",
    className: "MediaGraphInstanceListRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...MethodRequest.type.modelProperties
    }
  }
};

export const MediaGraphRtspSource: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphRtspSource",
  type: {
    name: "Composite",
    className: "MediaGraphRtspSource",
    uberParent: "MediaGraphSource",
    polymorphicDiscriminator: MediaGraphSource.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphSource.type.modelProperties,
      transport: {
        serializedName: "transport",
        type: {
          name: "String"
        }
      },
      endpoint: {
        serializedName: "endpoint",
        type: {
          name: "Composite",
          className: "MediaGraphEndpoint"
        }
      }
    }
  }
};

export const MediaGraphIoTHubMessageSource: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphIoTHubMessageSource",
  type: {
    name: "Composite",
    className: "MediaGraphIoTHubMessageSource",
    uberParent: "MediaGraphSource",
    polymorphicDiscriminator: MediaGraphSource.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphSource.type.modelProperties,
      hubInputName: {
        serializedName: "hubInputName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphMotionDetectionProcessor: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphMotionDetectionProcessor",
  type: {
    name: "Composite",
    className: "MediaGraphMotionDetectionProcessor",
    uberParent: "MediaGraphProcessor",
    polymorphicDiscriminator: MediaGraphProcessor.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphProcessor.type.modelProperties,
      sensitivity: {
        serializedName: "sensitivity",
        type: {
          name: "String"
        }
      },
      outputMotionRegion: {
        serializedName: "outputMotionRegion",
        type: {
          name: "Boolean"
        }
      },
      eventAggregationWindow: {
        serializedName: "eventAggregationWindow",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphExtensionProcessorBase: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphExtensionProcessorBase",
  type: {
    name: "Composite",
    className: "MediaGraphExtensionProcessorBase",
    uberParent: "MediaGraphProcessor",
    polymorphicDiscriminator: {
      serializedName: "@type",
      clientName: "@type"
    },
    modelProperties: {
      ...MediaGraphProcessor.type.modelProperties,
      endpoint: {
        serializedName: "endpoint",
        type: {
          name: "Composite",
          className: "MediaGraphEndpoint"
        }
      },
      image: {
        serializedName: "image",
        type: {
          name: "Composite",
          className: "MediaGraphImage"
        }
      },
      samplingOptions: {
        serializedName: "samplingOptions",
        type: {
          name: "Composite",
          className: "MediaGraphSamplingOptions"
        }
      }
    }
  }
};

export const MediaGraphSignalGateProcessor: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphSignalGateProcessor",
  type: {
    name: "Composite",
    className: "MediaGraphSignalGateProcessor",
    uberParent: "MediaGraphProcessor",
    polymorphicDiscriminator: MediaGraphProcessor.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphProcessor.type.modelProperties,
      activationEvaluationWindow: {
        serializedName: "activationEvaluationWindow",
        type: {
          name: "String"
        }
      },
      activationSignalOffset: {
        serializedName: "activationSignalOffset",
        type: {
          name: "String"
        }
      },
      minimumActivationTime: {
        serializedName: "minimumActivationTime",
        type: {
          name: "String"
        }
      },
      maximumActivationTime: {
        serializedName: "maximumActivationTime",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphIoTHubMessageSink: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphIoTHubMessageSink",
  type: {
    name: "Composite",
    className: "MediaGraphIoTHubMessageSink",
    uberParent: "MediaGraphSink",
    polymorphicDiscriminator: MediaGraphSink.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphSink.type.modelProperties,
      hubOutputName: {
        serializedName: "hubOutputName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphFileSink: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphFileSink",
  type: {
    name: "Composite",
    className: "MediaGraphFileSink",
    uberParent: "MediaGraphSink",
    polymorphicDiscriminator: MediaGraphSink.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphSink.type.modelProperties,
      baseDirectoryPath: {
        serializedName: "baseDirectoryPath",
        required: true,
        type: {
          name: "String"
        }
      },
      fileNamePattern: {
        serializedName: "fileNamePattern",
        required: true,
        type: {
          name: "String"
        }
      },
      maximumSizeMiB: {
        serializedName: "maximumSizeMiB",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphAssetSink: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphAssetSink",
  type: {
    name: "Composite",
    className: "MediaGraphAssetSink",
    uberParent: "MediaGraphSink",
    polymorphicDiscriminator: MediaGraphSink.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphSink.type.modelProperties,
      assetNamePattern: {
        serializedName: "assetNamePattern",
        required: true,
        type: {
          name: "String"
        }
      },
      segmentLength: {
        serializedName: "segmentLength",
        type: {
          name: "String"
        }
      },
      localMediaCachePath: {
        serializedName: "localMediaCachePath",
        required: true,
        type: {
          name: "String"
        }
      },
      localMediaCacheMaximumSizeMiB: {
        serializedName: "localMediaCacheMaximumSizeMiB",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphUnsecuredEndpoint: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphUnsecuredEndpoint",
  type: {
    name: "Composite",
    className: "MediaGraphUnsecuredEndpoint",
    uberParent: "MediaGraphEndpoint",
    polymorphicDiscriminator: MediaGraphEndpoint.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphEndpoint.type.modelProperties
    }
  }
};

export const MediaGraphTlsEndpoint: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphTlsEndpoint",
  type: {
    name: "Composite",
    className: "MediaGraphTlsEndpoint",
    uberParent: "MediaGraphEndpoint",
    polymorphicDiscriminator: MediaGraphEndpoint.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphEndpoint.type.modelProperties,
      trustedCertificates: {
        serializedName: "trustedCertificates",
        type: {
          name: "Composite",
          className: "MediaGraphCertificateSource"
        }
      },
      validationOptions: {
        serializedName: "validationOptions",
        type: {
          name: "Composite",
          className: "MediaGraphTlsValidationOptions"
        }
      }
    }
  }
};

export const MediaGraphUsernamePasswordCredentials: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphUsernamePasswordCredentials",
  type: {
    name: "Composite",
    className: "MediaGraphUsernamePasswordCredentials",
    uberParent: "MediaGraphCredentials",
    polymorphicDiscriminator:
      MediaGraphCredentials.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphCredentials.type.modelProperties,
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphHttpHeaderCredentials: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphHttpHeaderCredentials",
  type: {
    name: "Composite",
    className: "MediaGraphHttpHeaderCredentials",
    uberParent: "MediaGraphCredentials",
    polymorphicDiscriminator:
      MediaGraphCredentials.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphCredentials.type.modelProperties,
      headerName: {
        serializedName: "headerName",
        required: true,
        type: {
          name: "String"
        }
      },
      headerValue: {
        serializedName: "headerValue",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphPemCertificateList: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphPemCertificateList",
  type: {
    name: "Composite",
    className: "MediaGraphPemCertificateList",
    uberParent: "MediaGraphCertificateSource",
    polymorphicDiscriminator:
      MediaGraphCertificateSource.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphCertificateSource.type.modelProperties,
      certificates: {
        serializedName: "certificates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MediaGraphImageFormatRaw: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphImageFormatRaw",
  type: {
    name: "Composite",
    className: "MediaGraphImageFormatRaw",
    uberParent: "MediaGraphImageFormat",
    polymorphicDiscriminator:
      MediaGraphImageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphImageFormat.type.modelProperties,
      pixelFormat: {
        serializedName: "pixelFormat",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphImageFormatJpeg: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphImageFormatJpeg",
  type: {
    name: "Composite",
    className: "MediaGraphImageFormatJpeg",
    uberParent: "MediaGraphImageFormat",
    polymorphicDiscriminator:
      MediaGraphImageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphImageFormat.type.modelProperties,
      quality: {
        serializedName: "quality",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphImageFormatBmp: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphImageFormatBmp",
  type: {
    name: "Composite",
    className: "MediaGraphImageFormatBmp",
    uberParent: "MediaGraphImageFormat",
    polymorphicDiscriminator:
      MediaGraphImageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphImageFormat.type.modelProperties
    }
  }
};

export const MediaGraphImageFormatPng: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphImageFormatPng",
  type: {
    name: "Composite",
    className: "MediaGraphImageFormatPng",
    uberParent: "MediaGraphImageFormat",
    polymorphicDiscriminator:
      MediaGraphImageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphImageFormat.type.modelProperties
    }
  }
};

export const MediaGraphTopologyGetRequest: coreClient.CompositeMapper = {
  serializedName: "GraphTopologyGet",
  type: {
    name: "Composite",
    className: "MediaGraphTopologyGetRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...ItemNonSetRequestBase.type.modelProperties
    }
  }
};

export const MediaGraphTopologyDeleteRequest: coreClient.CompositeMapper = {
  serializedName: "GraphTopologyDelete",
  type: {
    name: "Composite",
    className: "MediaGraphTopologyDeleteRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...ItemNonSetRequestBase.type.modelProperties
    }
  }
};

export const MediaGraphInstanceGetRequest: coreClient.CompositeMapper = {
  serializedName: "GraphInstanceGet",
  type: {
    name: "Composite",
    className: "MediaGraphInstanceGetRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...ItemNonSetRequestBase.type.modelProperties
    }
  }
};

export const MediaGraphInstanceActivateRequest: coreClient.CompositeMapper = {
  serializedName: "GraphInstanceActivate",
  type: {
    name: "Composite",
    className: "MediaGraphInstanceActivateRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...ItemNonSetRequestBase.type.modelProperties
    }
  }
};

export const MediaGraphInstanceDeActivateRequest: coreClient.CompositeMapper = {
  serializedName: "GraphInstanceDeactivate",
  type: {
    name: "Composite",
    className: "MediaGraphInstanceDeActivateRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...ItemNonSetRequestBase.type.modelProperties
    }
  }
};

export const MediaGraphInstanceDeleteRequest: coreClient.CompositeMapper = {
  serializedName: "GraphInstanceDelete",
  type: {
    name: "Composite",
    className: "MediaGraphInstanceDeleteRequest",
    uberParent: "MethodRequest",
    polymorphicDiscriminator: MethodRequest.type.polymorphicDiscriminator,
    modelProperties: {
      ...ItemNonSetRequestBase.type.modelProperties
    }
  }
};

export const MediaGraphCognitiveServicesVisionExtension: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphCognitiveServicesVisionExtension",
  type: {
    name: "Composite",
    className: "MediaGraphCognitiveServicesVisionExtension",
    uberParent: "MediaGraphProcessor",
    polymorphicDiscriminator: MediaGraphProcessor.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphExtensionProcessorBase.type.modelProperties
    }
  }
};

export const MediaGraphGrpcExtension: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphGrpcExtension",
  type: {
    name: "Composite",
    className: "MediaGraphGrpcExtension",
    uberParent: "MediaGraphProcessor",
    polymorphicDiscriminator: MediaGraphProcessor.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphExtensionProcessorBase.type.modelProperties,
      dataTransfer: {
        serializedName: "dataTransfer",
        type: {
          name: "Composite",
          className: "MediaGraphGrpcExtensionDataTransfer"
        }
      },
      extensionConfiguration: {
        serializedName: "extensionConfiguration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaGraphHttpExtension: coreClient.CompositeMapper = {
  serializedName: "#Microsoft.Media.MediaGraphHttpExtension",
  type: {
    name: "Composite",
    className: "MediaGraphHttpExtension",
    uberParent: "MediaGraphProcessor",
    polymorphicDiscriminator: MediaGraphProcessor.type.polymorphicDiscriminator,
    modelProperties: {
      ...MediaGraphExtensionProcessorBase.type.modelProperties
    }
  }
};

export let discriminators = {
  MethodRequest: MethodRequest,
  MediaGraphSource: MediaGraphSource,
  MediaGraphProcessor: MediaGraphProcessor,
  MediaGraphSink: MediaGraphSink,
  MediaGraphEndpoint: MediaGraphEndpoint,
  MediaGraphCredentials: MediaGraphCredentials,
  MediaGraphCertificateSource: MediaGraphCertificateSource,
  MediaGraphImageFormat: MediaGraphImageFormat,
  "MethodRequest.GraphTopologySet": MediaGraphTopologySetRequest,
  "MethodRequest.MediaGraphTopologySetRequestBody": MediaGraphTopologySetRequestBody,
  "MethodRequest.GraphInstanceSet": MediaGraphInstanceSetRequest,
  "MethodRequest.MediaGraphInstanceSetRequestBody": MediaGraphInstanceSetRequestBody,
  "MethodRequest.ItemNonSetRequestBase": ItemNonSetRequestBase,
  "MethodRequest.GraphTopologyList": MediaGraphTopologyListRequest,
  "MethodRequest.GraphInstanceList": MediaGraphInstanceListRequest,
  "MediaGraphSource.#Microsoft.Media.MediaGraphRtspSource": MediaGraphRtspSource,
  "MediaGraphSource.#Microsoft.Media.MediaGraphIoTHubMessageSource": MediaGraphIoTHubMessageSource,
  "MediaGraphProcessor.#Microsoft.Media.MediaGraphMotionDetectionProcessor": MediaGraphMotionDetectionProcessor,
  "MediaGraphProcessor.#Microsoft.Media.MediaGraphExtensionProcessorBase": MediaGraphExtensionProcessorBase,
  "MediaGraphProcessor.#Microsoft.Media.MediaGraphSignalGateProcessor": MediaGraphSignalGateProcessor,
  "MediaGraphSink.#Microsoft.Media.MediaGraphIoTHubMessageSink": MediaGraphIoTHubMessageSink,
  "MediaGraphSink.#Microsoft.Media.MediaGraphFileSink": MediaGraphFileSink,
  "MediaGraphSink.#Microsoft.Media.MediaGraphAssetSink": MediaGraphAssetSink,
  "MediaGraphEndpoint.#Microsoft.Media.MediaGraphUnsecuredEndpoint": MediaGraphUnsecuredEndpoint,
  "MediaGraphEndpoint.#Microsoft.Media.MediaGraphTlsEndpoint": MediaGraphTlsEndpoint,
  "MediaGraphCredentials.#Microsoft.Media.MediaGraphUsernamePasswordCredentials": MediaGraphUsernamePasswordCredentials,
  "MediaGraphCredentials.#Microsoft.Media.MediaGraphHttpHeaderCredentials": MediaGraphHttpHeaderCredentials,
  "MediaGraphCertificateSource.#Microsoft.Media.MediaGraphPemCertificateList": MediaGraphPemCertificateList,
  "MediaGraphImageFormat.#Microsoft.Media.MediaGraphImageFormatRaw": MediaGraphImageFormatRaw,
  "MediaGraphImageFormat.#Microsoft.Media.MediaGraphImageFormatJpeg": MediaGraphImageFormatJpeg,
  "MediaGraphImageFormat.#Microsoft.Media.MediaGraphImageFormatBmp": MediaGraphImageFormatBmp,
  "MediaGraphImageFormat.#Microsoft.Media.MediaGraphImageFormatPng": MediaGraphImageFormatPng,
  "MethodRequest.GraphTopologyGet": MediaGraphTopologyGetRequest,
  "MethodRequest.GraphTopologyDelete": MediaGraphTopologyDeleteRequest,
  "MethodRequest.GraphInstanceGet": MediaGraphInstanceGetRequest,
  "MethodRequest.GraphInstanceActivate": MediaGraphInstanceActivateRequest,
  "MethodRequest.GraphInstanceDeactivate": MediaGraphInstanceDeActivateRequest,
  "MethodRequest.GraphInstanceDelete": MediaGraphInstanceDeleteRequest,
  "MediaGraphProcessor.#Microsoft.Media.MediaGraphCognitiveServicesVisionExtension": MediaGraphCognitiveServicesVisionExtension,
  "MediaGraphProcessor.#Microsoft.Media.MediaGraphGrpcExtension": MediaGraphGrpcExtension,
  "MediaGraphProcessor.#Microsoft.Media.MediaGraphHttpExtension": MediaGraphHttpExtension
};
