import * as should from 'should';
import { AutoRestSwaggerBATXMLService } from './generated/Xml/autoRestSwaggerBATXMLService';

const baseUri = 'http://localhost:3000';
const testClient = new AutoRestSwaggerBATXMLService(baseUri);

describe('typescript', function () {
  it('should correctly deserialize a simple XML document', async function () {
    const slideshow = await testClient.xml.getSimple();
    should.exist(slideshow);

    should.exist(slideshow.author);
    slideshow.author.should.equal('Yours Truly');

    should.exist(slideshow.date);
    slideshow.date.should.equal('Date of publication');

    should.exist(slideshow.title);
    slideshow.title.should.equal('Sample Slide Show');

    should.exist(slideshow.slides);
    slideshow.slides.length.should.equal(2);

    slideshow.slides[0].title.should.equal('Wake up to WonderWidgets!');
    slideshow.slides[0].type.should.equal('all');
    should.not.exist(slideshow.slides[0].items);

    slideshow.slides[1].title.should.equal('Overview');
    slideshow.slides[1].type.should.equal('all');
    slideshow.slides[1].items.length.should.equal(3);
    slideshow.slides[1].items[0].should.equal('Why WonderWidgets are great');
    slideshow.slides[1].items[1].should.equal('');
    slideshow.slides[1].items[2].should.equal('Who buys WonderWidgets');
  });
});