let express = require('express');
let router = express.Router(); 
import React from 'react'; 
import ReactDOMServer from 'react-dom/server';
import IndexPage from '../public/pages/indexPage.js';

router.use('/index.html', function (req, res, next) {
    let body = ReactDOMServer.renderToString(<IndexPage />); 
    console.log(body);
    res.render("page", {
        body: body
    });
});

module.exports = router; 