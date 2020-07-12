const request = require('supertest')
const app = require('../app')
describe('Post Endpoints', () => {
  it('should test that sending a post to /message works', async () => {
    const res = await request(app)
      .post('/message')
      .send({
        message: "this is a test",
      })
    expect(res.statusCode).toEqual(200);
  })
})