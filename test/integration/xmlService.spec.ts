// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { should } from "chai";
import { AbortController, AbortError } from "@azure/abort-controller";
import {
  XmlServiceClient,
  Slideshow,
  AppleBarrel,
  Banana,
  StorageServiceProperties,
  SignedIdentifier
} from "./generated/xmlservice/src";
import { responseStatusChecker } from "../utils/responseStatusChecker";
import {
  deserializationPolicy,
  deserializationPolicyName,
  serializationPolicy,
  serializationPolicyName
} from "@azure/core-client";
import { stringifyXML, parseXML } from "@azure/core-xml";

should();
const testClient = new XmlServiceClient({
  endpoint: "http://localhost:3000",
  allowInsecureConnection: true
});
testClient.pipeline.removePolicy({ name: serializationPolicyName });
testClient.pipeline.removePolicy({ name: deserializationPolicyName });
testClient.pipeline.addPolicy(
  serializationPolicy({
    stringifyXML
  }),
  {
    phase: "Serialize"
  }
);
testClient.pipeline.addPolicy(
  deserializationPolicy({
    parseXML
  }),
  {
    phase: "Deserialize"
  }
);

function getAbortController() {
  return new AbortController();
}

describe("typescript", function() {
  describe("XML client", function() {
    it("should handle getXMsText", async () => {
      const result = await testClient.xml.getXMsText();
      result.language?.should.be.equals("english");
      result.content?.should.be.equals("I am text");
    });

    it("should handle jsonInput", async () => {
      await testClient.xml.jsonInput({ id: 42 }, responseStatusChecker);
    });

    it("should handle getXMsText", async () => {
      const result = await testClient.xml.jsonOutput();
      result.id?.should.be.equals(42);
    });

    it("should be able to abort a simple XML get", async function() {
      const controller = getAbortController();
      const slideshowPromise = testClient.xml.getSimple({
        abortSignal: controller.signal
      });
      let error: AbortError | undefined;
      controller.abort();
      try {
        await slideshowPromise;
      } catch (err) {
        error = err;
      } finally {
        error!.name.should.be.equals("AbortError");
      }
    });

    it("should correctly deserialize a simple XML document", async function() {
      const slideshow = await testClient.xml.getSimple();
      slideshow.should.exist;

      slideshow.author!.should.equal("Yours Truly");
      slideshow.date!.should.equal("Date of publication");
      slideshow.title!.should.equal("Sample Slide Show");
      slideshow.slides!.length.should.equal(2);

      slideshow.slides![0].title!.should.equal("Wake up to WonderWidgets!");
      slideshow.slides![0].type!.should.equal("all");
      slideshow.slides![0].items!.length.should.equal(0);

      slideshow.slides![1].title!.should.equal("Overview");
      slideshow.slides![1].type!.should.equal("all");
      slideshow.slides![1].items!.length.should.equal(3);
      slideshow.slides![1].items![0].should.equal(
        "Why WonderWidgets are great"
      );
      slideshow.slides![1].items![1].should.equal("");
      slideshow.slides![1].items![2].should.equal("Who buys WonderWidgets");
    });

    it("should correctly serialize a simple XML document", async function() {
      const slideshow: Slideshow = {
        author: "Yours Truly",
        date: "Date of publication",
        title: "Sample Slide Show",
        slides: [
          { type: "all", title: "Wake up to WonderWidgets!" },
          {
            type: "all",
            title: "Overview",
            items: ["Why WonderWidgets are great", "", "Who buys WonderWidgets"]
          }
        ]
      };

      await testClient.xml.putSimple(slideshow);
    });

    it("should correctly deserialize XML wrapped lists", async function() {
      const appleBarrel = await testClient.xml.getWrappedLists();

      appleBarrel.goodApples!.length.should.equal(2);
      appleBarrel.goodApples![0].should.equal("Fuji");
      appleBarrel.goodApples![1].should.equal("Gala");

      appleBarrel.badApples!.length.should.equal(1);
      appleBarrel.badApples![0].should.equal("Red Delicious");
    });

    it("should correctly serialize XML wrapped lists", async function() {
      const appleBarrel: AppleBarrel = {
        goodApples: ["Fuji", "Gala"],
        badApples: ["Red Delicious"]
      };

      await testClient.xml.putWrappedLists(appleBarrel);
    });

    it("should correctly deserialize an empty XML list", async function() {
      const emptyList = await testClient.xml.getEmptyList();
      should().not.exist(emptyList.author);
      should().not.exist(emptyList.date);
      should().not.exist(emptyList.title);

      emptyList.slides!.length.should.equal(0);
    });

    it("should correctly serialize an empty XML list", async function() {
      const emptyObject: Slideshow = {};
      await testClient.xml.putEmptyList(emptyObject);

      const emptyList: Slideshow = { slides: [] };
      await testClient.xml.putEmptyList(emptyList);
    });

    it("should correctly deserialize empty wrapped XML lists", async function() {
      const wrappedLists = await testClient.xml.getEmptyWrappedLists();

      wrappedLists.goodApples!.length.should.equal(0);
      wrappedLists.badApples!.length.should.equal(0);
    });

    it("should correctly serialize empty wrapped XML lists", async function() {
      const wrappedLists: AppleBarrel = {
        goodApples: [],
        badApples: []
      };
      await testClient.xml.putEmptyWrappedLists(wrappedLists);
    });

    it("should correctly deserialize a root XML list", async function() {
      const rootList = await testClient.xml.getRootList();

      rootList.length.should.equal(2);

      rootList[0].name!.should.equal("Cavendish");
      rootList[0].flavor!.should.equal("Sweet");
      rootList[0]
        .expiration!.valueOf()
        .should.equal(new Date("2018-02-28T00:40:00.123Z").valueOf());

      rootList[1].name!.should.equal("Plantain");
      rootList[1].flavor!.should.equal("Savory");
      rootList[1]
        .expiration!.valueOf()
        .should.equal(new Date("2018-02-28T00:40:00.123Z").valueOf());
    });

    it("should correctly serialize a root XML list", async function() {
      const rootList: Banana[] = [
        {
          name: "Cavendish",
          flavor: "Sweet",
          expiration: new Date("2018-02-28T00:40:00.123Z")
        },
        {
          name: "Plantain",
          flavor: "Savory",
          expiration: new Date("2018-02-28T00:40:00.123Z")
        }
      ];

      await testClient.xml.putRootList(rootList);
    });

    it("should correctly deserialize a root XML list of one element", async function() {
      const rootList = await testClient.xml.getRootListSingleItem();

      rootList.length.should.equal(1);

      rootList[0].name!.should.equal("Cavendish");
      rootList[0].flavor!.should.equal("Sweet");

      rootList[0]
        .expiration!.valueOf()
        .should.equal(new Date("2018-02-28T00:40:00.123Z").valueOf());
    });

    it("should correctly serialize a root XML list of one element", async function() {
      const rootList: Banana[] = [
        {
          name: "Cavendish",
          flavor: "Sweet",
          expiration: new Date("2018-02-28T00:40:00.123Z")
        }
      ];

      await testClient.xml.putRootListSingleItem(rootList);
    });

    it("should correctly deserialize an empty root XML list", async function() {
      const rootList = await testClient.xml.getEmptyRootList();
      rootList.length.should.equal(0);
    });

    it("should correctly serialize an empty root XML list", async function() {
      await testClient.xml.putEmptyRootList([]);
    });

    it("should correctly deserialize an XML document with an empty child element", async function() {
      const banana = await testClient.xml.getEmptyChildElement();
      banana.name!.should.equal("Unknown Banana");
      banana.flavor!.should.equal("");
      banana
        .expiration!.valueOf()
        .should.equal(new Date("2012-02-24T00:53:52.789Z").valueOf());
    });

    it("should correctly serialize an XML document with an empty child element", async function() {
      const banana: Banana = {
        name: "Unknown Banana",
        flavor: "",
        expiration: new Date("2012-02-24T00:53:52.789Z")
      };
      await testClient.xml.putEmptyChildElement(banana);
    });

    it("should get a complex type ref with no XML metadata", async function() {
      const result = await testClient.xml.getComplexTypeRefNoMeta();
      result.refToModel!.id!.should.equal("myid");
      result.something!.should.equal("else");
    });

    it("should put a complex type ref with no XML metadata", async function() {
      const arg = {
        refToModel: {
          id: "myid"
        },
        something: "else"
      };
      await testClient.xml.putComplexTypeRefNoMeta(arg);
    });

    it("should get a complex type ref with XML metadata", async function() {
      const result = await testClient.xml.getComplexTypeRefWithMeta();
      result.refToModel!.id!.should.equal("myid");
      result.something!.should.equal("else");
    });

    it("should put a complex type ref with XML metadata", async function() {
      const arg = {
        refToModel: {
          id: "myid"
        },
        something: "else"
      };
      await testClient.xml.putComplexTypeRefWithMeta(arg);
    });

    it("should list containers in a storage account", async function() {
      const listContainersResponse = await testClient.xml.listContainers();

      listContainersResponse.serviceEndpoint.should.equal(
        "https://myaccount.blob.core.windows.net/"
      );

      listContainersResponse.maxResults.should.equal(3);
      should().not.exist(listContainersResponse.marker);
      listContainersResponse.nextMarker.should.equal("video");
      should().not.exist(listContainersResponse.prefix);

      listContainersResponse.containers!.should.exist;
      listContainersResponse.containers!.length.should.equal(3);

      listContainersResponse.containers![0].name.should.equal("audio");
      listContainersResponse.containers![0].properties.etag.should.equal(
        "0x8CACB9BD7C6B1B2"
      );
      listContainersResponse
        .containers![0].properties.lastModified.valueOf()
        .should.equal(new Date("Wed, 26 Oct 2016 20:39:39 GMT").valueOf());
      listContainersResponse.containers![0].properties.publicAccess!.should.equal(
        "container"
      );

      listContainersResponse.containers![1].name.should.equal("images");
      listContainersResponse.containers![1].properties.etag.should.equal(
        "0x8CACB9BD7C1EEEC"
      );
      listContainersResponse
        .containers![1].properties.lastModified.valueOf()
        .should.equal(new Date("Wed, 26 Oct 2016 20:39:39 GMT").valueOf());
      should().not.exist(
        listContainersResponse.containers![1].properties.publicAccess
      );

      listContainersResponse.containers![2].name.should.equal("textfiles");
      listContainersResponse.containers![2].properties.etag.should.equal(
        "0x8CACB9BD7BACAC3"
      );
      listContainersResponse
        .containers![2].properties.lastModified.valueOf()
        .should.equal(new Date("Wed, 26 Oct 2016 20:39:39 GMT").valueOf());
      should().not.exist(
        listContainersResponse.containers![2].properties.publicAccess
      );
    });

    it("should get service properties in a storage account", async function() {
      const serviceProperties = await testClient.xml.getServiceProperties();

      serviceProperties.logging!.version.should.equal("1.0");
      serviceProperties.logging!.delete.should.equal(true);
      serviceProperties.logging!.read.should.equal(false);
      serviceProperties.logging!.write.should.equal(true);
      serviceProperties.logging!.retentionPolicy.enabled.should.equal(true);
      serviceProperties.logging!.retentionPolicy.days!.should.equal(7);

      serviceProperties.hourMetrics!.version!.should.equal("1.0");
      serviceProperties.hourMetrics!.enabled.should.equal(true);
      serviceProperties.hourMetrics!.includeAPIs!.should.equal(false);
      serviceProperties.hourMetrics!.retentionPolicy!.enabled.should.equal(
        true
      );
      serviceProperties.hourMetrics!.retentionPolicy!.days!.should.equal(7);

      serviceProperties.minuteMetrics!.version!.should.equal("1.0");
      serviceProperties.minuteMetrics!.enabled.should.equal(true);
      serviceProperties.minuteMetrics!.includeAPIs!.should.equal(true);
      serviceProperties.minuteMetrics!.retentionPolicy!.enabled.should.equal(
        true
      );
      serviceProperties.minuteMetrics!.retentionPolicy!.days!.should.equal(7);
    });

    it("should put service properties in a storage account", async function() {
      const serviceProperties: StorageServiceProperties = {
        logging: {
          version: "1.0",
          delete: true,
          read: false,
          write: true,
          retentionPolicy: {
            enabled: true,
            days: 7
          }
        },
        hourMetrics: {
          version: "1.0",
          enabled: true,
          includeAPIs: false,
          retentionPolicy: {
            enabled: true,
            days: 7
          }
        },
        minuteMetrics: {
          version: "1.0",
          enabled: true,
          includeAPIs: true,
          retentionPolicy: {
            enabled: true,
            days: 7
          }
        }
      };

      await testClient.xml.putServiceProperties(serviceProperties);
    });

    it("should get storage ACLs for a container", async function() {
      const acls = await testClient.xml.getAcls();
      acls.length.should.equal(1);
      acls[0].id.should.equal("MTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTI=");
      acls[0].accessPolicy.permission.should.equal("rwd");
      acls[0].accessPolicy.start
        .valueOf()
        .should.equal(new Date("2009-09-28T08:49:37.123Z").valueOf());
      acls[0].accessPolicy.expiry
        .valueOf()
        .should.equal(new Date("2009-09-29T08:49:37.123Z").valueOf());
    });

    it("should put storage ACLs for a container", async function() {
      const acls: SignedIdentifier[] = [
        {
          id: "MTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTI=",
          accessPolicy: {
            permission: "rwd",
            start: new Date("2009-09-28T08:49:37.123Z"),
            expiry: new Date("2009-09-29T08:49:37.123Z")
          }
        }
      ];

      await testClient.xml.putAcls(acls);
    });

    it("should list blobs in a container", async function() {
      const listBlobsResponse = await testClient.xml.listBlobs();
      listBlobsResponse.containerName.should.equal(
        "https://myaccount.blob.core.windows.net/mycontainer"
      );
      listBlobsResponse.nextMarker.should.equal("");
      should().not.exist(listBlobsResponse.maxResults);
      should().not.exist(listBlobsResponse.delimiter);
      should().not.exist(listBlobsResponse.marker);
      should().not.exist(listBlobsResponse.prefix);
      should().not.exist(listBlobsResponse.serviceEndpoint);

      listBlobsResponse.blobs.blob!.length.should.equal(5);

      listBlobsResponse.blobs.blob![0].name.should.equal("blob1.txt");
      should().not.exist(listBlobsResponse.blobs.blob![0].deleted);
      should().not.exist(listBlobsResponse.blobs.blob![0].snapshot);
      listBlobsResponse.blobs.blob![0].metadata!.Color.should.equal("blue");
      listBlobsResponse.blobs.blob![0].metadata!.BlobNumber.should.equal("01");
      listBlobsResponse.blobs.blob![0].metadata!.SomeMetadataName.should.equal(
        "SomeMetadataValue"
      );
      listBlobsResponse.blobs
        .blob![0].properties.lastModified.valueOf()
        .should.equal(new Date("2009-09-09T09:20:02.000Z").valueOf());
      listBlobsResponse.blobs.blob![0].properties.contentLength!.should.equal(
        100
      );
      listBlobsResponse.blobs.blob![0].properties.etag.should.equal(
        "0x8CBFF45D8A29A19"
      );

      listBlobsResponse.blobs.blob![1].snapshot.should.equal(
        "2009-09-09T09:20:03.0427659Z"
      );
    });

    // TODO: Need to support response headers. Issue #512
    it("should deserialize custom headers in an XML client", async function() {
      const headersResponse = await testClient.xml.getHeaders();
      headersResponse.customHeader!.should.equal("custom-value");
    });
  });
});
