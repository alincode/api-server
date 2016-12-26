// https://github.com/balderdashy/waterline-docs
// PriceStore
module.exports = {
  tableName: 'price_stores',
  attributes: {
    amount: {
      type: 'float',
      required: true
    },
    unitPrice: {
      type: 'integer',
      required: true
    },
    supplierId: {
      type: 'integer',
      required: true
    },
    sku: {
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
    productId: {
      type: 'number'
    }
  }
};
