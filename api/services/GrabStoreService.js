import utils from 'utility';

// GrabStoreService
module.exports = {
  save: async(url, ip, uuid, html, productId, batchId) => {
    try {
      let decodeHtml;
      if (html) decodeHtml = utils.base64decode(html);
      let result = await ScraperService.getResult(decodeHtml, url);
      result.url = url;
      result.ip = ip;
      result.uuid = uuid;
      result.productId = productId;
      if (html) result.html = html;
      if (batchId) result.batchId;
      if (result.sku) {
        let grabStore = await GrabStore.create(result);
        delete grabStore.html;
        return grabStore;
      } else {
        return;
      }
    } catch (e) {
      throw e;
    }
  }
};
