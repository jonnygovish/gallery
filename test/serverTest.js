process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
mongoose.set('strictQuery', true); 
const { MongoMemoryServer } = require('mongodb-memory-server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
const should = chai.should();

let mongoServer;

before(async function () {
  this.timeout(60000);

  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

after(async function () {
  this.timeout(10000);
  await Promise.all([
    mongoose.disconnect(),
    mongoServer.stop()
  ]);
});

describe('Photos', function () {
  it('should list ALL photos on / GET', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
