const { practiceSpecs, bookSpecs } = require('../../specs');
const pactum = require('pactum');

pactum.request.setBaseUrl("https://demoqa.com");

describe('Get All Books', () => {
  it('should return a 200 status code', async () => {
    await pactum.spec(bookSpecs.getBooks, { status: 200 })
  });
});