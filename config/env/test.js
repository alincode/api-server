module.exports = {
  port: 1338,
  models: {
    migrate: 'drop'
  },
  connections: {
    mongodbServer: {
      database: 'test-qegoo'
    }
  }
};
