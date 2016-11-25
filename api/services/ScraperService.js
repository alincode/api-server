const scraperMap = [{
  url: 'www.digikey.tw',
  name: 'digikey-tw'
}, {
  url: 'www.digikey.com.cn',
  name: 'digikey-cn'
}, {
  url: 'www.mouser.cn',
  name: 'mouser'
}, {
  url: 'www.chip1stop.com',
  name: 'chip1stop'
}, {
  url: 'china.rs-online.com',
  name: 'china-rs'
}, {
  url: 'cn.element14.com',
  name: 'cn-element14'
}];

// ScraperService
let self = module.exports = {
  getResult: async(html, url) => {
    let grabStrategy = await self.getStrategy(html, url);
    if (!grabStrategy) throw new Error('it is not allow website');
    let result = await grabStrategy.getResult();
    return result;
  },
  getStrategy: async(html, url) => {
    let grabStrategy;
    await Promise.each(scraperMap,
      function(item, i, length) {
        if (url.indexOf(item.url) != -1) {
          // e.g. require('digikey-cn-scraper').default;
          const GrabStrategy = require(item.name + '-scraper').default;
          grabStrategy = new GrabStrategy(html, url);
        }
      });
    return grabStrategy;
  }
};
