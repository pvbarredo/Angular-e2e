var LoginPage =function(params) {
	this.userId = element(by.model('vm.user.domainId'));
	this.loginButton = element(by.id('supportLoginBtn'));

	this.login = function(){
		browser.get(params.env.url);
		this.userId.sendKeys(params.login.username);
		this.loginButton.click();	
	};
}

module.exports = LoginPage;