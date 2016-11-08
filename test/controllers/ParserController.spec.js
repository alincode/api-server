describe('ParserController', () => {

  it('GET /api/v1/parsers', (done) => {
    try {
      request(sails.hooks.http.app)
        .get('/api/v1/parsers')
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          done(err);
        });
    } catch (e) {
      done(e);
    }
  });

  it('POST /api/v1/parsers', (done) => {

    let formData = {
      'url': 'http://www.digikey.tw/product-detail/zh/comchip-technology/ZENER-KIT/641-1426-ND/2217259'
    };

    try {
      request(sails.hooks.http.app)
        .post('/api/v1/parsers')
        .send(formData)
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
