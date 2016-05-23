const should = require('should');
const supertest = require('supertest');

describe('Export controller', function() {
  let agent = null;
  let server = null;

  beforeEach(function(done) {
    process.env.NODE_ENV = 'test';
    let app = require('../../server');
    server = app.listen(3000, done);
  });

  afterEach(function() {
    server.close();
    server = null;
  });

  it('Handles non-JSON requests gracefully', function(done) {
    supertest(server)
      .post('/orders/export')
      .type('form')
      .send({
        encodeddata: 'not json at all'
      })
      .end(function(err, res) {
        res.status.should.equal(400);
        done();
      });
  });

  it('Handles empty order requests gracefully', function(done) {
    supertest(server)
      .post('/orders/export')
      .type('form')
      .send({
        encodeddata: JSON.stringify({})
      })
      .end(function(err, res) {
        res.status.should.equal(422);
        done();
      });
  });
});
