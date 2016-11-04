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
			return res.ok();
		} catch (e) {
			return res.serverError(e);
		}
	}
};
