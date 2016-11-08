import Sails from 'sails';
import rc from 'rc';

var sails = undefined;
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

// chai.use(chaiAsPromised);
global.should = chai.should();
global.request = require('supertest-as-promised');
global.sinon = require("sinon");

require("babel-core/register");
require("babel-polyfill");

before(function(done) {
  let config = rc('sails');
  config.environment = 'test';
  Sails.lift(config, (err, server) => {
    sails = server;
    if (err) {
      return done(err);
    }
    return done(err, sails);
  });
  return;
});

after((done) => {
  sails.lower(done);
  return;
});
