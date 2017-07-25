describe('Er2SampleTest', function () {
  describe('with Nightwatch', function () {
    before(function (client, done) {
      done()
    })
    after(function (client, done) {
      client.end(function () {
        done()
      })
    })
    afterEach(function (client, done) {
      done()
    })

    beforeEach(function (client, done) {
      done()
    })

    it('should check if react rendered correctly', function (client) {
      client
        .url('http://localhost:8080')
        .expect.element('#root').to.be.present.before(1000)
    })
  })
})
