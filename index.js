const express = require('express');
const axios = require('axios');
const { response } = require('express');
const app = express();

const API_URL = "https://api.yii2-stage.test.wooppay.com";

// Routes
app.post('/v1/auth', async (req, res) => {
    const login = req.login;
    const password = req.password;

    axios.post(API_URL+'/v1/auth', {
        login: login,
        password: password
    }, {
        headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': '*',
            // 'Access-Control-Allow-Credentials': 'true',

            'Content-Type' : 'application/json',
            'language' : 'ru',
            'Time-Zone' : 'Asia/Almaty',
            'Partner-name': ''
        }
    }).then(response => console.log(response))
});


app.listen(3030, ()=> { 
    console.log(`Example app listening on port ${3030}`)
});