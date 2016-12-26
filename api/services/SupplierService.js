// SupplierService
let self = module.exports = {
  getSuppliers: async() => {
    const suppliers = await Supplier.find();
    return suppliers;
  },
  getSupplierId: async(url) => {
    const suppliers = await self.getSuppliers();
    let supplierId;
    if (suppliers) {
      suppliers.forEach((supplier) => {
        if (url.indexOf(supplier.url) != -1) supplierId = supplier.id;
      });
    }
    return supplierId;
  }
};
