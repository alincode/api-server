//   PickResultService
module.exports = {
  getRemoveHtmlResult: async(rows) => {
    let newRows = [];
    await Promise.each(rows,
      function(item, i, length) {
        delete item.html;
        newRows.push(item);
      });
    return newRows;
  }
};
