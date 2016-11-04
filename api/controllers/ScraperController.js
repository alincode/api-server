// var digikey = require('digikey-scraper-sandbox');

// ScraperController

module.exports = {
	info: async(req, res) => {
		try {
			return res.ok({
				message: 'ok'
			});
		} catch (e) {
			return res.serverError(e);
		}
	},
	scraper: async(req, res) => {
		try {
			// let result = await digikey.product({
			// 	url: 'http://www.digikey.tw/product-detail/zh/comchip-technology/ZENER-KIT/641-1426-ND/2217259'
			// });
			// console.log("==========> result:", result);
			return res.ok();
		} catch (e) {
			return res.serverError(e);
		}
	}
};
