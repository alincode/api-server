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
      ip: '104.104.104.104',
      uuid: '00000xxxxx0000',
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

  it('POST /api/v1/batch/parsers', (done) => {
    let formData = {
      ip: '104.104.104.104',
      uuid: '00000xxxxx0000',
      data: [{
        'url': 'http://www.digikey.tw/product-detail/zh/comchip-technology/ZENER-KIT/641-1426-ND/2217259'
      }, {
        'url': 'http://www.digikey.tw/product-detail/zh/fairchild-semiconductor/DIODESKITFS/DIODESKITFS-ND/1770760'
      }, {
        'url': 'http://www.digikey.tw/product-detail/zh/micro-commercial-co/353-8001-KIT/353-8001-KIT-ND/1372186'
      }]
    };

    try {
      request(sails.hooks.http.app)
        .post('/api/v1/batch/parsers')
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
