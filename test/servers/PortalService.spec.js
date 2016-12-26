describe.skip('PortalService', () => {
  it('updatePrice', async(done) => {
    try {
      const productId = '5961001101-FAIR-RITE-5-1781375';
      const amount = 3758;
      const priceStores = [{
        amount: 1,
        unitPrice: '3.36'
      }, {
        amount: 100,
        unitPrice: '2.84'
      }, {
        amount: 500,
        unitPrice: '2.57'
      }, {
        amount: 1000,
        unitPrice: '2.23'
      }, {
        amount: 2000,
        unitPrice: '2.03'
      }, {
        amount: 5000,
        unitPrice: '1.59'
      }, {
        amount: 10000,
        unitPrice: '1.58'
      }];

      let responseBody = await PortalService.updatePrice(productId,
        amount, priceStores);
      responseBody.result.should.equal(1);
      done();
    } catch (e) {
      done(e);
    }
  });
});
