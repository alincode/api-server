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
      let result = await ScraperService.getResult(html, url);
      let supplierId = await SupplierService.getSupplierId(url);
      result.supplierId = supplierId;
      result.url = url;

      let grabStoreData = result;
      grabStoreData.ip = ip;
      grabStoreData.uuid = uuid;

      if (batchId) result.batchId;

      if (result.sku) {
        // result.productId = setProductId(result, supplierId, productId);
        result.productId = productId;
        let grabStore = await GrabStore.create(grabStoreData);
        await ProductService.save(result);
        await HtmlSourceService.save(url, html, supplierId);
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
