import fs from 'fs';
import path from 'path';
import utils from 'utility';

function getHtml(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname, fileName), function(err, data) {
      if (err) return console.log(err);
      resolve(data.toString());
    })
  });
}

describe('ParserController', () => {

  describe('POST /api/v1/parsers', function() {
    it.skip('digikey cn', async(done) => {

      let html = utils.base64encode(await getHtml('../sample.html'));
      let formData = {
        ip: '47.100.107.1',
        uuid: 'cc35ef6e5bb0a8ee',
        url: 'http://www.digikey.com.cn/search/zh/LM358ADT/497-1590-1-ND?recordId=592082',
        html: html,
        productId: '123'
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

    it.skip('chip1stop', async(done) => {

      let html = utils.base64encode(await getHtml(
        '../chip1stop.html'));
      let formData = {
        ip: '47.100.107.1',
        uuid: 'cc35ef6e5bb0a8ee',
        url: 'http://www.chip1stop.com/web/CHN/zh/dispDetail.do?partId=MAXI-0011689',
        html: html,
        productId: '123'
      };

      try {
        request(sails.hooks.http.app)
          .post('/api/v1/parsers')
          .send(formData)
          .end((err, res) => {
            let result = res.body;
            res.statusCode.should.be.equal(200);
            result.success.should.equal(true);
            done(err);
          });
      } catch (e) {
        done(e);
      }
    });

    it('element14', async(done) => {

      let html = utils.base64encode(await getHtml(
        '../element14.html'));
      let formData = {
        ip: '127.0.0.1',
        url: 'http://cn.element14.com/fair-rite/5961001101/ferrite-core-toroid-61/dp/1781375',
        html: html
      };

      try {
        request(sails.hooks.http.app)
          .post('/api/v1/parsers')
          .send(formData)
          .end((err, res) => {
            let result = res.body;
            res.statusCode.should.be.equal(200);
            result.success.should.equal(true);
            done(err);
          });
      } catch (e) {
        done(e);
      }
    });
  });

  it('POST /api/v1/parsers, it is not allow website', async(done) => {

    let html = utils.base64encode(await getHtml('../sample.html'));
    let formData = {
      ip: '47.100.107.1',
      uuid: 'cc35ef6e5bb0a8ee',
      url: 'http://www.google.com',
      html: html,
      productId: '123'
    };

    try {
      request(sails.hooks.http.app)
        .post('/api/v1/parsers')
        .send(formData)
        .end((err, res) => {
          let result = res.body;
          res.statusCode.should.be.equal(200);
          result.success.should.equal(false);
          result.message.should.equal('it is not allow website');
          done();
        });
    } catch (e) {
      // done(e);
    }
  });

  it.skip('POST /api/v1/batch/parsers', (done) => {
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
});
