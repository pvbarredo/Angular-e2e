'use strict';
var fs = require('fs');
var LoginPage = require('../page-objects/LoginPage');
var data = JSON.parse(fs.readFileSync('data.json','utf-8'));


describe('Login into DOCSOP', function(){
	var loginPage = new LoginPage(data);

})