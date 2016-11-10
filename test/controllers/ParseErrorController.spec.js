// ParseErrorController
describe('ParseErrorController', () => {
  it('GET /api/v1/errors', (done) => {
    try {
      request(sails.hooks.http.app)
        .get('/api/v1/errors')
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    } catch (e) {
      done(e);
    }
  });
});
