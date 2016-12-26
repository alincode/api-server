// PriceStoreService
module.exports = {
  create: async(grabStore, productId) => {
    let data = [];
    try {
      if (grabStore.priceStores) {
        grabStore.priceStores.forEach((priceStore) => {
          let newPriceStore = {
            currency: grabStore.currency,
            amount: priceStore.amount,
            unitPrice: priceStore.unitPrice,
            supplierId: parseInt(grabStore.supplierId),
            sku: grabStore.sku,
            mfs: grabStore.mfs,
            pn: grabStore.pn
          };
          if (productId) newPriceStore.productId = productId;
          data.push(newPriceStore);
        });
      }
      await PriceStore.create(data);
      return true;
    } catch (e) {
      sails.log.error(e);
      return false;
    }
  }
};
