// ParseErrorService
module.exports = {
  save: async(url, ip, uuid, html) => {
    let data = {
      url: url,
      ip: ip,
      uuid: uuid
    };
    if (html) data.html = html;
    let parseError = await ParseError.create(data);
    await parseError.save();
    delete parseError.html;
    return parseError;
  }
};
