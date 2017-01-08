// ScraperService
let self = module.exports = {
  getResult: async(html, url) => {
    let grabStrategy = await self.getStrategy(html, url);
    if (!grabStrategy) throw new Error('it is not allow website');
    let result = grabStrategy.getResult();
    return result;
  },
  getStrategy: async(html, url) => {
    let grabStrategy;
    const suppliers = await SupplierService.getSuppliers();
    return new Promise(function(resolve, reject) {
      _.forEach(suppliers,
        function(item, key) {
          if (url.indexOf(item.url) != -1) {
            // e.g. require('digikey-cn-scraper').default;
            const moduleName = item.name + '-scraper';
            const GrabStrategy = require(moduleName).default;
            grabStrategy = new GrabStrategy(html, url);
            resolve(grabStrategy);
          }
        });
    });
  }
};
