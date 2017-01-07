import utils from 'utility';

function setProductId(scraperResult, supplierId, productId) {
  let {
    pn, mfs, sku
  } = scraperResult;
  let result = productId;

  // pn→ ru486
  // mfs→ 芮氏藥廠
  // supplierid→ 長庚藥局
  // sku→ XXX_ru486

  if (!productId) {
    result = `${pn}-${mfs}-${supplierId}-${sku}`;
  }
  return result;
}

// GrabStoreService
module.exports = {
  save: async(url, ip, uuid, html, productId, batchId) => {
    try {
      let decodeHtml;
      if (html) decodeHtml = utils.base64decode(html);
      let result = await ScraperService.getResult(decodeHtml, url);
      let supplierId = await SupplierService.getSupplierId(url);
      result.supplierId = supplierId;
      result.url = url;
      result.ip = ip;
      result.uuid = uuid;

      if (html) result.html = html;
      if (batchId) result.batchId;
      if (result.sku) {
        // result.productId = setProductId(result, supplierId, productId);
        result.productId = productId;
        let grabStore = await GrabStore.findOrCreate({
          url: url
        }, result);
        delete grabStore.html;
        return grabStore;
      } else {
        return;
      }
    } catch (e) {
      sails.log.error(e);
      throw e;
    }
  }
};
