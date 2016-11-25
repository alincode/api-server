// ParseErrorController
module.exports = {
  find: async(req, res) => {
    try {
      let parseErrors = await ParseError.find();
      let results = await PickResultService.getRemoveHtmlResult(parseErrors);
      return res.ok({
        results: results
      });
    } catch (e) {
      return res.serverError(e);
    }
  }
};
