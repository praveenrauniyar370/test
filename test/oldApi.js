const request = require('supertest').agent('https://dev.rocketeercouriers.com/api');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe.skip('Old Api', () => {
var accessToken = ""
var userId;
    it('POST Login for valid users ', () => {
          const data = {"password":"123456",
          "deviceInfo":{"deviceType":"Android",
          "deviceId":"bdb58ea4-7dd1-4655-862e-e563ef28c0c1",
          "deviceToken":"fbKdizMPToKcCyO0ywdwv2:APA91bGjwKLfuYtLWC2ErBbawDDi4wWaosaS52nnKLvJaHTwtja98O7jULNQuAHiaosyZ"
          + "eXpfvB051F7mTDK62BeUl_oQgGdz0bG5U6HHhq9XRTAAFoM_07SVAnLnu75HSGVnW3OsqqG"},
          "email":"cc@yopmail.com"}
       return request
        .post ('/login')
        .send(data)
        .expect(200)
        .then((res) => {
           const result = res.body.result
           accessToken = result.accessToken;
           userId = result.userId;
           assert.equal(result.name, 'cc');
           assert.equal(result.email, 'cc@yopmail.com');
           assert.equal(result.address, 'meerut');
           assert.equal(result.userId, 1361);
           assert.equal(result.phone, '9997579965');
           assert.isNotEmpty(result.accessToken);
        });
    });



//without header giving Your logged in session token has expired.but with header giving bad request.
    it.skip('should add driver profile', () => {
    const commonHeaders = {"accept": "application/json" , "content-type": "application/json"}
              const data = {
                             "name": "neelam",
                             "phoneNumber": "12985656",
                             "address": "xyz ff",
                             "vehicleSize": "23",
                             "vehicleRegistrationNumber": "xyz1235 ",
                             "driverLicenseNumber": "xyz1236",
                             "deletedDocumentsId": "{ 1,2 ,6}",
                             "deletedVehicleId": "{ 1,2,7 }"
                           }
           return request
            .post ('/addDriverProfile')
            .set(commonHeaders)
            .send(data)
            .expect(200)
            .then((res) => {
               const result = res.body
               console.log(result)
//                assert.equal(result.name, 'admin');
//                assert.equal(result.email, 'admin@rocketeercouriers.com');
//                assert.equal(result.address, '2/162 macquarie st hobart tasmania');
//                assert.equal(result.userId, 1);
//                assert.equal(result.phone, '428614800');
//                assert.isNotEmpty(result.accessToken);
            });
        });

//without header giving Your logged in session token has expired.but with header giving bad request.
    it.skip('should create Pickup Job', () => {
    const commonHeaders = {"accept": "application/json" , "content-type": "application/json"}
              const data = {
                             "name": "neelam",
                             "phoneNumber": "12985656",
                             "address": "xyz ff",
                             "vehicleSize": "23",
                             "vehicleRegistrationNumber": "xyz1235 ",
                             "driverLicenseNumber": "xyz1236",
                             "deletedDocumentsId": "{ 1,2 ,6}",
                             "deletedVehicleId": "{ 1,2,7 }"
                           }
           return request
            .post ('/createPickupJob')
            .set(commonHeaders)
            .send(data)
            .expect(200)
            .then((res) => {
               const result = res.body
//                assert.equal(result.name, 'admin');
//                assert.equal(result.email, 'admin@rocketeercouriers.com');
//                assert.equal(result.address, '2/162 macquarie st hobart tasmania');
//                assert.equal(result.userId, 1);
//                assert.equal(result.phone, '428614800');
//                assert.isNotEmpty(result.accessToken);
            });
        });

    it.skip('should upload Profile Image', () => {
    const commonHeaders = {"accept": "application/json" , "content-type": "application/json",
    "accessToken": accessToken, "loggedUserId": userId
    }
           return request
            .post ('/uploadProfileImage')
            .set(commonHeaders)
            .attach('image', '/Users/praveen/projects/rockteer/rocketeer-php-automation/watchImage.jpg')
            .expect(200)
            .then((res) => {
               const responseBody = res.body
               assert.equal(responseBody.message, 'Profile updated successfully');
               assert.include(responseBody.result.imageUrl, ('https://s3-ap-southeast-2.amazonaws.com/rocketeer-staging/profile/main/'));
            });
        });
//getting 500 while uploading text file
    it.skip('should upload document Image', () => {
    const commonHeaders = {"accept": "application/json" , "content-type": "application/json",
    "accessToken": accessToken, "loggedUserId": userId
    }
           return request
            .post ('/uploadDocumentImage')
            .set(commonHeaders)
            .attach('image', '/Users/praveen/projects/rockteer/rocketeer-php-automation/watchImage.jpg')
            .expect(200)
            .then((res) => {
               const responseBody = res.body
               assert.equal(responseBody.message, 'Profile updated successfully');
               assert.equal(responseBody.result.imageUrl, 'https://s3-ap-southeast-2.amazonaws.com/rocketeer-staging/profile/main/thumb_Array');
            });
        });

    it.skip('should upload vehicle Image', () => {
    const commonHeaders = {"accept": "application/json" , "content-type": "application/json",
    "accessToken": accessToken, "loggedUserId": userId
    }
           return request
            .post ('/uploadVehicleImage')
            .set(commonHeaders)
            .req
            .attach('image', '/Users/praveen/projects/rockteer/rocketeer-php-automation/watchImage.jpg')
            .expect(200)
            .then((res) => {
               const responseBody = res.body
               assert.equal(responseBody.message, 'Profile updated successfully');
               assert.include(responseBody.result.imageUrl, 'https://s3-ap-southeast-2.amazonaws.com/rocketeer-staging/car');
            });
        });

// what will be job id should add  one positive test
    it.skip('should upload job Image', () => {
    const commonHeaders = {"accept": "application/json" , "content-type": "application/json",
    "accessToken": accessToken, "loggedUserId": userId, jobId: "1"
    }
           return request
            .post ('/uploadJobImage')
            .set(commonHeaders)
            .attach('image', '/Users/praveen/projects/rockteer/rocketeer-php-automation/watchImage.jpg')
            .expect(200)
            .then((res) => {
               const responseBody = res.body
               assert.equal(responseBody.message, 'Job does not exists anymore.');
            });
        });

// what will be job id should add  one positive test
    it.skip('should upload map Image', () => {
    const commonHeaders = {"accept": "application/json" , "content-type": "application/json",
    "accessToken": accessToken, "loggedUserId": userId, "jobId": "1"
    }
           return request
            .post ('/uploadMapImage')
            .set(commonHeaders)
            .attach('image', '/Users/praveen/projects/rockteer/rocketeer-php-automation/watchImage.jpg')
            .expect(200)
            .then((res) => {
               const responseBody = res.body
               assert.equal(responseBody.message, 'Job does not exists anymore.');
            });
        });

    it.skip('should fetch Driver Profile by access token', () =>{
         const commonHeaders = { "accessToken": accessToken, "loggedUserId": userId };
              return request
              .get('/driverProfile')
              .set(commonHeaders)
              .expect(200)
              .then((res) => {
               const result = res.body.result
                   assert.equal(result.name, 'admin');
                   assert.equal(result.email, 'admin@rocketeercouriers.com');
                   assert.equal(result.address, '2/162 macquarie st hobart tasmania');
                   assert.equal(result.userId, 1);
                   assert.equal(result.phone, '0428614800');
                   assert.isNotEmpty(result.accessToken);
              });
         });
//  getting 405 "Method Not Allowed"
    it.skip('should put driverProfile', () =>{
         const commonHeaders = {"accept": "application/json" , "content-type": "application/json",
             "accessToken": accessToken, "loggedUserId": userId }
         const data = {
                        "type": 2,
                        "brandName": "Appster",
                        "abn": "Appster",
                        "name": "Jitender Thakur",
                        "address": "Delhi",
                        "mobileNumber": "9899835337",
                        "description": "Delhi",
                        "storeLocation": "Delhi"
                      }
              return request
              .post('/driverProfile')
              .send(data)
              .set(commonHeaders)
              .expect(200)
              .then((res) => {
               const result = res.body.result
                   assert.equal(result.name, 'admin');
                   assert.equal(result.email, 'admin@rocketeercouriers.com');
                   assert.equal(result.address, '2/162 macquarie st hobart tasmania');
                   assert.equal(result.userId, 1);
                   assert.equal(result.phone, '0428614800');
                   assert.isNotEmpty(result.accessToken);
              });
         });


//getting 404
    it.skip('should change password', () => {
             const commonHeaders = {"accept": "application/json" , "content-type": "application/json",
                 "accessToken": accessToken }
                       const data = {
                                      "currentPassword": "R@cKet989",
                                      "newPassword": "123456",
                                      "confirmNewPassword": "123456"
                                    }
                    return request
                     .post ('/user/change-password')
                     .set(commonHeaders)
                     .send(data)
                     .expect(200)
                     .then((res) => {
                        const result = res.body
         //                assert.equal(result.name, 'admin');
         //                assert.equal(result.email, 'admin@rocketeercouriers.com');
         //                assert.equal(result.address, '2/162 macquarie st hobart tasmania');
         //                assert.equal(result.userId, 1);
         //                assert.equal(result.phone, '428614800');
         //                assert.isNotEmpty(result.accessToken);
                     });
                 });
//getting 404
    it.skip('should send email for forgot  password', () => {
             const commonHeaders = {"accept": "application/json" , "content-type": "application/json"}
                       const data = {
                                      "email": "jitender@yopmail.com"
                                    }
                    return request
                     .post ('/user/change-password')
                     .set(commonHeaders)
                     .send(data)
                     .expect(200)
                     .then((res) => {
                        const result = res.body
         //                assert.equal(result.name, 'admin');
         //                assert.equal(result.email, 'admin@rocketeercouriers.com');
         //                assert.equal(result.address, '2/162 macquarie st hobart tasmania');
         //                assert.equal(result.userId, 1);
         //                assert.equal(result.phone, '428614800');
         //                assert.isNotEmpty(result.accessToken);
                     });
                 });

//getting 503 "Service Unavailable"
    it.skip('should logout user', () =>{
             const commonHeaders = { "userToken": accessToken};
                  return request
                  .get('/logout')
                  .set(commonHeaders)
                  .expect(200)
                  .then((res) => {
                   const result = res.body.result
                       assert.equal(result.name, 'admin');
                       assert.equal(result.email, 'admin@rocketeercouriers.com');
                       assert.equal(result.address, '2/162 macquarie st hobart tasmania');
                       assert.equal(result.userId, 1);
                       assert.equal(result.phone, '0428614800');
                       assert.isNotEmpty(result.accessToken);
                  });
             });

    //getting 404
    it.skip('should get background images', () => {
                 const commonHeaders = {"accept": "application/json" , "content-type": "application/json",
                     "accessToken": accessToken }
                           const data = {
                                          "currentPassword": "R@cKet989",
                                          "newPassword": "123456",
                                          "confirmNewPassword": "123456"
                                        }
                        return request
                         .get ('/user/background-images')
                         .set(commonHeaders)
                         .expect(200)
                         .then((res) => {
                            const result = res.body
             //                assert.equal(result.name, 'admin');
             //                assert.equal(result.email, 'admin@rocketeercouriers.com');
             //                assert.equal(result.address, '2/162 macquarie st hobart tasmania');
             //                assert.equal(result.userId, 1);
             //                assert.equal(result.phone, '428614800');
             //                assert.isNotEmpty(result.accessToken);
                         });
                     });

    //getting 404
    it.skip('should delete background images', () => {
                     const commonHeaders = {"accept": "application/json" , "content-type": "application/json",
                         "accessToken": accessToken }
                            return request
                             .delete ('/user/background-images/1')
                             .set(commonHeaders)
                             .expect(200)
                             .then((res) => {
                                const result = res.body
                 //                assert.equal(result.name, 'admin');
                 //                assert.equal(result.email, 'admin@rocketeercouriers.com');
                 //                assert.equal(result.address, '2/162 macquarie st hobart tasmania');
                 //                assert.equal(result.userId, 1);
                 //                assert.equal(result.phone, '428614800');
                 //                assert.isNotEmpty(result.accessToken);
                             });
                         });

                         //it is a problem because it needs a unique email id every time otherwise sending 400
                             it.skip('Signup with invalid user name ', () => {
                                       const data = {
                                                                                  "email": "ratsh@yopmail.com",
                                                                                  "password": "123456",
                                                                                  "userType": "2",
                                                                                  "deviceInfo": "{ \"deviceId\": \"373dd2dds73332fsdf3\",\"deviceType\": \"Android\", \"deviceToken\": \"123hdhhebjebejk5itufjfbjfb\" }"
                                                      }
                                    return request
                                     .post ('/signUp')
                                     .send(data)
                                     .expect(200)
                                     .then((res) => {
                                     console.log(res.body)
                                     const result = res.body.result
                                       assert.deepEqual(result, []);
                                       });
                                 });


});


