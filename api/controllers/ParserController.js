// ParserController
module.exports = {
	query: async(req, res) => {
		let data = req.body;

		try {
			let results = [];
			let result = await DigikeyScraper.getResult(null,
				'http://www.digikey.tw/product-detail/zh/comchip-technology/ZENER-KIT/641-1426-ND/2217259'
			);
			results.push(result);
			return res.ok({
				success: true,
				results: results
			});
		} catch (e) {
			return res.serverError(e);
		}
	},
	create: async(req, res) => {
		let data = req.body;

		try {
			let results = [];
			let result = await DigikeyScraper.getResult(data.html, data.url);
			results.push(result);
			return res.ok({
				success: true,
				results: results
			});
		} catch (e) {
			return res.serverError(e);
		}
	}
};
