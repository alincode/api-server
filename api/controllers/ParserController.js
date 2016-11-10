// ParserController
module.exports = {
	find: async(req, res) => {
		let data = req.body;

		try {
			// let result = await DigikeyScraper.getResult(null,
			// 'http://www.digikey.tw/product-detail/zh/comchip-technology/ZENER-KIT/641-1426-ND/2217259'
			// );
			// await Product.create(result);

			let grabStores = await GrabStore.find();
			return res.ok({
				success: true,
				results: grabStores
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
				let grabStore = await GrabStore.create(result);
				results.push(result);

				return res.ok({
					success: true,
					results: grabStore
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
					message: parseError
				});
			}
		} catch (e) {
			return res.serverError(e);
		}
	},
	batch: async(req, res) => {
		const {
			ip, uuid, data
		} = req.body;
		try {
			let grabStores = [];
			await Promise.each(data, async(row) => {
				let {
					html, url
				} = row;
				let result = await DigikeyScraper.getResult(html, url);
				result.url = url;
				result.ip = ip;
				result.uuid = uuid;
				let grabStore = await GrabStore.create(result);
				grabStores.push(grabStore);
				return row;
			});
			return res.ok({
				success: true,
				results: grabStores
			});
		} catch (e) {
			return res.serverError(e);
		}
	}
};
