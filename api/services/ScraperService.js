const DigikeyTw = require('digikey-tw-scraper').default;
const DigikeyCn = require('digikey-cn-scraper').default;
const Mouser = require('mouser-scraper').default;

// DigikeyScraper
let self = module.exports = {
  getResult: async(html, url) => {
    let grabStrategy = self.getStrategy(html, url);
    let result = await grabStrategy.getResult();
    return result;
  },
  getStrategy: (html, url) => {
    // TODO: implement it, maybe like map<sting url, new object>
    let grabStrategy;
    if (url.indexOf('www.digikey.tw') != -1) {
      grabStrategy = new DigikeyTw(html, url);
    } else if (url.indexOf('www.digikey.com.cn') != -1) {
      grabStrategy = new DigikeyCn(html, url);
    } else if (url.indexOf('www.mouser.cn') != -1) {
      grabStrategy = new Mouser(html, url);
    }
    return grabStrategy;
  }
};
