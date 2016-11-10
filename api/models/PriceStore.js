// PriceStore
module.exports = {
  tableName: 'price_stores',
  attributes: {
    amount: {
      type: 'number',
      required: true
    },
    unitPrice: {
      type: 'number',
      required: true
    },
    product: {
      model: 'product'
    }
  }
};
