exports.LoginPage = LoginPage;

function LoginPage(config){
	this.userId = element(by.model('vm.user.domainId'));
	this.loginButton = element(by.id('supportLoginBtn'));
	this.login = function(config) {
		browser.get(config.env.url);
		this.userId.sendKeys(config.login.username);
		this.loginButton.click();
	}
	this.login(config);
}