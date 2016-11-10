// Product
module.exports = {
  tableName: 'products',
  attributes: {
    sku: {
      type: 'string',
      required: true
    },
    amount: {
      type: 'string',
      required: true
    },
    mfs: {
      type: 'string',
      required: true
    },
    pn: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    rohs: {
      type: 'boolean',
      required: true
    },
    lead: {
      type: 'boolean',
      required: true
    },
    suppliers: {
      collection: 'supplier', // map to identity
      via: 'product'
    },
    PriceStores: {
      collection: 'priceStore', // map to identity
      via: 'product'
    }
  }
};
