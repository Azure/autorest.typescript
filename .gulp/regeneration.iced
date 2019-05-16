
###############################################
# LEGACY
# Instead: have bunch of configuration files sitting in a well-known spot, discover them, feed them to AutoRest, done.

regenExpected = (opts,done) ->
  outputDir = if !!opts.outputBaseDir then "#{opts.outputBaseDir}/#{opts.outputDir}" else opts.outputDir
  keys = Object.getOwnPropertyNames(opts.mappings)
  instances = keys.length

  for kkey in keys
    optsMappingsValue = opts.mappings[kkey]
    key = kkey.trim();

    swaggerFiles = (if optsMappingsValue instanceof Array then optsMappingsValue[0] else optsMappingsValue).split(";")
    args = [
      "--#{opts.language}",
      "--clear-output-folder",
      "--output-folder=#{outputDir}/#{key}",
      "--license-header=#{if !!opts.header then opts.header else 'MICROSOFT_MIT_NO_VERSION'}",
      "--source-code-folder-path=#{opts.sourceCodeFolderPath ? "''"}"
    ]

    for swaggerFile in swaggerFiles
      args.push("--input-file=#{if !!opts.inputBaseDir then "#{opts.inputBaseDir}/#{swaggerFile}" else swaggerFile}")

    if (opts.addCredentials)
      args.push("--#{opts.language}.add-credentials=true")

    if (opts.azureArm)
      args.push("--#{opts.language}.azure-arm=true")

    if (opts.fluent)
      args.push("--#{opts.language}.fluent=true")

    if (opts.syncMethods)
      args.push("--#{opts.language}.sync-methods=#{opts.syncMethods}")

    if (opts.flatteningThreshold)
      args.push("--#{opts.language}.payload-flattening-threshold=#{opts.flatteningThreshold}")

    if (opts.enableXML)
      args.push("--enable-xml")

    if (opts.enumTypes)
      args.push("--enum-types=true")

    if (opts.modelDateAsString)
      args.push("--model-date-time-as-string=true")

    if (opts.optionalResponseHeaders)
      args.push("--optional-response-headers=true")

    if (opts.generateMetadata)
      args.push("--generate-metadata=true")

    if (opts.generateLicenseTxt != undefined)
      args.push("--generate-license-txt=#{opts.generateLicenseTxt}")

    if (opts.test)
      args.push("--test=#{opts.test}")

    if (opts.testDependencies)
      args.push("--test-dependencies=#{opts.testDependencies}")

    if (opts.clientSideValidation == false)
      args.push("--client-side-validation=false")

    if (opts.skipSubtypes != undefined && opts.skipSubtypes.length > 0)
      args.push("--skip-subtypes=#{opts.skipSubtypes}")

    if (opts.customServiceClientOptions != undefined && opts.customServiceClientOptions.length > 0)
      args.push("--custom-service-client-options=#{opts.customServiceClientOptions}")

    if (!!opts.nsPrefix)
      if (optsMappingsValue instanceof Array && optsMappingsValue[1] != undefined)
        args.push("--#{opts.language}.namespace=#{optsMappingsValue[1]}")
      else
        args.push("--#{opts.language}.namespace=#{[opts.nsPrefix, key.replace(/\/|\./, '')].join('.')}")

    if (opts['override-info.version'])
      args.push("--override-info.version=#{opts['override-info.version']}")
    if (opts['override-info.title'])
      args.push("--override-info.title=#{opts['override-info.title']}")
    if (opts['override-info.description'])
      args.push("--override-info.description=#{opts['override-info.description']}")

    autorest args,() =>
      instances--
      return done() if instances is 0

defaultMappings = {
  'ParameterFlattening': 'parameter-flattening.json',
  'BodyArray': 'body-array.json',
  'BodyBoolean': 'body-boolean.json',
  'BodyByte': 'body-byte.json',
  'BodyComplex': 'body-complex.json',
  'BodyDate': 'body-date.json',
  'BodyDateTime': 'body-datetime.json',
  'BodyDateTimeRfc1123': 'body-datetime-rfc1123.json',
  'BodyDuration': 'body-duration.json',
  'BodyDictionary': 'body-dictionary.json',
  'BodyFile': 'body-file.json',
  'BodyFormData': 'body-formdata.json',
  'BodyInteger': 'body-integer.json',
  'BodyNumber': 'body-number.json',
  'BodyString': 'body-string.json',
  'Header': 'header.json',
  'Http': 'httpInfrastructure.json',
  'Report': 'report.json',
  'RequiredOptional': 'required-optional.json',
  'Url': 'url.json',
  'Validation': 'validation.json',
  'CustomBaseUri': 'custom-baseUrl.json',
  'CustomBaseUriMoreOptions': 'custom-baseUrl-more-options.json',
  'ModelFlattening': 'model-flattening.json',
  'UrlMultiCollectionFormat': 'url-multi-collectionFormat.json',
  'AdditionalProperties': 'additionalProperties.json',
  'ExtensibleEnum': 'extensible-enums-swagger.json',
  'XMSErrorResponses': 'xms-error-responses.json';
}

defaultAzureMappings = {
  'Lro': 'lro.json',
  'Paging': 'paging.json',
  'AzureReport': 'azure-report.json',
  'AzureParameterGrouping': 'azure-parameter-grouping.json',
  'AzureResource': 'azure-resource.json',
  'Head': 'head.json',
  'HeadExceptions': 'head-exceptions.json',
  'SubscriptionIdApiVersion': 'subscriptionId-apiVersion.json',
  'AzureSpecials': 'azure-special-properties.json',
  'CustomBaseUri': 'custom-baseUrl.json'
}

xmlMappings = {
  'Xml': 'xml-service.json'
}

compositeMappings = {
  'CompositeBoolIntClient': 'body-boolean.json;body-integer.json'
}

azureCompositeMappings = {
  'AzureCompositeModelClient': 'complex-model.json;body-complex.json'
}

tsAzureMappings = {
  'StorageManagementClient': 'storage.json'
}

tsMappings = {
  'ComplexModelClient': 'complex-model.json'
}

enumTypesMappings = {
  'BodyString': 'body-string.json'
}

dateTimeAsStringMappings = {
  'BodyDate': 'body-date.json',
  'BodyDateTime': 'body-datetime.json',
  'BodyDateTimeRfc1123': 'body-datetime-rfc1123.json',
}

optionalResponseHeadersMappings = {
  'Header': 'header.json'
}

metadataMappings = {
  'BodyComplex': 'body-complex.json',
}

azureMetadataMappings = {
  'Lro': 'lro.json',
}

renameParameterMappings = {
  'lib': 'rename-parameter.json'
}

noClientValidationMappings = {
  'Validation': 'validation.json'
}

skipSubtypesMappings = {
  'BodyComplex': 'body-complex.json'
}

swaggerDir = "node_modules/@microsoft.azure/autorest.testserver/swagger"

task 'regenerate-tscomposite', '', (done) ->
  regenExpected {
    'outputBaseDir': 'test/vanilla',
    'inputBaseDir': swaggerDir,
    'mappings': compositeMappings,
    'modeler': 'CompositeSwagger',
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1',
    'override-info.title': "Composite Bool Int",
    'override-info.description': "Composite Swagger Client that represents merging body boolean and body integer swagger clients"
    'generateLicenseTxt': true
  },done
  return null

task 'regenerate-tsazurecomposite', '', (done) ->
  regenExpected {
    'outputBaseDir': 'test/azure',
    'inputBaseDir': swaggerDir,
    'mappings': azureCompositeMappings,
    'modeler': 'CompositeSwagger',
    'outputDir': 'generated',
    'language': 'typescript',
    'azureArm': true,
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1',
    'override-info.version': "1.0.0",
    'override-info.title': "Azure Composite Model",
    'override-info.description': "Composite Swagger Client that represents merging body complex and complex model swagger clients"
  },done
  return null

task 'regenerate-tsazure-multiapi', '', [], (done) ->
  autorest ["#{basefolder}/test/multiapi", "--testserver-dir=./#{swaggerDir}"], () =>
    done()

task 'regenerate-tsazure', '', ['regenerate-tsazurecomposite', 'regenerate-tsazure-metadata', 'regenerate-tsazure-multiapi'], (done) ->
  for p of defaultAzureMappings
    tsAzureMappings[p] = defaultAzureMappings[p]
  regenExpected {
    'outputBaseDir': 'test/azure',
    'inputBaseDir': swaggerDir,
    'mappings': tsAzureMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'azureArm': true,
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1'
  },done
  return null

task 'regenerate-tsxml', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/xml'
    'inputBaseDir': swaggerDir,
    'mappings': xmlMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'enableXML': true
  },done
  return null

task 'regenerate-ts-enum-types', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/enumtypes',
    'inputBaseDir': swaggerDir,
    'mappings': enumTypesMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1',
    'enumTypes': true
  },done
  return null

task 'regenerate-ts-date-time-as-string', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/date-time-as-string',
    'inputBaseDir': swaggerDir,
    'mappings': dateTimeAsStringMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1',
    'modelDateAsString': true
  },done
  return null

task 'regenerate-ts-optional-response-headers', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/optional-response-headers',
    'inputBaseDir': swaggerDir,
    'mappings': optionalResponseHeadersMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1',
    'optionalResponseHeaders': true
  },done
  return null

task 'regenerate-ts-no-client-validation', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/no-client-validation',
    'inputBaseDir': swaggerDir,
    'mappings': noClientValidationMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1',
    'clientSideValidation': false
  },done
  return null

task 'regenerate-ts-metadata', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/metadata',
    'inputBaseDir': swaggerDir,
    'mappings': metadataMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1',
    'generateMetadata': true,
    'generateLicenseTxt': false,
    'sourceCodeFolderPath': 'src'
  },done
  return null

task 'regenerate-tsazure-metadata', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/azuremetadata',
    'inputBaseDir': swaggerDir,
    'mappings': azureMetadataMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1',
    'azureArm': true,
    'generateMetadata': true,
    'sourceCodeFolderPath': 'src'
  },done
  return null

task 'regenerate-ts-rename-parameter', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/rename-parameter',
    'inputBaseDir': 'test/rename-parameter',
    'mappings': renameParameterMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1'
  },done
  return null

task 'regenerate-ts-skip-subtypes', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/skip-subtypes',
    'inputBaseDir': swaggerDir,
    'mappings': skipSubtypesMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'generateMetadata': true,
    'sourceCodeFolderPath': 'src',
    'skipSubtypes': '[Fish]'
  },done
  return null

task 'regenerate-ts-custom-service-client-options', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/custom-service-client-options',
    'inputBaseDir': swaggerDir,
    'mappings': xmlMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'generateMetadata': true,
    'sourceCodeFolderPath': 'src',
    'customServiceClientOptions': '[noRetryPolicy=true,userAgentHeaderName=\'My-Header-Key\']'
  },done
  return null

task 'regenerate-ts-tests-mocha', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/unit-tests-mocha',
    'inputBaseDir': swaggerDir,
    'mappings': enumTypesMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'generateMetadata': true,
    'sourceCodeFolderPath': 'src',
    'test': true
  },done
  return null

task 'regenerate-ts-tests-custom', '', [], (done) ->
  regenExpected {
    'outputBaseDir': 'test/unit-tests-custom',
    'inputBaseDir': swaggerDir,
    'mappings': enumTypesMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'generateMetadata': true,
    'sourceCodeFolderPath': 'src',
    'test': 'echo \"skipped\"',
    'testDependencies': 'nock@1.0.0, jest@2.0.0; @azure/ms-rest-js@3.0.0'
  },done
  return null

tsTasks = [
  'regenerate-tscomposite',
  'regenerate-tsxml',
  'regenerate-ts-enum-types',
  'regenerate-ts-metadata',
  'regenerate-ts-no-client-validation',
  'regenerate-ts-date-time-as-string',
  'regenerate-ts-optional-response-headers',
  'regenerate-ts-rename-parameter',
  'regenerate-ts-skip-subtypes',
  'regenerate-ts-custom-service-client-options',
  'regenerate-ts-tests-mocha',
  'regenerate-ts-tests-custom'
]

task 'regenerate-ts', '', tsTasks, (done) ->
  for p of defaultMappings
    tsMappings[p] = defaultMappings[p]
  regenExpected {
    'outputBaseDir': 'test/vanilla',
    'inputBaseDir': swaggerDir,
    'mappings': tsMappings,
    'outputDir': 'generated',
    'language': 'typescript',
    'nsPrefix': 'Fixtures',
    'flatteningThreshold': '1'
  },done
  return null

task 'regenerate', "regenerate expected code for tests", ['regenerate-ts', 'regenerate-tsazure'], (done) ->
  done();
