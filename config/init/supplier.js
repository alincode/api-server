module.exports = {
  init: async() => {
    const data = [{
      id: 1,
      url: 'www.digikey.com.cn',
      name: 'digikey-cn'
    }, {
      id: 2,
      url: 'www.mouser.cn',
      name: 'mouser'
    }, {
      id: 3,
      url: 'www.chip1stop.com',
      name: 'chip1stop'
    }, {
      id: 4,
      url: 'china.rs-online.com',
      name: 'china-rs'
    }, {
      id: 5,
      url: 'cn.element14.com',
      name: 'cn-element14'
    }];

    const suppliers = await SupplierService.getSuppliers();
    if (suppliers.length == 0) await Supplier.create(data);
  }
};
