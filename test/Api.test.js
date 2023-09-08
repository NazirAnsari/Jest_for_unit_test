const { app } = require('../Api')
const supertest = require('supertest')

test('Api test', async () => {
    await supertest(app).get('/users').expect(200).then((result) => {
        expect(result && result.body && typeof result.body == 'object')
    })
})