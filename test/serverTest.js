process.env.NODE_ENV = 'test';   

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('Photos', function(){


    it('should list ALL photos on / GET', function(done){
        this.timeout(60000);
        chai.request(server)
        .get('/')
        .end(function(err,res){
            res.should.have.status(200);
            res.should.be.html;
            res.body.should.be.a('object')
            done();
        })
    });
})
