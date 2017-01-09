// ProductService
module.exports = {
  save: async(result) => {
    let htmlSource = await Product.findOrCreate({
      supplierId: result.supplierId,
      pn: result.pn,
      sku: result.sku,
      mfs: result.mfs
    }, result);
  }
};
