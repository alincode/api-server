// HtmlSourceService
module.exports = {
  save: async(url, html, supplierId) => {
    let htmlSource = await HtmlSource.findOrCreate({
      url: url
    }, {
      html: html,
      url: url,
      supplierId: supplierId
    });
  }
};
