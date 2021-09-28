const request = require('request');
const express = require('express');
const router = express.Router();

router.get('/include', async (req, res) => {
    let firstname = req.query.fname;
    let lastname = req.query.lname;
    let payload = `{"firstname":"${firstname}", "lastname":"${lastname}"}`;
    if (firstname != null && lastname != null) {
        make_request(payload);
        return res.send('full name: ' + firstname + ' ' + lastname);
    }
    return res.send('This name is somehow invalid!');
});

module.exports = app => app.use('/', router);




function make_request(payload) {
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    };
    let server = "js_backend";
    let options = {
        url: `http://${server}:7000/auth/register`,
        method: 'POST',
        headers: headersList,
        body: payload
    };
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body, error);
        } else {
            console.log("here error: |||", error);
        }
    }
    request(options, callback);
}


