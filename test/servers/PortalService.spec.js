describe('PortalService', () => {
  it('updatePrice', async(done) => {
    try {
      const productId = 111929973;
      const amount = 1200;
      const priceStores = [{
        "amount": 2,
        "unitPrice": "16.9"
      }, {
        "amount": 5,
        "unitPrice": "12.4"
      }, {
        "amount": 7,
        "unitPrice": "10.9"
      }, {
        "amount": 12,
        "unitPrice": "9.34"
      }]

      let responseBody = await PortalService.updatePrice(productId,
        amount,
        priceStores);
      responseBody.result.should.equal(1);
      done();
    } catch (e) {
      done(e);
    }
  });
});
