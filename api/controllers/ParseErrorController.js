// ParseErrorController
module.exports = {
  find: async(req, res) => {
    try {
      let results = await ParseError.find();
      return res.ok({
        results: results
      });
    } catch (e) {
      return res.serverError(e);
    }
  }
};
