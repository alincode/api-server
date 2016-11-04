// ScraperController

module.exports = {
	scraper: async(req, res) => {
		try {
			return res.ok();
		} catch (e) {
			return res.serverError(e);
		}
	}
};
