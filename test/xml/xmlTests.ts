import * as should from 'should';
import { AutoRestSwaggerBATXMLService, AutoRestSwaggerBATXMLServiceModels as models } from './generated/Xml/autoRestSwaggerBATXMLService';

const baseUri = 'http://localhost:3000';
const testClient = new AutoRestSwaggerBATXMLService(baseUri);

describe('typescript', function () {
  describe('XML client', function() {
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

  it('should correctly serialize a simple XML document', async function () {
    const slideshow: models.Slideshow = {
      author: 'Yours Truly',
      date: 'Date of publication',
      title: 'Sample Slide Show',
      slides: [
        { type: 'all', title: 'Wake up to WonderWidgets!' },
        {
          type: 'all',
          title: 'Overview',
          items: [
            'Why WonderWidgets are great',
            '',
            'Who buys WonderWidgets'
          ]
        }
      ]
    };

    await testClient.xml.putSimple(slideshow);
  });

  it('should correctly deserialize XML wrapped lists', async function () {
    const appleBarrel = await testClient.xml.getWrappedLists();

    should.exist(appleBarrel.goodApples);
    appleBarrel.goodApples.length.should.equal(2);
    appleBarrel.goodApples[0].should.equal('Fuji');
    appleBarrel.goodApples[1].should.equal('Gala');

    should.exist(appleBarrel.badApples);
    appleBarrel.badApples.length.should.equal(1);
    appleBarrel.badApples[0].should.equal('Red Delicious');
  });

  it('should correctly serialize XML wrapped lists', async function () {
    const appleBarrel: models.AppleBarrel = {
      goodApples: ['Fuji', 'Gala'],
      badApples: ['Red Delicious']
    };

    await testClient.xml.putWrappedLists(appleBarrel);
  });

  it('should correctly deserialize an empty XML list', async function () {
    const emptyList = await testClient.xml.getEmptyList();
    should.exist(emptyList);
    should.not.exist(emptyList.author);
    should.not.exist(emptyList.date);
    should.not.exist(emptyList.title);

    this.skip();
    // TODO: list properties should always be present even if there are no list elements
    should.exist(emptyList.slides);
    emptyList.slides.length.should.equal(0);
  });

  it('should correctly serialize an empty XML list', async function () {
    const emptyObject: models.Slideshow = {};
    await testClient.xml.putEmptyList(emptyObject);

    const emptyList: models.Slideshow = { slides: [] };
    await testClient.xml.putEmptyList(emptyList);
    });

    it('should correctly deserialize empty wrapped XML lists', async function () {
      const wrappedLists = await testClient.xml.getEmptyWrappedLists();
      should.exist(wrappedLists);

      should.exist(wrappedLists.goodApples);
      wrappedLists.goodApples.length.should.equal(0);

      should.exist(wrappedLists.badApples);
      wrappedLists.badApples.length.should.equal(0);
    });

    it('should correctly serialize empty wrapped XML lists', async function () {
      const wrappedLists: models.AppleBarrel = {
        goodApples: [],
        badApples: []
      };
      await testClient.xml.putEmptyWrappedLists(wrappedLists);
    });
  });
});