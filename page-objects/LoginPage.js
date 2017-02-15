exports.login = login;

function login(config) {
	
	jasmine.DEFAULT_TIMEOUT_INTERVAL = config.jasmine_DEFAULT_TIMEOUT_INTERVAL;
	this.userId = element(by.model('vm.user.domainId'));
	this.loginButton = element(by.id('supportLoginBtn'));

	browser.get(config.env.url);
	this.userId.sendKeys(config.login.username);
	this.loginButton.click();
}