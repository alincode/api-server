import utils from 'utility';

// ParserController
module.exports = {
	find: async(req, res) => {
		try {
			const data = req.body;
			const supplierId = req.query.supplierId;
			let options = {
				limit: 10,
				sort: 'createdAt DESC'
			};

			if (supplierId) options.supplierId = parseInt(supplierId);

			let grabStores = await GrabStore.find(options);
			let results = await PickResultService.getRemoveHtmlResult(grabStores);
			return res.ok({
				success: true,
				results: results
			});
		} catch (e) {
			return res.serverError(e);
		}
	},
	create: async(req, res) => {
		const {
			html, url, uuid, ip, productId
		} = req.body;

		let grabStore;
		try {
			let decodeHtml = html;
			if (html) decodeHtml = utils.base64decode(html);
			grabStore = await GrabStoreService.save(url, ip, uuid, decodeHtml,
				productId);
			if (!grabStore) throw new Error('DB save failure.');
		} catch (e) {
			const parseError = await ParseErrorService.save(url, ip, uuid, html);
			return res.ok({
				success: false,
				message: e.message
			});
		}

		try {
			if (grabStore.amount && grabStore.priceStores) {
				await PriceStoreService.create(grabStore);
				// sails.log('update price to portal done.');
				// await PortalService.updatePrice(productId, grabStore.amount, grabStore.priceStores);
			}
		} catch (e) {
			sails.log.error(
				`update price to portal failure, because ${e.message}`);
		}

		let results = [];
		results.push(grabStore);
		return res.ok({
			success: true,
			results: results
		});

	},
	batch: async(req, res) => {
		try {
			const {
				ip, uuid, data, batchId
			} = req.body;

			let grabStores = [];
			await Promise.each(data, async(row) => {
				let {
					html, url, productId
				} = row;

				let grabStore = await GrabStoreService.save(url, ip, uuid, html,
					productId, batchId);
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
