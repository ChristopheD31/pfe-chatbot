describe('Sample Test', () => {
  it('should test that true === true', () => {
      expect(true).toBe(true)
  })
})

// *** REQUIRES A DB SETUP IN CIRCLECI ***
// const request = require('supertest')
// const app = require('../app')
// describe('Post Endpoints', () => {
//   it('should test that sending a post to /intent works and reaches Wit.ai', async () => {
//     const res = await request(app)
//       .post('/message/intent')
//       .send({
//         message: "this is a test",
//       })
//     expect(res.statusCode).toEqual(200);
//   })
// })