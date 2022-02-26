//const request = require('supertest').agent('https://dev.rocketeercouriers.com/api');
//const assert = require('chai').assert;
//
//describe('Users', () => {
////    it('Login for valid users', () =>{
////        return request
////        .get('/terms-conditions')
////        .expect(200)
////        .then((res) => {
////         assert.isNotEmpty(res.body);
////         assert.exists(res.body.result);
////         assert.include(res.body.result.content, "Your use of the Application indicates that you:");
////        });
////    });
////})
////    it('login', loginUser());
////
//    it('POST Login for valid users ', () => {
//          const data = {
//                         "email": "admin@rocketeercouriers.com",
//                         "password": "R@cKet989",
//                         "deviceInfo": "{ \"deviceId\": \"373dd2dds73332fsdf3\","+
//                         "\"deviceType\": \"Android\",\"deviceToken\": \"123hdhhebjebejk5itufjfbjfb\" }"
//                       }
//       return request
//        .post ('/login')
//        .send(data)
//        .expect(200)
//        .then((res) => {
//        const result = res.body.result
//          assert.equal(result.name, 'admin');
//          assert.equal(result.email, 'admin@rocketeercouriers.com');
//          assert.equal(result.address, '2/162 macquarie st hobart tasmania');
//          assert.equal(result.userId, 1);
//          assert.equal(result.phone, '428614800');
//          assert.isNotEmpty(result.accessToken);
//          });
//    });
////    it('uri that requires user to be logged in', function(done){
////    request
////        .get('/package-sizes')
////        .expect(302)
////        .expect('Location', '/package-sizes')
////        .end(function(err, res){
////            if (err) return done(err);
////            console.log(res.body);
////            done()
////        });
////    });
////    function loginUser() {
////       const data = {
////         "email": "info@rocketeercouriers.com",
////         "password": "R@cKet989",
////         "deviceInfo": "{ \"deviceId\": \"373dd2dds73332fsdf3\", \"deviceType\": \"Android\", \"deviceToken\": \"123hdhhebjebejk5itufjfbjfb\" }"
////       }
////        return function(done) {
////            request
////            .post ('/login')
////            .accept('application/json')
//////            .field('email', 'admin@rocketeercouriers.com')
//////             .field('password', 'R@cKet989')
//////             .field('_token', 'qdSYqJ0atjf8Vkl2oBwry8ozSpagmuxtzfGq1aVL')
////                .send(data)
////              .expect(200)
////              .then((res) => {
////                    assert.hasAnyKeys(res.body, 'result');
////                    assert.equal(res.body.result, data.email);
////               })
////
////
////            function onResponse(err, res) {
////               if (err) return done(err);
////               return done();
////            }
////        };
////    };
//});
//
