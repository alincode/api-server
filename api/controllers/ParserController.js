// ParserController
module.exports = {
	find: async(req, res) => {
		try {
			const data = req.body;
			let grabStores = await GrabStore.find();
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
		try {
			const {
				html, url, uuid, ip
			} = req.body;

			const grabStore = await GrabStoreService.save(url, ip, uuid, html)
			if (grabStore) {
				let results = [];
				results.push(grabStore);
				return res.ok({
					success: true,
					results: results
				});
			} else {
				const parseError = await ParseErrorService.save(url, ip, uuid, html);
				return res.ok({
					success: false,
					message: parseError
				});
			}
		} catch (e) {
			return res.ok({
				success: false,
				message: e.message
			});
		}
	},
	batch: async(req, res) => {
		try {
			const {
				ip, uuid, data, batchId
			} = req.body;

			let grabStores = [];
			await Promise.each(data, async(row) => {
				let {
					html, url
				} = row;

				let grabStore = await GrabStoreService.save(url, ip, uuid, html,
					batchId);
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
