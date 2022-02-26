const request = require('supertest').agent('https://sapp.rocketeercouriers.com/api');
const assert = require('chai').assert;

describe('Terms and privacy', () => {
    it('Terms and conditions', () =>{
        return request
        .get('/terms-conditions')
        .expect(200)
        .then((res) => {
         assert.isNotEmpty(res.body);
         assert.exists(res.body.result);
         assert.include(res.body.result.content, "Your use of the Application indicates that you:");
        });
    });

    it('Terms and conditions for customer', () =>{
          return request
          .get('/customer-tnc')
          .expect(200)
          .then((res) => {
           assert.isNotEmpty(res.body);
           assert.exists(res.body.result);
           assert.include(res.body.result.content, "Customer's Terms and condition");
          });
      });

    it('Terms and conditions for driver', () =>{
          return request
          .get('/driver-tnc')
          .expect(200)
          .then((res) => {
           assert.isNotEmpty(res.body);
           assert.exists(res.body.result);
           assert.include(res.body.result.content, "Driver's Terms and condition");
          });
      });

    it('Privacy policy', () =>{
         return request
         .get('/privacy-policy')
         .expect(200)
         .then((res) => {
          assert.isNotEmpty(res.body);
          assert.exists(res.body.result);
          assert.include(res.body.result.content, "This Privacy Policy sets out our commitment to protecting the"
          + " privacy of personal information provided to us or otherwise collected by us");
         });
    });
})