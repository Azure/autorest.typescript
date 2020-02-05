import { XmlServiceClient } from "./generated/xmlservice/src/xmlServiceClient";
import { should } from "chai";

should();

describe("XML client", function() {
  let testClient = new XmlServiceClient();
  it("should correctly deserialize a simple XML document", async function() {
    const slideshow = await testClient.xml.getSimple();

    slideshow.author!.should!.equal("Yours Truly");
    slideshow.date!.should!.equal("Date of publication");

    slideshow.title!.should!.equal("Sample Slide Show");

    slideshow.slides!.length.should.equal(2);

    slideshow.slides![0].title!.should.equal("Wake up to WonderWidgets!");
    slideshow.slides![0].type!.should.equal("all");
    slideshow.slides![0].items!.length.should.equal(0);
    !slideshow.slides![1].title!.should.equal("Overview");
    slideshow.slides![1].type!.should.equal("all");
    slideshow.slides![1].items!.length.should.equal(3);
    slideshow.slides![1].items![0].should.equal("Why WonderWidgets are great");
    slideshow.slides![1].items![1].should.equal("");
    slideshow.slides![1].items![2].should.equal("Who buys WonderWidgets");
  });
});
