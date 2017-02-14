var LoginPage = function(config) {
	this.userId = element(by.mode('vm.user.domainId'));
	this.loginButton = element(by.mode('supportLoginBtn'));
	
	this.login = function() {
		browser.get(config.env.url);
		this.userId.sendKeys(config.login.username);
		this.loginButton.click();
	}
}