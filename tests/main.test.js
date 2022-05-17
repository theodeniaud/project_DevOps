const request = require('supertest')
const app = require('../index')

describe('Main Controller', () => {
    test('It return mainpage', async (done) => {
        const res = await request(app)
            .get('/')

        expect(res.status).toEqual(200)
        expect(res.text).toEqual("Hello app, running on: test")
        done()
    })
})