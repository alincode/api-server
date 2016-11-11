// GrabStoreService
module.exports = {
  save: async(url, ip, uuid, html, batchId) => {
    let result = await DigikeyScraper.getResult(html, url);
    result.url = url;
    result.ip = ip;
    result.uuid = uuid;
    if (html) result.html;
    if (batchId) result.batchId;

    if (result.sku) {
      let grabStore = await GrabStore.create(result);
      delete grabStore.html;
      return grabStore;
    } else {
      return;
    }
  }
};
