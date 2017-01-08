// ParseError
module.exports = {
  tableName: 'parse_error',
  attributes: {
    url: {
      type: 'string',
      required: true
    },
    ip: {
      type: 'string',
      required: true
    },
    uuid: {
      type: 'string'
    },
  }
};
