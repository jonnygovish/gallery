process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');

chai.use(chaiHttp);
var should = chai.should();

describe('Health Check', function() {
  it('should return ok on /health GET', function(done) {
    chai.request(server)
      .get('/health')
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql('ok');
        done();
      });
  });
});
