exports.login = login;

function login(config) {
	this.userId = element(by.model('vm.user.domainId'));
	this.loginButton = element(by.id('supportLoginBtn'));
	browser.get(config.env.url);
	this.userId.sendKeys(config.login.username);
	this.loginButton.click();
}