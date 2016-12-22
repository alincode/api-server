// ParserController
module.exports = {
	create: async(req, res) => {
		const {
			html, url, uuid, productId
		} = req.body;

		let grabStore;
		const ip = '127.0.0.1'
		try {
			grabStore = await GrabStoreService.save(url, ip, uuid, html, productId);
			if (!grabStore) throw new Error('DB save failure.');
		} catch (e) {
			const parseError = await ParseErrorService.save(url, ip, uuid, html);
			return res.ok({
				success: false,
				message: e.message
			});
		}

		try {
			if (productId && grabStore.amount && grabStore.priceStores) {
				sails.log('update price to portal done.');
				await PortalService.updatePrice(productId, grabStore.amount, grabStore.priceStores);
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
	}
};
