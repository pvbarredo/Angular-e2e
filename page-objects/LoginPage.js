var LoginPage =function(config) {

	jasmine.DEFAULT_TIMEOUT_INTERVAL = config.jasmine_default_timeout_interval;
	this.userId = element(by.model('vm.user.domainId'));
	this.loginButton = element(by.id('supportLoginBtn'));

	this.login = function(){
		browser.get(config.env.url);
		this.userId.sendKeys(config.login.username);
		this.loginButton.click();	
	};
}

module.exports = LoginPage;