
const request = require('supertest')
const app = require('../app')

/*
* Testing the intent endpoint to validate the Wit client is working.
* A test intent exist in the app for this purpose
*/
describe('Post Endpoints', () => {
  it('should test that sending a post to /intent works and reaches Wit.ai', async () => {
    const res = await request(app)
      .post('/message/intent')
      .send({
        message: "this is a test",
      })
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].name).toEqual("test");
  })
})
