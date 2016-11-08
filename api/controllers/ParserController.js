// ParserController
module.exports = {
	find: async(req, res) => {
		let data = req.body;

		try {
			// let result = await DigikeyScraper.getResult(null,
			// 'http://www.digikey.tw/product-detail/zh/comchip-technology/ZENER-KIT/641-1426-ND/2217259'
			// );
			// await Product.create(result);

			let products = await Product.find();
			return res.ok({
				success: true,
				results: products
			});
		} catch (e) {
			return res.serverError(e);
		}
	},
	create: async(req, res) => {
		let {
			html, url, uuid, ip
		} = req.body;

		try {
			let results = [];
			let result = await DigikeyScraper.getResult(html, url);
			result.url = url;
			result.ip = ip;
			result.uuid = uuid;

			if (result.sku) {
				let product = await Product.create(result);
				results.push(result);

				return res.ok({
					success: true,
					results: product
				});
			} else {
				let parseError = await ParseError.create({
					url: url,
					ip: ip,
					uuid: uuid
				});
				await parseError.save();
				return res.ok({
					success: false,
					results: parseError
				});
			}
		} catch (e) {
			return res.serverError(e);
		}
	}
};
