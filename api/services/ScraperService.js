const DigikeyTw = require('digikey-scraper-sandbox').default;
const DigikeyCn = require('digikey-cn-scraper').default;

// DigikeyScraper
let self = module.exports = {
  getResult: async(html, url) => {
    let grabStrategy = self.getStrategy(html, url);
    let result = await grabStrategy.getResult();
    return result;
  },
  getStrategy: (html, url) => {
    let grabStrategy;
    if (url.indexOf('www.digikey.tw') != -1) {
      grabStrategy = new DigikeyTw(html, url);
    } else if (url.indexOf('www.digikey.com.cn') != -1) {
      grabStrategy = new DigikeyCn(html, url);
    }
    return grabStrategy;
  }
};
