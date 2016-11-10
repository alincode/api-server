// Supplier
module.exports = {
  tableName: 'suppliers',
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    product: {
      model: 'product'
    }
  }
};
