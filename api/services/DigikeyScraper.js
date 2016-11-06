const Digikey = require('digikey-scraper-sandbox').default;

// DigikeyScraper
module.exports = {
  getResult: async(html, url) => {
    let digikey = new Digikey(html, url);
    let result = await digikey.getResult();
    return result;
  }
};
