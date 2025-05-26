const chai      = require('chai');
const chaiHttp  = require('chai-http');
const mongoose  = require('mongoose');
const app       = require('../server');   

const expect = chai.expect;
chai.use(chaiHttp);

before(function (done) {
  if (mongoose.connection.readyState === 1) return done();
  mongoose.connection.once('open', done);
});

after(function (done) {
  mongoose.connection.close(done);
});

describe('Photos', () => {
  it('should list ALL photos on / GET', (done) => {
    chai.request(app)          
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
