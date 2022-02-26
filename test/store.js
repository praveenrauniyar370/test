const request = require('supertest').agent('https://sstore.rocketeercouriers.com/api');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Rocketeer Store Api', () => {
    var jobId;
    const commonHeaders = { "accessToken": ["Y^!NSMNFYILZNBGBG*^_34XDZZZV9C_0K8P7MW9OVSPY7O406YM5A7K4T*YQQHQ0FRV!VR8B5W^WF2VBA1VR2WH95W9N^1P!*YY5"]
    , "timezone":["IST"], "Content-Type":"application/json"};
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 5)
    const jobScheduledDate = todayDate.toISOString().split('T')[0];

    it('Create Pickup job for small size where pickup and delivery address is same', () => {
          const requestBody = {
                         "packageSize": "1",
                         "deliveryAddress": "2 Augusta Road, New Town TAS, Australia",
                         "receiverName": "automation",
                         "receiverEmail": "automation@yopmail.com",
                         "receiverPhone": "765866656",
                         "extraNote": "Leave to the neighbour",
                         "scheduledDate": jobScheduledDate,
                         "scheduledTime": "05:31:00",
                         "couponId": 0,
                         "couponCode": "",
                         "discountValue": 0
                       }
       return request
        .post ('/jobs')
        .set(commonHeaders)
        .send(requestBody)
        .expect(200)
        .then((res) => {
           const result = res.body.result
           jobId = result.id;
           assert.equal(result.receiver_name, 'automation');
           assert.equal(result.receiver_email, 'automation@yopmail.com');
           assert.equal(result.pickup_postcode, 7008);
           assert.equal(result.receiver_phone, 765866656);
           assert.equal(result.package_size, 1);
           assert.equal(result.total_cost, 9.95);
           assert.isDefined(jobId);
        });
    });

    it('Create Pickup job for large size where pickup and delivery address is same', () => {
          const requestBody = {
                         "packageSize": "3",
                         "deliveryAddress": "2 Augusta Road, New Town TAS, Australia",
                         "receiverName": "automation",
                         "receiverEmail": "automation@yopmail.com",
                         "receiverPhone": "765866656",
                         "extraNote": "Leave to the neighbour",
                         "scheduledDate": jobScheduledDate,
                         "scheduledTime": "17:31:00",
                         "couponId": 0,
                         "couponCode": "",
                         "discountValue": 0
                       }
       return request
        .post ('/jobs')
        .set(commonHeaders)
        .send(requestBody)
        .expect(200)
        .then((res) => {
           const result = res.body.result
           jobId = result.id;
           assert.equal(result.receiver_name, 'automation');
           assert.equal(result.receiver_email, 'automation@yopmail.com');
           assert.equal(result.pickup_postcode, 7008);
           assert.equal(result.receiver_phone, 765866656);
           assert.equal(result.package_size, 3);
           assert.equal(result.total_cost, 19.61);
           assert.isDefined(jobId);
        });
    });

    it('Create Pickup job for medium size where delivery address is different', () => {
          const requestBody = {
                         "packageSize": "2",
                         "deliveryAddress": "THE CHERRY HUT, 1 Forest Rd, Granton TAS 7030, Australia",
                         "receiverName": "automation",
                         "receiverEmail": "automation@yopmail.com",
                         "receiverPhone": "765866656",
                         "extraNote": "Leave to the neighbour",
                         "scheduledDate": jobScheduledDate,
                         "scheduledTime": "05:31:00",
                         "couponId": 0,
                         "couponCode": "",
                         "discountValue": 0
                       }
       return request
        .post ('/jobs')
        .set(commonHeaders)
        .send(requestBody)
        .expect(200)
        .then((res) => {
           const result = res.body.result
           jobId = result.id;
           assert.equal(result.receiver_name, 'automation');
           assert.equal(result.receiver_email, 'automation@yopmail.com');
           assert.equal(result.pickup_postcode, 7008);
           assert.equal(result.receiver_phone, 765866656);
           assert.equal(result.package_size, 2);
           expect(parseFloat(result.total_cost)).to.have.within(19.5, 20.31);
           expect(parseFloat(result.distance)).to.have.within(16.5, 17.4);
           assert.isDefined(jobId);
        });
    });

    it('Create Pickup job for extra large size where delivery address is different', () => {
          const requestBody = {
                         "packageSize": "4",
                         "deliveryAddress": "THE CHERRY HUT, 1 Forest Rd, Granton TAS 7030, Australia",
                         "receiverName": "automation",
                         "receiverEmail": "automation@yopmail.com",
                         "receiverPhone": "765866656",
                         "extraNote": "Leave to the neighbour",
                         "scheduledDate": jobScheduledDate,
                         "scheduledTime": "17:31:00",
                         "couponId": 0,
                         "couponCode": "",
                         "discountValue": 0
                       }
       return request
        .post ('/jobs')
        .set(commonHeaders)
        .send(requestBody)
        .expect(200)
        .then((res) => {
           const result = res.body.result
           jobId = result.id;
           assert.equal(result.receiver_name, 'automation');
           assert.equal(result.receiver_email, 'automation@yopmail.com');
           assert.equal(result.pickup_postcode, 7008);
           assert.equal(result.receiver_phone, 765866656);
           assert.equal(result.package_size, 4);
           expect(parseFloat(result.total_cost)).to.have.within(36.5, 37.95);
           expect(parseFloat(result.distance)).to.have.within(16.5, 17.4);
           assert.isDefined(jobId);
        });
    });

    it('Update Pickup job ', () => {
          const requestBody = {
                         "packageSize": "3",
                         "deliveryAddress": "1 Langford Court, Lenah Valley TAS, Australia",
                         "receiverName": "automation",
                         "receiverEmail": "automation@yopmail.com",
                         "receiverPhone": "765866657",
                         "extraNote": "Leave to the neighbour",
                         "scheduledDate": jobScheduledDate,
                         "scheduledTime": "20:45:00"
                       }
       return request
        .put("/jobs/"+ jobId)
        .set(commonHeaders)
        .send(requestBody)
        .expect(200)
        .then((res) => {
           const result = res.body.result
           assert.equal(result.receiver_name, 'automation');
           assert.equal(result.receiver_email, 'automation@yopmail.com');
           assert.equal(result.pickup_postcode, 7008);
           assert.equal(result.receiver_phone, 765866657);
           assert.equal(result.package_size, 3);
           assert.equal(result.delivery_address, "1 Langford Court, Lenah Valley TAS, Australia");
           assert.equal(result.id, jobId);
        });
    });

    it('Get job details ', () => {
       return request
        .get ('/jobs/' + jobId)
        .set(commonHeaders)
        .expect(200)
        .then((res) => {
           const result = res.body.result
           assert.equal(result.receiver_name, 'automation');
           assert.equal(result.receiver_email, 'automation@yopmail.com');
           assert.equal(result.pickup_postcode, 7008);
           assert.equal(result.receiver_phone, 765866657);
           assert.equal(result.delivery_address, "1 Langford Court, Lenah Valley TAS, Australia");
           assert.equal(result.package_size, 3);
           assert.equal(result.id, jobId);
           assert.equal(result.status, 7);
           assert.equal(result.job_provider_cancelled, 0);

        });
    });

    it('Delete job details ', () => {
       return request
        .delete('/jobs/' + jobId)
        .set(commonHeaders)
        .expect(200)
        .then((res) => {
        assert.equal(res.body.message, 'Job cancelled by the customer.');
        assert.deepEqual(res.body.result, {});
        });
    });

    it('Should get cancelled job status after deleting jobs ', () => {
           return request
            .get ('/jobs/' + jobId)
            .set(commonHeaders)
            .expect(200)
            .then((res) => {
               const result = res.body.result
               assert.equal(result.status, 5);
               assert.equal(result.receiver_email, 'automation@yopmail.com');
               assert.equal(result.job_provider_cancelled, 1);
            });
        });


    it('Get quote ', () => {
       return request
        .get("/get-quote/1")
        .query({ peakTime: 'CURRENT', deliveryAddress: "Hill Street Grocer New Town, 2 Augusta Road, New Town TAS, Australia" })
        .set(commonHeaders)
        .expect(200)
        .then((res) => {
           const result = res.body.result
           assert.equal(result.name, 1);
           assert.equal(result.package_name, 'Small');
           assert.equal(result.description, 'e.g. Flowers, Carton of Beer, Mobile phone, Laptop, Dry Cleaning, Documents, Stationary, Take away food. ');
           assert.equal(result.dimension, '40cm x 40cm x 40cm');
           assert.equal(result.weight_range, 'upto 10kg');
           assert.equal(result.weight, 10);
           assert.isDefined(result.base_price);
           assert.isDefined(result.price);
        });
    });
});