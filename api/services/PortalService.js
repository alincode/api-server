var rp = require('request-promise');

const PORTAL_DOMAIN = 'http://122.116.142.181:5959/';

let self = module.exports = {
  updatePrice: async(productId, amount, priceStores) => {
    return new Promise(function(resolve, reject) {
      var options = {
        method: 'GET',
        // method: 'POST',
        uri: PORTAL_DOMAIN + 'fm/portal',
        qs: {
          t: 'u',
          id: productId,
          stock: amount,
          price: priceStores
        },
        // body: {
        //   t: 'u',
        //   id: productId,
        //   stock: amount,
        //   price;priceStores
        // },
        json: true
      };

      rp(options)
        .then(function(body) {
          return resolve(body);
        })
        .catch(function(err) {
          return reject(err);
        });
    });
  }
};
